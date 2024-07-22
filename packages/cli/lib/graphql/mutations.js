"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportApp = exports.ExportApp = exports.UpdateEntityMutation = exports.AddEntityMutation = exports.UpdateIntentMutation = exports.AddIntentMutation = exports.AddAppMutation = void 0;
/*! Copyright (c) 2022, XAPP AI*/
const core_1 = require("@urql/core");
exports.AddAppMutation = (0, core_1.gql) `
mutation addApp($app: AppInput) {
	addApp(app: $app) {
    appId
    name
    organizationId
  }
}
`;
exports.AddIntentMutation = (0, core_1.gql) `
mutation addIntent($appId: ID!, $intent: AddIntentInput!){
    addIntent(appId: $appId, intent: $intent) {
      appId
      intentId
      name
      organizationId
    }
  }
`;
exports.UpdateIntentMutation = (0, core_1.gql) `
mutation updateIntent($appId: ID!, $intentId: ID!, $intent: UpdateIntentInput!) {
  updateIntent(appId: $appId, intentId: $intentId, intent: $intent) {
    intentId
    name
  }
}
`;
exports.AddEntityMutation = (0, core_1.gql) `
mutation addEntity($entity: AddEntityInput!) {
  addEntity(entity:$entity) {
    displayName
    entityId
  }
}
`;
exports.UpdateEntityMutation = (0, core_1.gql) `
mutation updateEntity($entityId: ID!, $appId: ID!, $entity: UpdateEntityInput) {
  updateEntity(entityId: $entityId, appId: $appId, entity: $entity) {
    entityId
    displayName
    appId
  }
}
`;
exports.ExportApp = (0, core_1.gql) `
mutation exportApp($appId:ID!, $organizationId:ID!) {
  app(organizationId:$organizationId) {
    update(appId:$appId) {
      exportApp {
        url
      }
    }
  }
}
`;
exports.ImportApp = (0, core_1.gql) `
mutation importApp($organizationId: ID!, $appUrl: URL!, $overwrite: Boolean, $modelOnly: Boolean) {
  app(organizationId: $organizationId) {
    importApp(url: $appUrl, overwrite:$overwrite, modelOnly:$modelOnly) {
      appId
      organizationId
      name
    }
  }
}
`;
//# sourceMappingURL=mutations.js.map