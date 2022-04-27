/*! Copyright (c) 2022, XAPP AI*/
import { gql } from "@urql/core";

export const AddAppMutation = gql`
mutation addApp($app: AppInput) {
	addApp(app: $app) {
    appId
    name
    organizationId
  }
}
`;

export const UpdateAppMutation = gql`
mutation updateApp($appId: ID, $app: UpdateAppInput) {
  updateApp(appId: $appId, app: $app) {
    appId
    name
    organizationId
  }
}
`;

export const AddIntentMutation = gql`
mutation addIntent($appId: ID!, $intent: AddIntentInput!){
    addIntent(appId: $appId, intent: $intent) {
      appId
      intentId
      name
      organizationId
    }
  }
`;

export const UpdateIntentMutation = gql`
mutation updateIntent($appId: ID!, $intentId: ID!, $intent: UpdateIntentInput!) {
  updateIntent(appId: $appId, intentId: $intentId, intent: $intent) {
    intentId
    name
  }
}
`;

export const AddEntityMutation = gql`
mutation addEntity($entity: AddEntityInput!) {
  addEntity(entity:$entity) {
    displayName
    entityId
  }
}
`;

export const UpdateEntityMutation = gql`
mutation updateEntity($entityId: ID!, $appId: ID!, $entity: UpdateEntityInput) {
  updateEntity(entityId: $entityId, appId: $appId, entity: $entity) {
    entityId
    displayName
    appId
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

export const ImportApp = gql`
mutation importApp($organizationId: ID!, $appUrl: URL!) {
  app(organizationId: $organizationId) {
    importApp(url: $appUrl) {
      appId
      organizationId
      name
    }
  }
}
`