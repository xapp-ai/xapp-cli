# xapp-cli

The command line interface for OC Studio from XAPP AI

## Installation

```
$ npm i -g @xapp/cli
```

## Configuration

You can configure the CLI to point to different OC Studio environments.

Recommended approach is to modify the configuration JSON file found at `~/.xapp/cli_config` and then adding different profiles.

For example, if you want to add a profile called `stentor`, fill in the parameters under `

```json
{
  "profiles": {
    "default": {},
    "stentor": {
      "basePath": "",
      "authPath": "",
      "clientId": "",
      "path": "auth",
      "tokenPath": "oauth/token"
    }
  },
  "created": "2021-02-23T22:30:17.345Z",
  "modified": "2021-11-09T17:17:32.694Z",
  "currentProfile": "stentor"
}
```

Then, to use this profile run:

```
$ xapp set -p stentor
```

To reset back to the default, run:

```
$ xapp set -p default
```
