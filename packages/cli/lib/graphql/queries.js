"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppWithChannels = exports.GetEntity = exports.GetIntent = void 0;
/*! Copyright (c) 2022, XAPP AI*/
const core_1 = require("@urql/core");
exports.GetIntent = (0, core_1.gql) `
query getIntent($appId:ID!, $intentId:ID!) {
  intent(appId:$appId, intentId:$intentId) {
    __typename
    appId
    intentId
    organizationId
    createdAt
    name
    langCode
    utterancePatterns
    dialogflowId
    defaultLocale
    permissions
    slotTypes
    slots {
      __typename
      name
      type
      isList,
      nlu
    }
  }
}
`;
exports.GetEntity = (0, core_1.gql) `
query getEntity($appId:ID!, $entityId:ID!) {
  entity(appId:$appId, entityId:$entityId) {
    entityId
    displayName
    values {
      name
      synonyms
    }
    displayName
  }
}
`;
exports.GetAppWithChannels = (0, core_1.gql) `
query getAppWithChannelData($appId: ID!) {
  app(appId: $appId) {
    __typename
    appId
    organizationId
    invocationName
    privacyPolicyUrl
    termsOfUseUrl
    platformData {
      alexa {
        ... on AlexaPlatformData {
          platform
          privacyAndCompliance {
            allowsPurchases
            usesPersonalInfo
            isChildDirected
            isExportCompliant
            containsAds
          }
        }
      }
      google {
        ... on GooglePlatformData {
          platform
          additionalInformationQuestions {
            alcoholAndTobaccoRelatedContent
          }
        }
      }
    }
    channels {
      __typename
      type
      id
      directoryListing
      endPoint
      status {
        type
      }
      useNLU
      ... on DialogflowAppChannel {
        hasCredentials
        additionalInformationQuestions {
          intendedForUnderThirteen
          alcoholAndTobaccoRelatedContent
        }
      }
      ... on AlexaAppChannel {
        invocationName
        hasCredentials
        skillId
        vendorId
        category
        distributionMode
        isAvailableWorldwide
        distributionCountries
        permissions {
          name
        }
        vendors {
          id
          name
          roles
        }
        useManifest
        privacyAndCompliance {
          allowsPurchases
          containsAds
          isChildDirected
          isExportCompliant
          usesPersonalInfo
        }
      }
      ... on ActionsOnGoogleAppChannel {
        hasCredentials
        additionalInformationQuestions {
          intendedForUnderThirteen
          alcoholAndTobaccoRelatedContent
        }
      }
      ... on LexConnectAppChannel {
        voiceId
        nluIntentConfidenceThreshold
        idleSessionTTLInSeconds
        detectSentiment
        isLinkedToKendra
        lexPostTextUrl
        enableModelImprovements
        botName
      }
      ... on LexV2ConnectAppChannel {
        voiceId
        idleSessionTTLInSeconds
        detectSentiment
        isLinkedToKendra
        lexPostTextUrl
        enableModelImprovements
        botName
        managementRole
        managementRoleExternalId
      }
      ... on ChatWidgetAppChannel {
        cta {
          message
          timeout
        }
        direct
        disabled
        accountKey
        botName
        avatarUrl
        key
        menu {
          items {
            ... on ChatWidgetMenuItemConfig {
              label
              subtitle
            }
            ... on ChatWidgetMenuItemStaticText {
              title
              body
            }
            ... on ChatWidgetMenuItemStaticImage {
              imageUrl
            }
          }
        }
        serverUrl
        middlewareUrl
        autocompleteSuggestionsUrl
        urls {
          policies {
            pattern
            behavior {
              type
              ... on ChatWidgetAppChannelUrlBehaviorNewWindow {
                width
                height
              }
            }
          }
          defaultBehavior {
            type
              ... on ChatWidgetAppChannelUrlBehaviorNewWindow {
                width
                height
              }
          }
        }
        autoOpenOnWidth
        header {
          status {
            online
            offline
            away
            connecting
          }
          actions {
            minimize
            cancel
          }
        }
        theme {
          border {
            color
            width
            radius
          }
          carousel {
            button {
              color
            }
            subtitle {
              color
              fontFamily
              fontSize
              fontWeight
              fontWeight
            }
            title {
              color
              fontFamily
              fontSize
              fontWeight
              fontWeight
            }
          }
          chatButton {
            background
            margin {
              top
              right
              bottom
              left
            }
          }
          content {
            background
          }
          cta {
            background
            text {
              color
              fontFamily
              fontSize
            }
          }
          footer {
            background
          }
          header {
            background
            border {
              color
              radius
              width
            }
            text {
              color
              fontFamily
              fontSize
            }
          }
          input {
            background
            border {
              color
              width
              radius
            }
            text {
              color
              fontFamily
              fontSize
            }
          }
          menu {
            item {
              height
              background
              text {
                color
                fontSize
                fontFamily
                fontWeight
                fontStyle
              }
            }
          }
          menuButton {
            color
          }
          messages {
            mine {
              bubbleColor
              text {
                color
                fontSize
                fontFamily
                fontWeight
                fontStyle
              }
            }
            others {
              bubbleColor
              text {
                color
                fontSize
                fontFamily
                fontWeight
                fontStyle
              }
            }
            padding {
              left
              right
              bottom
              top
            }
            maxWidth
          }
          minimizeButton {
            color
          }
          cancelButton {
            color
          }
          primaryColor
          sendButton {
            color
          }
          size {
            width
            height
          }
        }
      }
      ... on IntelligentSearchAppChannel {
        type
        name
        theme {
          accentColor
          border {
            color
            width
            radius
            style
          }
        }
      }
      ... on AppChannel {
        id
        type
      }
    }
  }
}
`;
//# sourceMappingURL=queries.js.map