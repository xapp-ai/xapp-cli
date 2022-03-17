/*! Copyright (c) 2021, XAPPmedia */
import { gql } from "@urql/core";

export const GetApp = gql`
query getAppOverview($appId: ID!, $start: DateTime!, $end: DateTime!) {
  app(appId: $appId) {
    __typename
    _id
    appId
    name
    description
    summary
    organizationId
    invocationName
    templateType
    icon
    smallIcon
    largeIcon
    banner
    largeBanner
    status {
      type
      timestamp
      email
    }
    handlers(size: 1000) {
      _id
      total
      handlers {
        _id
        name
        intentId
        type
      }
    }
    intents(size: 1000) {
      _id
      total
      intents {
        _id
        name
        intentId
      }
    }
    entities(size: 1000) {
      _id
      total
      entities {
        _id
        entityId
        displayName
      }
    }
    content {
      __typename
      total
      content {
        __typename
        _id
        name
        url
      }
    }
    contentSources {
      __typename
      total
      sources {
        __typename
        webUrl
        webUrlPatterns
      }
    }
    faq {
      total
    }
    channels {
      __typename
      id
      type
    }
    analytics {
      user(start: $start, end: $end) {
        totalUsers
        totalSessions
        returningUsers
        newUsers
      }
    }
  }
}
`;

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
query getEntity($appId:String!, $entityId:String!) {
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

export const ExportApp = gql`
mutation exportApp($appId:ID!, $organizationId:ID!){
  app(organizationId:$organizationId) {
    update(appId:$appId) {
      exportApp {
        url
      }
    }
  }
}
`
