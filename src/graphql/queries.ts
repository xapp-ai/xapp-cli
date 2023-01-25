/*! Copyright (c) 2022, XAPP AI*/
import { gql } from "@urql/core";

export const GetIntent = gql`
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

export const GetHandler = gql`
query getHandler($appId: ID!, $intentId: ID!) {
  handler(appId: $appId, intentId: $intentId) {
    __typename
    appId
    intentId
    organizationId
    createdAt
    name
    langCode
    utterancePatterns
    dialogflowId
    type
    defaultLocale
    graphCoords {
      x
      y
    }
    permissions
    slots {
      name
      type
      isList
      nlu
      _id
    }
    content {
      __typename
      key
      handlerResponse {
        __typename
        displays {
          __typename
          type
          token
          title
          ... on ListDisplay {
            itemsName
            itemsObject
            range {
              length
              from
            }
            items {
              token
              synonyms
              image {
                url
                urlIcon
                imageActionUrl
                accessibilityText
                width
                height
              }
              title
              description
              buttons {
                title
              }
            }
          }
          ... on CardDisplay {
            content
            smallImageUrl
            largeImageUrl
            imageActionUrl
            accessibilityText
            buttons {
              title
              openUrlAction
            }
          }
        }
        outputSpeech {
          ssml
          textToSpeech
          displayText
          suggestions {
            __typename
            ... on SuggestionObject {
              title
            }
            ... on LinkOutSuggestion {
              title
              url
            }
          }
        }
        segments {
          key
          segments {
            segment {
              ssml
              displayText
            }
          }
        }
        reprompt {
          ssml
          textToSpeech
          displayText
          suggestions {
            __typename
          }
        }
        ... on SchedulableDependentHandlerResponse {
          schedule {
            start {
              format
              dayOfWeek
              time
              timeZone
            }
            duration {
              format
              amount
            }
          }
        }
        name
        tag
        system
        data
        conditions
        ... on SchedulableDependentHandlerResponse {
          schedule {
            start {
              time
              format
              dayOfWeek
              timeZone
            }
            duration {
              format
              amount
            }
          }
        }
      }
    }
    data
    forward {
      key
      paths {
        actions
        conditions
        data
        platform
        ... on ExecutableHandlerPath {
          intentId
          slots
          type
        }
      }
    }
    redirect {
      key
      paths {
        actions
        conditions
        data
        platform
        ... on ExecutableHandlerPath {
          intentId
          slots
          type
        }
      }
    }
  }
}
`;

export const GetEntity = gql`
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

export const GetAppWithChannels = gql`
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
`
