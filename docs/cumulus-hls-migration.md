# Cumulus Media HLS Stream Migration

## Summary

Cumulus Media requested migration of ~480 Alexa skill live streams from Icecast AAC (`.aac`) to HLS (`.m3u8`). During testing, we discovered that HLS live streams cause elevated playback errors on Alexa devices.

All streams have been reverted to `.aac` pending resolution.

## Timeline

- **June 9, 2026** — Migrated 30 stations from `.aac` to `.m3u8` as a test batch
- **June 10, 2026** — Observed elevated error rates; rolled back all 30 stations
- **June 11, 2026** — Identified 14 additional stations that were already on HLS prior to our migration; switched those to `.aac` as well
- **June 11, 2026** — Full scan confirmed all 483 Cumulus Media apps are on `.aac`; zero HLS streams remain

## Error Analysis

Compared the 18-hour HLS window (June 9-10) against the same window one week prior (June 2-3) for the 30 migrated stations:

| Metric | Baseline (.aac) | HLS (.m3u8) | Delta |
|---|---|---|---|
| Total Launches | 2,484 | 2,565 | — |
| Total Errors | 62 | 304 | +242 |
| Error Rate | 2.5% | 11.9% | +9.4% |

### Error Type Breakdown

| Error Type | Baseline | HLS | Change |
|---|---|---|---|
| MEDIA_ERROR_SERVICE_UNAVAILABLE | 19 | 132 | +113 |
| MEDIA_ERROR_UNKNOWN | 22 | 109 | +87 |
| MEDIA_ERROR_INTERNAL_DEVICE_ERROR | 3 | 45 | +42 |
| MEDIA_ERROR_INTERNAL_SERVER_ERROR | 8 | 10 | +2 |
| MEDIA_ERROR_INVALID_REQUEST | 10 | 8 | -2 |

Per Amazon's AudioPlayer Interface Reference:
- `MEDIA_ERROR_SERVICE_UNAVAILABLE` = "Alexa was unable to reach the URL for the stream."
- `MEDIA_ERROR_UNKNOWN` = "An unknown error occurred."
- `MEDIA_ERROR_INTERNAL_DEVICE_ERROR` = "There was an internal error on the device."

Reference: https://developer.amazon.com/en-US/docs/alexa/custom-skills/audioplayer-interface-reference.html

## Root Cause

The HLS `.m3u8` URLs (served by Triton Digital/StreamTheWorld) deliver a standard live HLS manifest:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:1
#EXTINF:9.98458
1.aac
#EXTINF:9.98458
2.aac
#EXTINF:9.98458
3.aac
```

- ~3 segments of ~10 seconds each (~30 seconds total)
- No `#EXT-X-ENDLIST` tag (live sliding-window manifest)
- Alexa's AudioPlayer loads the manifest once and does **not** poll for new segments
- After playing the available ~30 seconds of segments, playback fails

The previous `.aac` Icecast streams deliver a single continuous byte-stream (`Content-Type: audio/aacp`) that Alexa handles natively without manifest polling.

Example stream (WMAL): `https://playerservices.streamtheworld.com/api/livestream-redirect/WMALFMAAC.m3u8`

## Options Presented to Cumulus

1. **Keep existing `.aac` URLs for Alexa skills** — Icecast endpoints are still live alongside HLS. No streaming infrastructure changes needed.
2. **Provide an Alexa-compatible HLS stream** — Modified HLS configuration with long-duration segments instead of the ~10-second sliding window.
3. **Provide a progressive/continuous AAC stream via an HLS endpoint** — Single-segment or redirect-based HLS URL that resolves to a continuous stream.

## Technical Details

### Matching Process

Stations were matched from the Excel spreadsheet (call letters / mount names) to our apps by:
1. Fetching all 483 apps from the `Cumulus-Media` organization via `api.xapp.media`
2. Querying each app's `LaunchRequest` handler to get the current `data.url`
3. Extracting the mount name from the stream URL (e.g., `WMALFMAAC` from the URL)
4. Matching to the Excel's mount name column — yielded 419 matches

### Update Method

Updates were performed via the `updateHandler` GraphQL mutation:
1. `getHandler(appId, 'LaunchRequest')` — fetch full handler (preserving all content/custom intros)
2. Modify only `handler.data.url`
3. `updateHandler(appId, 'LaunchRequest', handler)` — write back with verification

### Artifacts

- `cumulus_hls_migration_tracker.csv` — QA tracking sheet with old/new URLs, Studio links, rollback status
- `cumulus_hls_error_analysis.csv` — Per-station error comparison (baseline vs HLS window)

## Status

**All 483 Cumulus Media apps confirmed on `.aac` — zero HLS streams.**

Awaiting guidance from Cumulus Media on preferred path forward. Amazon Developer Support contacted for clarification on HLS live stream specifications.
