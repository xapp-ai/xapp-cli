/*! Copyright (c) 2022, XAPP AI*/ 
 /* eslint-disable */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  HandlerResponseConditions: any;
  IntOrBoolean: any;
  IntOrString: any;
  JSON: any;
  Long: any;
  PathConditions: any;
  StringMap: any;
  URL: any;
  URLString: any;
};

export type AwsPaymentAccount = {
  /** The usage for the given AWS subscription during the current pay period. */
  currentUsage: OrgUsageStats;
  /** The customerId of the customer that linked the account. */
  customerId?: Maybe<Scalars['String']>;
  /** The date in which the subscription was placed. */
  date?: Maybe<Scalars['String']>;
  /** The product within the product of the subscription. */
  dimension?: Maybe<Scalars['String']>;
  /** The product code of the aws product that is linked to the org. */
  productCode?: Maybe<Scalars['String']>;
};

/**
 * ActionsOnGoogleChanelData objects only.
 *
 * Required publishing information questions.
 */
export type ActionsOnGoogleAdditionalInformationQuestions = {
  /**
   * Do your Actions contain alcohol or tobacco-related content?
   *
   * If yes, you must include age veriifcation at the beginning of the conversation.
   * If your Actions mainly sell alcohol or tobacco, you must implement
   * account linking and verify that the user meets legal age requirements.
   */
  alcoholAndTobaccoRelatedContent?: Maybe<Scalars['Boolean']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: Maybe<Scalars['Boolean']>;
};

/**
 * ActionsOnGoogleChanelData objects only.
 *
 * Required publishing information questions.
 */
export type ActionsOnGoogleAdditionalInformationQuestionsInput = {
  /**
   * Do your Actions contain alcohol or tobacco-related content?
   *
   * If yes, you must include age veriifcation at the beginning of the conversation.
   * If your Actions mainly sell alcohol or tobacco, you must implement
   * account linking and verify that the user meets legal age requirements.
   */
  alcoholAndTobaccoRelatedContent?: InputMaybe<Scalars['Boolean']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: InputMaybe<Scalars['Boolean']>;
};

/** A channel that is specific for apps to run on the Actions On Google. */
export type ActionsOnGoogleAppChannel = BaseAppChannel & {
  /** For "actions-on-google" type channels only. */
  additionalInformationQuestions?: Maybe<ActionsOnGoogleAdditionalInformationQuestions>;
  /** Deprecated: DO NOT USE. IT WILL BE REMOVED */
  credentialsURL?: Maybe<Scalars['String']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean'];
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The ID of the project on Google */
  projectId: Scalars['ID'];
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


/** A channel that is specific for apps to run on the Actions On Google. */
export type ActionsOnGoogleAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type ActionsOnGoogleAppChannelInput = {
  /** For "actions-on-google" type channels only. */
  additionalInformationQuestions?: InputMaybe<ActionsOnGoogleAdditionalInformationQuestionsInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

/**
 * Credentials that are provided by Google which will allow Stentor to
 * call the Actions On Google resources on the client's behalf.
 */
export type ActionsOnGoogleCredentials = {
  auth_provider_x509_cert_url?: InputMaybe<Scalars['String']>;
  auth_uri?: InputMaybe<Scalars['String']>;
  client_email: Scalars['String'];
  client_id?: InputMaybe<Scalars['String']>;
  client_x509_cert_url?: InputMaybe<Scalars['String']>;
  private_key: Scalars['String'];
  private_key_id?: InputMaybe<Scalars['String']>;
  project_id: Scalars['String'];
  token_uri?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ActiveWithinHandlerResponseSegment = HandlerResponseSegment & {
  activeWithin: HandlerResponseDuration;
  segment: ResponseOutput;
};

export type AddEntityInput = {
  appId: Scalars['ID'];
  dialogflowId?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  nlu?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<EntityValueInput>>>;
};

export type AddFaq = {
  /** The answer to those questions */
  answer: Scalars['String'];
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: InputMaybe<Scalars['ID']>;
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: InputMaybe<Scalars['Boolean']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: InputMaybe<Scalars['ID']>;
  /** The name of the FAQ */
  name: Scalars['String'];
  /** Questions that the FAQ handles. */
  questions: Array<InputMaybe<Scalars['String']>>;
  /** The raw text */
  raw?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The URL that the FAQ could be found on. */
  url?: InputMaybe<Scalars['URL']>;
};

export type AddForwardReturn = {
  /** An intents graph with the updated graph */
  graph: IntentsGraph;
  /** The updated handler */
  handler: Handler;
};


export type AddForwardReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type AddHandlerInput = {
  /**
   * Base content map for the handler.
   *
   * All handlers have contextual help and cancel content
   */
  content?: InputMaybe<Array<InputMaybe<InputHandlerContent>>>;
  data?: InputMaybe<Scalars['JSON']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']>;
  forward?: InputMaybe<Array<InputMaybe<HandlerForwardInput>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID'];
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<HandlerPermissions>>>;
  redirect?: InputMaybe<Array<InputMaybe<HandlerRedirectInput>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AddHandlerReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The handler that was added with the new attributes. */
  handler: Handler;
};


export type AddHandlerReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type AddIntentInput = {
  /**
   * Contexts the must be active to have this intent be weighted more heavily or selected.
   *
   * For Amazon Lex, the contexts are required to be selected.
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html#lex-PutIntent-request-inputContexts
   *
   * For Dialogflow ES, these are more heavily weighted towards matching.
   *
   * https://cloud.google.com/dialogflow/es/docs/contexts-input-output#input_contexts}
   * https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent.intents#Intent}
   */
  contexts?: InputMaybe<Array<InputMaybe<IntentContextInput>>>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID'];
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  nlu?: InputMaybe<Scalars['JSON']>;
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Slot type definition. */
  slotTypes?: InputMaybe<Scalars['JSON']>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AddIntentReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The intent that was added with the new attributes. */
  intent: Intent;
};


export type AddIntentReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export enum AddLocaleEnum {
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** German German */
  DeDe = 'deDE',
  /** English */
  En = 'en',
  /** English Australian */
  EnAu = 'enAU',
  /** English Canada */
  EnCa = 'enCA',
  /** English Great Britain */
  EnGb = 'enGB',
  /** English India */
  EnIn = 'enIN',
  /** English United States */
  EnUs = 'enUS',
  /** Spanish */
  Es = 'es',
  /** Spanish: Only supported in Google. */
  Es419 = 'es419',
  /** Spanish Spain */
  EsEs = 'esES',
  /** Spanish Mexico */
  EsMx = 'esMX',
  /** French */
  Fr = 'fr',
  /** French Canada */
  FrCa = 'frCA',
  /** French France */
  FrFr = 'frFR',
  /** Italian */
  It = 'it',
  /** Italian Italy */
  ItIt = 'itIT',
  /** Japanese */
  Ja = 'ja',
  /** Japanese Japan */
  JaJp = 'jaJP',
  /** Dutch */
  Nl = 'nl',
  /** Norwegian */
  No = 'no',
  /** Portuguese */
  Pt = 'pt',
  /** Portuguese Brazil */
  PtBr = 'ptBR',
  /** Russian */
  Ru = 'ru',
  /** Swedish */
  Sv = 'sv',
  /** Thai */
  Th = 'th',
  /** Turkish */
  Tr = 'tr',
  /** Ukranian */
  Uk = 'uk',
  /** Chinese */
  Zh = 'zh',
  /** Chinese China */
  ZhCh = 'zhCH',
  /** Chinese Hong Kong */
  ZhHk = 'zhHK',
  /** Chinese Taiwan */
  ZhTw = 'zhTW'
}

export type AddedFaq = {
  _id: Scalars['ID'];
  answer: Scalars['String'];
  associatedHandlerId?: Maybe<Scalars['String']>;
  created: Scalars['String'];
  excludeFromAutoComplete?: Maybe<Scalars['Boolean']>;
  externalFAQId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  questions: Array<Maybe<Scalars['String']>>;
  raw?: Maybe<Scalars['String']>;
  /** If "wasAdded" was false, this provides the reason that the FAQ was not added. */
  reason?: Maybe<FaqNotAddedReason>;
  responses?: Maybe<Array<Maybe<HandlerResponse>>>;
  url?: Maybe<Scalars['String']>;
  /** A boolean saying whether or not the FAQ was added in this operation. */
  wasAdded: Scalars['Boolean'];
};

export type AdminAwsQuery = {
  /** Returns the AWS region that the graphql server is currently querying from. */
  region: Scalars['String'];
};

export type AdminAppMutation = {
  update: AdminUpdateAppMutation;
};


export type AdminAppMutationUpdateArgs = {
  appId: Scalars['ID'];
};

export type AdminChatSuggestion = {
  answer?: Maybe<Scalars['String']>;
  format: Array<Maybe<AdminChatSuggestionFormat>>;
  suggestion: Scalars['String'];
  truncatedAnswer?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type AdminChatSuggestionFormat = {
  bold?: Maybe<AdminChatSuggestionFormatBold>;
  inputText?: Maybe<AdminChatSuggestionFormatInputText>;
};

export type AdminChatSuggestionFormatBold = {
  end: Scalars['Int'];
  start: Scalars['Int'];
};

export type AdminChatSuggestionFormatInputText = {
  end: Scalars['Int'];
  slotMatch: Scalars['String'];
  start: Scalars['Int'];
  text: Scalars['String'];
};

export type AdminChatSuggestionReturn = {
  suggestions: Array<Maybe<AdminChatSuggestion>>;
};

export enum AdminChatSuggestionType {
  Faq = 'FAQ',
  Historical = 'HISTORICAL',
  Intent = 'INTENT'
}

/** A collections query which returns a collection of organizations. */
export type AdminEventsQuery = {
  /** Retrieves a list of events that are associated with the app. */
  events: TotalEvents;
};


/** A collections query which returns a collection of organizations. */
export type AdminEventsQueryEventsArgs = {
  appId?: InputMaybe<Scalars['ID']>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byFlag?: InputMaybe<Array<InputMaybe<RawQueryEventFlag>>>;
  byName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byPlatform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  from?: InputMaybe<Scalars['Int']>;
  newSessionsOnly?: InputMaybe<Scalars['Boolean']>;
  noFlag?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  rawQueryOnly?: InputMaybe<Scalars['Boolean']>;
  rawQueryOrSlotsOnly?: InputMaybe<Scalars['Boolean']>;
  rawQueryText?: InputMaybe<Scalars['String']>;
  responseOutputText?: InputMaybe<Scalars['String']>;
  responseRepromptText?: InputMaybe<Scalars['String']>;
  sessionId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type AdminFaqSuggestionInput = {
  answer: Scalars['String'];
  appId: Scalars['String'];
  organizationId: Scalars['String'];
  suggestion: Scalars['String'];
};

export type AdminLaboratory = {
  chatSuggestions: AdminChatSuggestionReturn;
  /** Return entities that would fill a given search string. */
  entitySearch: EntitiesQuery;
  eventsSearch: AdminTotalEvents;
  /** Returns all results from the KNN test database */
  faqSearch: TotalWebFaq;
  /** Returns all results from the KNN test database */
  knnQuestions: KnnSearchOutput;
  /** This uses KNN to search for raw queries in the events database. */
  knnRawQuerySearch: KnnRawQuerySearchQuery;
  /** This uses KNN to search for related questions. */
  knnSearch: KnnSearchQuery;
  /** This uses KNN to search for suggestions to things. */
  knnSuggSearch: KnnSuggSearchQuery;
  /** This queries the Kendra instance available and returns the results. */
  queryKendra?: Maybe<Scalars['JSON']>;
  /** Returns the response from the KNN Endpoint */
  sagemakerKnn: Scalars['JSON'];
  /** Returns a spellcheck of the given sentence. */
  spellCheck: AdminSpellCheckLabResult;
};


export type AdminLaboratoryChatSuggestionsArgs = {
  appId: Scalars['ID'];
  indexVersion?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['ID'];
  queryText: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<InputMaybe<AdminChatSuggestionType>>>;
};


export type AdminLaboratoryEntitySearchArgs = {
  searchQuery: Scalars['String'];
};


export type AdminLaboratoryEventsSearchArgs = {
  from?: InputMaybe<Scalars['Int']>;
  searchRawQueryAutoComplete?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryFaqSearchArgs = {
  answerAutoComplete?: InputMaybe<Scalars['String']>;
  answerSuggestion?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  questionsAutoComplete?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryKnnQuestionsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  inputVectorSlice?: InputMaybe<Scalars['Int']>;
  outputVectorSlice?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryKnnRawQuerySearchArgs = {
  appId: Scalars['ID'];
  k?: InputMaybe<Scalars['Int']>;
  minScore?: InputMaybe<Scalars['Float']>;
  searchString: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryKnnSearchArgs = {
  inputVectorSlice?: InputMaybe<Scalars['Int']>;
  k?: InputMaybe<Scalars['Int']>;
  outputVectorSlice?: InputMaybe<Scalars['Int']>;
  searchString: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryKnnSuggSearchArgs = {
  appId: Scalars['ID'];
  k?: InputMaybe<Scalars['Int']>;
  minScore?: InputMaybe<Scalars['Float']>;
  searchString: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
};


export type AdminLaboratoryQueryKendraArgs = {
  appId: Scalars['ID'];
  text: Scalars['String'];
};


export type AdminLaboratorySagemakerKnnArgs = {
  text: Scalars['String'];
};


export type AdminLaboratorySpellCheckArgs = {
  sentence: Scalars['String'];
};

export type AdminMutation = {
  app: AdminAppMutation;
  isAdmin: Scalars['Boolean'];
  laboratory: LabMutation;
  webCrawler?: Maybe<WebCrawlerSettings>;
};

export type AdminQuery = {
  /** Returns AWS server related stats. */
  aws: AdminAwsQuery;
  events: AdminEventsQuery;
  isAdmin: Scalars['Boolean'];
  laboratory: AdminLaboratory;
  webCrawler?: Maybe<WebCrawlerQuery>;
};

export type AdminSpellCheckLabResult = {
  result: Array<Maybe<AdminSpellCheckResult>>;
};

export type AdminSpellCheckResult = {
  isCorrect?: Maybe<Scalars['Boolean']>;
  suggestions?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
};

export type AdminTotalEvents = {
  /** The events that are returned in the current query. */
  events?: Maybe<Array<Maybe<Events>>>;
  /** The total number of events that fit the last query. */
  total: Scalars['Int'];
};

export type AdminUpdateAppMutation = {
  /** Adds a notification that users of the app are capable of seeing. */
  addNotification: SystemNotification;
  /** Removes all notifications associated with an app. */
  removeAllNotifications: Scalars['String'];
  /** Removes a notification from the app list */
  removeNotification?: Maybe<Array<Maybe<SystemNotification>>>;
};


export type AdminUpdateAppMutationAddNotificationArgs = {
  level?: InputMaybe<SystemNotificationLevel>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


export type AdminUpdateAppMutationRemoveNotificationArgs = {
  id: Scalars['ID'];
};

export type AlexaAppChannel = BaseAppChannel & {
  /**
   * Part of the Alexa Skill Manifest.
   *
   * The category communicates what type of functionality the skill performs.
   */
  category?: Maybe<AlexaSkillCategories>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /**
   * Part of the Alexa Skill Manifest publishing information. When isAvailableWorldwide is
   * false, this must be specified.
   *
   * It is an array of ISO 3166-1 alpha-2 format country strings where the skill can be distributed.
   */
  distributionCountries?: Maybe<Array<Maybe<AlexaDistrubutionCountry>>>;
  /** Part of the Alexa Skill manifest Publishing Information. */
  distributionMode?: Maybe<AlexaDistributionMode>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean'];
  /** The ID of the channel. */
  id: Scalars['String'];
  /**
   * The invocation name for the app.
   *
   * If not provided, the application level invocation name will be used.
   */
  invocationName?: Maybe<Scalars['String']>;
  /**
   * Part of the Alexa Skill manifest publishing information.
   *
   * If true, the skill will be distributed in all countries covered by specified locales.
   */
  isAvailableWorldwide?: Maybe<Scalars['Boolean']>;
  /** Whether or not the alexa channel is building on Alexa. */
  isBuilding: Scalars['Boolean'];
  /**
   * If useManifest is true, it will use this manifest instead of generating one based on
   * other data about the assistant application
   */
  manifest?: Maybe<AlexaSkill>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /**
   * A regex to match against possible intent IDs to determine if they will be processed with the NLU.
   *
   * useNLU and nluSlotName must exist or else this is ignored.
   */
  nluIntentRegex?: Maybe<Scalars['String']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: AlexaNluQuery;
  /** Slot name that will exist on the intent that is matched. */
  nluSlotName?: Maybe<Scalars['String']>;
  /** Part of the Alexa Skill manifest. An array of named permissions that the skill can use. */
  permissions?: Maybe<Array<Maybe<AlexaPermissions>>>;
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: Maybe<AlexaPrivacyAndCompliance>;
  /** The skill ID within Alexa */
  skillId?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * If set to true, it will use the manifest property instead of generating one based
   * on other known data.
   */
  useManifest?: Maybe<Scalars['Boolean']>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
  /**
   * The vendor ID of the SMAPI vendor that the app is published to.
   * If this is undefined, the vendor on the organization will be used instead.
   */
  vendorId?: Maybe<Scalars['ID']>;
  vendors?: Maybe<Array<Maybe<SmapiVendor>>>;
};


export type AlexaAppChannelNluQueryArgs = {
  text: Scalars['String'];
};


export type AlexaAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type AlexaAppChannelInput = {
  /**
   * Part of the Alexa Skill Manifest.
   *
   * The category communicates what type of functionality the skill performs.
   */
  category?: InputMaybe<AlexaSkillCategories>;
  /**
   * URL to find the credentials for accessing SMAPI
   *
   * If you are not authorized to access the URL, then it will be "Saved" to indicate
   * that there are credentials uploaded.
   */
  credentialsURL?: InputMaybe<Scalars['String']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /**
   * Part of the Alexa Skill Manifest publishing information. When isAvailableWorldwide is
   * false, this must be specified.
   *
   * It is an array of ISO 3166-1 alpha-2 format country strings where the skill can be distributed.
   */
  distributionCountries?: InputMaybe<Array<InputMaybe<AlexaDistrubutionCountry>>>;
  /** Part of the Alexa Skill manifest Publishing Information. */
  distributionMode?: InputMaybe<AlexaDistributionMode>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /**
   * The invocation name for the app.
   *
   * If not provided, the application level invocation name will be used.
   */
  invocationName?: InputMaybe<Scalars['String']>;
  /**
   * Part of the Alexa Skill manifest publishing information.
   *
   * If true, the skill will be distributed in all countries covered by specified locales.
   */
  isAvailableWorldwide?: InputMaybe<Scalars['Boolean']>;
  manifest?: InputMaybe<AlexaSkillInput>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * A regex to match against possible intent IDs to determine if they will be processed with the NLU.
   *
   * useNLU and nluSlotName must exist or else this is ignored.
   */
  nluIntentRegex?: InputMaybe<Scalars['String']>;
  /** Slot name that will exist on the intent that is matched. */
  nluSlotName?: InputMaybe<Scalars['String']>;
  /** Part of the Alexa Skill manifest. An array of named permissions that the skill can use. */
  permissions?: InputMaybe<Array<InputMaybe<AlexaPermissionsInput>>>;
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: InputMaybe<AlexaPrivacyAndComplianceInput>;
  /** The skill ID within Alexa */
  skillId?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * If set to true, it will use the manifest property instead of generating one based
   * on other known data.
   */
  useManifest?: InputMaybe<Scalars['Boolean']>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
  /**
   * The vendor ID of the SMAPI vendor that the app is published to.
   * If this is undefined, the vendor on the organization will be used instead.
   */
  vendorId?: InputMaybe<Scalars['ID']>;
};

export enum AlexaChannelPermissionType {
  AddressCountryAndPostalCode = 'ADDRESS_COUNTRY_AND_POSTAL_CODE',
  AddressFull = 'ADDRESS_FULL',
  EmailRead = 'EMAIL_READ',
  GivenNameRead = 'GIVEN_NAME_READ',
  HouseholdListRead = 'HOUSEHOLD_LIST_READ',
  HouseholdListWrite = 'HOUSEHOLD_LIST_WRITE',
  MobileRead = 'MOBILE_READ',
  NameRead = 'NAME_READ',
  NotificationWrite = 'NOTIFICATION_WRITE',
  RemindersReadWrite = 'REMINDERS_READ_WRITE',
  SkillReadWrite = 'SKILL_READ_WRITE'
}

/** Credentials that the Stentor client can use to call SMAPI actions. */
export type AlexaCredentialsInput = {
  access_token: Scalars['String'];
  expires_at: Scalars['String'];
  expires_in: Scalars['Long'];
  refresh_token: Scalars['String'];
  token_type: Scalars['String'];
};

export enum AlexaDistributionMode {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum AlexaDistrubutionCountry {
  Ca = 'CA',
  De = 'DE',
  Gb = 'GB',
  In = 'IN',
  Us = 'US'
}

/** Attributes used for alexa publishing. */
export type AlexaIntegration = {
  /** The location of the credentials needed to upload to alexa. */
  credentialsUrl: Scalars['String'];
};

/** Attributes used for alexa publishing. */
export type AlexaIntegrationInput = {
  /** The location of the credentials needed to upload to alexa. */
  credentialsUrl: Scalars['String'];
};

export type AlexaInteractionModel = {
  languageModel?: Maybe<AlexaLanguageModel>;
};

export type AlexaInteractionModelIntent = {
  name: Scalars['String'];
  samples?: Maybe<Array<Maybe<Scalars['String']>>>;
  slots?: Maybe<Array<Maybe<AlexaInteractionModelSlot>>>;
};

export type AlexaInteractionModelSlot = {
  name: Scalars['String'];
  samples?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: Scalars['String'];
};

export type AlexaInteractionModelSlotType = {
  name: Scalars['String'];
  values: Array<Maybe<AlexaInteractionModelSlotTypeValue>>;
};

export type AlexaInteractionModelSlotTypeValue = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<AlexaInteractionModelSlotTypeValueName>;
};

export type AlexaInteractionModelSlotTypeValueName = {
  synonyms: Array<Maybe<Scalars['String']>>;
  value: Scalars['String'];
};

export type AlexaLanguageModel = {
  intents: Array<Maybe<AlexaInteractionModelIntent>>;
  invocationName: Scalars['String'];
  types?: Maybe<Array<Maybe<AlexaInteractionModelSlotType>>>;
};

export type AlexaNluQuery = {
  intentId: Scalars['String'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String'];
};

export type AlexaPermissions = {
  name?: Maybe<AlexaChannelPermissionType>;
};

export type AlexaPermissionsInput = {
  name?: InputMaybe<AlexaChannelPermissionType>;
};

export type AlexaPlatformData = {
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String'];
  /** Privacy and compliance data required for Alexa publishing */
  privacyAndCompliance: AlexaPrivacyAndCompliance;
};

export type AlexaPlatformDataInput = {
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String'];
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: InputMaybe<AlexaPrivacyAndComplianceInput>;
};

/** Data that is required to publish to Alexa. It tells Amazon what the app can do. */
export type AlexaPrivacyAndCompliance = {
  /** Does the app allow purchases? */
  allowsPurchases?: Maybe<Scalars['Boolean']>;
  /** Does the app contain ads? */
  containsAds?: Maybe<Scalars['Boolean']>;
  /** Is the app directed at children? */
  isChildDirected?: Maybe<Scalars['Boolean']>;
  /** Can the skill be imported and exported from the United States and all other countries and regions in which XAPP operates? */
  isExportCompliant?: Maybe<Scalars['Boolean']>;
  /** Does the skill collect personal information? */
  usesPersonalInfo?: Maybe<Scalars['Boolean']>;
};

export type AlexaPrivacyAndComplianceInput = {
  allowsPurchases?: InputMaybe<Scalars['Boolean']>;
  containsAds?: InputMaybe<Scalars['Boolean']>;
  isChildDirected?: InputMaybe<Scalars['Boolean']>;
  isExportCompliant?: InputMaybe<Scalars['Boolean']>;
  usesPersonalInfo?: InputMaybe<Scalars['Boolean']>;
};

export type AlexaSkill = {
  manifest: AlexaSkillManifest;
};

export enum AlexaSkillCategories {
  AlarmsAndClocks = 'ALARMS_AND_CLOCKS',
  Astrology = 'ASTROLOGY',
  BusinessAndFinance = 'BUSINESS_AND_FINANCE',
  Calculators = 'CALCULATORS',
  CalendarsAndReminders = 'CALENDARS_AND_REMINDERS',
  ChildrensEducationAndReference = 'CHILDRENS_EDUCATION_AND_REFERENCE',
  ChildrensGames = 'CHILDRENS_GAMES',
  ChildrensMusticAndAudio = 'CHILDRENS_MUSTIC_AND_AUDIO',
  ChildrensNoveltyAndHumor = 'CHILDRENS_NOVELTY_AND_HUMOR',
  Communication = 'COMMUNICATION',
  ConnectedCar = 'CONNECTED_CAR',
  CookingAndRecipe = 'COOKING_AND_RECIPE',
  CurrencyGuidesAndConverters = 'CURRENCY_GUIDES_AND_CONVERTERS',
  Dating = 'DATING',
  DeliveryAndTakeout = 'DELIVERY_AND_TAKEOUT',
  DeviceTracking = 'DEVICE_TRACKING',
  EducationAndReference = 'EDUCATION_AND_REFERENCE',
  EventFinders = 'EVENT_FINDERS',
  ExerciseAndWorkout = 'EXERCISE_AND_WORKOUT',
  FashionAndStyle = 'FASHION_AND_STYLE',
  FlightFinders = 'FLIGHT_FINDERS',
  FriendsAndFamily = 'FRIENDS_AND_FAMILY',
  Games = 'GAMES',
  GameInfoAndAccessory = 'GAME_INFO_AND_ACCESSORY',
  HealthAndFitness = 'HEALTH_AND_FITNESS',
  HotelFinders = 'HOTEL_FINDERS',
  KnowledgeAndTrivia = 'KNOWLEDGE_AND_TRIVIA',
  MovieAndTvKnowledgeAndTrivia = 'MOVIE_AND_TV_KNOWLEDGE_AND_TRIVIA',
  MovieInfoAndReviews = 'MOVIE_INFO_AND_REVIEWS',
  MovieShowtimes = 'MOVIE_SHOWTIMES',
  MusicAndAudioAccessories = 'MUSIC_AND_AUDIO_ACCESSORIES',
  MusicAndAudioKnowledgeAndTrivia = 'MUSIC_AND_AUDIO_KNOWLEDGE_AND_TRIVIA',
  MusicInfoReviewsAndRecognitionService = 'MUSIC_INFO_REVIEWS_AND_RECOGNITION_SERVICE',
  News = 'NEWS',
  Novelty = 'NOVELTY',
  NA = 'N_A',
  OrganizersAndAssistants = 'ORGANIZERS_AND_ASSISTANTS',
  PetsAndAnimal = 'PETS_AND_ANIMAL',
  Podcast = 'PODCAST',
  PublicTransportation = 'PUBLIC_TRANSPORTATION',
  ReligionAndSpirituality = 'RELIGION_AND_SPIRITUALITY',
  RestaurantBookingInfoAndReview = 'RESTAURANT_BOOKING_INFO_AND_REVIEW',
  Schools = 'SCHOOLS',
  ScoreKeeping = 'SCORE_KEEPING',
  SelfImprovement = 'SELF_IMPROVEMENT',
  Shopping = 'SHOPPING',
  SmartHome = 'SMART_HOME',
  SocialNetworking = 'SOCIAL_NETWORKING',
  SportsGames = 'SPORTS_GAMES',
  SportsNews = 'SPORTS_NEWS',
  StreamingService = 'STREAMING_SERVICE',
  TaxiAndRidesharing = 'TAXI_AND_RIDESHARING',
  ToDoListsAndNotes = 'TO_DO_LISTS_AND_NOTES',
  Translators = 'TRANSLATORS',
  TvGuides = 'TV_GUIDES',
  UnitConverters = 'UNIT_CONVERTERS',
  Weather = 'WEATHER',
  WineAndBeverage = 'WINE_AND_BEVERAGE',
  ZipCodeLookup = 'ZIP_CODE_LOOKUP'
}

export type AlexaSkillInput = {
  manifest: AlexaSkillManifestInput;
};

export type AlexaSkillManifest = {
  lastUpdateRequest?: Maybe<AlexaSkillManifestLastUpdateRequest>;
  manifestVersion?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<AlexaPermissions>>>;
  /** Privacy and compliance data required for Alexa publishing */
  privacyAndCompliance: AlexaPrivacyAndCompliance;
  publishingInformation?: Maybe<AlexaSkillmanifestPublishingInformation>;
};

export type AlexaSkillManifestInput = {
  lastUpdateRequest?: InputMaybe<AlexaSkillManifestLastUpdateRequestInput>;
  manifestVersion?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<AlexaPermissionsInput>>>;
  publishingInformation?: InputMaybe<AlexaSkillmanifestPublishingInformationInput>;
};

export type AlexaSkillManifestLastUpdateRequest = {
  status?: Maybe<AlexaSkillManifestRequestStatus>;
};

export type AlexaSkillManifestLastUpdateRequestInput = {
  status?: InputMaybe<AlexaSkillManifestRequestStatus>;
};

export enum AlexaSkillManifestRequestStatus {
  InProgress = 'IN_PROGRESS'
}

export type AlexaSkillmanifestPublishingInformation = {
  category: AlexaSkillCategories;
  distributionCountries?: Maybe<AlexaDistrubutionCountry>;
  distributionMode: AlexaDistributionMode;
  isAvailableWorldwide: Scalars['Boolean'];
  testingInstructions: Scalars['String'];
};

export type AlexaSkillmanifestPublishingInformationInput = {
  category: AlexaSkillCategories;
  distributionCountries?: InputMaybe<AlexaDistrubutionCountry>;
  distributionMode: AlexaDistributionMode;
  isAvailableWorldwide: Scalars['Boolean'];
  testingInstructions: Scalars['String'];
};

export type Analytics = {
  /** An aggregated portion of Intent events. */
  selectedCount?: Maybe<Array<Maybe<SelectedCount>>>;
  /** The total number of handler events that are found. */
  totalCount: Scalars['Int'];
};

export type App = {
  _id: Scalars['ID'];
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: Maybe<Scalars['String']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']>;
  analytics?: Maybe<AppAnalytics>;
  /** Unique identifier of the app in Stentor. */
  appId: Scalars['ID'];
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: Maybe<Scalars['String']>;
  beta?: Maybe<Scalars['JSON']>;
  /** Returns an App channel based on the provided ID. */
  channel?: Maybe<BaseAppChannel>;
  /** The Channels that are available to the app. */
  channels?: Maybe<Array<Maybe<BaseAppChannel>>>;
  /**
   * A CMS token is an authorization token that is linked to the app
   * which allows third party services to access certain resources without
   * user intervention.
   */
  cmsTokens: Array<Maybe<CmsToken>>;
  /** Retrieves the attributes used to download web content. */
  content?: Maybe<TotalWebContent>;
  /** Retrieves any errors that may have happened while attempting to download web content. */
  contentErrors?: Maybe<TotalWebContentErrors>;
  /** Retrieves the sources that were used to generate the content. */
  contentSources?: Maybe<TotalWebContentSources>;
  /** Third party analytics platforms. */
  dataStreams?: Maybe<DataStreams>;
  /**
   * This is the locale in which the app is primarily focused on. The app will publish to this locale with the
   * data provided. Items which can be overwritten can be placed in the "locale" section with the local necessary.
   *
   * Default: "en"
   */
  defaultLocale?: Maybe<Scalars['String']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']>;
  /** The URL where the app is served. */
  endPoint?: Maybe<Endpoint>;
  /** The entities that are associated with the app. */
  entities?: Maybe<EntitiesQuery>;
  /** Retrieves a list of events that are associated with the app. */
  events?: Maybe<TotalEvents>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Contains an externalId that is used by Stentor when assuming roles on client AWS accounts. */
  externalId?: Maybe<Scalars['String']>;
  /** Retrieves the attributes used to download web content. */
  faq?: Maybe<TotalWebFaq>;
  /** A Map of all the intents and their locations for mapping intents. */
  graph?: Maybe<IntentsGraph>;
  /** The handlers that are associated with the app. */
  handlers?: Maybe<HandlersQuery>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: Maybe<Scalars['String']>;
  /** The intents that are associated with the app. */
  intents?: Maybe<IntentsQuery>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: Maybe<Scalars['String']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: Maybe<IpRights>;
  /** Whether or not the app is copyable to another organization. */
  isCopyable?: Maybe<Scalars['Boolean']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: Maybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']>;
  /** The Email address to send lead captures to. */
  leadsContact?: Maybe<Scalars['EmailAddress']>;
  /**
   * This is a series of locales that the apps supports.  These can override the
   * items that are in the original App.  The items in the main app are used as defaults if they
   * are not provided by this locale.
   */
  locales?: Maybe<AppLocales>;
  /** Physical location associated with the app. */
  location?: Maybe<Location>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: Maybe<Scalars['String']>;
  /** The human-readable name of the app. */
  name: Scalars['String'];
  /** The NLUs that are available to the app. */
  nlu?: Maybe<Array<Maybe<AppNlu>>>;
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['ID'];
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: Maybe<PlatformData>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: Maybe<Scalars['String']>;
  /** The status that the app is currently in Stentor. */
  schedules: AppSchedules;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<Status>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: Maybe<Scalars['String']>;
  /** Retrieves a list of notifications that the user should see related to the app. */
  systemNotifications?: Maybe<Array<Maybe<SystemNotification>>>;
  /** Type of template the app and its intents adhere to. */
  templateType?: Maybe<Scalars['String']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: Maybe<Scalars['String']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: Maybe<Scalars['String']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: Maybe<ThirdPartyDeployments>;
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
};


export type AppChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type AppContentArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  textHighlight?: InputMaybe<Scalars['String']>;
};


export type AppContentErrorsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AppContentSourcesArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AppEntitiesArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  withDisplayName?: InputMaybe<Scalars['String']>;
  withId?: InputMaybe<Scalars['String']>;
  withIdOrDisplayName?: InputMaybe<Scalars['String']>;
  withSynonym?: InputMaybe<Scalars['String']>;
  withValue?: InputMaybe<Scalars['String']>;
  withValueOrSynonym?: InputMaybe<Scalars['String']>;
};


export type AppEventsArgs = {
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byFlag?: InputMaybe<Array<InputMaybe<RawQueryEventFlag>>>;
  byMatchConfidenceRange?: InputMaybe<MatchConfidenceRange>;
  byName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byPlatform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bySimilarRawQueries?: InputMaybe<Scalars['String']>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  byType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  from?: InputMaybe<Scalars['Int']>;
  newSessionsOnly?: InputMaybe<Scalars['Boolean']>;
  noFlag?: InputMaybe<Scalars['Boolean']>;
  rawQueryOnly?: InputMaybe<Scalars['Boolean']>;
  rawQueryOrSlotsOnly?: InputMaybe<Scalars['Boolean']>;
  rawQueryText?: InputMaybe<Scalars['String']>;
  responseOutputText?: InputMaybe<Scalars['String']>;
  responseRepromptText?: InputMaybe<Scalars['String']>;
  sessionId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type AppFaqArgs = {
  from?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};


export type AppGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type AppHandlersArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  withId?: InputMaybe<Scalars['String']>;
  withIdOrName?: InputMaybe<Scalars['String']>;
  withName?: InputMaybe<Scalars['String']>;
};


export type AppIntentsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  withId?: InputMaybe<Scalars['String']>;
  withIdOrName?: InputMaybe<Scalars['String']>;
  withName?: InputMaybe<Scalars['String']>;
};


export type AppSchedulesArgs = {
  previousKey?: InputMaybe<Scalars['String']>;
};


export type AppUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type AppAnalytics = {
  user: AppUsageStat;
};


export type AppAnalyticsUserArgs = {
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type AppChannel = BaseAppChannel & {
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


export type AppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type AppChannelInput = {
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type AppChannelMutation = {
  /**
   * Adds or updates an Actions On Google Channel to the specified app.
   *
   * @return The channel that was just added.
   */
  addActionsOnGoogleChannel: ActionsOnGoogleAppChannel;
  /**
   * Adds or updates an Alexa Channel to the specified app.
   *
   * @return The channel that was just added.
   */
  addAlexaChannel: AlexaAppChannel;
  /** Adds a custom channel to the app. */
  addChannel: AppChannel;
  /**
   * Adds or updates a Chat Widget channel to the specified app.
   *
   * @return The channel that was just added
   */
  addChatWidgetChannel: ChatWidgetAppChannel;
  /**
   * Adds or updates an Dialogflow Channel to the specified app.
   *
   * @return The channel that was just added.
   */
  addDialogflowChannel: DialogflowAppChannel;
  /**
   * Adds or updates a Facebook Messenger channel to the specified app.
   *
   * @return The channel that was just added
   */
  addFacebookMessengerChannel: FacebookMessengerAppChannel;
  /**
   * Adds or updates a Google Business Message channel to the specified app
   *
   * @return The channel that was just added
   */
  addGoogleBusinessMessageChannel: GoogleBusinessMessagesAppChannel;
  /**
   * Adds or updates an Intelligent Search channel to the specified app
   *
   * @return The channel that was just added
   */
  addIntelligentSearchChannel: IntelligentSearchAppChannel;
  /**
   * Adds or updates a Lex channel to the specified app.
   *
   * @return The channel that was just added
   */
  addLexChannel: LexConnectAppChannel;
  /**
   * Adds or updates a Lex V2 channel to the specified app.
   *
   * @return The channel that was just added
   */
  addLexV2Channel: LexV2ConnectAppChannel;
  /** Update operations related to the specific channel. */
  update: UpdateAppChannelMutation;
};


export type AppChannelMutationAddActionsOnGoogleChannelArgs = {
  channel: ActionsOnGoogleAppChannelInput;
};


export type AppChannelMutationAddAlexaChannelArgs = {
  channel: AlexaAppChannelInput;
};


export type AppChannelMutationAddChannelArgs = {
  channel: AppChannelInput;
};


export type AppChannelMutationAddChatWidgetChannelArgs = {
  channel: ChatWidgetAppChannelInput;
};


export type AppChannelMutationAddDialogflowChannelArgs = {
  channel: DialogflowAppChannelInput;
};


export type AppChannelMutationAddFacebookMessengerChannelArgs = {
  channel: FacebookMessengerAppChannelInput;
};


export type AppChannelMutationAddGoogleBusinessMessageChannelArgs = {
  channel: GoogleBusinessMessagesAppChannelInput;
};


export type AppChannelMutationAddIntelligentSearchChannelArgs = {
  channel: IntelligentSearchAppChannelInput;
};


export type AppChannelMutationAddLexChannelArgs = {
  channel: LexConnectAppChannelInput;
};


export type AppChannelMutationAddLexV2ChannelArgs = {
  channel: LexV2ConnectAppChannelInput;
};


export type AppChannelMutationUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']>;
};

export type AppChannelStatus = {
  /** The email of the user who last changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /** A brief history of the status changes. */
  statusHistory?: Maybe<Array<Maybe<AppChannelStatusHistory>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level of the app. */
  type: Scalars['String'];
};

export type AppChannelStatusHistory = {
  /** The email of the user who changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level that the app was. */
  type: Scalars['String'];
};

export type AppInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']>;
  /**
   * Unique identifier of the app in Stentor.
   * If not provided then the name will derive the appId.
   */
  appId?: InputMaybe<Scalars['ID']>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']>;
  beta?: InputMaybe<Scalars['JSON']>;
  /** Third party analytics platforms. */
  dataStreams?: InputMaybe<DataStreamsInput>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']>;
  /** The URL where the app is served. */
  endPoint?: InputMaybe<EndpointInput>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']>;
  /** The Email address to send lead captures to. */
  leadsContact?: InputMaybe<Scalars['EmailAddress']>;
  /** Physical location associated with the app. */
  location?: InputMaybe<LocationInput>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the app. */
  name: Scalars['String'];
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['ID'];
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: InputMaybe<PlatformDataInput>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']>;
  /** The status that the app is currently in Stentor. */
  status?: InputMaybe<StatusInput>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']>;
  /** Type of template the app and its intents adhere to. */
  templateType?: InputMaybe<Scalars['String']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: InputMaybe<ThirdPartyDeploymentsInput>;
};

/**
 * A set of keys and attributes which can be overridden based on the locale in which
 * the app is running in.
 *
 * Items which are only two letters will apply to all locales that are associated with that language.
 * Items which contains a region (two letters plus two more) are more specific and will
 *     apply to that region. These items will override the two letter implementations.
 *
 * All attributes specified will override the attributes that are in the default.
 * If the attribute is not specified, then the default is used.
 *
 * Example:
 *
 * {
 *     defaultLocale: "en"
 *     param1: "English",
 *     param2: "English",
 *     param3: "English",
 *     locale: {
 *         "es": {
 *             "param1": "Spanish
 *         },
 *         "esMX": {
 *             "param2": "Spanish-Mexico"
 *         }
 *     }
 * }
 *
 * Result in "es":
 * {
 *     param1: "Spanish",
 *     param2: "English",
 *     param3: "English",
 * }
 *
 * Result in "esMX":
 * {
 *     param1: "Spanish",
 *     param2: "Spanish-Mexico",
 *     param3: "English",
 * }
 */
export type AppLocales = {
  /** Danish */
  da?: Maybe<LocaleApp>;
  /** German */
  de?: Maybe<LocaleApp>;
  /** German German */
  deDE?: Maybe<LocaleApp>;
  /** English */
  en?: Maybe<LocaleApp>;
  /** English Australian */
  enAU?: Maybe<LocaleApp>;
  /** English Canada */
  enCA?: Maybe<LocaleApp>;
  /** English Great Britain */
  enGB?: Maybe<LocaleApp>;
  /** English India */
  enIN?: Maybe<LocaleApp>;
  /** English United States */
  enUS?: Maybe<LocaleApp>;
  /** Spanish */
  es?: Maybe<LocaleApp>;
  /** Spanish: Only supported in Google. */
  es419?: Maybe<LocaleApp>;
  /** Spanish Spain */
  esES?: Maybe<LocaleApp>;
  /** Spanish Mexico */
  esMX?: Maybe<LocaleApp>;
  /** French */
  fr?: Maybe<LocaleApp>;
  /** French Canada */
  frCA?: Maybe<LocaleApp>;
  /** French France */
  frFR?: Maybe<LocaleApp>;
  /** Italian */
  it?: Maybe<LocaleApp>;
  /** Italian Italy */
  itIT?: Maybe<LocaleApp>;
  /** Japanese */
  ja?: Maybe<LocaleApp>;
  /** Japanese Japan */
  jaJP?: Maybe<LocaleApp>;
  /** Dutch */
  nl?: Maybe<LocaleApp>;
  /** Norwegian */
  no?: Maybe<LocaleApp>;
  /** Portuguese */
  pt?: Maybe<LocaleApp>;
  /** Portuguese Brazil */
  ptBR?: Maybe<LocaleApp>;
  /** Russian */
  ru?: Maybe<LocaleApp>;
  /** Swedish */
  sv?: Maybe<LocaleApp>;
  /** Thai */
  th?: Maybe<LocaleApp>;
  /** Turkish */
  tr?: Maybe<LocaleApp>;
  /** Ukranian */
  uk?: Maybe<LocaleApp>;
  /** Chinese */
  zh?: Maybe<LocaleApp>;
  /** Chinese China */
  zhCH?: Maybe<LocaleApp>;
  /** Chinese Hong Kong */
  zhHK?: Maybe<LocaleApp>;
  /** Chinese Taiwan */
  zhTW?: Maybe<LocaleApp>;
};

/**
 * A set of keys and attributes which can be overridden based on the locale in which
 * the app is running in.
 *
 * Items which are only two letters will apply to all locales that are associated with that language.
 * Items which contains a region (two letters plus two more) are more specific and will
 *     apply to that region. These items will override the two letter implementations.
 *
 * All attributes specified will override the attributes that are in the default.
 * If the attribute is not specified, then the default is used.
 *
 * Example:
 *
 * {
 *     defaultLocale: "en"
 *     param1: "English",
 *     param2: "English",
 *     param3: "English",
 *     locale: {
 *         "es": {
 *             "param1": "Spanish
 *         },
 *         "esMX": {
 *             "param2": "Spanish-Mexico"
 *         }
 *     }
 * }
 *
 * Result in "es":
 * {
 *     param1: "Spanish",
 *     param2: "English",
 *     param3: "English",
 * }
 *
 * Result in "esMX":
 * {
 *     param1: "Spanish",
 *     param2: "Spanish-Mexico",
 *     param3: "English",
 * }
 */
export type AppLocalesInput = {
  /** Danish */
  da?: InputMaybe<LocaleAppInput>;
  /** German */
  de?: InputMaybe<LocaleAppInput>;
  /** German German */
  deDE?: InputMaybe<LocaleAppInput>;
  /** English */
  en?: InputMaybe<LocaleAppInput>;
  /** English Australian */
  enAU?: InputMaybe<LocaleAppInput>;
  /** English Canada */
  enCA?: InputMaybe<LocaleAppInput>;
  /** English Great Britain */
  enGB?: InputMaybe<LocaleAppInput>;
  /** English India */
  enIN?: InputMaybe<LocaleAppInput>;
  /** English United States */
  enUS?: InputMaybe<LocaleAppInput>;
  /** Spanish */
  es?: InputMaybe<LocaleAppInput>;
  /** Spanish: Only supported in Google. */
  es419?: InputMaybe<LocaleAppInput>;
  /** Spanish Spain */
  esES?: InputMaybe<LocaleAppInput>;
  /** Spanish Mexico */
  esMX?: InputMaybe<LocaleAppInput>;
  /** French */
  fr?: InputMaybe<LocaleAppInput>;
  /** French Canada */
  frCA?: InputMaybe<LocaleAppInput>;
  /** French France */
  frFR?: InputMaybe<LocaleAppInput>;
  /** Italian */
  it?: InputMaybe<LocaleAppInput>;
  /** Italian Italy */
  itIT?: InputMaybe<LocaleAppInput>;
  /** Japanese */
  ja?: InputMaybe<LocaleAppInput>;
  /** Japanese Japan */
  jaJP?: InputMaybe<LocaleAppInput>;
  /** Dutch */
  nl?: InputMaybe<LocaleAppInput>;
  /** Norwegian */
  no?: InputMaybe<LocaleAppInput>;
  /** Portuguese */
  pt?: InputMaybe<LocaleAppInput>;
  /** Portuguese Brazil */
  ptBR?: InputMaybe<LocaleAppInput>;
  /** Russian */
  ru?: InputMaybe<LocaleAppInput>;
  /** Swedish */
  sv?: InputMaybe<LocaleAppInput>;
  /** Thai */
  th?: InputMaybe<LocaleAppInput>;
  /** Turkish */
  tr?: InputMaybe<LocaleAppInput>;
  /** Ukranian */
  uk?: InputMaybe<LocaleAppInput>;
  /** Chinese */
  zh?: InputMaybe<LocaleAppInput>;
  /** Chinese China */
  zhCH?: InputMaybe<LocaleAppInput>;
  /** Chinese Hong Kong */
  zhHK?: InputMaybe<LocaleAppInput>;
  /** Chinese Taiwan */
  zhTW?: InputMaybe<LocaleAppInput>;
};

export type AppMutation = {
  /**
   * Allows one to add a new app to Stentor.
   *
   * The appId must be unique to Stentor.  If it is not, a new one will be generated which
   * is unique based on the appId provided.
   */
  addApp?: Maybe<App>;
  /** Import an app template in to the system. */
  importApp: App;
  /** Operations that are related to updating a particular app */
  update: UpdateAppMutation;
};


export type AppMutationAddAppArgs = {
  app?: InputMaybe<AppInput>;
};


export type AppMutationImportAppArgs = {
  appId?: InputMaybe<Scalars['ID']>;
  modelOnly?: InputMaybe<Scalars['Boolean']>;
  overwrite?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['URL'];
};


export type AppMutationUpdateArgs = {
  appId: Scalars['ID'];
};

export type AppNlu = BaseAppNlu & {
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']>;
  /** The type of NLU. */
  type: Scalars['String'];
};

export type AppNluInput = {
  /** The reference ID for the NLU */
  id?: InputMaybe<Scalars['String']>;
  /** The type of NLU. */
  type: Scalars['String'];
};

export type AppSchedules = {
  /** The key to include in the next query of schedules. */
  nextKey?: Maybe<Scalars['String']>;
  /** The schedules that were found */
  schedules: Array<Maybe<WebCrawlSchedule>>;
};

export type AppTemplateInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']>;
  /** The location of the collaboration agreement between the app and XAPP. */
  collaborationAgreementUrl?: InputMaybe<Scalars['String']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the app. */
  name: Scalars['String'];
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']>;
  /** The type of template that the app is to build from. */
  templateType: AppTemplateType;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: InputMaybe<ThirdPartyDeploymentsInput>;
};

export enum AppTemplateType {
  OcStudioStarterTemplate = 'OC_STUDIO_STARTER_TEMPLATE',
  PodcastTemplate = 'PODCAST_TEMPLATE',
  RadioTemplate = 'RADIO_TEMPLATE'
}

/** Remote tests that can be executed for the app. */
export type AppTest = {
  /** The unique identifier of the app that the test is linked to. */
  appId: Scalars['ID'];
  /** COnfigurations for executing the test. */
  config?: Maybe<TestConfig>;
  /** The time that the test was created.  Format: ISO 8601 */
  createdOn: Scalars['String'];
  /** Utterance Test Only: The expected result of the utterance test. */
  expectedResult?: Maybe<ExpectedUtteranceTestResult>;
  /** A list of the test history. */
  history?: Maybe<Array<Maybe<TestHistory>>>;
  /** Utterance Tests Only: The platform that the test should run on.  If not present, it will run on all platforms. */
  platform?: Maybe<Scalars['String']>;
  /** Do Nothing Tests Only: The result of the test. */
  result?: Maybe<Scalars['String']>;
  /** The state that the test is currently in. If there is no state, then the test was never executed. */
  state?: Maybe<TestState>;
  /** The unique identifier for the test. */
  testId: Scalars['ID'];
  /** The type of tests that this is. */
  testType: Scalars['String'];
  /** Utterance Tests Only: The utterance that the test is executing for. */
  utterance?: Maybe<Scalars['String']>;
};

export enum AppUsageInterval {
  Day = 'day',
  Hour = 'hour',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type AppUsageStat = {
  /** ID of the organization that contains the app */
  appId: Scalars['ID'];
  /** A CSV formatted output of the stats found. */
  csv: UsageStatCsvReturn;
  intervals: Array<Maybe<UsageStat>>;
  newUsers: Scalars['Int'];
  returningUsers: Scalars['Int'];
  totalSessions: Scalars['Int'];
  totalUsers: Scalars['Int'];
};

/** A collections query which returns a collection of apps */
export type AppsQuery = {
  /** A subset of apps that were viewed. */
  apps?: Maybe<Array<Maybe<SearchedApp>>>;
  /** The total number of apps that were found in the query */
  total: Scalars['Int'];
};

export enum AuthOrigin {
  /** Auth0's third-party authentication platform. */
  Auth0 = 'auth0',
  /** Amazon's Cognito authentication platform. */
  Cognito = 'cognito'
}

export enum AuthVerifyOrigin {
  Cognito = 'COGNITO'
}

export type BaseAppChannel = {
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


export type BaseAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type BaseAppNlu = {
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']>;
  /** The type of NLU. */
  type: Scalars['String'];
};

export type BaseDisplay = {
  payload?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type BaseHandlerPath = {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
};

export type BaseStudioTierPaymentAccount = {
  tier?: Maybe<StudioTierType>;
};

export type BaseSystemNotification = {
  /** A time when the notification was received */
  created: Scalars['DateTime'];
  /** A unique identifier for the notification */
  id: Scalars['ID'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String'];
  /** A title or name of the notification */
  name: Scalars['String'];
};

export type BaseWebContent = {
  /** Unique ID for the web content */
  _id: Scalars['String'];
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime'];
  /** The name of the content */
  name: Scalars['String'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String'];
};

export type BespokenDataStream = {
  token: Scalars['String'];
  type: Scalars['String'];
};

export type BespokenDataStreamInput = {
  token: Scalars['String'];
  type: Scalars['String'];
};

export type BillingContact = {
  name: Scalars['String'];
};

export type BlacklistedWebsite = {
  /** The user that blacklisted the website. */
  blacklistedBy?: Maybe<Scalars['String']>;
  /** The date which the website was blacklisted */
  createdOn: Scalars['DateTime'];
  /** URL of the blacklisted website. */
  url: Scalars['String'];
};

export type BrandContact = {
  name: Scalars['String'];
};

export type CmsMutation = {
  create: CreateCmsReturn;
  /** Update operations for CMS tokens related to the app. */
  update: CmsUpdateMutation;
};


export type CmsMutationUpdateArgs = {
  tokenId: Scalars['ID'];
};

export type CmsToken = {
  /** The appId of the app that the token is associated with. */
  appId?: Maybe<Scalars['ID']>;
  /** The day the token was created. */
  created: Scalars['DateTime'];
  /** The last time the token was used. */
  lastUsed?: Maybe<Scalars['DateTime']>;
  /** A partial human-readable portion of the token */
  mask: Scalars['String'];
  /** The organizationId of the organization that the token is associated with. */
  organizationId?: Maybe<Scalars['ID']>;
  /** The permissions that the token grants. */
  scope: Array<Maybe<Scalars['String']>>;
  /** The ID of the token that was created */
  tokenId: Scalars['ID'];
};

export type CmsUpdateMutation = {
  /** Removes the CMS token provided. */
  delete: Scalars['String'];
};

export type CardDisplay = BaseDisplay & {
  accessibilityText?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<CardDisplayButton>>>;
  content?: Maybe<Scalars['String']>;
  /** When present, if the image is clicked the provided website will open. */
  imageActionUrl?: Maybe<Scalars['String']>;
  largeImageUrl?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
  smallImageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CardDisplayButton = {
  openUrlAction: Scalars['String'];
  title: Scalars['String'];
};

export type CardDisplayButtonInput = {
  openUrlAction: Scalars['String'];
  title: Scalars['String'];
};

export type CardDisplayInput = {
  accessibilityText?: InputMaybe<Scalars['String']>;
  buttons?: InputMaybe<Array<InputMaybe<CardDisplayButtonInput>>>;
  content?: InputMaybe<Scalars['String']>;
  largeImageUrl?: InputMaybe<Scalars['String']>;
  smallImageUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** A channel that is specific for apps to run on the Actions On Google. */
export type ChatWidgetAppChannel = BaseAppChannel & {
  /** Optional key used for basic authentication */
  accountKey?: Maybe<Scalars['String']>;
  autoOpenOnWidth?: Maybe<Scalars['String']>;
  autocompleteSuggestionsUrl?: Maybe<Scalars['URL']>;
  /** The web location for the avatar */
  avatarUrl?: Maybe<Scalars['URL']>;
  botName?: Maybe<Scalars['String']>;
  chatButton?: Maybe<ChatWidgetChatButtonConfig>;
  configurableMessages?: Maybe<WidgetConfigurableMessagesConfig>;
  connection?: Maybe<ChatWidgetServerConfig>;
  cta?: Maybe<CtaConfig>;
  direct?: Maybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** Widget is disabled */
  disabled?: Maybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  footer?: Maybe<ChatWidgetFooterConfig>;
  header?: Maybe<ChatWidgetHeaderConfig>;
  /** The ID of the channel. */
  id: Scalars['String'];
  input?: Maybe<ChatWidgetInputConfig>;
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: Maybe<Scalars['String']>;
  menu?: Maybe<ChatWidgetMenuConfig>;
  middlewareUrl?: Maybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /**
   * The backend for the URL
   * @deprecated Use connection
   */
  serverUrl?: Maybe<Scalars['String']>;
  sessionExpiration?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** Theme for the widget */
  theme?: Maybe<ChatWidgetTheme>;
  /** The type of channel */
  type: Scalars['String'];
  typingStatus?: Maybe<ChatWidgetTypingStatusConfig>;
  urls?: Maybe<ChatWidgetAppChannelUrlsConfig>;
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


/** A channel that is specific for apps to run on the Actions On Google. */
export type ChatWidgetAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type ChatWidgetAppChannelInput = {
  /** Optional key used for basic authentication */
  accountKey?: InputMaybe<Scalars['String']>;
  autoOpenOnWidth?: InputMaybe<Scalars['String']>;
  autocompleteSuggestionsUrl?: InputMaybe<Scalars['URL']>;
  /** The web location for the avatar */
  avatarUrl?: InputMaybe<Scalars['URL']>;
  botName?: InputMaybe<Scalars['String']>;
  chatButton?: InputMaybe<ChatWidgetChatButtonConfigInput>;
  configurableMessages?: InputMaybe<WidgetConfigurableMessagesConfigInput>;
  connection?: InputMaybe<ChatWidgetServerConfigInput>;
  cta?: InputMaybe<CtaConfigInput>;
  direct?: InputMaybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** Widget is disabled */
  disabled?: InputMaybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<ChatWidgetFooterConfigInput>;
  header?: InputMaybe<ChatWidgetHeaderConfigInput>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel should be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ChatWidgetInputConfigInput>;
  menu?: InputMaybe<ChatWidgetMenuConfigInput>;
  middlewareUrl?: InputMaybe<Scalars['URLString']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * The backend for the URL
   *
   * @deprecated use connection
   */
  serverUrl?: InputMaybe<Scalars['String']>;
  sessionExpiration?: InputMaybe<Scalars['String']>;
  /** Theme for the widget */
  theme?: InputMaybe<ChatWidgetThemeInput>;
  /** The type of channel */
  type: Scalars['String'];
  typingStatus?: InputMaybe<ChatWidgetTypingStatusConfigInput>;
  urls?: InputMaybe<ChatWidgetAppChannelUrlsConfigInput>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetAppChannelUrlBehaviorBase = {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlBehaviorInput = {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlBehaviorNewTab = ChatWidgetAppChannelUrlBehaviorBase & {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlBehaviorNewWindow = ChatWidgetAppChannelUrlBehaviorBase & {
  height?: Maybe<Scalars['Int']>;
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
  width?: Maybe<Scalars['Int']>;
};

export type ChatWidgetAppChannelUrlBehaviorNewWindowWinowInput = {
  height?: InputMaybe<Scalars['Int']>;
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
  width?: InputMaybe<Scalars['Int']>;
};

export type ChatWidgetAppChannelUrlBehaviorSameWindow = ChatWidgetAppChannelUrlBehaviorBase & {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlPolicy = {
  behavior: ChatWidgetAppChannelUrlBehaviorBase;
  pattern: Scalars['String'];
};

export type ChatWidgetAppChannelUrlPolicyInput = {
  behavior: ChatWidgetAppChannelUrlBehaviorInput;
  pattern: Scalars['String'];
};

export type ChatWidgetAppChannelUrlsConfig = {
  defaultBehavior: ChatWidgetAppChannelUrlBehaviorBase;
  policies: Array<Maybe<ChatWidgetAppChannelUrlPolicy>>;
};

export type ChatWidgetAppChannelUrlsConfigInput = {
  defaultBehavior: ChatWidgetAppChannelUrlBehaviorInput;
  policies: Array<InputMaybe<ChatWidgetAppChannelUrlPolicyInput>>;
};

export enum ChatWidgetAppChannelWidgetUrlBehaviorType {
  NewTab = 'newTab',
  NewWindow = 'newWindow',
  SameWindow = 'sameWindow'
}

export type ChatWidgetBorderTheme = {
  color?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type ChatWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetBrandingConfig = {
  enabled?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type ChatWidgetBrandingConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetBrandingTheme = {
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetBrandingThemeInput = {
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetButtonTheme = {
  color?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type ChatWidgetButtonThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetCarouselTheme = {
  button?: Maybe<ChatWidgetButtonTheme>;
  subtitle?: Maybe<ChatWidgetTextTheme>;
  title?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetCarouselThemeInput = {
  button?: InputMaybe<ChatWidgetButtonThemeInput>;
  subtitle?: InputMaybe<ChatWidgetTextThemeInput>;
  title?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetChatButtonConfig = {
  tabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetChatButtonConfigInput = {
  tabIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetChatButtonTheme = {
  /** Widget chat button color */
  background?: Maybe<Scalars['String']>;
  /** Widget margin */
  margin?: Maybe<ChatWidgetMarginsTheme>;
};

export type ChatWidgetChatButtonThemeInput = {
  /** Widget chat button color */
  background?: InputMaybe<Scalars['String']>;
  /** Widget margin */
  margin?: InputMaybe<ChatWidgetMarginsThemeInput>;
};

export type ChatWidgetClearButtonConfig = {
  tabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetClearButtonConfigInput = {
  tabIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetContentTheme = {
  background?: Maybe<Scalars['String']>;
};

export type ChatWidgetContentThemeInput = {
  background?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetCtaTheme = {
  background?: Maybe<Scalars['String']>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetCtaThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetFooterConfig = {
  branding?: Maybe<ChatWidgetBrandingConfig>;
  clearButton?: Maybe<ChatWidgetClearButtonConfig>;
  sendButton?: Maybe<ChatWidgetSendButtonConfig>;
};

export type ChatWidgetFooterConfigInput = {
  branding?: InputMaybe<ChatWidgetBrandingConfigInput>;
  clearButton?: InputMaybe<ChatWidgetClearButtonConfigInput>;
  sendButton?: InputMaybe<ChatWidgetSendButtonConfigInput>;
};

export type ChatWidgetFooterTheme = {
  background?: Maybe<Scalars['String']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  branding?: Maybe<ChatWidgetBrandingTheme>;
};

export type ChatWidgetFooterThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  branding?: InputMaybe<ChatWidgetBrandingThemeInput>;
};

export type ChatWidgetHeaderActionsConfig = {
  cancel?: Maybe<Scalars['Boolean']>;
  cancelTabIndex?: Maybe<Scalars['String']>;
  minimize?: Maybe<Scalars['Boolean']>;
  minimizeTabIndex?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
  refreshTabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetHeaderConfig = {
  actions?: Maybe<ChatWidgetHeaderActionsConfig>;
  alignTextCenter?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ChatWidgetHeaderStatusConfig>;
  subtitle?: Maybe<ChatWidgetHeaderSubtitleConfig>;
};

export type ChatWidgetHeaderConfigActionsInput = {
  cancel?: InputMaybe<Scalars['Boolean']>;
  cancelTabIndex?: InputMaybe<Scalars['String']>;
  minimize?: InputMaybe<Scalars['Boolean']>;
  minimizeTabIndex?: InputMaybe<Scalars['String']>;
  refresh?: InputMaybe<Scalars['Boolean']>;
  refreshTabIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetHeaderConfigInput = {
  actions?: InputMaybe<ChatWidgetHeaderConfigActionsInput>;
  alignTextCenter?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<ChatWidgetHeaderStatusConfigInput>;
  subtitle?: InputMaybe<ChatWidgetHeaderSubtitleConfigInput>;
};

export type ChatWidgetHeaderStatusConfig = {
  away?: Maybe<Scalars['String']>;
  connecting?: Maybe<Scalars['String']>;
  offline?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['String']>;
};

export type ChatWidgetHeaderStatusConfigInput = {
  away?: InputMaybe<Scalars['String']>;
  connecting?: InputMaybe<Scalars['String']>;
  offline?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetHeaderSubtitleConfig = {
  enabled?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type ChatWidgetHeaderSubtitleConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetHeaderTheme = {
  background?: Maybe<Scalars['String']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  subtitle?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetHeaderThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  subtitle?: InputMaybe<ChatWidgetTextThemeInput>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetInputConfig = {
  placeholder?: Maybe<Scalars['String']>;
  tabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetInputConfigInput = {
  placeholder?: InputMaybe<Scalars['String']>;
  tabIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetInputTheme = {
  background?: Maybe<Scalars['String']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  placeholder?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetInputThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  placeholder?: InputMaybe<ChatWidgetTextThemeInput>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetMarginsTheme = {
  bottom?: Maybe<Scalars['String']>;
  left?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['String']>;
};

export type ChatWidgetMarginsThemeInput = {
  bottom?: InputMaybe<Scalars['String']>;
  left?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetMenuButtonConfig = {
  tabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetMenuButtonConfigInput = {
  tabIndex?: InputMaybe<Scalars['String']>;
};

export enum ChatWidgetMenuButtonLocation {
  Footer = 'FOOTER',
  HeaderLeft = 'HEADER_LEFT'
}

export type ChatWidgetMenuConfig = {
  button?: Maybe<ChatWidgetMenuButtonConfig>;
  items?: Maybe<Array<Maybe<ChatWidgetMenuItems>>>;
  itemsTabIndex?: Maybe<Scalars['String']>;
  menuButtonLocation?: Maybe<ChatWidgetMenuButtonLocation>;
};

export type ChatWidgetMenuConfigInput = {
  button?: InputMaybe<ChatWidgetMenuButtonConfigInput>;
  items?: InputMaybe<Array<InputMaybe<ChatWidgetMenuItemConfigInput>>>;
  itemsTabIndex?: InputMaybe<Scalars['String']>;
  menuButtonLocation?: InputMaybe<ChatWidgetMenuButtonLocation>;
};

export type ChatWidgetMenuItemConfig = {
  label?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type ChatWidgetMenuItemConfigInput = {
  behavior?: InputMaybe<ChatWidgetAppChannelUrlBehaviorInput>;
  body?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetMenuItemOpenUrl = {
  /** How the URL opens, defaults to defined behavior on URL opening config. */
  behavior?: Maybe<ChatWidgetAppChannelUrlBehaviorBase>;
  /** Display label for the URL */
  text: Scalars['String'];
  /** URL to be opened */
  url: Scalars['String'];
};

export type ChatWidgetMenuItemStaticImage = {
  imageUrl?: Maybe<Scalars['String']>;
};

export type ChatWidgetMenuItemStaticText = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ChatWidgetMenuItemTheme = {
  background?: Maybe<Scalars['String']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  height?: Maybe<Scalars['String']>;
  subtitle?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetMenuItemThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  height?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<ChatWidgetTextThemeInput>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetMenuItems = ChatWidgetMenuItemConfig | ChatWidgetMenuItemOpenUrl | ChatWidgetMenuItemStaticImage | ChatWidgetMenuItemStaticText;

export type ChatWidgetMenuTheme = {
  item?: Maybe<ChatWidgetMenuItemTheme>;
};

export type ChatWidgetMenuThemeInput = {
  item?: InputMaybe<ChatWidgetMenuItemThemeInput>;
};

export type ChatWidgetMessageTheme = {
  /** Message bubble color */
  bubbleColor?: Maybe<Scalars['String']>;
  /** Message text color */
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetMessageThemeInput = {
  /** Message bubble color */
  bubbleColor?: InputMaybe<Scalars['String']>;
  /** Message text color */
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetMessagesTheme = {
  maxWidth?: Maybe<Scalars['String']>;
  mine?: Maybe<ChatWidgetMessageTheme>;
  others?: Maybe<ChatWidgetMessageTheme>;
  padding?: Maybe<ChatWidgetPaddingTheme>;
};

export type ChatWidgetMessagesThemeInput = {
  maxWidth?: InputMaybe<Scalars['String']>;
  mine?: InputMaybe<ChatWidgetMessageThemeInput>;
  others?: InputMaybe<ChatWidgetMessageThemeInput>;
  padding?: InputMaybe<ChatWidgetPaddingThemeInput>;
};

export type ChatWidgetPaddingTheme = {
  bottom?: Maybe<Scalars['String']>;
  left?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['String']>;
};

export type ChatWidgetPaddingThemeInput = {
  bottom?: InputMaybe<Scalars['String']>;
  left?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetSendButtonConfig = {
  icon?: Maybe<Scalars['String']>;
  tabIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetSendButtonConfigInput = {
  icon?: InputMaybe<Scalars['String']>;
  tabIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetServerConfig = {
  accountKey?: Maybe<Scalars['String']>;
  serverUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ChatWidgetServerConfigInput = {
  accountKey?: InputMaybe<Scalars['String']>;
  serverUrl?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetSizeTheme = {
  height?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type ChatWidgetSizeThemeInput = {
  height?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetTextTheme = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  fontStyle?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type ChatWidgetTextThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  fontFamily?: InputMaybe<Scalars['String']>;
  fontSize?: InputMaybe<Scalars['String']>;
  fontStyle?: InputMaybe<Scalars['String']>;
  fontWeight?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetTextTypingStatusTheme = {
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetTextTypingStatusThemeInput = {
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetTheme = {
  /** ChatWidget border styling */
  border?: Maybe<ChatWidgetBorderTheme>;
  /** ChatWidget cancelButton styling */
  cancelButton?: Maybe<ChatWidgetButtonTheme>;
  /** ChatWidget carousel styling */
  carousel?: Maybe<ChatWidgetCarouselTheme>;
  /** Widget chat button style */
  chatButton?: Maybe<ChatWidgetChatButtonTheme>;
  /** ChatWidget content styling */
  content?: Maybe<ChatWidgetContentTheme>;
  /** ChatWidget call-to-action styling */
  cta?: Maybe<ChatWidgetCtaTheme>;
  /** ChatWidget footer styling */
  footer?: Maybe<ChatWidgetFooterTheme>;
  /** ChatWidget header styling */
  header?: Maybe<ChatWidgetHeaderTheme>;
  /** ChatWidget input styling */
  input?: Maybe<ChatWidgetInputTheme>;
  /** Widget margin */
  margin?: Maybe<ChatWidgetMarginsTheme>;
  menu?: Maybe<ChatWidgetMenuTheme>;
  /** ChatWidget menuButton styling */
  menuButton?: Maybe<ChatWidgetButtonTheme>;
  /** ChatWidget messages styling */
  messages?: Maybe<ChatWidgetMessagesTheme>;
  /** ChatWidget minimizeButton styling */
  minimizeButton?: Maybe<ChatWidgetButtonTheme>;
  /** Primary color of ChatWidget */
  primaryColor?: Maybe<Scalars['String']>;
  /** ChatWidget refreshButton styling */
  refreshButton?: Maybe<ChatWidgetButtonTheme>;
  /** ChatWidget sendButton styling */
  sendButton?: Maybe<ChatWidgetButtonTheme>;
  sessionExpiration?: Maybe<Scalars['String']>;
  /** Widget size */
  size?: Maybe<ChatWidgetSizeTheme>;
  textTypingStatus?: Maybe<ChatWidgetTextTypingStatusTheme>;
  /** Widget z-index */
  zIndex?: Maybe<Scalars['String']>;
};

export type ChatWidgetThemeInput = {
  /** ChatWidget border styling */
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  /** ChatWidget cancelButton styling */
  cancelButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  /** ChatWidget carousel styling */
  carousel?: InputMaybe<ChatWidgetCarouselThemeInput>;
  /** Widget chat button style */
  chatButton?: InputMaybe<ChatWidgetChatButtonThemeInput>;
  /** ChatWidget content styling */
  content?: InputMaybe<ChatWidgetContentThemeInput>;
  /** ChatWidget call-to-action styling */
  cta?: InputMaybe<ChatWidgetCtaThemeInput>;
  /** ChatWidget footer styling */
  footer?: InputMaybe<ChatWidgetFooterThemeInput>;
  /** ChatWidget header styling */
  header?: InputMaybe<ChatWidgetHeaderThemeInput>;
  /** ChatWidget input styling */
  input?: InputMaybe<ChatWidgetInputThemeInput>;
  /** Widget margin */
  margin?: InputMaybe<ChatWidgetMarginsThemeInput>;
  /** ChatWidget menu styling */
  menu?: InputMaybe<ChatWidgetMenuThemeInput>;
  /** ChatWidget menuButton styling */
  menuButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  /** ChatWidget messages styling */
  messages?: InputMaybe<ChatWidgetMessagesThemeInput>;
  /** ChatWidget minimizeButton styling */
  minimizeButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  /** Primary color of ChatWidget */
  primaryColor?: InputMaybe<Scalars['String']>;
  /** ChatWidget menuButton Styling */
  refreshButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  /** ChatWidget sendButton styling */
  sendButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  sessionExpiration?: InputMaybe<Scalars['String']>;
  /** Widget size */
  size?: InputMaybe<ChatWidgetSizeThemeInput>;
  textTypingStatus?: InputMaybe<ChatWidgetTextTypingStatusThemeInput>;
  /** Widget z-index */
  zIndex?: InputMaybe<Scalars['String']>;
};

export type ChatWidgetTypingStatusConfig = {
  textTypingStatusEnabled?: Maybe<Scalars['Boolean']>;
};

export type ChatWidgetTypingStatusConfigInput = {
  textTypingStatusEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type ChatbaseDataStream = {
  type: Scalars['String'];
};

export type ChatbaseDataStreamInput = {
  type: Scalars['String'];
};

export type ClearFaqReturn = {
  /** The task ID of the faq clear which can be queried to check if it's done. */
  taskId: Scalars['ID'];
};

export type CodeChallenge = {
  codeChallenge: Scalars['String'];
  codeChallengeMethod: Scalars['String'];
  codeVerifier: Scalars['String'];
};

export type CompilableHandlerPath = HistoricalHandlerPath | PreviousHandlerPath;

/** Attributes that can be overriden in the copyApp when creating the new app */
export type CopyAppOverrideAttributes = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type CreateCmsReturn = {
  /** The appId of the app that the token is associated with. */
  appId?: Maybe<Scalars['ID']>;
  /** The day the token was created. */
  created: Scalars['DateTime'];
  /** The last time the token was used. */
  lastUsed?: Maybe<Scalars['DateTime']>;
  /** A partial human-readable portion of the token */
  mask: Scalars['String'];
  /** The organizationId of the organization that the token is associated with. */
  organizationId?: Maybe<Scalars['ID']>;
  /** The permissions that the token grants. */
  scope: Array<Maybe<Scalars['String']>>;
  /** The authorization token that was generated for this app. */
  token: Scalars['String'];
  /** The ID of the token that was created */
  tokenId: Scalars['ID'];
};

export type CreateInteractionModelReturn = {
  /** The model that was created. */
  interactionModel: AlexaInteractionModel;
  /** The locale that the interaction model is for. */
  locale: Scalars['String'];
};

export type CreateOrgReturn = {
  app?: Maybe<App>;
  org: Organization;
};

export type CreateOrganizationInput = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: InputMaybe<Scalars['String']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: InputMaybe<Scalars['String']>;
  /**
   * The email address of a user who can be contacted about issues
   * related to the organization.
   */
  contact?: InputMaybe<Scalars['String']>;
  /** The organization contact's name. */
  contactName?: InputMaybe<Scalars['String']>;
  /** The organization contact's phone number. */
  contactPhone?: InputMaybe<Scalars['String']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: InputMaybe<Scalars['String']>;
  /** The human-readable description of the organization. */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: InputMaybe<IPrightsInput>;
  /** URL for the organization's logo. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the organization. */
  name: Scalars['String'];
  /** Any notes that are related to the organization. */
  notes?: InputMaybe<Scalars['String']>;
  /** Payment account information */
  paymentAccounts?: InputMaybe<PaymentAccountsInput>;
  /**
   * Third party publishing account information such as Amazon SMAPI's
   * service or Google's Dialogflow.
   */
  publishingAccounts?: InputMaybe<PublishingAccountsInput>;
  /** A URL to the organization's website. */
  website?: InputMaybe<Scalars['String']>;
};

export type CtaConfig = {
  message?: Maybe<Scalars['String']>;
  timeout?: Maybe<Scalars['Int']>;
};

export type CtaConfigInput = {
  message?: InputMaybe<Scalars['String']>;
  timeout?: InputMaybe<Scalars['Int']>;
};

export enum CurrentTestState {
  /** Assigned to  the test state if the test is currently executing. */
  Running = 'RUNNING',
  /** Assigned to the test state if the test is no longer executing. */
  Stopped = 'STOPPED'
}

export type DashbotDataStream = {
  type: Scalars['String'];
};

export type DashbotDataStreamInput = {
  type: Scalars['String'];
};

/** Third party analytics integrations. */
export type DataStreams = {
  /** Tokens for integrating with the bespoken platform. */
  bespoken?: Maybe<BespokenDataStream>;
  /** Tokens for integrating with Chatbase. */
  chatbase?: Maybe<ChatbaseDataStream>;
  /** Tokens for integrating with dashbot. */
  dashbot?: Maybe<DashbotDataStream>;
  /** Tokens for integrating with Google Analytics. */
  googleAnalytics?: Maybe<GoogleAnalyticsDataStream>;
};

/** Third party analytics integrations. */
export type DataStreamsInput = {
  /** Tokens for integrating with the bespoken platform. */
  bespoken?: InputMaybe<BespokenDataStreamInput>;
  /** Tokens for integrating with Chatbase. */
  chatbase?: InputMaybe<ChatbaseDataStreamInput>;
  /** Tokens for integrating with dashbot. */
  dashbot?: InputMaybe<DashbotDataStreamInput>;
  /** Tokens for integrating with Google Analytics. */
  googleAnalytics?: InputMaybe<GoogleAnalyticsDataStreamInput>;
};

export type DeleteHandlerReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The handlers that were updated in the operation */
  handlers: Array<Maybe<DeleteIntentIdKey>>;
};


export type DeleteHandlerReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteIntentIdKey = {
  /** The appId that was deleted during a delete operation. */
  appId: Scalars['String'];
  /** The intentId that was updated during a delete operation. */
  intentId: Scalars['String'];
};

export type DeleteIntentReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The intents that were updated in the operation */
  intents: Array<Maybe<DeleteIntentIdKey>>;
};


export type DeleteIntentReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

/**
 * DialogflowAppChannel objects only.
 *
 * Required publishing information questions.
 */
export type DialogflowAdditionalInformationQuestions = {
  /**
   * Do your Actions contain alcohol or tobacco-related content?
   *
   * If yes, you must include age verification at the beginning of the conversation.
   * If your Actions mainly sell alcohol or tobacco, you must implement
   * account linking and verify that the user meets legal age requirements.
   */
  alcoholAndTobaccoRelatedContent?: Maybe<Scalars['Boolean']>;
  /**
   * Are children under the age of 13 one of the intended audience of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows developers to designate that their Actions are family-friendly, so parents and kids
   * can find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: Maybe<Scalars['Boolean']>;
};

/**
 * DialogflowChanelData objects only.
 *
 * Required publishing information questions.
 */
export type DialogflowAdditionalInformationQuestionsInput = {
  /**
   * Do your Actions contain alcohol or tobacco-related content?
   *
   * If yes, you must include age veriifcation at the beginning of the conversation.
   * If your Actions mainly sell alcohol or tobacco, you must implement
   * account linking and verify that the user meets legal age requirements.
   */
  alcoholAndTobaccoRelatedContent?: InputMaybe<Scalars['Boolean']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: InputMaybe<Scalars['Boolean']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannel = BaseAppChannel & {
  /** For "dialogflow" type channels only. */
  additionalInformationQuestions?: Maybe<DialogflowAdditionalInformationQuestions>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean'];
  /** The ID of the channel. */
  id: Scalars['String'];
  /**
   * Boolean used to determine if the channel is currently being build on
   * dialogflow.
   */
  isBuilding: Scalars['Boolean'];
  modelManagementMode?: Maybe<Scalars['Boolean']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: DialogflowNluQuery;
  /** The ID of the project on Dialogflow */
  projectId: Scalars['ID'];
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannelNluQueryArgs = {
  text: Scalars['String'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type DialogflowAppChannelInput = {
  /** For "actions-on-google" type channels only. */
  additionalInformationQuestions?: InputMaybe<DialogflowAdditionalInformationQuestionsInput>;
  /** URL to find the credentials for accessing Google Cloud Services */
  dialogflowCredentials?: InputMaybe<DialogflowCredentialsInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type DialogflowAppNlu = BaseAppNlu & {
  /**
   * The URL of the JSON style credentials that provided
   * access to performing queries against the Dialogflow API
   */
  credentialsURL?: Maybe<Scalars['String']>;
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: DialogflowNluQuery;
  /** The project ID of the Dialogflow agent */
  projectId?: Maybe<Scalars['String']>;
  /** The type of NLU. */
  type: Scalars['String'];
};


export type DialogflowAppNluNluQueryArgs = {
  text: Scalars['String'];
};

export type DialogflowAppNluInput = {
  /**
   * The dialogflow credentials associated with the input.
   *
   * This will be stored and returned with the "credentialsURL" in the Dialogflow NLU.
   */
  dialogflowCredentials?: InputMaybe<DialogflowCredentialsInput>;
  /** The reference ID for the NLU */
  id?: InputMaybe<Scalars['String']>;
  /** The project ID of the Dialogflow agent */
  projectId?: InputMaybe<Scalars['String']>;
  /** The type of NLU. */
  type: Scalars['String'];
};

export type DialogflowCredentialsInput = {
  auth_provider_x509_cert_url?: InputMaybe<Scalars['String']>;
  auth_uri?: InputMaybe<Scalars['String']>;
  client_email: Scalars['String'];
  client_id?: InputMaybe<Scalars['String']>;
  client_x509_cert_url?: InputMaybe<Scalars['String']>;
  private_key: Scalars['String'];
  private_key_id?: InputMaybe<Scalars['String']>;
  project_id: Scalars['String'];
  token_uri?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Attributes used for dialogflow publishing. */
export type DialogflowIntegration = {
  /** The location of the credentials needed to upload to dialogflow. */
  credentialsUrl: Scalars['String'];
};

/** Attributes used for dialogflow publishing. */
export type DialogflowIntegrationInput = {
  /** The location of the credentials needed to upload to dialogflow. */
  credentialsUrl: Scalars['String'];
};

export type DialogflowNluQuery = {
  intentId: Scalars['String'];
  knowledgeAnswer?: Maybe<DialogflowNluQueryKnowledgeAnswer>;
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String'];
};

export type DialogflowNluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String'];
  /** Raw question */
  faqQuestion: Scalars['String'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Int'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']>;
};

export type DisplayImage = {
  contentDescription?: Maybe<Scalars['String']>;
  sources: Array<Maybe<DisplayImageSpecification>>;
};

export type DisplayImageInput = {
  contentDescription?: InputMaybe<Scalars['String']>;
  sources: Array<InputMaybe<DisplayImageSpecificationInput>>;
};

export type DisplayImageSpecification = {
  height: Scalars['Int'];
  imageUrl: Scalars['String'];
  width: Scalars['Int'];
};

export type DisplayImageSpecificationInput = {
  height: Scalars['Int'];
  imageUrl: Scalars['String'];
  width: Scalars['Int'];
};

export type DisplayListButton = {
  title?: Maybe<Scalars['String']>;
};

export type DisplayListButtonInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type DisplayListItem = {
  buttons?: Maybe<Array<Maybe<DisplayListButton>>>;
  description: Scalars['String'];
  image: DisplayImage;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DisplayListItemInput = {
  buttons?: InputMaybe<Array<InputMaybe<DisplayListButtonInput>>>;
  description: Scalars['String'];
  image: DisplayImageInput;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type DisplayTextContent = {
  primaryText?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  tertiaryText?: Maybe<Scalars['String']>;
};

export type DisplayTextContentInput = {
  primaryText?: InputMaybe<Scalars['String']>;
  secondaryText?: InputMaybe<Scalars['String']>;
  tertiaryText?: InputMaybe<Scalars['String']>;
};

/** URLs for each platform to call for utterance resolution. Each key corresponds to the specific platform. */
export type Endpoint = {
  actionsOnGoogle?: Maybe<Url>;
  alexa?: Maybe<Url>;
  dialogFlow?: Maybe<Url>;
  google?: Maybe<Url>;
};

/** URLs for each platform to call for utterance resolution. Each key corresponds to the specific platform. */
export type EndpointInput = {
  actionsOnGoogle?: InputMaybe<UrlInput>;
  alexa?: InputMaybe<UrlInput>;
  dialogFlow?: InputMaybe<UrlInput>;
  google?: InputMaybe<UrlInput>;
};

export type EntitiesQuery = {
  _id: Scalars['ID'];
  /** A subset of entities that are found in the query. */
  entities?: Maybe<Array<Maybe<GetEntitiesListEntity>>>;
  /** The total number of entities that were found. */
  total: Scalars['Int'];
};

export type Entity = {
  _id: Scalars['ID'];
  /** The appId of the app that the slot is associated with. */
  appId: Scalars['ID'];
  /** The date at which the entity was created. */
  createdAt?: Maybe<Scalars['String']>;
  /** Optional ID if the slot type has a representation in Dialogflow. */
  dialogflowId?: Maybe<Scalars['String']>;
  /** The name of the slot as it is to the user. */
  displayName: Scalars['String'];
  /** The unique identification as it is in the database. */
  entityId: Scalars['ID'];
  intents: EntityIntentsSearchResult;
  /**
   * NLU specific metadata used when translating to the NLU entity.
   *
   * Use it to override the entity type for a specific NLU
   */
  nlu?: Maybe<Scalars['JSON']>;
  /**
   * The type of entity.
   * If not set, the default is 'VALUE_SYNONYMS' which uses a set of values
   * and corresponding synonyms for the value.
   *
   * REGEX is when the values are expecting to be a regular expression.  This is not
   * supported by all NLU.
   */
  type?: Maybe<EntityType>;
  /** The date at which the entity was last updated. */
  updatedAt?: Maybe<Scalars['String']>;
  /** A query for any errors that may be in the Entity. */
  validation: EntityValidation;
  /** The values that the slot can be. */
  values?: Maybe<Array<Maybe<EntityValue>>>;
};


export type EntityIntentsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type EntityErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime'];
  /** A unique identifier for the notification */
  id: Scalars['ID'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<EntityErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String'];
};

export type EntityErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID'];
  /** The ID of the entity that contains the error. */
  entityId: Scalars['ID'];
};

export type EntityIntentsSearchResult = {
  intents?: Maybe<Array<Maybe<Intent>>>;
  total: Scalars['Int'];
};

export type EntitySuggestion = {
  /** The ending location of the word in the provided sentence. */
  end: Scalars['Int'];
  /**
   * The Stentor entityId that the word can map to.
   *
   * If this is blank then there is no entity that matches the word.
   */
  entityId: Scalars['String'];
  /** A parsed suggestion for the word. */
  ner: Scalars['String'];
  /** The original word */
  rawValue: Scalars['String'];
  /** The starting location of the word in the provided sentence. */
  start: Scalars['Int'];
  /** The value of the entity. */
  value: Scalars['String'];
};

export enum EntityType {
  Regex = 'REGEX',
  ValueSynonyms = 'VALUE_SYNONYMS'
}

export type EntityValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<EntityValidationError>>;
  /** Whether or not the full entity is valid. */
  isValid: Scalars['Boolean'];
};

export type EntityValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']>;
};

export type EntityValue = {
  /** Used by Alexa.  This value is returned as a reference, such as "LAX" */
  canonicalId?: Maybe<Scalars['String']>;
  /**
   * The name of the entity.
   * For example, for an entity called cities, a value would
   * be "Los Angeles".
   */
  name: Scalars['String'];
  /**
   * List of potential synonyms for the entity.
   *
   * For example, "L.A."" & "City of Angels"
   */
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EntityValueInput = {
  /** Used by Alexa.  This value is returned as a reference, such as "LAX" */
  canonicalId?: InputMaybe<Scalars['String']>;
  /**
   * The name of the entity.
   * For example, for an entity called cities, a value would
   * be "Los Angeles".
   */
  name: Scalars['String'];
  /**
   * List of potential synonyms for the entity.
   *
   * For example, "L.A."" & "City of Angels"
   */
  synonyms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventFlag = {
  /** The flag that was set. */
  flag: RawQueryEventFlag;
  /** The date at which it was flagged. In ISO 8601 standard. */
  flaggedOn: Scalars['String'];
  /** A not set by the user who flagged it. */
  note?: Maybe<Scalars['String']>;
  /** The user who flagged the event. */
  userEmail: Scalars['String'];
};

export type EventResolutionInput = {
  /** A note that the user may want to add to the resolution for clarity. */
  note?: InputMaybe<Scalars['String']>;
  /** The Stentor event that this resolution is linked to. */
  stentorEventId: Scalars['ID'];
  /**
   * The style of resolution that this is.
   *
   * Default: FIXED
   */
  type?: InputMaybe<EventResolutionType>;
};

export enum EventResolutionType {
  /** The noted problem with the event can not be fixed. */
  CanNotFix = 'CAN_NOT_FIX',
  /** The problem with the event has been resolved. */
  Fixed = 'FIXED',
  /** The noted problem with the event will not be fixed. */
  WillNotFix = 'WILL_NOT_FIX'
}

export type EventResponse = {
  displays?: Maybe<Scalars['JSON']>;
  outputSpeech?: Maybe<EventResponseObject>;
  reprompt?: Maybe<EventResponseObject>;
};

export type EventResponseObject = {
  displayText?: Maybe<Scalars['String']>;
  ssml?: Maybe<Scalars['String']>;
  suggestions?: Maybe<Array<Maybe<EventResponseSuggestion>>>;
};

export type EventResponseSuggestion = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/**
 * The slots that were resolved when a user makes a request.
 *
 * The value of the slot can be a variety of different types.  The type
 * is associated with it's '___Value' parameter.
 */
export type EventSlots = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: Maybe<Scalars['Boolean']>;
  /** The iso 8601 value of the date value. */
  dateValue?: Maybe<Scalars['String']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: Maybe<Scalars['String']>;
  /** The ID of the slot. */
  id?: Maybe<Scalars['String']>;
  /** The value of a slot if it is an integer. */
  integerValue?: Maybe<Scalars['Int']>;
  /** The name of the slot. */
  name?: Maybe<Scalars['String']>;
  rawValue?: Maybe<Scalars['String']>;
  /** A stringified value of the slot. This is used if the type could not be determined or is not supported yet. */
  slotValue?: Maybe<Scalars['String']>;
  /** The iso 8601 value of the start date value. */
  startDateValue?: Maybe<Scalars['String']>;
  /** String values of a slot array. */
  stringArrayValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: Maybe<Scalars['String']>;
  successfulMatch?: Maybe<Scalars['Boolean']>;
};

export type EventStentorRequest = {
  anonymous?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<Scalars['String']>;
  intentId?: Maybe<Scalars['String']>;
  isHealthCheck?: Maybe<Scalars['Boolean']>;
  isNewSession?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  matchConfidence?: Maybe<Scalars['Float']>;
  platform?: Maybe<Scalars['String']>;
  rawQuery?: Maybe<Scalars['String']>;
  sessionAttributes?: Maybe<EventStentorRequestsSessionAttributes>;
  sessionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EventStentorRequestsSessionAttributes = {
  channel?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** Execution events that were captured by Stentor. */
export type Events = {
  /** The channel ID that threw the event. */
  channel?: Maybe<Scalars['String']>;
  /** For intent request events, the handler that was currently fullfilling the request. */
  currentHandler?: Maybe<Scalars['String']>;
  /** The Stentor environment that it was running (dev, stage, prod, etc.) */
  environment?: Maybe<Scalars['String']>;
  /** For error events, the error code that was sent with the error if there was one. */
  errorCode?: Maybe<Scalars['Int']>;
  /** For error events, the message that was sent with the error. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The ID of the event that. */
  eventId: Scalars['String'];
  /**
   * The index that the event is a part of.
   *
   * @deprecated The index is now part of the eventId.
   */
  eventIndex: Scalars['String'];
  /** A more specific description of the event.  Can be thought of as a sub-section of eventType. */
  eventName?: Maybe<Scalars['String']>;
  /** The time that the event was sent. */
  eventTime?: Maybe<Scalars['String']>;
  /** The type of event that was thrown. */
  eventType?: Maybe<Scalars['String']>;
  /** Flag history for the event.  Most recent at top. */
  flags?: Maybe<Array<Maybe<EventFlag>>>;
  /** Whether or not the event was a health check. */
  isHealthCheck?: Maybe<Scalars['Boolean']>;
  /** Whether or not the event is the first in its session. */
  isNewSession?: Maybe<Scalars['Boolean']>;
  /** A string or JSON parselable string of the payload of the event. */
  payload?: Maybe<Scalars['String']>;
  /** The platform that the event was runnign on. */
  platform?: Maybe<Scalars['String']>;
  /** The captured action before it was interpreted by the platform.  Only for INTENT_REQUEST events on platforms that support it. */
  rawQuery?: Maybe<Scalars['String']>;
  /** For intent requests, the intentId of the request. */
  request?: Maybe<Scalars['String']>;
  /** For completed intent requests, the response that was found. */
  response?: Maybe<EventResponse>;
  /** For intent request events, the handler that was chosen to fulfill the next request. */
  selectedHandler?: Maybe<Scalars['String']>;
  /** The ID of a specific session that is associated with the event. */
  sessionId?: Maybe<Scalars['String']>;
  /** For intent requests, the slots that were resolved in teh request. */
  slots?: Maybe<Array<Maybe<EventSlots>>>;
  /** The request that was pulled out of the event. */
  stentorRequest?: Maybe<EventStentorRequest>;
  /** The tag that is related to the query. */
  tag?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the user which was making the request. */
  userId?: Maybe<Scalars['String']>;
};

export type ExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

export type ExpectedSlot = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: Maybe<Scalars['Boolean']>;
  /** The iso 8601 value of the date value. */
  dateValue?: Maybe<Scalars['String']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: Maybe<Scalars['String']>;
  /** The value of a slot if it is a float. Integer values will also be included. */
  floatValue?: Maybe<Scalars['Float']>;
  /** The value of a slot if it is an integer. */
  integerValue?: Maybe<Scalars['Int']>;
  /** The name of the expected slot. */
  name: Scalars['String'];
  /** The iso 8601 value of the start date value. */
  startDateValue?: Maybe<Scalars['String']>;
  /** String values of a slot array. */
  stringArrayValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: Maybe<Scalars['String']>;
};

export type ExpectedUtteranceTestResult = {
  /** The intentId that is expected to be returned when the utterance is found. */
  intentId: Scalars['String'];
  /** The slots that are expected to be returned. */
  matchedSlots?: Maybe<Array<Maybe<ExpectedSlot>>>;
  /** The request type expected. */
  type?: Maybe<Scalars['String']>;
};

export type ExportAppMutationResponse = {
  url: Scalars['URL'];
};

export type ExportToCsvReturn = {
  url: Scalars['URL'];
};

export type FaqMutation = {
  /** Adds FAQs to the database. */
  addFAQs: Array<Maybe<AddedFaq>>;
  /** Clears all FAQs from the app. */
  clear: ClearFaqReturn;
  exportToCSV: ExportToCsvReturn;
  /** Update operations on FAQs */
  update: UpdateFaqMutation;
  /**
   * Uploads a CSV file of the FAQs to the database.
   *
   * Row 1: Question
   * Row 2: Answer
   * Row 3: URL of the origin (optional)
   * Row 4: External ID to an FAQ
   */
  uploadCSV: UploadFaqReturn;
};


export type FaqMutationAddFaQsArgs = {
  faqs: Array<InputMaybe<AddFaq>>;
  resolution?: InputMaybe<EventResolutionInput>;
};


export type FaqMutationExportToCsvArgs = {
  includeTitle?: InputMaybe<Scalars['Boolean']>;
  includeUrl?: InputMaybe<Scalars['Boolean']>;
};


export type FaqMutationUpdateArgs = {
  id: Scalars['ID'];
};


export type FaqMutationUploadCsvArgs = {
  file: Scalars['URL'];
  hasTitle?: InputMaybe<Scalars['Boolean']>;
};

export enum FaqNotAddedReason {
  AlreadyExists = 'ALREADY_EXISTS',
  Unknown = 'UNKNOWN'
}

export type FaqSuggestionReturn = {
  failedPutRequests: Scalars['Int'];
  responses: Scalars['JSON'];
};

export type FacebookMessengerAppChannel = BaseAppChannel & {
  /** Human readable name for the avatar. */
  avatarName?: Maybe<Scalars['String']>;
  /** URL to the facebook page's avatar. */
  avatarUrl?: Maybe<Scalars['URL']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** AppId of the app that it's linked to. */
  facebookAppId?: Maybe<Scalars['String']>;
  /** Human readable name for the Facebook app. */
  facebookAppName?: Maybe<Scalars['String']>;
  facebookAppSecret?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The pages that are linked to the channel. */
  pages?: Maybe<Array<Maybe<FacebookPage>>>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


export type FacebookMessengerAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type FacebookMessengerAppChannelInput = {
  /** Human readable name for the avatar. */
  avatarName?: InputMaybe<Scalars['String']>;
  /** URL to the facebook page's avatar. */
  avatarUrl?: InputMaybe<Scalars['URL']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /** AppId of the app that it's linked to. */
  facebookAppId?: InputMaybe<Scalars['String']>;
  /** Human readable name for the Facebook app. */
  facebookAppName?: InputMaybe<Scalars['String']>;
  facebookAppSecret?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The pages that are linked to the channel. */
  pages?: InputMaybe<Array<InputMaybe<FacebookPageInput>>>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type FacebookPage = {
  pageId: Scalars['ID'];
  pageName?: Maybe<Scalars['String']>;
  pageToken?: Maybe<Scalars['String']>;
};

export type FacebookPageInput = {
  pageId: Scalars['ID'];
  pageName?: InputMaybe<Scalars['String']>;
  pageToken?: InputMaybe<Scalars['String']>;
};

export type FirstTimeHandlerResponseSegment = HandlerResponseSegment & {
  fistTime: Scalars['Boolean'];
  segment: ResponseOutput;
};

export type FlagEventReturn = {
  message?: Maybe<Scalars['String']>;
};

/** Statistics on the flagged events */
export type FlagTotals = {
  CONFIRMED_CORRECT: Scalars['Int'];
  CORRECT: Scalars['Int'];
  FLAGGED: Scalars['Int'];
  HELPFUL: Scalars['Int'];
  INCORRECT: Scalars['Int'];
  INCORRECT_RESOLVED: Scalars['Int'];
  NEEDS_HUMAN: Scalars['Int'];
  OPTIMAL: Scalars['Int'];
};

export type ForwardInput = {
  paths: Array<InputMaybe<Scalars['JSON']>>;
};

export type Geocode = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type GeocodeInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** The available app attributes that are from a Organization Get Apps query. */
export type GetAppsListApp = {
  _id: Scalars['ID'];
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']>;
  /** Unique identifier of the app in Stentor. */
  appId: Scalars['String'];
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']>;
  /** The human-readable name of the app. */
  name: Scalars['String'];
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['String'];
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<GetAppsListStatus>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: Maybe<Scalars['String']>;
};

export type GetAppsListStatus = {
  /** The email of the user who last changed the status. */
  email?: Maybe<Scalars['String']>;
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /**
   * The time the status was last changed.
   *
   * Format: ISO 8601 timestamp
   */
  timestamp: Scalars['String'];
  /** The status level of the app. */
  type: Scalars['String'];
};

export type GetAppsQuery = {
  _id: Scalars['ID'];
  /** The apps that were discovered in the query. */
  apps: Array<Maybe<GetAppsListApp>>;
  /** The total number of apps that were found in the query */
  total: Scalars['Int'];
};

export type GetEntitiesListEntity = {
  _id: Scalars['ID'];
  /** The appId of the app that the slot is associated with. */
  appId: Scalars['ID'];
  /** Optional ID if the slot type has a representation in Dialogflow. */
  dialogflowId?: Maybe<Scalars['String']>;
  /** The name of the slot as it is to the user. */
  displayName: Scalars['String'];
  /** The unique identification as it is in the database. */
  entityId: Scalars['ID'];
  /**
   * The type of entity.
   * If not set, the default is 'VALUE_SYNONYMS' which uses a set of values
   * and corresponding synonyms for the value.
   *
   * REGEX is when the values are expecting to be a regular expression.  This is not
   * supported by all NLU.
   */
  type?: Maybe<EntityType>;
  /** The values that the slot can be. */
  values?: Maybe<Array<Maybe<EntityValue>>>;
};

export type GetHandlersListHandler = {
  _id: Scalars['ID'];
  /** The ID of the app that the handler is linked to. */
  appId: Scalars['String'];
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the handler itself. */
  intentId: Scalars['String'];
  /** The language code that the handler covers. */
  langCode?: Maybe<Scalars['String']>;
  /** The human-readable name of the handler. */
  name?: Maybe<Scalars['String']>;
  /** The ID of the organization that the handler is linked to. */
  organizationId: Scalars['String'];
  /** The type of handler that this is. */
  type: Scalars['String'];
};

export type GetIntentsListIntent = {
  _id: Scalars['ID'];
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['String'];
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['String'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['String'];
  /** The slots of the intent. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GoogleAnalyticsDataStream = {
  type: Scalars['String'];
};

export type GoogleAnalyticsDataStreamInput = {
  type: Scalars['String'];
};

export type GoogleBusinessMessagesAppChannel = BaseAppChannel & {
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


export type GoogleBusinessMessagesAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type GoogleBusinessMessagesAppChannelInput = {
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type GooglePlatformAdditionalInformationQuestions = {
  /** Does the app contain content related to alcohol or tobacco? */
  alcoholAndTobaccoRelatedContent: Scalars['Boolean'];
};

export type GooglePlatformAdditionalInformationQuestionsInput = {
  /** Does the app contain content related to alcohol or tobacco? */
  alcoholAndTobaccoRelatedContent: Scalars['Boolean'];
};

export type GooglePlatformData = {
  /** Imformation about the app that Google needs to know before publishing. */
  additionalInformationQuestions?: Maybe<GooglePlatformAdditionalInformationQuestions>;
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String'];
};

export type GooglePlatformDataInput = {
  /** Imformation about the app that Google needs to know before publishing. */
  additionalInformationQuestions?: InputMaybe<GooglePlatformAdditionalInformationQuestionsInput>;
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String'];
};

export type GraphConnectionKeyDescription = {
  /** If true, the key will match for every string. */
  catchAll?: Maybe<Scalars['Boolean']>;
  /**
   * If it exists, it is an array of possible strings
   * that will be omitted in the case of a catch all key.
   *
   * Note, this must be used in conjunction with catchAll = true.
   */
  excludedIntentIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If it exists, it is an array of possible strings that will match for the key. */
  includedIntentIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The key cannot be described with the current methods of description. */
  indescribable?: Maybe<Scalars['Boolean']>;
  /** If intentId exists, it is the only string that will match the key. */
  intentId?: Maybe<Scalars['String']>;
};

/** A connection is a link between one node to another. */
export type GraphConnections = {
  /** A detailed description of what this connection entails. */
  description?: Maybe<GraphConnectionKeyDescription>;
  /** The name of the node that this connection is coming from. */
  from: Scalars['String'];
  /** The nid of the node that this connection is coming from. */
  from_node: Scalars['Float'];
  /** Unique identifier of the connection. */
  id: Scalars['String'];
  /** The total number of times the handler was used to transfer to the other node. */
  selectedCount: Scalars['Int'];
  /** The name of the node that this connection is going to. */
  to: Scalars['String'];
  /** The nid of the node that this connection is going to. */
  to_node: Scalars['Float'];
};

/** Used by Stentor's UI component to graph the intents/handlers of an app. */
export type GraphCoords = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** Used by Stentor's UI component to graph the intents/handlers of an app. */
export type GraphCoordsInput = {
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

export type GraphNode = {
  /** The titles that appear on the left (in) and right (out) side of a node. */
  fields: GraphNodeFields;
  /** The handler that is associated with this node. */
  handler: Handler;
  /** The unique identifier of the intent/handler that the node represents. */
  id: Scalars['String'];
  /** The unique identifier of the node. */
  nid: Scalars['Float'];
  /** The total number of time this handler was called. */
  totalCount: Scalars['Int'];
  /** A descriptor of what kind of node this is supposed to represent. */
  type: Scalars['String'];
  /** Position on the x axis of a graph.  The top-left of the node. */
  x: Scalars['Float'];
  /** Position on the y axis of a graph.  The top-left of the node. */
  y: Scalars['Float'];
};

export type GraphNodeField = {
  /** The field names of the nodes. */
  name: Scalars['String'];
};

export type GraphNodeFields = {
  /** Titles for the 'in' parameter of the node. */
  in: Array<Maybe<GraphNodeField>>;
  /** Titles for the 'out' parameter of the node. */
  out: Array<Maybe<GraphNodeField>>;
};

/**
 * A Stentor representation of an utterance resolver.
 * These are translated to their platform specific counterparts when publishing.
 */
export type Handler = {
  /** The ID of the app that the Handler is linked to. */
  appId: Scalars['ID'];
  /**
   * Base content map for the handler.
   *
   * All handlers have contextual help and cancel content
   */
  content?: Maybe<Array<Maybe<HandlerContent>>>;
  /**
   * The date in which the Handler was created.
   *
   * Format: ISO 8601 date format.
   */
  createdAt?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: Maybe<Scalars['String']>;
  /** The unique ID of the intent in Dialogflow. */
  dialogflowId?: Maybe<Scalars['ID']>;
  forward?: Maybe<Array<Maybe<HandlerForward>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the Handler itself. */
  intentId: Scalars['ID'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  /** The ID of the organization that the Handler is linked to. */
  organizationId: Scalars['ID'];
  /** The permissions that the intent requires in order to work. */
  permissions?: Maybe<Array<Maybe<HandlerPermissions>>>;
  redirect?: Maybe<Array<Maybe<HandlerRedirect>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /** The type of Handler that this is. */
  type: Scalars['String'];
  /**
   * The date at which the Handler was last updated.
   *
   * Format: ISO 8601 date format.
   */
  updatedAt?: Maybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A query for any errors that may be in the handler. */
  validation: HandlerValidation;
};

export type HandlerContent = {
  handlerResponse: Array<Maybe<HandlerResponse>>;
  key: Scalars['String'];
};

export type HandlerErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime'];
  /** A unique identifier for the notification */
  id: Scalars['ID'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<HandlerErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String'];
};

export type HandlerErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID'];
  /** The ID of the handler that contains the error. */
  intentId: Scalars['ID'];
};

export type HandlerForward = {
  key: Scalars['String'];
  paths: Array<Maybe<BaseHandlerPath>>;
};

export type HandlerForwardInput = {
  key: Scalars['String'];
  paths: Array<InputMaybe<Scalars['JSON']>>;
};

export type HandlerMutation = {
  /**
   * Adds an handler to the given app.
   *
   * The created handler is returned.
   */
  add: AddHandlerReturn;
  update: UpdateHandlerMutationType;
};


export type HandlerMutationAddArgs = {
  handler: AddHandlerInput;
};


export type HandlerMutationUpdateArgs = {
  handlerId: Scalars['ID'];
};

export type HandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
};

export type HandlerPathInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: InputMaybe<Scalars['PathConditions']>;
  data?: InputMaybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: InputMaybe<Scalars['String']>;
};

export enum HandlerPermissions {
  DeviceCoarseLocation = 'DEVICE_COARSE_LOCATION',
  DevicePreciseLocation = 'DEVICE_PRECISE_LOCATION',
  Email = 'EMAIL',
  List = 'LIST',
  Name = 'NAME',
  PhoneNumber = 'PHONE_NUMBER'
}

export type HandlerRedirect = {
  key: Scalars['String'];
  paths: Array<Maybe<BaseHandlerPath>>;
};

export type HandlerRedirectInput = {
  key: Scalars['String'];
  paths: Array<InputMaybe<Scalars['JSON']>>;
};

export type HandlerResponse = {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  /**
   * Optional active contexts which help influence the NLU.
   * https://cloud.google.com/dialogflow/es/docs/contexts-input-output
   * https://docs.aws.amazon.com/lex/latest/dg/context-mgmt-active-context.html
   */
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type HandlerResponseActiveContext = {
  /** Name of the context */
  name: Scalars['String'];
  /** Parameters passed around with the context */
  parameters?: Maybe<Scalars['StringMap']>;
  timeToLive?: Maybe<HandlerResponseActiveContextTtl>;
};

export type HandlerResponseActiveContextTtl = {
  /** Not supported in Dialogflow */
  timeToLiveInSeconds?: Maybe<Scalars['Int']>;
  turnsToLive?: Maybe<Scalars['Int']>;
};

export type HandlerResponseChannel = {
  /**
   * String to match with the name of the channel that will match.  It can either be the exact name of the
   * channel or a regex string to match multiple.
   */
  name?: Maybe<Scalars['String']>;
};

export type HandlerResponseContext = {
  /** Matches to outputContexts on Dialogflow & activeContexts */
  active?: Maybe<Array<Maybe<HandlerResponseActiveContext>>>;
};

export type HandlerResponseDuration = {
  amount?: Maybe<Scalars['Float']>;
  format?: Maybe<HandlerResponseDurationFormat>;
};

export enum HandlerResponseDurationFormat {
  D = 'd',
  Day = 'day',
  Days = 'days',
  H = 'h',
  Hour = 'hour',
  Hours = 'hours',
  M = 'm',
  Millisecond = 'millisecond',
  Milliseconds = 'milliseconds',
  Minute = 'minute',
  Minutes = 'minutes',
  Month = 'month',
  Months = 'months',
  Ms = 'ms',
  Quarter = 'quarter',
  Quarters = 'quarters',
  S = 's',
  Second = 'second',
  Seconds = 'seconds',
  W = 'w',
  Week = 'week',
  Weeks = 'weeks',
  Y = 'y',
  Year = 'year',
  Years = 'years'
}

export type HandlerResponseDurationInput = {
  amount?: InputMaybe<Scalars['Float']>;
  format?: InputMaybe<HandlerResponseDurationFormat>;
};

export type HandlerResponseSchedule = {
  duration?: Maybe<HandlerResponseDuration>;
  start?: Maybe<ScheduleStart>;
};

export type HandlerResponseScheduleInput = {
  duration?: InputMaybe<HandlerResponseDurationInput>;
  start?: InputMaybe<ScheduleStartInput>;
};

export type HandlerResponseSegment = {
  segment: ResponseOutput;
};

export type HandlerResponseSegmentInput = {
  activeWithin?: InputMaybe<HandlerResponseDurationInput>;
  firstTime?: InputMaybe<Scalars['Boolean']>;
  haveNotSeenWithin?: InputMaybe<HandlerResponseDurationInput>;
  requestMatch?: InputMaybe<Scalars['JSON']>;
  schedule?: InputMaybe<HandlerResponseScheduleInput>;
  segment: ResponseOutputInput;
  slotMatch?: InputMaybe<Scalars['JSON']>;
  storageMatch?: InputMaybe<Scalars['JSON']>;
};

export type HandlerResponseSegmentItem = {
  key: Scalars['String'];
  segments: Array<Maybe<HandlerResponseSegment>>;
};

export enum HandlerResponseSystem {
  AccountLink = 'ACCOUNT_LINK',
  MediaEnqueue = 'MEDIA_ENQUEUE',
  MediaStop = 'MEDIA_STOP',
  PermissionEmail = 'PERMISSION_EMAIL',
  PermissionList = 'PERMISSION_LIST',
  PermissionLocationCoarse = 'PERMISSION_LOCATION_COARSE',
  PermissionLocationPrecise = 'PERMISSION_LOCATION_PRECISE',
  PermissionNotification = 'PERMISSION_NOTIFICATION',
  PermissionPhoneNumber = 'PERMISSION_PHONE_NUMBER',
  SurfaceChange = 'SURFACE_CHANGE'
}

export type HandlerValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<HandlerValidationError>>;
  /** Whether or not the full handler is valid. */
  isValid: Scalars['Boolean'];
};

export type HandlerValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']>;
};

export type HandlersQuery = {
  /** Unique ID for the query type */
  _id: Scalars['ID'];
  /** A subset of handlers that are found in the query. */
  handlers?: Maybe<Array<Maybe<GetHandlersListHandler>>>;
  /** The total number of handlers that were found. */
  total: Scalars['Int'];
};

export type HaveNotSeenWithinHandlerResponseSegment = HandlerResponseSegment & {
  haveNotSeenWithin: HandlerResponseDuration;
  segment: ResponseOutput;
};

export type HistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
};

/** Contains urls for IP rights contracts related to the app. */
export type IpRights = {
  /** URL to the IP rights that are on Alexa. */
  alexa?: Maybe<Scalars['String']>;
};

/** Contains urls for IP rights contracts related to the app. */
export type IpRightsInput = {
  /** URL to the IP rights that are on Alexa. */
  alexa?: InputMaybe<Scalars['String']>;
};

export type IPrights = {
  /** The URL which can be used to download the Alexa IP rights document. */
  alexa?: Maybe<Scalars['String']>;
};

export type IPrightsInput = {
  /** The URL which can be used to download the Alexa IP rights document. */
  alexa?: InputMaybe<Scalars['String']>;
};

export type InputHandlerContent = {
  handlerResponse: Array<InputMaybe<Scalars['JSON']>>;
  key: Scalars['String'];
};

export type InputSlot = {
  /**
   * Human readable description of what kind of information
   * the slot is expecting.  The text should be very brief.  For example:
   *
   * "zip"
   * "zip code"
   * "city"
   * "state"
   * "street"
   */
  inputText?: InputMaybe<Scalars['String']>;
  /**
   * Is the slot a list of values.
   * Supported natively by Dialogflow and shims for Alexa.
   * Can be a boolean or number.  When a number is used, it provides guidance to the Alexa shim on the max amount of expected
   * items in the list.  Minimum value is 2.  Value defaults to 6 when set to true.
   * * NOTE: Only one isList slot is supported per utterance pattern.
   */
  isList?: InputMaybe<Scalars['IntOrBoolean']>;
  /**
   * The name of the slot, corresponds to how it is displayed in the
   * sample utterance.
   *
   * For example: "Play {Podcast}" where Podcast is the name.
   */
  name: Scalars['String'];
  nlu?: InputMaybe<Scalars['JSON']>;
  /**
   * The slot will be obfuscated either fully or partially.
   *
   *     Full obfuscation, the slot is replaced with the slot name.  "my name is ${first_name}"
   *     Partial obfuscation will only display a subset of characters, enough to protect the full value but enough for someone that is debugging to recognize the value.
   *
   * For some NLU, such as Amazon Lex, any setting on this value will be interpretted as obfuscated, for more information see [Amazon Lex Slot Obfuscation](https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html)
   */
  obfuscateValue?: InputMaybe<SlotObfuscation>;
  /**
   * The type of entity for the slot.
   *
   * This corresponds to an Entity, specifically the entityId key.
   *
   * For legacy applications, SlotType is used.
   */
  type?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchAppChannel = BaseAppChannel & {
  autocompleteSuggestionsUrl?: Maybe<Scalars['URL']>;
  connection?: Maybe<IntelligentSearchConnectionConfig>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: Maybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  theme?: Maybe<IntelligentSearchWidgetTheme>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
};


export type IntelligentSearchAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type IntelligentSearchAppChannelInput = {
  autocompleteSuggestionsUrl?: InputMaybe<Scalars['URL']>;
  connection?: InputMaybe<IntelligentSearchConnectionConfigInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<IntelligentSearchWidgetThemeInput>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchConnectionConfig = {
  /** Optional key used for basic authentication. */
  accountKey?: Maybe<Scalars['String']>;
  /** Backend URL */
  serverUrl?: Maybe<Scalars['URLString']>;
};

export type IntelligentSearchConnectionConfigInput = {
  /** Optional key used for basic authentication. */
  accountKey?: InputMaybe<Scalars['String']>;
  /** Backend URL */
  serverUrl?: InputMaybe<Scalars['URLString']>;
};

export enum IntelligentSearchWidgetBorderStyle {
  Dashed = 'dashed',
  None = 'none',
  Solid = 'solid'
}

export type IntelligentSearchWidgetBorderTheme = {
  color?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  style?: Maybe<IntelligentSearchWidgetBorderStyle>;
  width?: Maybe<Scalars['String']>;
};

export type IntelligentSearchWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<IntelligentSearchWidgetBorderStyle>;
  width?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchWidgetBubbleTheme = {
  background?: Maybe<Scalars['String']>;
};

export type IntelligentSearchWidgetBubbleThemeInput = {
  background?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchWidgetCardTheme = {
  background?: Maybe<Scalars['String']>;
  border?: Maybe<IntelligentWidgetBorderTheme>;
  description?: Maybe<IntelligentSearchWidgetTextBlockTheme>;
  link?: Maybe<IntelligentSearchWidgetLinkBlockTheme>;
  margin?: Maybe<IntelligentSearchWidgetMarginTheme>;
  padding?: Maybe<IntelligentSearchWidgetPaddingTheme>;
  title?: Maybe<IntelligentSearchWidgetTextBlockTheme>;
};

export type IntelligentSearchWidgetCardThemeInput = {
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<IntelligentWidgetBorderThemeInput>;
  description?: InputMaybe<IntelligentSearchWidgetTextBlockThemeInput>;
  link?: InputMaybe<IntelligentSearchWidgetLinkBlockThemeInput>;
  margin?: InputMaybe<IntelligentSearchWidgetMarginThemeInput>;
  padding?: InputMaybe<IntelligentSearchWidgetPaddingThemeInput>;
  title?: InputMaybe<IntelligentSearchWidgetTextBlockThemeInput>;
};

export type IntelligentSearchWidgetCarouselTheme = {
  card?: Maybe<IntelligentSearchWidgetCardTheme>;
};

export type IntelligentSearchWidgetCarouselThemeInput = {
  card?: InputMaybe<IntelligentSearchWidgetCardThemeInput>;
};

export type IntelligentSearchWidgetLinkBlockTheme = {
  margin?: Maybe<IntelligentSearchWidgetMarginTheme>;
  padding?: Maybe<IntelligentSearchWidgetPaddingTheme>;
  text?: Maybe<IntelligentSearchWidgetLinkTheme>;
};

export type IntelligentSearchWidgetLinkBlockThemeInput = {
  margin?: InputMaybe<IntelligentSearchWidgetMarginThemeInput>;
  padding?: InputMaybe<IntelligentSearchWidgetPaddingThemeInput>;
  text?: InputMaybe<IntelligentSearchWidgetLinkThemeInput>;
};

export type IntelligentSearchWidgetLinkTheme = {
  default?: Maybe<IntelligentSearchWidgetTextTheme>;
};

export type IntelligentSearchWidgetLinkThemeInput = {
  default?: InputMaybe<IntelligentSearchWidgetTextThemeInput>;
};

export type IntelligentSearchWidgetListTheme = {
  card?: Maybe<IntelligentSearchWidgetCardTheme>;
};

export type IntelligentSearchWidgetListThemeInput = {
  card?: InputMaybe<IntelligentSearchWidgetCardThemeInput>;
};

export type IntelligentSearchWidgetMarginTheme = {
  bottom?: Maybe<Scalars['String']>;
  left?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['String']>;
};

export type IntelligentSearchWidgetMarginThemeInput = {
  bottom?: InputMaybe<Scalars['String']>;
  left?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchWidgetMessageTheme = {
  bubble?: Maybe<IntelligentSearchWidgetBubbleTheme>;
  text?: Maybe<IntelligentSearchWidgetTextTheme>;
};

export type IntelligentSearchWidgetMessageThemeInput = {
  bubble?: InputMaybe<IntelligentSearchWidgetBubbleThemeInput>;
  text?: InputMaybe<IntelligentSearchWidgetTextThemeInput>;
};

export type IntelligentSearchWidgetMessagesTheme = {
  others?: Maybe<IntelligentSearchWidgetMessageTheme>;
};

export type IntelligentSearchWidgetMessagesThemeInput = {
  others?: InputMaybe<IntelligentSearchWidgetMessageThemeInput>;
};

export type IntelligentSearchWidgetPaddingTheme = {
  bottom?: Maybe<Scalars['String']>;
  left?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['String']>;
};

export type IntelligentSearchWidgetPaddingThemeInput = {
  bottom?: InputMaybe<Scalars['String']>;
  left?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchWidgetTextBlockTheme = {
  margin?: Maybe<IntelligentSearchWidgetMarginTheme>;
  padding?: Maybe<IntelligentSearchWidgetPaddingTheme>;
  text?: Maybe<IntelligentSearchWidgetTextTheme>;
};

export type IntelligentSearchWidgetTextBlockThemeInput = {
  margin?: InputMaybe<IntelligentSearchWidgetMarginThemeInput>;
  padding?: InputMaybe<IntelligentSearchWidgetPaddingThemeInput>;
  text?: InputMaybe<IntelligentSearchWidgetTextThemeInput>;
};

export type IntelligentSearchWidgetTextTheme = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  fontStyle?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['IntOrString']>;
};

export type IntelligentSearchWidgetTextThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  fontFamily?: InputMaybe<Scalars['String']>;
  fontSize?: InputMaybe<Scalars['String']>;
  fontStyle?: InputMaybe<Scalars['String']>;
  fontWeight?: InputMaybe<Scalars['String']>;
  lineHeight?: InputMaybe<Scalars['String']>;
};

export type IntelligentSearchWidgetTheme = {
  accentColor?: Maybe<Scalars['String']>;
  border?: Maybe<IntelligentWidgetBorderTheme>;
  card?: Maybe<IntelligentSearchWidgetCardTheme>;
  carousel?: Maybe<IntelligentSearchWidgetCarouselTheme>;
  list?: Maybe<IntelligentSearchWidgetListTheme>;
  messages?: Maybe<IntelligentSearchWidgetMessagesTheme>;
};

export type IntelligentSearchWidgetThemeInput = {
  accentColor?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<IntelligentSearchWidgetBorderThemeInput>;
  card?: InputMaybe<IntelligentSearchWidgetCardThemeInput>;
  carousel?: InputMaybe<IntelligentSearchWidgetCarouselThemeInput>;
  list?: InputMaybe<IntelligentSearchWidgetListThemeInput>;
  messages?: InputMaybe<IntelligentSearchWidgetMessagesThemeInput>;
};

export type IntelligentWidgetBorderTheme = {
  color?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  style?: Maybe<IntelligentSearchWidgetBorderStyle>;
  width?: Maybe<Scalars['String']>;
};

export type IntelligentWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<IntelligentSearchWidgetBorderStyle>;
  width?: InputMaybe<Scalars['String']>;
};

/**
 * A Stentor representation of an utterance resolver. Intents
 * tell applications how they will respond to specific voice queries.
 * These are translated to their platform specific counterparts when publishing.
 */
export type Intent = {
  _id: Scalars['String'];
  /** Retrieve the analytics aggregations of the intent. */
  analytics?: Maybe<Analytics>;
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['ID'];
  /**
   * Contexts the must be active to have this intent be weighted more heavily or selected.
   *
   * For Amazon Lex, the contexts are required to be selected.
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html#lex-PutIntent-request-inputContexts
   *
   * For Dialogflow ES, these are more heavily weighted towards matching.
   *
   * https://cloud.google.com/dialogflow/es/docs/contexts-input-output#input_contexts}
   * https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent.intents#Intent}
   */
  contexts?: Maybe<Array<Maybe<IntentContext>>>;
  /**
   * The date in which the intent was created.
   *
   * Format: ISO 8601 date format.
   */
  createdAt?: Maybe<Scalars['String']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: Maybe<Scalars['String']>;
  /** The unique ID of the intent in Dialogflow. */
  dialogflowId?: Maybe<Scalars['ID']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  nlu?: Maybe<Scalars['JSON']>;
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['ID'];
  /** The permissions that the intent requires in order to work. */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Slot type definition. */
  slotTypes?: Maybe<Scalars['JSON']>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /**
   * The date at which the Intent was last updated.
   *
   * Format: ISO 8601 date format.
   */
  updatedAt?: Maybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A query for any errors that may be in the Intent. */
  validation: IntentValidation;
};


/**
 * A Stentor representation of an utterance resolver. Intents
 * tell applications how they will respond to specific voice queries.
 * These are translated to their platform specific counterparts when publishing.
 */
export type IntentAnalyticsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type IntentContext = {
  name?: Maybe<Scalars['String']>;
};

export type IntentContextInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type IntentErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime'];
  /** A unique identifier for the notification */
  id: Scalars['ID'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<IntentErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String'];
};

export type IntentErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID'];
  /** The ID of the handler that contains the error. */
  intentId: Scalars['ID'];
};

export type IntentMutation = {
  add: AddIntentReturn;
  update: UpdateIntentMutationType;
};


export type IntentMutationAddArgs = {
  intent: AddIntentInput;
};


export type IntentMutationUpdateArgs = {
  intentId: Scalars['ID'];
};

export type IntentToHandlerPropsInput = {
  /** The type that the handler should be. */
  type: Scalars['String'];
};

export type IntentValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<IntentValidationError>>;
  /** Whether or not the full intent is valid. */
  isValid: Scalars['Boolean'];
};

export type IntentValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']>;
};

export type IntentsGraph = {
  /** The links between the handlers. */
  connections?: Maybe<Array<Maybe<GraphConnections>>>;
  /** Points on the graph that represent a handler. */
  nodes?: Maybe<Array<Maybe<GraphNode>>>;
};

export type IntentsQuery = {
  /** Unique ID for the query type */
  _id: Scalars['ID'];
  /** A subset of intents that are found in the query. */
  intents?: Maybe<Array<Maybe<GetIntentsListIntent>>>;
  /** The total number of intents that were found. */
  total: Scalars['Int'];
};

export type JsonDependableHandlerResponse = HandlerResponse & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']>;
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type JsonDependentExecutableHandlerPath = BaseHandlerPath & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

/**
 * Path based on evaluating a JSON path to determine the value
 * that will be matched.
 *
 * For example:
 * name: $.request.slots.slot2.value will evaluate the slot with name slot2
 * name: $.context.storage.key1 will evaluate key1 on the user's storage
 */
export type JsonDependentHandlerPath = JsonDependentExecutableHandlerPath | JsonDependentHistoricalHandlerPath | JsonDependentPreviousHandlerPath;

export type JsonDependentHistoricalHandlerPath = BaseHandlerPath & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
};

export type JsonDependentPreviousHandlerPath = BaseHandlerPath & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
};

export type KnnMutation = {
  addQuestion: KnnSearchHit;
};


export type KnnMutationAddQuestionArgs = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type KnnRawQueryHit = {
  _score: Scalars['Float'];
  rawQuery: Scalars['String'];
  rawQueryVector: Array<Maybe<Scalars['Float']>>;
};

export type KnnRawQuerySearchOutput = {
  aggs: Scalars['JSON'];
  hits: Array<Maybe<KnnRawQueryHit>>;
  total: Scalars['Int'];
};

export type KnnRawQuerySearchQuery = {
  input: KnnSearchInput;
  output: KnnRawQuerySearchOutput;
};

export type KnnSearchHit = {
  _score: Scalars['Float'];
  answer: Scalars['String'];
  answerVector: Array<Maybe<Scalars['Float']>>;
  question: Scalars['String'];
  questionVector: Array<Maybe<Scalars['Float']>>;
};

export type KnnSearchInput = {
  sentence: Scalars['String'];
  vectors: Array<Maybe<Scalars['Float']>>;
};

export type KnnSearchOutput = {
  hits: Array<Maybe<KnnSearchHit>>;
  total: Scalars['Int'];
};

export type KnnSearchQuery = {
  input: KnnSearchInput;
  output: KnnSearchOutput;
};

export type KnnSuggSearchHit = {
  _score: Scalars['Float'];
  suggVector: Array<Maybe<Scalars['Float']>>;
  suggestion: Scalars['String'];
};

export type KnnSuggSearchOutput = {
  aggs: Scalars['JSON'];
  hits: Array<Maybe<KnnSuggSearchHit>>;
  total: Scalars['Int'];
};

export type KnnSuggSearchQuery = {
  input: KnnSearchInput;
  output: KnnSuggSearchOutput;
};

export type KendraInstance = {
  faqs: KendraInstanceFaqList;
};


export type KendraInstanceFaqsArgs = {
  nextToken?: InputMaybe<Scalars['String']>;
};

export type KendraInstanceFaq = {
  /** The date and time that the FAQ was created */
  createdAt: Scalars['DateTime'];
  /** The file type used to create the FAQ */
  fileFormat: Scalars['String'];
  /** The ID of the kendra FAQ */
  id: Scalars['String'];
  /** The code for the language the FAQ is written in. */
  languageCode: Scalars['String'];
  /** The name of the kendra FAQ */
  name: Scalars['String'];
  /** Current status of the FAQ */
  status: KendraInstanceFaqStatus;
  /** The date and time that the FAQ was last updated */
  updatedAt: Scalars['DateTime'];
};

export type KendraInstanceFaqList = {
  /** The faqs current synced to the Kendra instance */
  faqs: Array<Maybe<KendraInstanceFaq>>;
  /** The token to pass in to retrieve another page of FAQs. */
  nextToken?: Maybe<Scalars['String']>;
};

export enum KendraInstanceFaqStatus {
  Active = 'ACTIVE',
  Creating = 'CREATING',
  Deleting = 'DELETING',
  Failed = 'FAILED',
  Updating = 'UPDATING'
}

export enum KendraInstanceFileFormat {
  Csv = 'CSV',
  CsvWithHeader = 'CSV_WITH_HEADER',
  Json = 'JSON'
}

export type LabMutation = {
  knn: KnnMutation;
  suggestions: SuggestionsMutation;
};

export type LastActiveActiveWithinHandlerResponse = HandlerResponse & {
  activeWithin?: Maybe<HandlerResponseDuration>;
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type LastActiveFirstTimeHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  firstTime: Scalars['Boolean'];
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type LastActiveHandlerResponse = LastActiveActiveWithinHandlerResponse | LastActiveFirstTimeHandlerResponse | LastActiveHaveNotSeenWithinHandlerResponse;

export type LastActiveHandlerResponseSegment = ActiveWithinHandlerResponseSegment | FirstTimeHandlerResponseSegment | HaveNotSeenWithinHandlerResponseSegment;

export type LastActiveHaveNotSeenWithinHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  haveNotSeenWithin?: Maybe<HandlerResponseDuration>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannel = BaseAppChannel & {
  /** The name of the lex bot. */
  botName?: Maybe<Scalars['String']>;
  /** The region that the bot is contained in. */
  botRegion?: Maybe<Scalars['String']>;
  /** A description of the bot */
  description?: Maybe<Scalars['String']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: Maybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: Maybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: Maybe<Scalars['Int']>;
  /** Used to determine if there is a kendra instance linked to this bot. */
  isLinkedToKendra: Scalars['Boolean'];
  /**
   * Items related to the kendra instance that is linked to this channel.
   * Returns null if there is no kendra instance linked to this channel.
   */
  kendraInstance?: Maybe<KendraInstance>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: Maybe<Scalars['String']>;
  /** The URL to the lex post text deployment. */
  lexPostTextUrl?: Maybe<Scalars['String']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: Maybe<Scalars['String']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: Maybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /**
   * Match score must be higher than the set threshold otherwise it will fallback to the unknown inputs.
   * Defaults to 0.4
   */
  nluIntentConfidenceThreshold?: Maybe<Scalars['Float']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: LexNluQuery;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: Maybe<Scalars['String']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannelNluQueryArgs = {
  text: Scalars['String'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type LexConnectAppChannelInput = {
  /** The name of the lex bot. */
  botName?: InputMaybe<Scalars['String']>;
  /** The region that the bot is contained in. */
  botRegion?: InputMaybe<Scalars['String']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: InputMaybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: InputMaybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: InputMaybe<Scalars['Int']>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: InputMaybe<Scalars['String']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: InputMaybe<Scalars['String']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Match score must be higher than the set threshold otherwise it will fallback to the unknown inputs.
   * Defaults to 0.4
   */
  nluIntentConfidenceThreshold?: InputMaybe<Scalars['Float']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: InputMaybe<Scalars['String']>;
};

export type LexNluQuery = {
  /** The intentId of the intent that is linked to this lex ID. */
  intentId: Scalars['String'];
  knowledgeAnswer?: Maybe<LexNluQueryKnowledgeAnswer>;
  /** The intentId of the intent that is in the LexBot. */
  lexIntentId: Scalars['String'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String'];
};

export type LexNluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String'];
  /** Raw question */
  faqQuestion: Scalars['String'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Float'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannel = BaseAppChannel & {
  /** The name of the lex bot. */
  botName?: Maybe<Scalars['String']>;
  /** The region that the bot is contained in. */
  botRegion?: Maybe<Scalars['String']>;
  /** A description of the bot */
  description?: Maybe<Scalars['String']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: Maybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: Maybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']>;
  /** The ID of the channel. */
  id: Scalars['String'];
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: Maybe<Scalars['Int']>;
  /** Used to determine if there is a kendra instance linked to this bot. */
  isLinkedToKendra: Scalars['Boolean'];
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: Maybe<Scalars['String']>;
  /** The URL to the lex post text deployment. */
  lexPostTextUrl?: Maybe<Scalars['String']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: Maybe<Scalars['String']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: Maybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: LexV2NluQuery;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: Maybe<Scalars['String']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannelNluQueryArgs = {
  text: Scalars['String'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type LexV2ConnectAppChannelInput = {
  /** The name of the lex bot. */
  botName?: InputMaybe<Scalars['String']>;
  /** The region that the bot is contained in. */
  botRegion?: InputMaybe<Scalars['String']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: InputMaybe<Scalars['Boolean']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: InputMaybe<Scalars['Boolean']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']>;
  /**
   * The ID of the channel.
   *
   * When calling a "CreateChannel" function, then ID will be
   * used to determine if the channel shoudl be inserted or updated.
   *
   * If the ID is provided and already exists, the channel will be
   * updated.  Otherwise the channel will be inserted and an ID will be
   * generated.
   */
  id?: InputMaybe<Scalars['String']>;
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: InputMaybe<Scalars['Int']>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: InputMaybe<Scalars['String']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: InputMaybe<Scalars['String']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']>;
  /** The type of channel */
  type: Scalars['String'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: InputMaybe<Scalars['String']>;
};

export type LexV2NluQuery = {
  /** The intentId of the intent that is linked to this lex ID. */
  intentId: Scalars['String'];
  knowledgeAnswer?: Maybe<LexV2NluQueryKnowledgeAnswer>;
  /** The intentId of the intent that is in the LexBot. */
  lexIntentId: Scalars['String'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String'];
};

export type LexV2NluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String'];
  /** Raw question */
  faqQuestion: Scalars['String'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Float'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']>;
};

export type LinkOutSuggestion = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ListDisplay = BaseDisplay & {
  items?: Maybe<Array<Maybe<ListDisplayItem>>>;
  /** Used with itemsObject, it is then used to reference the current item in the list within the template. */
  itemsName?: Maybe<Scalars['String']>;
  /**
   * Used when templating the list for automatic generation.
   *
   * When using itemsObject, the first item in the list is the template
   * and all other items in the list will be ignored.
   */
  itemsObject?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
  /**
   * When itemsObject is provided, this is the amount of list items to display
   * along with the offset within the list.
   */
  range?: Maybe<ListDisplayRange>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ListDisplayButton = {
  /** Text to be displayed, also needs to be included in the interaction model */
  title: Scalars['String'];
};

export type ListDisplayImage = {
  /** Describes the image for screen readers, referred to as ContentDescription in Alexa */
  accessibilityText?: Maybe<Scalars['String']>;
  /** The height of the image */
  height?: Maybe<Scalars['Int']>;
  /** When present, if the image is clicked the provided website will open. */
  imageActionUrl?: Maybe<Scalars['String']>;
  /** The location of the image, publicly accessible */
  url: Scalars['String'];
  /** THe location of the smaller version of the image, publicly accessible */
  urlIcon?: Maybe<Scalars['URL']>;
  /** The width of the image */
  width?: Maybe<Scalars['Int']>;
};

export type ListDisplayImageInput = {
  /** Describes the image for screen readers, referred to as ContentDescription in Alexa */
  accessibilityText?: InputMaybe<Scalars['String']>;
  /** The height of the image */
  height?: InputMaybe<Scalars['Int']>;
  /** The location of the image, publicly accessible */
  url: Scalars['String'];
  /** THe location of the smaller version of the image, publicly accessible */
  urlIcon?: InputMaybe<Scalars['URL']>;
  /** The width of the image */
  width?: InputMaybe<Scalars['Int']>;
};

export type ListDisplayInput = {
  items?: InputMaybe<Array<InputMaybe<ListDisplayItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ListDisplayItem = {
  buttons?: Maybe<Array<Maybe<ListDisplayButton>>>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ListDisplayImage>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  /**
   * URL to open when the list item is selected.
   *
   * Not applicable to list type CAROUSEL or available on channels without a web browser available.
   */
  url?: Maybe<Scalars['String']>;
};

export type ListDisplayItemInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ListDisplayImageInput>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  /**
   * URL to open when the list item is selected.
   *
   * Not applicable to list type CAROUSEL or available on channels without a web browser available.
   */
  url?: InputMaybe<Scalars['String']>;
};

export type ListDisplayRange = {
  from: Scalars['Int'];
  length: Scalars['Int'];
};

/** The attributes that override the App attributes by locale. See the documentation in the app for description on each. */
export type LocaleApp = {
  accountLinkType?: Maybe<Scalars['String']>;
  actionsOnGoogleId?: Maybe<Scalars['String']>;
  alexaCategory?: Maybe<Scalars['String']>;
  alexaSkillId?: Maybe<Scalars['String']>;
  dataStreams?: Maybe<DataStreams>;
  description?: Maybe<Scalars['String']>;
  dialogflowClientToken?: Maybe<Scalars['String']>;
  dialogflowCrednetialsUrl?: Maybe<Scalars['String']>;
  dialogflowDeveloperToken?: Maybe<Scalars['String']>;
  endPoint?: Maybe<Endpoint>;
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  internalNotes?: Maybe<Scalars['String']>;
  invocationName?: Maybe<Scalars['String']>;
  ipRights?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  largeBanner?: Maybe<Scalars['String']>;
  largeIcon?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  mediumIcon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  platformData?: Maybe<PlatformData>;
  privacyPolicyUrl?: Maybe<Scalars['String']>;
  smallIcon?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  templateType?: Maybe<Scalars['String']>;
  termsOfUseUrl?: Maybe<Scalars['String']>;
  testingInstructions?: Maybe<Scalars['String']>;
};

/** The attributes that override the App attributes by locale. See the documentation in the app for description on each. */
export type LocaleAppInput = {
  accountLinkType?: InputMaybe<Scalars['String']>;
  actionsOnGoogleId?: InputMaybe<Scalars['String']>;
  alexaCategory?: InputMaybe<Scalars['String']>;
  alexaSkillId?: InputMaybe<Scalars['String']>;
  dataStreams?: InputMaybe<DataStreamsInput>;
  description?: InputMaybe<Scalars['String']>;
  dialogflowClientToken?: InputMaybe<Scalars['String']>;
  dialogflowCrednetialsUrl?: InputMaybe<Scalars['String']>;
  dialogflowDeveloperToken?: InputMaybe<Scalars['String']>;
  endPoint?: InputMaybe<EndpointInput>;
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  internalNotes?: InputMaybe<Scalars['String']>;
  invocationName?: InputMaybe<Scalars['String']>;
  ipRights?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  largeBanner?: InputMaybe<Scalars['String']>;
  largeIcon?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<LocationInput>;
  mediumIcon?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  platformData?: InputMaybe<PlatformDataInput>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']>;
  smallIcon?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusInput>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  templateType?: InputMaybe<Scalars['String']>;
  termsOfUseUrl?: InputMaybe<Scalars['String']>;
  testingInstructions?: InputMaybe<Scalars['String']>;
};

export type LocaleResponseOutput = {
  displayText?: Maybe<Scalars['String']>;
  ssm?: Maybe<Scalars['String']>;
  suggestions?: Maybe<Array<Maybe<SuggestionType>>>;
  textToSpeech?: Maybe<Scalars['String']>;
};

export type LocaleResponseOutputInput = {
  displayText?: InputMaybe<Scalars['String']>;
  ssm?: InputMaybe<Scalars['String']>;
  suggestions?: InputMaybe<Array<InputMaybe<SuggestionTypeInput>>>;
  textToSpeech?: InputMaybe<Scalars['String']>;
};

/**
 * The phsysical real-world location to associate the app with.
 *
 * This is helpful when serving local based content.
 */
export type Location = {
  geocode?: Maybe<Geocode>;
  streetAddress?: Maybe<Scalars['String']>;
};

/**
 * The phsysical real-world location to associate the app with.
 *
 * This is helpful when serving local based content.
 */
export type LocationInput = {
  geocode?: InputMaybe<GeocodeInput>;
  streetAddress?: InputMaybe<Scalars['String']>;
};

/** A Range system to */
export type MatchConfidenceRange = {
  greaterThan?: InputMaybe<Scalars['Float']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Float']>;
  lessThan?: InputMaybe<Scalars['Float']>;
  lessThanOrEqual?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  /**
   * Adds or updates an Actions On Google Channel to the specified app.
   *
   * @return The channel that was just added.
   * @deprecated
   */
  addActionsOnGoogleChannel: ActionsOnGoogleAppChannel;
  /**
   * Adds or updates an Alexa Channel to the specified app.
   *
   * @return The channel that was just added.
   * @deprecated
   */
  addAlexaChannel: AlexaAppChannel;
  /**
   * Adds alexa credentials to the Alexa Channel via creds object.
   *
   * The alexa channel must already be included for this to work. It will
   * replace the credentials that are currently in place.
   */
  addAlexaCredentials?: Maybe<App>;
  /**
   * Adds alexa credentials to the Alexa channel via login code.
   *
   * The alexa channel must already be included for this to work.  It will
   * replace the credentials that are currently in place.
   *
   *   https://developer.amazon.com/docs/login-with-amazon/obtain-customer-profile.html
   *   https://developer.amazon.com/docs/login-with-amazon/authorization-code-grant.html
   */
  addAlexaCredentialsByCode?: Maybe<App>;
  /**
   * Allows one to add a new app to Stentor.
   *
   * The appId must be unique to Stentor.  If it is not, a new one will be generated which
   * is unique based on the appId provided.
   *
   * @deprecated Use AppMutation.addApp instead
   */
  addApp?: Maybe<App>;
  addAppLocale: App;
  /**
   * Adds a custom channel to the app.
   * @deprecated
   */
  addChannel: AppChannel;
  /**
   * Adds or updates a Chat Widget channel to the specified app.
   *
   * @return The channel that was just added
   * @deprecated
   */
  addChatWidgetChannel: ChatWidgetAppChannel;
  /**
   * Adds or updates an Dialogflow Channel to the specified app.
   *
   * @return The channel that was just added.
   * @deprecated
   */
  addDialogflowChannel: DialogflowAppChannel;
  /**
   * Adds dialogflow credentials to the Dialogflow Channel via creds object.
   *
   * The dialogflow channel must already be included for this to work. It
   * will replace the credentials that are currently in place.
   */
  addDialogflowCredentials?: Maybe<App>;
  /** Adds or updates a single Dialogflow NLU. */
  addDialogflowNlus?: Maybe<DialogflowAppNlu>;
  /** Adds an entity to the database. */
  addEntity: Entity;
  /**
   * Adds or updates a Facebook Messenger channel to the specified app.
   *
   * @return The channel that was just added
   * @deprecated
   */
  addFacebookMessengerChannel: FacebookMessengerAppChannel;
  /**
   * Adds an handler to the given app.
   *
   * The created handler is returned.
   */
  addHandler: Handler;
  /**
   * Adds an intent to the given app.
   *
   * The created intent is returned.
   *
   * @deprecated
   */
  addIntent: Intent;
  /**
   * Adds or updates a Lex channel to the specified app.
   *
   * @return The channel that was just added
   * @deprecated
   */
  addLexChannel: LexConnectAppChannel;
  /** Adds an utterance test build from a specific event. */
  addUtteranceTestByEvent?: Maybe<AppTest>;
  /**
   * Adds an utterance test for the specific appId.  An utterance test can be in the following formats:
   *
   * k q e d | StationOnlyIntent | station="k,q,e,d"
   * <utterance> | <intentId> // The test "<utterance>" expects to return the intent <intentId>
   * <utterance | <intentId> | // The test "<utterance>" expects to return the intent <intentId> with no matching slots
   * <utterance> | <intentId> | <slot>=<value> // The test "<utterance>" expects to return the intent <intentId> with a slot <slot> and value <value>
   *
   * Multiple slots can be combined by separating them by comman (i.e. <slot1>=<value2>,<slot2>=<value2>,<slot3>=<value3>)
   *
   * Multiple tests can be added by combining with a newline.
   *
   * Returns all the tests that were added.
   */
  addUtteranceTestByString?: Maybe<Array<Maybe<AppTest>>>;
  admin?: Maybe<AdminMutation>;
  /** Mutations involving apps. */
  app: AppMutation;
  /**
   * Attaches a SMAPI vendorID to an associated Organization.
   *
   * *When replacing the vendorId*
   * An error will be throw if any channel in the organization has an alexa channel with a skillId but no vendorId.
   * In order to update the vendorId of the organization, either add a vendorId to each alexa Channel with a skillid or
   * remove the skillId from those channels.
   */
  attachSmapiVendor: Organization;
  /**
   * Attaches a SMAPI vendorID to an associated channel.
   * This will override the vendor that is attached to an organization.
   *
   * Warning: The vendor of a channel can not be updated if the channel already
   * has an alexaSkillId.  To update it, remove the alexaSkillId and update the vendorId.
   */
  attachSmapiVendorToChannel?: Maybe<AlexaAppChannel>;
  blowUpTheServers?: Maybe<Scalars['String']>;
  /**
   * Changes an intent to a handler.
   *
   * @deprecated Use "changeIntentToHandler" under the UpdateHandlerMutationType
   */
  changeIntentToHandler: Handler;
  /**
   * Changes an orgs subscription if the user has one available.
   * @deprecated Use the OrgsMutation instead
   */
  changeOrgSubscription?: Maybe<Scalars['String']>;
  codeChallenge?: Maybe<CodeChallenge>;
  confirmSignUp: Scalars['String'];
  /**
   * Copies an app from one organization to another organization.  This includes intents and entities.
   *
   * Only non-unique attributes of the app will be copied.  Unique attributes such as invocation name and icon
   * will have to be added later.
   *
   * It returns the app that was copied
   */
  copyApp: App;
  /** Creates an app from a lex zip file. */
  createAppFromLexFile: UploadedLexApp;
  /**
   * Creates or updates the interaction model for the provided app.
   *
   * Before using this, an Alexa channel in the app must have credentials uploaded and a skill ID attached.
   */
  createInteractionModel: Array<Maybe<CreateInteractionModelReturn>>;
  /**
   * Add an organization.  An organization is used to maintain
   * apps. The user who creates the organization will be the owner and
   * be able to create applications and invite users to view/edit those applications.
   * @deprecated Use the OrgsMutation instead
   */
  createOrg?: Maybe<CreateOrgReturn>;
  /**
   * Updates an Alexa skill from the provided app.
   *
   * Before using this, an Alexa channel in the app must have credentials uploaded. The channel must ot
   * have an alexaSkillId.
   */
  createSkill: AlexaAppChannel;
  /** Deletes a channel from the specified app. */
  deleteChannel: Scalars['String'];
  /**
   * Delete the entity.
   *
   * Returns "Success" on successful delete.
   */
  deleteEntity: Scalars['String'];
  /**
   * Removes an handler.
   *
   * This will also remove all the references to the handler in other handlers (i.e. in the forward and content attributes).
   *
   * Returns the keys for the handlers which were updated during the deletion process.
   *
   * These can be retrieved by the client to keep an updated record.
   */
  deleteHandler: Array<Maybe<DeleteIntentIdKey>>;
  /**
   * Removes an intent.
   *
   * This will also remove all the references to the intent in other intents (i.e. in the forward and content attributes).
   *
   * Returns the keys for the intents which were updated during the deletion process.
   *
   * These can be retrieved by the client to keep an updated record.
   */
  deleteIntent: Array<Maybe<DeleteIntentIdKey>>;
  /** Deletes a nlu from the specified app. */
  deleteNlu: Scalars['String'];
  /** Will delete a test. */
  deleteTest: Scalars['String'];
  /**
   * Will delete all tests for a specific app.
   *
   * This is an asynchronous process.  The actual deletion may take a couple minutes depending on
   * the amount of tests that needs to be deleted.
   */
  deleteTestsOfApp: Scalars['String'];
  /**
   * Flags a single specified event.
   *
   * @deprecated  Use the flagEvent method in the UpdateAppMutation
   */
  flagEvent: Events;
  /**
   * Creates a signed upload URL that allows clients to upload a lex zip file.
   *
   * Once complete, you can use the returned URL for 'createAppFromLexFile' and 'updateAppFromLexFile'.
   */
  generateLexFileUploadUrl: Scalars['String'];
  /** Mutations that are related to Organizations */
  org: OrgsMutation;
  /**
   * Provisions Lex
   *
   * Before using this, a Lex channel in the app must already exist.
   */
  pushLex: Scalars['String'];
  resendConfirmationCode: Scalars['String'];
  /**
   * Sets whether the app can be copyable from one organization to another.
   *
   * Returns the updated app.
   */
  setAppCopyable: App;
  /** Will start executing the tests. This is an asynchronous operation. Returns "Success" if the tests have begun. */
  startTests: Scalars['String'];
  startWebsiteCrawling: Scalars['String'];
  /**
   * Submits an app for alexa certification.
   *
   * Before using this, an Alexa channel in the app must have credentials uploaded and attached to a vendor.
   *
   * This mutation also updates the status of the channel. The updated channel is returned.
   */
  submitForAlexaCert: AlexaAppChannel;
  /**
   * Trains the dialogflow agent.
   *
   * The channel requested must have a projectId associated with it.
   */
  trainDialogflowAgent: Scalars['String'];
  /**
   * Update an existing app.  Only the attributes included will be updated.
   *
   * This app can include an appId and organization for a drop-in replacement. These attributes will
   * be ignored as they are to remain constant.
   *
   * @deprecated Use UpdateAppMutation.addApp instead
   */
  updateApp?: Maybe<App>;
  /**
   * Updates the dialogflow agent for the provided app.
   *
   * Unfortunately, Dialogflow does not allow agents to be created programmatically. Dialogflow agents must be created
   * manually and attached to the channel of the app.  After this is created,
   * it can be updated using this.
   */
  updateDialogflowAgent: Scalars['String'];
  /**
   * Updates the attributes of the entity.
   *
   * Returns the updated entity.
   */
  updateEntity: Entity;
  /**
   * Updates an handler with the given attributes,
   *
   * The updated handler is returned.
   */
  updateHandler: Handler;
  /**
   * Updates an intent with the given attributes,
   *
   * The updated intent is returned.
   *
   * @deprecated
   */
  updateIntent: Intent;
  /**
   * Updates the attributes of the organization.
   * @deprecated Use the OrgsMutation instead
   */
  updateOrg?: Maybe<Organization>;
  /**
   * Updates an Alexa skill from the provided app.
   *
   * Before using this, an Alexa channel in the app must have credentials uploaded. The channel must also
   * have an alexaSkillId.
   */
  updateSkill: AlexaAppChannel;
  /**
   * Will update the attributes of an Utterance test.
   *
   * Only the attributes provided will be updated.  All other attributes will
   * remain the same.
   * In order to remove attributes from the test, then assign those attributes as "undefined" or "null".
   */
  updateUtteranceTest: UtteranceTest;
  uploadAppTemplate: App;
  /**
   * Withdraws an app from alexa certification
   *
   * Before using this, an Alexa channel in the app must have credentials uploaded and attached to a vendor.
   *
   * This mutation also updates the status of the channel. The updated channel is returned.
   */
  withdrawFromAlexaCert: AlexaAppChannel;
};


export type MutationAddActionsOnGoogleChannelArgs = {
  appId: Scalars['ID'];
  channel: ActionsOnGoogleAppChannelInput;
};


export type MutationAddAlexaChannelArgs = {
  appId: Scalars['ID'];
  channel: AlexaAppChannelInput;
};


export type MutationAddAlexaCredentialsArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  credentials: AlexaCredentialsInput;
};


export type MutationAddAlexaCredentialsByCodeArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  redirectUri?: InputMaybe<Scalars['String']>;
};


export type MutationAddAppArgs = {
  app?: InputMaybe<AppInput>;
};


export type MutationAddAppLocaleArgs = {
  appId: Scalars['ID'];
  locale: AddLocaleEnum;
  localeObj: LocaleAppInput;
};


export type MutationAddChannelArgs = {
  appId: Scalars['ID'];
  channel: AppChannelInput;
};


export type MutationAddChatWidgetChannelArgs = {
  appId: Scalars['ID'];
  channel: ChatWidgetAppChannelInput;
};


export type MutationAddDialogflowChannelArgs = {
  appId: Scalars['ID'];
  channel: DialogflowAppChannelInput;
};


export type MutationAddDialogflowCredentialsArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  credentials: DialogflowCredentialsInput;
};


export type MutationAddDialogflowNlusArgs = {
  appId: Scalars['ID'];
  nlu: DialogflowAppNluInput;
};


export type MutationAddEntityArgs = {
  entity: AddEntityInput;
};


export type MutationAddFacebookMessengerChannelArgs = {
  appId: Scalars['ID'];
  channel: FacebookMessengerAppChannelInput;
};


export type MutationAddHandlerArgs = {
  appId: Scalars['ID'];
  handler: AddHandlerInput;
};


export type MutationAddIntentArgs = {
  appId: Scalars['ID'];
  intent: AddIntentInput;
};


export type MutationAddLexChannelArgs = {
  appId: Scalars['ID'];
  channel: LexConnectAppChannelInput;
};


export type MutationAddUtteranceTestByEventArgs = {
  eventId: Scalars['String'];
  eventIndex: Scalars['String'];
  platform?: InputMaybe<TestPlatform>;
};


export type MutationAddUtteranceTestByStringArgs = {
  appId: Scalars['ID'];
  platform?: InputMaybe<TestPlatform>;
  testString: Scalars['String'];
};


export type MutationAppArgs = {
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type MutationAttachSmapiVendorArgs = {
  orgId: Scalars['ID'];
  vendorId: Scalars['ID'];
};


export type MutationAttachSmapiVendorToChannelArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  vendorId: Scalars['ID'];
};


export type MutationChangeIntentToHandlerArgs = {
  appId: Scalars['ID'];
  handlerProps: IntentToHandlerPropsInput;
  intentId: Scalars['ID'];
};


export type MutationChangeOrgSubscriptionArgs = {
  organizationId: Scalars['ID'];
  type: SubscriptionType;
};


export type MutationConfirmSignUpArgs = {
  clientId: Scalars['ID'];
  code: Scalars['String'];
  origin?: InputMaybe<AuthVerifyOrigin>;
  userName: Scalars['String'];
};


export type MutationCopyAppArgs = {
  appId: Scalars['ID'];
  overrideApp?: InputMaybe<CopyAppOverrideAttributes>;
  toOrg: Scalars['ID'];
};


export type MutationCreateAppFromLexFileArgs = {
  fileUrl: Scalars['String'];
  organizationId: Scalars['ID'];
};


export type MutationCreateInteractionModelArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateOrgArgs = {
  appTemplate?: InputMaybe<AppTemplateInput>;
  org: CreateOrganizationInput;
};


export type MutationCreateSkillArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteChannelArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  channelType: Scalars['String'];
};


export type MutationDeleteEntityArgs = {
  appId: Scalars['ID'];
  entityId: Scalars['ID'];
};


export type MutationDeleteHandlerArgs = {
  appId: Scalars['ID'];
  handlerId: Scalars['ID'];
};


export type MutationDeleteIntentArgs = {
  appId: Scalars['ID'];
  intentId: Scalars['ID'];
};


export type MutationDeleteNluArgs = {
  appId: Scalars['ID'];
  nluId?: InputMaybe<Scalars['ID']>;
  nluType: Scalars['String'];
};


export type MutationDeleteTestArgs = {
  createdOn: Scalars['String'];
  testId: Scalars['ID'];
};


export type MutationDeleteTestsOfAppArgs = {
  appId: Scalars['ID'];
};


export type MutationFlagEventArgs = {
  eventId: Scalars['ID'];
  eventIndex?: InputMaybe<Scalars['String']>;
  flag: NewRawQueryFlag;
  note?: InputMaybe<Scalars['String']>;
};


export type MutationGenerateLexFileUploadUrlArgs = {
  organizationId: Scalars['ID'];
};


export type MutationPushLexArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationResendConfirmationCodeArgs = {
  clientId: Scalars['ID'];
  origin?: InputMaybe<AuthVerifyOrigin>;
  userName: Scalars['String'];
};


export type MutationSetAppCopyableArgs = {
  appId: Scalars['ID'];
  isCopyable: Scalars['Boolean'];
};


export type MutationStartTestsArgs = {
  appId: Scalars['ID'];
  channelIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testType: Scalars['String'];
};


export type MutationStartWebsiteCrawlingArgs = {
  appId: Scalars['ID'];
  channelId: Scalars['String'];
  kendra?: InputMaybe<WebCrawlKendraInput>;
  s3RegionalDomain?: InputMaybe<Scalars['String']>;
  stealth?: InputMaybe<Scalars['Boolean']>;
  webUrl: Scalars['URL'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationSubmitForAlexaCertArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  dryRun?: InputMaybe<Scalars['Boolean']>;
};


export type MutationTrainDialogflowAgentArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateAppArgs = {
  app: UpdateAppInput;
  appId: Scalars['ID'];
};


export type MutationUpdateDialogflowAgentArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateEntityArgs = {
  appId: Scalars['ID'];
  entity: UpdateEntityInput;
  entityId: Scalars['ID'];
};


export type MutationUpdateHandlerArgs = {
  appId: Scalars['ID'];
  handler: UpdateHandlerInput;
  handlerId: Scalars['ID'];
};


export type MutationUpdateIntentArgs = {
  appId: Scalars['ID'];
  intent: UpdateIntentInput;
  intentId: Scalars['ID'];
};


export type MutationUpdateOrgArgs = {
  org: UpdateOrganizationInput;
  organizationId: Scalars['ID'];
};


export type MutationUpdateSkillArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateUtteranceTestArgs = {
  createdOn: Scalars['String'];
  testId: Scalars['ID'];
  update: UtteranceTestUpdate;
};


export type MutationUploadAppTemplateArgs = {
  appId?: InputMaybe<Scalars['ID']>;
  organizationId: Scalars['ID'];
  template: AppTemplateInput;
};


export type MutationWithdrawFromAlexaCertArgs = {
  appId: Scalars['ID'];
  channelId?: InputMaybe<Scalars['ID']>;
  dryRun?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<WithdrawFromAlexaCertReasons>;
};

export enum NewRawQueryFlag {
  /**
   * For utterance events. It means the recognition was good. No issues.
   * If it was already confirmed and a new user confirms,
   * the event will be set to CONFIRMED_CORRECT.
   */
  Correct = 'CORRECT',
  /** For utterance events. The raw query needs attention. */
  Flagged = 'FLAGGED',
  /**
   * For response events, indicates that the response was good, but could
   * be better.
   */
  Helpful = 'HELPFUL',
  /** For utterance events. It means it was determined that the recognition was bad. Tuning is needed. */
  Incorrect = 'INCORRECT',
  /** For utterance events. It means it was determined that the recognition was bad, but there has been a resolution. */
  IncorrectResolved = 'INCORRECT_RESOLVED',
  /**
   * For response events, indicates the response will always need to go
   * to a live human agent.
   */
  NeedsHuman = 'NEEDS_HUMAN',
  /**
   * For response events, indicates that this is the best
   * response available.
   */
  Optimal = 'OPTIMAL'
}

export type NluRequestSlot = {
  /**
   * ID of the slot, if applicable.
   *
   * For example, "UVA"
   */
  id?: Maybe<Scalars['String']>;
  /** Confidence on the slot match.  Range is between 0 - 1 where 1 is the highest confidence. */
  matchConfidence?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  /**
   * The raw spoken value.
   *
   * For example, "cavaliers" or "red"
   */
  rawValue?: Maybe<Scalars['String']>;
  /** If the entity resolution was successful or not. */
  successfulMatch?: Maybe<Scalars['Boolean']>;
};

export type OrgAnalytics = {
  user: OrgUsageStat;
};


export type OrgAnalyticsUserArgs = {
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type OrgAppQuerySortByParameters = {
  /** The order in which to sort by. */
  order?: InputMaybe<OrgAppQuerySortByParametersOrder>;
  /** The attribute to sort by. */
  sortBy: SortableAppAttributes;
};

export enum OrgAppQuerySortByParametersOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrgMember = {
  email: Scalars['String'];
  policy: OrgPolicy;
  userId: Scalars['ID'];
};

export type OrgMembers = {
  members: Array<Maybe<OrgMember>>;
  pending: Array<Maybe<PendingOrgMember>>;
};

export type OrgMembersMutation = {
  /**
   * Invites a user to the organization.
   *
   * If the user already has an account, the user will be added to the organization immediately.
   *
   * If the user does not have an account, an invitation will be sent to the user and they must accept, create an account
   * and then they will be added on first login.
   *
   * It's possible that users have multiple accounts with the same email. All of those accounts will be added to the organization.
   * An array of each user which was added will be returned.
   *
   * If the user was invited, only a single pending user object will be returned but it will still be an array because Graphql does not
   * like such complexity (for valid reasons).
   *
   * If the user is already a member of the organization, the user will be promoted to the role that is provided.
   */
  invite: Array<Maybe<PendingOrOrgMember>>;
  /** Removes a user from the organization. */
  remove: Scalars['String'];
  /** Removes the invitation for a user. */
  removeInvite: Scalars['String'];
};


export type OrgMembersMutationInviteArgs = {
  email: Scalars['String'];
  roles: Array<InputMaybe<Scalars['String']>>;
};


export type OrgMembersMutationRemoveArgs = {
  userId: Scalars['ID'];
};


export type OrgMembersMutationRemoveInviteArgs = {
  email: Scalars['String'];
  invitationId: Scalars['ID'];
};

/** The time frame in which the items were metered. */
export enum OrgMeteredTimeFrame {
  /** All usage stats since the beginning of the day */
  Day = 'DAY',
  /** All stats since the bottom of the hour. */
  Hour = 'HOUR',
  /** All usage stats since the beginning of the month */
  Month = 'MONTH',
  /** All usage stats since the beginning of the week (Sunday) */
  Week = 'WEEK'
}

export type OrgMutation = {
  cms: CmsMutation;
  /** Deletes the attributes of the organization. */
  delete: Scalars['String'];
  /**
   * Links an organization to an AWS subscription if one is available.
   *
   * Setting the subscription type to "FREE" will unlink the organization and
   * free up the subscription for another organization.
   */
  linkToAWSSub: Scalars['String'];
  /** Mutations related to the members of an organization. */
  members: OrgMembersMutation;
  /** Updates the attributes of the organization. */
  update: Organization;
  /**
   * Updates the tier of an organization without linking it to a third party.
   *
   * If tier is TRIAL, the trial will end 30 days from the moment it is called.
   *
   * Note: If the organization is linked to a payed subscription such as AWS marketplace, then
   * the payed subscription will take precedence. Unlink the organization from those subscriptions
   * for this tier to take effect.
   *
   * Returns the updated organization.
   */
  updateTier: Scalars['String'];
};


export type OrgMutationLinkToAwsSubArgs = {
  type: SubscriptionType;
};


export type OrgMutationUpdateArgs = {
  org: UpdateOrganizationInput;
};


export type OrgMutationUpdateTierArgs = {
  type: SubscriptionType;
};

export type OrgPolicy = {
  permissions: Array<Maybe<Scalars['String']>>;
  roles: Array<Maybe<Scalars['String']>>;
};

export type OrgUsageStat = {
  /** A CSV formatted output of the stats found. */
  csv: UsageStatCsvReturn;
  intervals: Array<Maybe<UsageStat>>;
  newUsers: Scalars['Int'];
  /** ID of the organization that contains the app */
  organizationId: Scalars['ID'];
  returningUsers: Scalars['Int'];
  totalSessions: Scalars['Int'];
  totalUsers: Scalars['Int'];
};

export type OrgUsageStats = {
  docsCrawled: Scalars['Int'];
  entities: Scalars['Int'];
  handlers: Scalars['Int'];
  intents: Scalars['Int'];
  testsExecuted: Scalars['Int'];
  totalDocs: Scalars['Int'];
  uniqueSessions: Scalars['Int'];
};

/**
 * An organization is a group which contains and manages specific apps.
 * Each organization is a representation of a company which publishes
 * apps in the Stentor platform.
 */
export type Organization = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  analytics?: Maybe<OrgAnalytics>;
  /** The apps that the organization contains. */
  apps?: Maybe<GetAppsQuery>;
  /** Deprecated: The Auth0 Group that the organization is linked to. */
  auth0GroupId?: Maybe<Scalars['ID']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: Maybe<Scalars['String']>;
  /** An object of feature flags */
  beta?: Maybe<Scalars['JSON']>;
  billingContact?: Maybe<BillingContact>;
  brandContact?: Maybe<BrandContact>;
  /**
   * A CMS token is an authorization token that is linked to the app
   * which allows third party services to access certain resources without
   * user intervention.
   */
  cmsTokens: Array<Maybe<CmsToken>>;
  /**
   * The email address of a user who can be contacted about issues
   * related to the organization.
   */
  contact?: Maybe<Scalars['String']>;
  /** The organization contact's name. */
  contactName?: Maybe<Scalars['String']>;
  /** The organization contact's phone number. */
  contactPhone?: Maybe<Scalars['String']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: Maybe<Scalars['String']>;
  /** The date at which the organization was created */
  creationDate?: Maybe<Scalars['DateTime']>;
  /** The human-readable description of the organization. */
  description: Scalars['String'];
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: Maybe<IPrights>;
  /** URL for the organization's logo. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The members statics for the given time frame. */
  members: OrgMembers;
  /** The human-readable name of the organization. */
  name: Scalars['String'];
  /** Any notes that are related to the organization. */
  notes?: Maybe<Scalars['String']>;
  /** A unique ID to identify a specific organization. */
  organizationId: Scalars['ID'];
  /** Payment account information */
  paymentAccounts?: Maybe<PaymentAccounts>;
  /**
   * Third party publishing account information such as Amazon SMAPI's
   * service or Google's Dialogflow.
   */
  publishingAccounts?: Maybe<PublishingAccounts>;
  /** The type of subscription that the organization currently is under. */
  type: SubscriptionType;
  /** The usage statics for the given time frame. */
  usage: OrgUsageStats;
  /** A URL to the organization's website. */
  website?: Maybe<Scalars['String']>;
};


/**
 * An organization is a group which contains and manages specific apps.
 * Each organization is a representation of a company which publishes
 * apps in the Stentor platform.
 */
export type OrganizationAppsArgs = {
  byName?: InputMaybe<Scalars['String']>;
  byStatusType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['Int']>;
  nuSortBy?: InputMaybe<Array<InputMaybe<OrgAppQuerySortByParameters>>>;
  size?: InputMaybe<Scalars['Int']>;
};


/**
 * An organization is a group which contains and manages specific apps.
 * Each organization is a representation of a company which publishes
 * apps in the Stentor platform.
 */
export type OrganizationUsageArgs = {
  timeFrame?: InputMaybe<OrgMeteredTimeFrame>;
};

export type OrgsMutation = {
  /** @deprecated Use the OrgsMutation instead */
  add?: Maybe<CreateOrgReturn>;
  org: OrgMutation;
};


export type OrgsMutationAddArgs = {
  appTemplate?: InputMaybe<AppTemplateInput>;
  org: CreateOrganizationInput;
};


export type OrgsMutationOrgArgs = {
  organizationId: Scalars['ID'];
};

/** A collections query which returns a collection of organizations. */
export type OrgsQuery = {
  /** A subset of organizations that are viewed. */
  orgs?: Maybe<Array<Maybe<SearchedOrg>>>;
  /** The total number of organizations that were found in the query. */
  total: Scalars['Int'];
};

export type PaymentAccounts = {
  _id: Scalars['ID'];
  /** Account information related to the AWS Marketplace payment platform. */
  aws?: Maybe<AwsPaymentAccount>;
  /**
   * Service Order information. This will be in place if the organization
   * has a contract placed outside of Stentor. The organization will
   * be given a set number of apps of a specific type that they are allowed
   * to publish. They will be required to submit payment if they reached
   * the limit of their service order.
   */
  so?: Maybe<ServiceOrderAccount>;
  /**
   * Account information related to the Stripe payment platform.
   * This will be used to charge an organization when they submit new apps.
   */
  stripe?: Maybe<StripePaymentAccount>;
};

export type PaymentAccountsInput = {
  /**
   * Service Order information. This will be in place if the organization
   * has a contract placed outside of Stentor. The organization will
   * be given a set number of apps of a specific type that they are allowed
   * to publish. They will be required to submit payment if they reached
   * the limit of their service order.
   */
  so?: InputMaybe<ServiceOrderAccountInput>;
  /**
   * Account information related to the Stripe payment platform.
   * This will be used to charge an organization when they submit new apps.
   */
  stripe?: InputMaybe<StripePaymentAccountInput>;
};

export type PendingOrOrgMember = OrgMember | PendingOrgMember;

export type PendingOrgMember = {
  email: Scalars['String'];
  invitationId: Scalars['ID'];
  policy: OrgPolicy;
};

/**
 * Platform specific data for the app that does not correspond
 * with other high level data that is shared.
 */
export type PlatformData = {
  alexa?: Maybe<AlexaPlatformData>;
  google?: Maybe<GooglePlatformData>;
};

/**
 * Platform specific data for the app that does not correspond
 * with other high level data that is shared.
 */
export type PlatformDataInput = {
  alexa?: InputMaybe<AlexaPlatformDataInput>;
  google?: InputMaybe<GooglePlatformDataInput>;
};

export type PreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
};

export type PublishingAccounts = {
  _id: Scalars['ID'];
  /** Account information for a linked amazon SMAPI developer account. */
  smapi?: Maybe<SmapiAccount>;
};

export type PublishingAccountsInput = {
  /** Account information for a linked amazon SMAPI developer account. */
  smapi?: InputMaybe<SmapiAccountInput>;
};

/** Top level query for Stentor. */
export type Query = {
  admin: AdminQuery;
  /** Fetches a single app */
  app?: Maybe<App>;
  /** Fetches a list of apps */
  apps?: Maybe<AppsQuery>;
  /** These are the test types that are currently available to search and execute. */
  availableTestTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  entity?: Maybe<Entity>;
  /** Retrieve a batch of entities for the given word. */
  entitySuggestions?: Maybe<Suggestion>;
  /** Retrieve a specific Handler */
  handler?: Maybe<Handler>;
  /** Retrieve a specific intent */
  intent?: Maybe<Intent>;
  /** Fetches a single organization */
  org?: Maybe<Organization>;
  /** Fetches a list of organizations */
  orgs?: Maybe<OrgsQuery>;
  /** Retrieve a User profile of a user */
  profile?: Maybe<UserProfile>;
  tests?: Maybe<TotalQueryAppTests>;
  utils: Utils;
};


/** Top level query for Stentor. */
export type QueryAppArgs = {
  appId: Scalars['ID'];
};


/** Top level query for Stentor. */
export type QueryEntityArgs = {
  appId: Scalars['String'];
  entityId: Scalars['String'];
};


/** Top level query for Stentor. */
export type QueryEntitySuggestionsArgs = {
  appId: Scalars['String'];
  text: Scalars['String'];
};


/** Top level query for Stentor. */
export type QueryHandlerArgs = {
  appId: Scalars['ID'];
  intentId: Scalars['ID'];
};


/** Top level query for Stentor. */
export type QueryIntentArgs = {
  appId: Scalars['ID'];
  intentId: Scalars['ID'];
};


/** Top level query for Stentor. */
export type QueryOrgArgs = {
  organizationId: Scalars['ID'];
};


/** Top level query for Stentor. */
export type QueryOrgsArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  withIdOrName?: InputMaybe<Scalars['String']>;
};


/** Top level query for Stentor. */
export type QueryProfileArgs = {
  jwt?: InputMaybe<Scalars['String']>;
};


/** Top level query for Stentor. */
export type QueryTestsArgs = {
  appId: Scalars['ID'];
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testType?: InputMaybe<Scalars['String']>;
};

/** Flags for events of raw queries. */
export enum RawQueryEventFlag {
  /** For utterance events. A second user confirmed the recognition. 'Correct' must be set before this is. */
  ConfirmedCorrect = 'CONFIRMED_CORRECT',
  /** For utterance events. It means the recognition was good. No issues. */
  Correct = 'CORRECT',
  /** For utterance events. The raw query needs attention. */
  Flagged = 'FLAGGED',
  /**
   * For response events, indicates that the response was good, but could
   * be better.
   */
  Helpful = 'HELPFUL',
  /** For utterance events. It means it was determined that the recognition was bad. Tuning is needed. */
  Incorrect = 'INCORRECT',
  /** For utterance events. It means it was determined that the recognition was bad, but there has been a resolution. */
  IncorrectResolved = 'INCORRECT_RESOLVED',
  /**
   * For response events, indicates the response will always need to go
   * to a live human agent.
   */
  NeedsHuman = 'NEEDS_HUMAN',
  /**
   * For response events, indicates that this is the best
   * response available.
   */
  Optimal = 'OPTIMAL'
}

export type RequestDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

export type RequestDependentHandlerPath = RequestDependentExecutableHandlerPath | RequestDependentHistoricalHandlerPath | RequestDependentPreviousHandlerPath;

export type RequestDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type RequestDependentHandlerResponseSegment = HandlerResponseSegment & {
  requestMatch: Scalars['JSON'];
  segment: ResponseOutput;
};

export type RequestDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
};

export type RequestDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']>;
};

export type ResponseOutput = {
  defaultLocale?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  locales?: Maybe<ResponseOutputLocales>;
  ssml?: Maybe<Scalars['String']>;
  suggestions?: Maybe<Array<Maybe<SuggestionType>>>;
  textToSpeech?: Maybe<Scalars['String']>;
};

export type ResponseOutputInput = {
  defaultLocale?: InputMaybe<Scalars['String']>;
  displayText?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<ResponseOutputLocalesInput>;
  ssml?: InputMaybe<Scalars['String']>;
  suggestions?: InputMaybe<Array<InputMaybe<SuggestionTypeInput>>>;
  textToSpeech?: InputMaybe<Scalars['String']>;
};

export type ResponseOutputLocales = {
  /** Danish */
  da?: Maybe<LocaleResponseOutput>;
  /** German */
  de?: Maybe<LocaleResponseOutput>;
  /** German German */
  deDE?: Maybe<LocaleResponseOutput>;
  /** English */
  en?: Maybe<LocaleResponseOutput>;
  /** English Australian */
  enAU?: Maybe<LocaleResponseOutput>;
  /** English Canada */
  enCA?: Maybe<LocaleResponseOutput>;
  /** English Great Britain */
  enGB?: Maybe<LocaleResponseOutput>;
  /** English India */
  enIN?: Maybe<LocaleResponseOutput>;
  /** English United States */
  enUS?: Maybe<LocaleResponseOutput>;
  /** Spanish */
  es?: Maybe<LocaleResponseOutput>;
  /** Spanish: Only supported in Google. */
  es419?: Maybe<LocaleResponseOutput>;
  /** Spanish Spain */
  esES?: Maybe<LocaleResponseOutput>;
  /** Spanish Mexico */
  esMX?: Maybe<LocaleResponseOutput>;
  /** French */
  fr?: Maybe<LocaleResponseOutput>;
  /** French Canada */
  frCA?: Maybe<LocaleResponseOutput>;
  /** French France */
  frFR?: Maybe<LocaleResponseOutput>;
  /** Italian */
  it?: Maybe<LocaleResponseOutput>;
  /** Italian Italy */
  itIT?: Maybe<LocaleResponseOutput>;
  /** Japanese */
  ja?: Maybe<LocaleResponseOutput>;
  /** Japanese Japan */
  jaJP?: Maybe<LocaleResponseOutput>;
  /** Dutch */
  nl?: Maybe<LocaleResponseOutput>;
  /** Norwegian */
  no?: Maybe<LocaleResponseOutput>;
  /** Portuguese */
  pt?: Maybe<LocaleResponseOutput>;
  /** Portuguese Brazil */
  ptBR?: Maybe<LocaleResponseOutput>;
  /** Russian */
  ru?: Maybe<LocaleResponseOutput>;
  /** Swedish */
  sv?: Maybe<LocaleResponseOutput>;
  /** Thai */
  th?: Maybe<LocaleResponseOutput>;
  /** Turkish */
  tr?: Maybe<LocaleResponseOutput>;
  /** Ukranian */
  uk?: Maybe<LocaleResponseOutput>;
  /** Chinese */
  zh?: Maybe<LocaleResponseOutput>;
  /** Chinese China */
  zhCH?: Maybe<LocaleResponseOutput>;
  /** Chinese Hong Kong */
  zhHK?: Maybe<LocaleResponseOutput>;
  /** Chinese Taiwan */
  zhTW?: Maybe<LocaleResponseOutput>;
};

export type ResponseOutputLocalesInput = {
  /** Danish */
  da?: InputMaybe<LocaleResponseOutputInput>;
  /** German */
  de?: InputMaybe<LocaleResponseOutputInput>;
  /** German German */
  deDE?: InputMaybe<LocaleResponseOutputInput>;
  /** English */
  en?: InputMaybe<LocaleResponseOutputInput>;
  /** English Australian */
  enAU?: InputMaybe<LocaleResponseOutputInput>;
  /** English Canada */
  enCA?: InputMaybe<LocaleResponseOutputInput>;
  /** English Great Britain */
  enGB?: InputMaybe<LocaleResponseOutputInput>;
  /** English India */
  enIN?: InputMaybe<LocaleResponseOutputInput>;
  /** English United States */
  enUS?: InputMaybe<LocaleResponseOutputInput>;
  /** Spanish */
  es?: InputMaybe<LocaleResponseOutputInput>;
  /** Spanish: Only supported in Google. */
  es419?: InputMaybe<LocaleResponseOutputInput>;
  /** Spanish Spain */
  esES?: InputMaybe<LocaleResponseOutputInput>;
  /** Spanish Mexico */
  esMX?: InputMaybe<LocaleResponseOutputInput>;
  /** French */
  fr?: InputMaybe<LocaleResponseOutputInput>;
  /** French Canada */
  frCA?: InputMaybe<LocaleResponseOutputInput>;
  /** French France */
  frFR?: InputMaybe<LocaleResponseOutputInput>;
  /** Italian */
  it?: InputMaybe<LocaleResponseOutputInput>;
  /** Italian Italy */
  itIT?: InputMaybe<LocaleResponseOutputInput>;
  /** Japanese */
  ja?: InputMaybe<LocaleResponseOutputInput>;
  /** Japanese Japan */
  jaJP?: InputMaybe<LocaleResponseOutputInput>;
  /** Dutch */
  nl?: InputMaybe<LocaleResponseOutputInput>;
  /** Norwegian */
  no?: InputMaybe<LocaleResponseOutputInput>;
  /** Portuguese */
  pt?: InputMaybe<LocaleResponseOutputInput>;
  /** Portuguese Brazil */
  ptBR?: InputMaybe<LocaleResponseOutputInput>;
  /** Russian */
  ru?: InputMaybe<LocaleResponseOutputInput>;
  /** Swedish */
  sv?: InputMaybe<LocaleResponseOutputInput>;
  /** Thai */
  th?: InputMaybe<LocaleResponseOutputInput>;
  /** Turkish */
  tr?: InputMaybe<LocaleResponseOutputInput>;
  /** Ukranian */
  uk?: InputMaybe<LocaleResponseOutputInput>;
  /** Chinese */
  zh?: InputMaybe<LocaleResponseOutputInput>;
  /** Chinese China */
  zhCH?: InputMaybe<LocaleResponseOutputInput>;
  /** Chinese Hong Kong */
  zhHK?: InputMaybe<LocaleResponseOutputInput>;
  /** Chinese Taiwan */
  zhTW?: InputMaybe<LocaleResponseOutputInput>;
};

export type ResponseTypeCode = {
  /** The code of returned by the auth server. */
  code?: InputMaybe<Scalars['String']>;
  /** The origin of the code. */
  origin?: InputMaybe<AuthOrigin>;
};

export type SchedulableDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  schedule?: Maybe<HandlerResponseSchedule>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export enum ScheduleDaysOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type ScheduleHandlerResponseSegment = HandlerResponseSegment & {
  schedule: HandlerResponseSchedule;
  segment: ResponseOutput;
};

export type ScheduleStart = {
  dayOfWeek?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  time: Scalars['String'];
  timeZone?: Maybe<Scalars['String']>;
};

export type ScheduleStartInput = {
  dayOfWeek?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  time: Scalars['String'];
  timeZone?: InputMaybe<Scalars['String']>;
};

export enum SchedulerDaysOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

/** Organization that is returned from a Search query. */
export type SearchedApp = {
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']>;
  /** The unique identifier for the app. */
  appId: Scalars['String'];
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']>;
  /** The name of the app. */
  name: Scalars['String'];
  /** The unique identifier for the organization that the app is a part of. */
  organizationId: Scalars['String'];
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<SearchedAppStatus>;
  /** A short description of what the app does. */
  summary?: Maybe<Scalars['String']>;
};

export type SearchedAppStatus = {
  /** The email of the user who last changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /**
   * The time the status was last changed.
   *
   * Format: ISO 8601
   */
  timestamp: Scalars['String'];
  /** The status level of the app. */
  type: Scalars['String'];
};

/** Organization that is returned from a Search query. */
export type SearchedOrg = {
  /** The email of the XAPPmedia employee which is the main contact for the organization. */
  XAPPLead?: Maybe<Scalars['String']>;
  /** The contact email of the organization. */
  contact?: Maybe<Scalars['String']>;
  /** The name of the contact. */
  contactName?: Maybe<Scalars['String']>;
  /** A human-readable description of the organization. */
  description?: Maybe<Scalars['String']>;
  /** URL for the organization's logo. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The name of the organization. */
  name: Scalars['String'];
  /** Internal notes on the organization. */
  notes?: Maybe<Scalars['String']>;
  /** The unique identifier for the organization. */
  organizationId: Scalars['String'];
  /** Payment account information */
  paymentAccounts?: Maybe<PaymentAccounts>;
  /** The type of subscription that the organization currently is under. */
  type: SubscriptionType;
};

export type SelectedCount = {
  /** The number of times the 'selectedHandler' was selected from the current intent. */
  count: Scalars['Int'];
  /** The handler/intent ID that was selected during execution. */
  selectedHandler: Scalars['String'];
};

export type Sentences = {
  /** The ending position of the sentence in the phrase. */
  end: Scalars['Int'];
  /** The starting position of the sentence in the phrase. */
  start: Scalars['Int'];
};

export type ServiceOrderAccount = {
  /**
   * The date which the service order was created.
   *
   * Format: ISO 8601 date.
   */
  date?: Maybe<Scalars['String']>;
  /** The number of apps that the organization is allowed to publish. */
  numberOfApps?: Maybe<Scalars['Int']>;
  /** The type of payment that the organization uses (check, card, etc.) */
  paymentType?: Maybe<Scalars['String']>;
};

export type ServiceOrderAccountInput = {
  /**
   * The date which the service order was created.
   *
   * Format: ISO 8601 date.
   */
  date?: InputMaybe<Scalars['String']>;
  /** The number of apps that the organization is allowed to publish. */
  numberOfApps?: InputMaybe<Scalars['Int']>;
  /** The type of payment that the organization uses (check, card, etc.) */
  paymentType?: InputMaybe<Scalars['String']>;
};

export type SimpleDisplay = BaseDisplay & {
  backButtonVisible?: Maybe<Scalars['Boolean']>;
  backgroundImage?: Maybe<DisplayImage>;
  image?: Maybe<DisplayImage>;
  items?: Maybe<Array<Maybe<DisplayListItem>>>;
  listItems?: Maybe<Array<Maybe<DisplayListItem>>>;
  payload?: Maybe<Scalars['JSON']>;
  textContent?: Maybe<DisplayTextContent>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type SimpleDisplayInput = {
  backButtonVisible?: InputMaybe<Scalars['Boolean']>;
  backgroundImage?: InputMaybe<DisplayImageInput>;
  image?: InputMaybe<DisplayImageInput>;
  listItems?: InputMaybe<Array<InputMaybe<DisplayListItemInput>>>;
  textContent?: InputMaybe<DisplayTextContentInput>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type SimpleHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type SimpleHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
};

export type Slot = {
  _id: Scalars['String'];
  /**
   * Human readable description of what kind of information
   * the slot is expecting.  The text should be very brief.  For example:
   *
   * "zip"
   * "zip code"
   * "city"
   * "state"
   * "street"
   */
  inputText?: Maybe<Scalars['String']>;
  /**
   * Is the slot a list of values.
   * Supported natively by Dialogflow and shims for Alexa.
   * Can be a boolean or number.  When a number is used, it provides guidance to the Alexa shim on the max amount of expected
   * items in the list.  Minimum value is 2.  Value defaults to 6 when set to true.
   * * NOTE: Only one isList slot is supported per utterance pattern.
   */
  isList?: Maybe<Scalars['IntOrBoolean']>;
  /**
   * The name of the slot, corresponds to how it is displayed in the
   * sample utterance.
   *
   * For example: "Play {Podcast}" where Podcast is the name.
   */
  name: Scalars['String'];
  nlu?: Maybe<Scalars['JSON']>;
  /**
   * The slot will be obfuscated either fully or partially.
   *
   *     Full obfuscation, the slot is replaced with the slot name.  "my name is ${first_name}"
   *     Partial obfuscation will only display a subset of characters, enough to protect the full value but enough for someone that is debugging to recognize the value.
   *
   * For some NLU, such as Amazon Lex, any setting on this value will be interpretted as obfuscated, for more information see [Amazon Lex Slot Obfuscation](https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html)
   */
  obfuscateValue?: Maybe<SlotObfuscation>;
  /**
   * The type of entity for the slot.
   *
   * This corresponds to an Entity, specifically the entityId key.
   *
   * For legacy applications, SlotType is used.
   */
  type?: Maybe<Scalars['String']>;
};

export type SlotDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

export type SlotDependentHandlerPath = SlotDependentExecutableHandlerPath | SlotDependentHistoricalHandlerPath | SlotDependentPreviousHandlerPath;

export type SlotDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type SlotDependentHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
  slotMatch: Scalars['JSON'];
};

export type SlotDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
};

export type SlotDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']>;
};

export enum SlotObfuscation {
  Full = 'FULL',
  Partial = 'PARTIAL'
}

export type SmapiAccount = {
  /** The ID for the linked SMAPI developer account. */
  vendorId: Scalars['ID'];
};

export type SmapiAccountInput = {
  /** The ID for the linked SMAPI developer account. */
  vendorId: Scalars['ID'];
};

export type SmapiVendor = {
  /** The vendorId of the smapi vendor. */
  id: Scalars['ID'];
  /** The human readable name for the vendor. */
  name: Scalars['String'];
  /** The permissions that the user has in the vendor. */
  roles: Array<Maybe<Scalars['String']>>;
};

/** These are the attributes that are available for sorting when querying apps of an organization. */
export enum SortableAppAttributes {
  /** Sort alphabetically by appId */
  AppId = 'APP_ID',
  /** Sort by most recent status time */
  StatusTime = 'STATUS_TIME'
}

export type Status = {
  /** The email of the user who last changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /** A brief history of the status changes. */
  statusHistory?: Maybe<Array<Maybe<StatusHistory>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level of the app. */
  type: Scalars['String'];
};

export type StatusHistory = {
  /** The email of the user who changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level that the app was. */
  type: Scalars['String'];
};

export type StatusHistoryInput = {
  /** The email of the user who changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: InputMaybe<Scalars['String']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level that the app was. */
  type: Scalars['String'];
};

export type StatusInput = {
  /** The email of the user who last changed the status. */
  email: Scalars['String'];
  /** Any notes that was associated with the status change. */
  notes?: InputMaybe<Scalars['String']>;
  /** A brief history of the status changes. */
  statusHistory?: InputMaybe<Array<InputMaybe<StatusHistoryInput>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long'];
  /** The status level of the app. */
  type: Scalars['String'];
};

export type StorageDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

export type StorageDependentHandlerPath = StorageDependentExecutableHandlerPath | StorageDependentHistoricalHandlerPath | StorageDependentPreviousHandlerPath;

export type StorageDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type StorageDependentHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
  storageMatch?: Maybe<Scalars['JSON']>;
};

export type StorageDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']>;
};

export type StorageDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']>;
};

export type StripePaymentAccount = {
  /** The Stripe customer ID linked to the organization. */
  customerId: Scalars['ID'];
};

export type StripePaymentAccountInput = {
  /** The Stripe customer ID linked to the organization. */
  customerId: Scalars['ID'];
};

export type StudioTierPaymentAccount = BaseStudioTierPaymentAccount & {
  tier?: Maybe<StudioTierType>;
};

export enum StudioTierType {
  Free = 'FREE',
  Pro = 'PRO',
  Standard = 'STANDARD',
  TrialStandard = 'TRIAL_STANDARD'
}

export enum SubscriptionType {
  /** OCS Bronze tier */
  Bronze = 'BRONZE',
  /** OCS Bronze Light tier */
  BronzeLite = 'BRONZE_LITE',
  /** The Apps under this organization are frozen. */
  Free = 'FREE',
  /** OCS Gold Tier */
  Gold = 'GOLD',
  /** OCS Platinum tier */
  Platinum = 'PLATINUM',
  /** A top-tier privileged organization */
  Pro = 'PRO',
  /** OCS Silver tier */
  Silver = 'SILVER',
  /** A very limited privileged organization */
  Standard = 'STANDARD',
  /** A temporary period for the organization which gives them "STANDARD" privileges */
  Trial = 'TRIAL'
}

export type Suggestion = {
  entities: Array<Maybe<EntitySuggestion>>;
  /** Intents that are possible in the given text.  Ordered in the number of overlapping entities. */
  intents: Array<Maybe<SuggestionIntent>>;
  sentences: Array<Maybe<Sentences>>;
  /** The original phrase that was entered. */
  text: Scalars['String'];
  tokens: Array<Maybe<Tokens>>;
};

export type SuggestionIntent = {
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['ID'];
  /** The entity IDs of the entities in this suggestion that use this intent. */
  entities: Array<Maybe<Scalars['String']>>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID'];
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['ID'];
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
};

export type SuggestionObject = {
  title: Scalars['String'];
};

export type SuggestionType = LinkOutSuggestion | SuggestionObject;

export type SuggestionTypeInput = {
  title: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type SuggestionsMutation = {
  addFAQSuggestion: FaqSuggestionReturn;
};


export type SuggestionsMutationAddFaqSuggestionArgs = {
  countToGenerate: Scalars['Int'];
  suggestion?: InputMaybe<AdminFaqSuggestionInput>;
};

export type SyncFaqToKendraReturn = {
  executionId: Scalars['String'];
};

export enum SystemConditionType {
  AccountLinked = 'ACCOUNT_LINKED',
  BargeIn = 'BARGE_IN',
  HealthCheck = 'HEALTH_CHECK',
  NotificationPermissionGranted = 'NOTIFICATION_PERMISSION_GRANTED',
  NotAccountLinked = 'NOT_ACCOUNT_LINKED',
  NotBargeIn = 'NOT_BARGE_IN',
  NotHealthCheck = 'NOT_HEALTH_CHECK',
  NotNotificationPermissionGranted = 'NOT_NOTIFICATION_PERMISSION_GRANTED',
  NotOptionSelect = 'NOT_OPTION_SELECT',
  NotPermissionGranted = 'NOT_PERMISSION_GRANTED',
  NotSurfaceChanged = 'NOT_SURFACE_CHANGED',
  OptionSelect = 'OPTION_SELECT',
  PermissionGranted = 'PERMISSION_GRANTED',
  SurfaceChanged = 'SURFACE_CHANGED'
}

export type SystemDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  systemCondition?: Maybe<SystemConditionType>;
  /**
   * Type of path.
   *
   * Setting type to START changes the request so that
   * handler.start() is called.
   *
   * Not setting the type passes the request straight
   * through, requiring the new handler to handle the
   * request as is.
   */
  type?: Maybe<Scalars['String']>;
};

export type SystemDependentHandlerPath = SystemDependentExecutableHandlerPath | SystemDependentHistoricalHandlerPath | SystemDependentPreviousHandlerPath;

export type SystemDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']>;
  /** What the assistant will say first as part of the response. */
  outputSpeech?: Maybe<ResponseOutput>;
  /**
   * If provided, the output speech was most likely a question and requires a response from the user.
   * The reprompt is given if the user doesn't say anything or the assistant can't recognize the response.
   */
  reprompt?: Maybe<ResponseOutput>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  systemCondition?: Maybe<SystemConditionType>;
  /** Used for tracking the response in third party analytics. */
  tag?: Maybe<Scalars['String']>;
};

export type SystemDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']>;
  systemCondition?: Maybe<SystemConditionType>;
};

export type SystemDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']>;
  data?: Maybe<Scalars['JSON']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean'];
  systemCondition?: Maybe<SystemConditionType>;
};

export type SystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime'];
  /** A unique identifier for the notification */
  id: Scalars['ID'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<Scalars['JSON']>;
  /** A title or name of the notification */
  name: Scalars['String'];
};

export enum SystemNotificationLevel {
  Error = 'ERROR',
  Info = 'INFO',
  Warn = 'WARN'
}

export type TaskResult = {
  completed: Scalars['Boolean'];
};

export type TestConfig = {
  /**
   * The duration after a test executes that the runner should wait.
   *
   * Note: The test runner runs batches of tests in parallel. This will
   * slow down execution of the current batch but some tests will
   * still execute while this one is waiting.
   */
  delayAfter?: Maybe<Scalars['Int']>;
  /**
   * The duration before a test executes that the runner should wait.
   *
   * Note: The test runner runs batches of tests in parallel. This will
   * slow down execution of the current batch but some tests will
   * still execute while this one is waiting.
   */
  delayBefore?: Maybe<Scalars['Int']>;
};

export type TestFailureReason = {
  /** A more detailed description of the failure. */
  details: Scalars['String'];
  /** The reason the test failed. */
  reason: Scalars['String'];
};

export type TestHistory = {
  /** The time that the test was executed. Format: ISO 8601 */
  executed: Scalars['String'];
  /** The result of the test during this execution. */
  results: TestPlatformResultByPlatform;
};

/** The various platforms that are currently supported for testing. */
export enum TestPlatform {
  /** Platform for Amazon's Alexa device. */
  Alexa = 'ALEXA',
  /** Platform for Google's Home device (which uses Dialogflow as its backend). */
  Dialogflow = 'DIALOGFLOW'
}

export type TestPlatformResult = {
  /** The reasons that a test failed or was not executed. */
  failureReasons?: Maybe<Array<Maybe<TestFailureReason>>>;
  /** The overall result of the test. */
  result: TestResult;
};

export type TestPlatformResultByPlatform = {
  /** The result for a test that was run on Alexa environment */
  alexa: TestPlatformResult;
  /** The result for a test that was run on Dialogflow environment */
  dialogflow: TestPlatformResult;
};

export enum TestResult {
  /** The result of a test that did not meet expectations. */
  Fail = 'FAIL',
  /** The result of a test that did not execute for various reasons.  It does not necessarily indicate a failure. */
  NotRun = 'NOT_RUN',
  /** The result of a test that met expectations. */
  Pass = 'PASS'
}

/** The state that the test is currently in. */
export type TestState = {
  /** The last time that the test was executed. Format: ISO 8601. */
  executionStart: Scalars['String'];
  /** The time that the ended. Format: ISO 8601 */
  executionStop?: Maybe<Scalars['String']>;
  /** The current state of the test. */
  state: CurrentTestState;
};

/** Information needed to publish to specific platforms. */
export type ThirdPartyDeployments = {
  alexa?: Maybe<AlexaIntegration>;
  dialogflow?: Maybe<DialogflowIntegration>;
};

/** Information needed to publish to specific platforms. */
export type ThirdPartyDeploymentsInput = {
  alexa?: InputMaybe<AlexaIntegrationInput>;
  dialogflow?: InputMaybe<DialogflowIntegrationInput>;
};

export type Tokens = {
  dep: Scalars['String'];
  end: Scalars['Int'];
  head: Scalars['Int'];
  id: Scalars['Int'];
  pos: Scalars['String'];
  start: Scalars['Int'];
  tag: Scalars['String'];
};

export type TotalEvents = {
  /** The events that are returned in the current query. */
  events?: Maybe<Array<Maybe<Events>>>;
  /** Statistics on the number of flags in a given query */
  flagTotals: FlagTotals;
  /** The total number of events that fit the last query. */
  total: Scalars['Int'];
};

export type TotalQueryAppTests = {
  /** The tests that were found in this query. */
  tests?: Maybe<Array<Maybe<AppTest>>>;
  /** The total number of app tests that fit the last query. */
  total: Scalars['Int'];
};

export type TotalUsageEvents = {
  /** The total number of events available */
  total: Scalars['Int'];
  /** The usage events retrieved in this query. */
  usageEvents?: Maybe<Array<Maybe<UsageEvents>>>;
};

export type TotalWebContent = {
  /** The content that was downloaded for the app */
  content: Array<Maybe<WebContentWithHighlights>>;
  /** The total number of web content found. */
  total: Scalars['Int'];
};

export type TotalWebContentErrors = {
  /** Any errors that may have happened during content attempts */
  errors: Array<Maybe<WebContentErrors>>;
  /** The total number of web content found. */
  total: Scalars['Int'];
};

export type TotalWebContentSources = {
  /** Stats for the last generated web crawl. Will be undefined if there was no crawl yet. */
  lastCrawl?: Maybe<TotalWebContentSourcesLastCrawl>;
  /** The crawl sources that downloaded the content */
  sources: Array<Maybe<WebContentSources>>;
  /** The total number of web content found. */
  total: Scalars['Int'];
};

export type TotalWebContentSourcesLastCrawl = {
  documents: Array<Maybe<WebContent>>;
  ended: Scalars['DateTime'];
  errors: Array<Maybe<WebContentErrors>>;
  started: Scalars['DateTime'];
};

export type TotalWebFaq = {
  faq: Array<Maybe<WebFaq>>;
  /** The total number of web content found. */
  total: Scalars['Int'];
};

export type TrialTierPaymentAccount = BaseStudioTierPaymentAccount & {
  /** The duration that the trial will last. */
  durationMs: Scalars['Long'];
  /** The end date that the trial will end */
  endDate: Scalars['DateTime'];
  /** The time that the trial started. */
  startDate: Scalars['DateTime'];
  tier: StudioTierType;
};

export type UpdateAppChannelMutation = {
  deleteScheduledEvent: Scalars['String'];
  scheduleWeeklyWebCrawls: WebCrawlSchedule;
  syncFAQToKendra: SyncFaqToKendraReturn;
};


export type UpdateAppChannelMutationDeleteScheduledEventArgs = {
  scheduleId: Scalars['ID'];
};


export type UpdateAppChannelMutationScheduleWeeklyWebCrawlsArgs = {
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>>;
  stealth?: InputMaybe<Scalars['Boolean']>;
  webUrl: Scalars['URL'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateAppInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']>;
  /** Unique identifier of the app in Stentor. This attribute will not be updated on an update request. */
  appId?: InputMaybe<Scalars['ID']>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']>;
  beta?: InputMaybe<Scalars['JSON']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']>;
  /** The Email address to send lead captures to. */
  leadsContact?: InputMaybe<Scalars['EmailAddress']>;
  /** Physical location associated with the app. */
  location?: InputMaybe<LocationInput>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the app. */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of the organization that the app is linked to. This attribute will not be updated on an update request. */
  organizationId?: InputMaybe<Scalars['ID']>;
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: InputMaybe<PlatformDataInput>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']>;
  /** Type of template the app and its intents adhere to. */
  templateType?: InputMaybe<Scalars['String']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: InputMaybe<ThirdPartyDeploymentsInput>;
};

export type UpdateAppMutation = {
  /** Updates the status of the app. */
  changeStatus: App;
  /** Mutations related to the app channel */
  channel: AppChannelMutation;
  cms: CmsMutation;
  /** Deletes the app. */
  deleteApp: Scalars['String'];
  deleteScheduledEvent: Scalars['String'];
  /** Exports the app to a file. Returns the URL of the file to download. */
  exportApp: ExportAppMutationResponse;
  faq: FaqMutation;
  /** This method will flag all events that are equal to the event specified. */
  flagEvent: FlagEventReturn;
  /** Operations that are related to updating handlers */
  handler: HandlerMutation;
  /** Operations that are related to updating intents */
  intent: IntentMutation;
  /** Clears all notifications from the app. */
  removeAllNotifications: Scalars['String'];
  /** Removes a notification from the app.  Returns a list of notifications that remain. */
  removeNotification: Array<Maybe<SystemNotification>>;
  scheduleWeeklyWebCrawls: WebCrawlSchedule;
  /**
   * Update an existing app.  Only the attributes included will be updated.
   *
   * This app can include an appId and organization for a drop-in replacement. These attributes will
   * be ignored as they are to remain constant.
   */
  updateApp: App;
};


export type UpdateAppMutationChangeStatusArgs = {
  note?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};


export type UpdateAppMutationDeleteScheduledEventArgs = {
  scheduleId: Scalars['ID'];
};


export type UpdateAppMutationFlagEventArgs = {
  eventId: Scalars['ID'];
  flag: NewRawQueryFlag;
  note?: InputMaybe<Scalars['String']>;
};


export type UpdateAppMutationRemoveNotificationArgs = {
  id: Scalars['ID'];
};


export type UpdateAppMutationScheduleWeeklyWebCrawlsArgs = {
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>>;
  webUrl: Scalars['URL'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UpdateAppMutationUpdateAppArgs = {
  app: UpdateAppInput;
};

export type UpdateEntityInput = {
  dialogflowId?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  nlu?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<EntityValueInput>>>;
};

export type UpdateFaq = {
  /** The answer for the questions. */
  answer?: InputMaybe<Scalars['String']>;
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: InputMaybe<Scalars['ID']>;
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: InputMaybe<Scalars['Boolean']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: InputMaybe<Scalars['ID']>;
  /** Questions associated with the FAQ */
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The raw text */
  raw?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The URL where the FAQ can be found. */
  url?: InputMaybe<Scalars['URL']>;
};

export type UpdateFaqMutation = {
  /** Permanently deletes the FAQ. */
  deleteFAQ: Scalars['String'];
  /** Update attributes of the particular FAQ */
  updateFAQ: WebFaq;
};


export type UpdateFaqMutationUpdateFaqArgs = {
  faq: UpdateFaq;
  resolution?: InputMaybe<EventResolutionInput>;
};

export type UpdateHandlerInput = {
  /**
   * Base content map for the handler.
   *
   * All handlers have contextual help and cancel content
   */
  content?: InputMaybe<Array<InputMaybe<InputHandlerContent>>>;
  data?: InputMaybe<Scalars['JSON']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']>;
  forward?: InputMaybe<Array<InputMaybe<HandlerForwardInput>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the intent. */
  name: Scalars['String'];
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<HandlerPermissions>>>;
  redirect?: InputMaybe<Array<InputMaybe<HandlerRedirectInput>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateHandlerMutationType = {
  addForward: AddForwardReturn;
  /** Changes an intent to a handler. */
  changeIntentToHandler: Handler;
  /**
   * Removes an handler.
   *
   * This will also remove all the references to the handler in other handlers (i.e. in the forward and content attributes).
   *
   * Returns the keys for the handlers which were updated during the deletion process.
   *
   * These can be retrieved by the client to keep an updated record.
   */
  delete: DeleteHandlerReturn;
  /**
   * Updates an handler with the given attributes,
   *
   * The updated handler is returned.
   */
  update: UpdateHandlerReturn;
};


export type UpdateHandlerMutationTypeAddForwardArgs = {
  forward: ForwardInput;
  key: Scalars['ID'];
};


export type UpdateHandlerMutationTypeChangeIntentToHandlerArgs = {
  handlerProps: IntentToHandlerPropsInput;
};


export type UpdateHandlerMutationTypeUpdateArgs = {
  handler: UpdateHandlerInput;
};

export type UpdateHandlerReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The handler that was updated with the new attributes. */
  handler: Handler;
};


export type UpdateHandlerReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateIntentInput = {
  /**
   * Contexts the must be active to have this intent be weighted more heavily or selected.
   *
   * For Amazon Lex, the contexts are required to be selected.
   *
   * https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html#lex-PutIntent-request-inputContexts
   *
   * For Dialogflow ES, these are more heavily weighted towards matching.
   *
   * https://cloud.google.com/dialogflow/es/docs/contexts-input-output#input_contexts}
   * https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent.intents#Intent}
   */
  contexts?: InputMaybe<Array<InputMaybe<IntentContextInput>>>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']>;
  /** deprecated: No longer used. */
  dialogflowId?: InputMaybe<Scalars['String']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']>;
  /** The name of the intent */
  name?: InputMaybe<Scalars['String']>;
  nlu?: InputMaybe<Scalars['JSON']>;
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Slot type definition. */
  slotTypes?: InputMaybe<Scalars['JSON']>;
  /**
   * The slots defined within the utterance patterns and their Entity types.
   *
   * This will replace the slots that are current in the intent.  Use
   * "addSlot" or "updateSlot" to update slots within an intent.
   */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateIntentMutationType = {
  /** Changes a handler to an intent. */
  changeHandlerToIntent: Intent;
  delete: DeleteIntentReturn;
  update: UpdateIntentReturn;
};


export type UpdateIntentMutationTypeUpdateArgs = {
  intent: UpdateIntentInput;
};

export type UpdateIntentReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The intent that was updated with the new attributes. */
  intent: Intent;
};


export type UpdateIntentReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateOrganizationInput = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: InputMaybe<Scalars['String']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: InputMaybe<Scalars['String']>;
  /** An object of feature flags */
  beta?: InputMaybe<Scalars['JSON']>;
  /**
   * The email address of a user who can be contacted about issues
   * related to the organization.
   */
  contact?: InputMaybe<Scalars['String']>;
  /** The organization contact's name. */
  contactName?: InputMaybe<Scalars['String']>;
  /** The organization contact's phone number. */
  contactPhone?: InputMaybe<Scalars['String']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: InputMaybe<Scalars['String']>;
  /** The human-readable description of the organization. */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: InputMaybe<IPrightsInput>;
  /** URL for the organization's logo. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** The human-readable name of the organization. */
  name?: InputMaybe<Scalars['String']>;
  /** Any notes that are related to the organization. */
  notes?: InputMaybe<Scalars['String']>;
  /** Payment account information */
  paymentAccounts?: InputMaybe<PaymentAccountsInput>;
  /**
   * Third party publishing account information such as Amazon SMAPI's
   * service or Google's Dialogflow.
   */
  publishingAccounts?: InputMaybe<PublishingAccountsInput>;
  /** A URL to the organization's website. */
  website?: InputMaybe<Scalars['String']>;
};

export type UploadFaqReturn = {
  faqsAdded: Scalars['Int'];
};

export type UploadedLexApp = {
  app?: Maybe<App>;
  entities?: Maybe<Array<Maybe<Entity>>>;
  handlers?: Maybe<Array<Maybe<Handler>>>;
  intents?: Maybe<Array<Maybe<Intent>>>;
};

export type Url = {
  /** The actual URL that serves the app. */
  url: Scalars['String'];
};

export type UrlInput = {
  /** The actual URL that serves the app. */
  url: Scalars['String'];
};

/** Events that have occurred in the platform. */
export type UsageEvents = {
  /** The appId of the app that the event is related to if applicable. */
  appId?: Maybe<Scalars['ID']>;
  /** The channelId of the channel that the event is related to if applicable */
  channelId?: Maybe<Scalars['ID']>;
  /** A detailed description of the event. */
  description: Scalars['String'];
  /** The time and date in which the event occurred. */
  eventTime: Scalars['DateTime'];
  /** A human-readable name for the event. */
  name: Scalars['String'];
  /** The organizationId of the organization that the event is related to if applicable. */
  organizationId?: Maybe<Scalars['ID']>;
  /** Any payload that is connected to the event. */
  payload?: Maybe<Scalars['JSON']>;
  /** The permission level of users who can see the event. */
  permissionLevel?: Maybe<Scalars['String']>;
  /** The type of event that it is */
  type: Scalars['String'];
  /** The email of the user which caused the event if applicable */
  userEmail?: Maybe<Scalars['String']>;
  /** The userId of the user which caused the event if applicable. */
  userId?: Maybe<Scalars['ID']>;
};

export type UsageStat = {
  interval: AppUsageInterval;
  /** The ISO formatted date that the stats covers. */
  isoDate: Scalars['String'];
  newUsers: Scalars['Int'];
  returningUsers: Scalars['Int'];
  totalSessions: Scalars['Int'];
  totalUsers: Scalars['Int'];
};

export type UsageStatCsvReturn = {
  /** The CSV formatted data */
  csv: Scalars['String'];
  /** The file location of the CSV data */
  file: Scalars['URL'];
};

export type UserEntitlements = {
  /** Specifies the number of pro tier entitlements that the user has available */
  availablePro: Scalars['Int'];
  /** Specifies the number of standard tier entitlements that the user has available */
  availableStandard: Scalars['Int'];
  /** Specifies the number of trial tier entitlements that the user has available */
  availableTrial: Scalars['Int'];
  /** Specifies the number of pro tier entitlements the user currently has */
  pro: Scalars['Int'];
  /** Specifies the number of standard tier entitlements the user currently has */
  standard: Scalars['Int'];
  /** Specifies the number of trial tier entitlements the user currently has */
  trial: Scalars['Int'];
};

/** The User Profile of a Stentor User */
export type UserProfile = {
  _id: Scalars['ID'];
  /** Email address of the user */
  email: Scalars['String'];
  /** Determines whether or not the user's email address has been verified. */
  emailVerified: Scalars['Boolean'];
  /**
   * Requests the number of entitlements or subscriptions that the user
   * has available.
   */
  entitlements?: Maybe<UserEntitlements>;
  /** Icon URL to the profile picture. */
  icon?: Maybe<Scalars['String']>;
  /** Identities of linked accounts. */
  identities: Array<Maybe<UserProfileIdentity>>;
  /** Determines whether or not the user is an admin of Stentor */
  isAdmin: Scalars['Boolean'];
  /** The authentication origin */
  origin: AuthOrigin;
  /** The user permissions that the user is allowed to perform in Stentor. */
  roles: Array<Maybe<UserProfileRole>>;
  /** User ID of the user in the system */
  userId: Scalars['String'];
};

export type UserProfileIdentity = {
  provider: Scalars['String'];
  userId: Scalars['String'];
};

export type UserProfileRole = {
  /** The organization ID of the organization that the user has the roles applied to. */
  organizationId: Scalars['String'];
  /** The user's roles that they are allowed to use on the organization. */
  roles: Array<Maybe<Scalars['String']>>;
};

export type Utils = {
  /**
   * Randomly generates an external ID that can be used by third party IAM roles so
   * stentor can securely assume it.
   */
  generateExternalID: Scalars['String'];
  /** Returns the result of a task */
  task: TaskResult;
};


export type UtilsTaskArgs = {
  taskId: Scalars['ID'];
};

export type UtteranceTest = {
  /** The unique identifier of the app that the test is linked to. */
  appId: Scalars['ID'];
  /** The time that the test was created.  Format: ISO 8601 */
  createdOn: Scalars['String'];
  /** The expected result of the utterance test. */
  expectedResult?: Maybe<ExpectedUtteranceTestResult>;
  /** A list of the test history. */
  history?: Maybe<Array<Maybe<TestHistory>>>;
  /** The platform that the test should run on.  If not present, it will run on all platforms. */
  platform?: Maybe<Scalars['String']>;
  /** The state that the test is currently in. If there is no state, then the test was never executed. */
  state?: Maybe<TestState>;
  /** The unique identifier for the test. */
  testId: Scalars['ID'];
  /** The type of tests that this is. */
  testType: Scalars['String'];
  /** The utterance that the test is executing for. */
  utterance?: Maybe<Scalars['String']>;
};

export type UtteranceTestUpdate = {
  /** Test configurations */
  config?: InputMaybe<UtteranceTestUpdateConfig>;
  /** The expected result from the NLU. */
  expectedResult?: InputMaybe<UtteranceTestUpdateExpectedResult>;
  /** The specific platform that the test is intended for. Removing the platform will perform the test on all available platforms. */
  platform?: InputMaybe<Scalars['String']>;
  /** The utterance that the test should execute for. */
  utterance?: InputMaybe<Scalars['String']>;
};

export type UtteranceTestUpdateConfig = {
  /** The number of seconds after a test is executed to wait before continuing. */
  delayAfter?: InputMaybe<Scalars['Int']>;
  /** The number of seconds before a test is executed to wait to execute */
  delayBefore?: InputMaybe<Scalars['Int']>;
};

export type UtteranceTestUpdateExpectedResult = {
  /** The intentId of the intent that is expected to be returned. */
  intentId?: InputMaybe<Scalars['String']>;
  /** The slots that are expected to be returned. */
  matchedSlots?: InputMaybe<Array<InputMaybe<UtteranceTestUpdateMatchedSlot>>>;
  /** The expected request type. */
  type?: InputMaybe<Scalars['String']>;
};

export type UtteranceTestUpdateMatchedSlot = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: InputMaybe<Scalars['Boolean']>;
  /** The iso 8601 value of the date value. */
  dateValue?: InputMaybe<Scalars['String']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: InputMaybe<Scalars['String']>;
  /** The value of a slot if it is a float. Integer values will also be included. */
  floatValue?: InputMaybe<Scalars['Float']>;
  /** The value of a slot if it is an integer. */
  integerValue?: InputMaybe<Scalars['Int']>;
  /** The name of the expected slot. */
  name?: InputMaybe<Scalars['String']>;
  /** The iso 8601 value of the start date value. */
  startDateValue?: InputMaybe<Scalars['String']>;
  /** String values of a slot array. */
  stringArrayValue?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: InputMaybe<Scalars['String']>;
};

export type WebContent = BaseWebContent & {
  /** Unique ID for the web content */
  _id: Scalars['String'];
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime'];
  /** The name of the content */
  name: Scalars['String'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String'];
};

export type WebContentErrors = {
  /** The time at which this was thrown. */
  date: Scalars['DateTime'];
  /** The details for the error. */
  detail: Scalars['String'];
  /**
   * The execution ID of the scrape execution that threw the error. It's possible
   * that this does not exist.
   */
  executionId?: Maybe<Scalars['String']>;
  /** The name of the error. */
  name: Scalars['String'];
  /**
   * The url that was linked to the error. This could be missing depending on
   * the type of error caught (for example if the execution started without one).
   */
  url?: Maybe<Scalars['String']>;
};

export type WebContentHighlight = {
  /** The text that is highlighted from the match. */
  text?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebContentSources = {
  /** The starting URL for the crawl */
  webUrl: Scalars['String'];
  /** The patterns that were used to during the crawl */
  webUrlPatterns: Array<Maybe<Scalars['String']>>;
};

export enum WebContentType {
  Website = 'WEBSITE'
}

export type WebContentWithHighlights = BaseWebContent & {
  /** Unique ID for the web content */
  _id: Scalars['String'];
  /** The highlights found in the match query. */
  highlight?: Maybe<WebContentHighlight>;
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime'];
  /** The name of the content */
  name: Scalars['String'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String'];
};

export type WebCrawlKendraInput = {
  /**
   * The account role that is allowed to listen to Kendra if the Kendra
   * instance is on another account.
   */
  accountRole?: InputMaybe<Scalars['String']>;
  /** The ARN of the kendra data source. */
  kendraDataSourceArn: Scalars['String'];
};

export type WebCrawlMonthlySchedule = WebCrawlSchedule & {
  /** The day of hte month that the schedule is scheduled to run */
  dayOfMonth: Scalars['Int'];
  /** The event that is to be performed on the schedule. */
  event: Scalars['String'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String'];
};

export type WebCrawlSchedule = {
  /** The event that is to be performed on the schedule. */
  event: Scalars['String'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String'];
};

export type WebCrawlWeeklySchedule = WebCrawlSchedule & {
  /** The days of the week that the crawler is scheduled for. */
  daysOfWeek: Array<Maybe<ScheduleDaysOfWeek>>;
  /** The event that is to be performed on the schedule. */
  event: Scalars['String'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String'];
};

export type WebCrawlerQuery = {
  /**
   * Retrieve stats for a blacklisted website.  Returns null
   * if the website is not blacklisted.
   */
  blacklistedWebsite?: Maybe<BlacklistedWebsite>;
};


export type WebCrawlerQueryBlacklistedWebsiteArgs = {
  website: Scalars['URL'];
};

export type WebCrawlerSettings = {
  addBlacklistedWebsite?: Maybe<Scalars['String']>;
  removeBlacklistedWebsite?: Maybe<Scalars['String']>;
};


export type WebCrawlerSettingsAddBlacklistedWebsiteArgs = {
  website: Scalars['URL'];
};


export type WebCrawlerSettingsRemoveBlacklistedWebsiteArgs = {
  website: Scalars['URL'];
};

export type WebFaq = {
  /** ID of the webFAQ */
  _id: Scalars['ID'];
  /** The answer of the FAQ questions */
  answer: Scalars['String'];
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: Maybe<Scalars['String']>;
  /** The time it was created. */
  created: Scalars['String'];
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: Maybe<Scalars['Boolean']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: Maybe<Scalars['ID']>;
  /** The name assigned to the question-answer page */
  name: Scalars['String'];
  /** Questions that are linked to the answer */
  questions: Array<Maybe<Scalars['String']>>;
  /** The raw text of the FAQ page */
  raw?: Maybe<Scalars['String']>;
  responses?: Maybe<Array<Maybe<HandlerResponse>>>;
  /** The URL that the FAQ came from */
  url?: Maybe<Scalars['String']>;
};

export type WidgetConfigurableMessageConfig = {
  delay?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type WidgetConfigurableMessageConfigInput = {
  delay?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type WidgetConfigurableMessagesConfig = {
  items?: Maybe<Array<Maybe<WidgetConfigurableMessageConfig>>>;
};

export type WidgetConfigurableMessagesConfigInput = {
  items?: InputMaybe<Array<InputMaybe<WidgetConfigurableMessageConfigInput>>>;
};

export enum WithdrawFromAlexaCertReasons {
  DiscoveredIssue = 'DISCOVERED_ISSUE',
  MoreFeatures = 'MORE_FEATURES',
  NotIntendedToPublish = 'NOT_INTENDED_TO_PUBLISH',
  NotReceivedCertificationFeedback = 'NOT_RECEIVED_CERTIFICATION_FEEDBACK',
  Other = 'OTHER',
  TestSkill = 'TEST_SKILL'
}

export type StartCrawlMutationVariables = Exact<{
  appId: Scalars['ID'];
  url: Scalars['URL'];
  pattern?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  channelId: Scalars['String'];
}>;


export type StartCrawlMutation = { startWebsiteCrawling: string };

export type AddScheduledCrawlMutationVariables = Exact<{
  appId: Scalars['ID'];
  url: Scalars['URL'];
  pattern?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>> | InputMaybe<SchedulerDaysOfWeek>;
}>;


export type AddScheduledCrawlMutation = { app: { update: { scheduleWeeklyWebCrawls: { dayOfMonth: number, scheduleId: string, type: string, event: string, parameters: any } | { daysOfWeek: Array<ScheduleDaysOfWeek | null>, scheduleId: string, type: string, event: string, parameters: any } } } };

export type UpdateStatusMutationVariables = Exact<{
  appId: Scalars['ID'];
  type: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
}>;


export type UpdateStatusMutation = { app: { update: { changeStatus: { status?: { type: string, notes?: string | null, email: string, timestamp: any, statusHistory?: Array<{ type: string, email: string, timestamp: any, notes?: string | null } | null> | null } | null } } } };

export type AddChatWidgetChannelMutationVariables = Exact<{
  appId: Scalars['ID'];
  channel: ChatWidgetAppChannelInput;
}>;


export type AddChatWidgetChannelMutation = { addChatWidgetChannel: { __typename: 'ChatWidgetAppChannel', id: string, type: string, endPoint?: string | null, useNLU?: string | null, directoryListing?: string | null, direct?: boolean | null, disabled?: boolean | null, accountKey?: string | null, botName?: string | null, avatarUrl?: any | null, key?: string | null, serverUrl?: string | null, middlewareUrl?: string | null, autocompleteSuggestionsUrl?: any | null, autoOpenOnWidth?: string | null, status?: { type: string } | null, cta?: { message?: string | null, timeout?: number | null } | null, urls?: { policies: Array<{ pattern: string, behavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null>, defaultBehavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null, header?: { status?: { online?: string | null, offline?: string | null, away?: string | null, connecting?: string | null } | null, actions?: { minimize?: boolean | null, cancel?: boolean | null } | null } | null, theme?: { primaryColor?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, carousel?: { button?: { color?: string | null } | null, subtitle?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null, title?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null } | null, chatButton?: { background?: string | null, margin?: { top?: string | null, right?: string | null, bottom?: string | null, left?: string | null } | null } | null, content?: { background?: string | null } | null, cta?: { background?: string | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, footer?: { background?: string | null } | null, header?: { background?: string | null, border?: { color?: string | null, radius?: string | null, width?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, input?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, menu?: { item?: { height?: string | null, background?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null } | null, menuButton?: { color?: string | null } | null, messages?: { maxWidth?: string | null, mine?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, others?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, padding?: { left?: string | null, right?: string | null, bottom?: string | null, top?: string | null } | null } | null, minimizeButton?: { color?: string | null } | null, cancelButton?: { color?: string | null } | null, sendButton?: { color?: string | null } | null, size?: { width?: string | null, height?: string | null } | null } | null } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { profile?: { email: string } | null };

export type GetOrgAnalyticsQueryVariables = Exact<{
  orgId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
}>;


export type GetOrgAnalyticsQuery = { org?: { __typename: 'Organization', _id: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null } | null };

export type GetAppsForOrgQueryVariables = Exact<{
  organizationId: Scalars['ID'];
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetAppsForOrgQuery = { org?: { apps?: { total: number, apps: Array<{ appId: string, organizationId: string, name: string, largeIcon?: string | null, smallIcon?: string | null, description?: string | null, summary?: string | null, status?: { type: string, timestamp: string, notes?: string | null, email?: string | null } | null } | null> } | null } | null };

export type GetAppOverviewQueryVariables = Exact<{
  appId: Scalars['ID'];
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
}>;


export type GetAppOverviewQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, description?: string | null, summary?: string | null, organizationId: string, invocationName?: string | null, templateType?: string | null, icon?: string | null, smallIcon?: string | null, largeIcon?: string | null, banner?: string | null, largeBanner?: string | null, status?: { type: string, timestamp: any, email: string } | null, handlers?: { _id: string, total: number, handlers?: Array<{ _id: string, name?: string | null, intentId: string, type: string } | null> | null } | null, intents?: { _id: string, total: number, intents?: Array<{ _id: string, name: string, intentId: string } | null> | null } | null, entities?: { _id: string, total: number, entities?: Array<{ _id: string, entityId: string, displayName: string } | null> | null } | null, content?: { __typename: 'TotalWebContent', total: number, content: Array<{ __typename: 'WebContentWithHighlights', _id: string, name: string, url: string } | null> } | null, contentSources?: { __typename: 'TotalWebContentSources', total: number, sources: Array<{ __typename: 'WebContentSources', webUrl: string, webUrlPatterns: Array<string | null> } | null> } | null, faq?: { total: number } | null, channels?: Array<{ __typename: 'ActionsOnGoogleAppChannel', type: string, id: string, name?: string | null } | { __typename: 'AlexaAppChannel', type: string, id: string, name?: string | null } | { __typename: 'AppChannel', type: string, id: string, name?: string | null } | { __typename: 'ChatWidgetAppChannel', key?: string | null, type: string, id: string, name?: string | null, theme?: { primaryColor?: string | null } | null } | { __typename: 'DialogflowAppChannel', type: string, id: string, name?: string | null } | { __typename: 'FacebookMessengerAppChannel', type: string, id: string, name?: string | null } | { __typename: 'GoogleBusinessMessagesAppChannel', type: string, id: string, name?: string | null } | { __typename: 'IntelligentSearchAppChannel', key?: string | null, type: string, id: string, name?: string | null, theme?: { accentColor?: string | null } | null } | { __typename: 'LexConnectAppChannel', type: string, id: string, name?: string | null } | { __typename: 'LexV2ConnectAppChannel', type: string, id: string, name?: string | null } | null> | null, analytics?: { user: { totalUsers: number, totalSessions: number, returningUsers: number, newUsers: number } } | null } | null };

export type GetAppContentQueryVariables = Exact<{
  appId: Scalars['ID'];
  size: Scalars['Int'];
  from: Scalars['Int'];
}>;


export type GetAppContentQuery = { app?: { appId: string, contentSources?: { __typename: 'TotalWebContentSources', total: number, sources: Array<{ __typename: 'WebContentSources', webUrl: string, webUrlPatterns: Array<string | null> } | null> } | null, content?: { total: number, content: Array<{ _id: string, name: string, url: string, type: WebContentType, lastUpdated: any, text: string } | null> } | null, faq?: { total: number, faq: Array<{ name: string, raw?: string | null, answer: string, questions: Array<string | null> } | null> } | null } | null };

export type GetAppAnalyticsQueryVariables = Exact<{
  appId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
}>;


export type GetAppAnalyticsQuery = { app?: { __typename: 'App', _id: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null } | null };

export type GetAppSchedulesQueryVariables = Exact<{
  appId: Scalars['ID'];
}>;


export type GetAppSchedulesQuery = { app?: { schedules: { schedules: Array<{ scheduleId: string, type: string, event: string, parameters: any } | { scheduleId: string, type: string, event: string, parameters: any } | null> } } | null };

export type GetAnalyticsAndEventsQueryVariables = Exact<{
  appId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetAnalyticsAndEventsQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null, events?: { total: number } | null } | null };

export type GetEventsQueryVariables = Exact<{
  appId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  size?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Int']>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetEventsQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, events?: { total: number, events?: Array<{ eventId: string, channel?: string | null, platform?: string | null, userId?: string | null, sessionId?: string | null, eventTime?: string | null, currentHandler?: string | null, selectedHandler?: string | null, environment?: string | null, eventType?: string | null, eventName?: string | null, request?: string | null, rawQuery?: string | null, errorCode?: number | null, errorMessage?: string | null, payload?: string | null, slots?: Array<{ name?: string | null, rawValue?: string | null, slotValue?: string | null } | null> | null, stentorRequest?: { intentId?: string | null, rawQuery?: string | null, matchConfidence?: number | null } | null, response?: { outputSpeech?: { displayText?: string | null, ssml?: string | null, suggestions?: Array<{ title?: string | null, url?: string | null } | null> | null } | null, reprompt?: { displayText?: string | null, ssml?: string | null, suggestions?: Array<{ title?: string | null, url?: string | null } | null> | null } | null } | null } | null> | null } | null } | null };


export const StartCrawlDocument = gql`
    mutation startCrawl($appId: ID!, $url: URL!, $pattern: [String], $channelId: String!) {
  startWebsiteCrawling(
    appId: $appId
    webUrl: $url
    webUrlPatterns: $pattern
    channelId: $channelId
  )
}
    `;
export const AddScheduledCrawlDocument = gql`
    mutation addScheduledCrawl($appId: ID!, $url: URL!, $pattern: [String], $daysOfWeek: [SchedulerDaysOfWeek]!) {
  app {
    update(appId: $appId) {
      scheduleWeeklyWebCrawls(
        webUrl: $url
        webUrlPatterns: $pattern
        daysOfWeek: $daysOfWeek
      ) {
        scheduleId
        type
        event
        parameters
        ... on WebCrawlWeeklySchedule {
          daysOfWeek
        }
        ... on WebCrawlMonthlySchedule {
          dayOfMonth
        }
      }
    }
  }
}
    `;
export const UpdateStatusDocument = gql`
    mutation updateStatus($appId: ID!, $type: String!, $notes: String) {
  app {
    update(appId: $appId) {
      changeStatus(type: $type, note: $notes) {
        status {
          type
          notes
          email
          timestamp
          statusHistory {
            type
            email
            timestamp
            notes
          }
        }
      }
    }
  }
}
    `;
export const AddChatWidgetChannelDocument = gql`
    mutation addChatWidgetChannel($appId: ID!, $channel: ChatWidgetAppChannelInput!) {
  addChatWidgetChannel(appId: $appId, channel: $channel) {
    __typename
    id
    type
    endPoint
    useNLU
    directoryListing
    id
    status {
      type
    }
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
}
    `;
export const GetProfileDocument = gql`
    query getProfile {
  profile {
    email
  }
}
    `;
export const GetOrgAnalyticsDocument = gql`
    query getOrgAnalytics($orgId: ID!, $startDate: DateTime!, $endDate: DateTime!) {
  org(organizationId: $orgId) {
    _id
    __typename
    name
    analytics {
      user(start: $startDate, end: $endDate) {
        newUsers
        returningUsers
        totalSessions
        totalUsers
      }
    }
  }
}
    `;
export const GetAppsForOrgDocument = gql`
    query getAppsForOrg($organizationId: ID!, $from: Int = 0, $size: Int = 10) {
  org(organizationId: $organizationId) {
    apps(from: $from, size: $size) {
      total
      apps {
        appId
        organizationId
        name
        largeIcon
        smallIcon
        description
        summary
        status {
          type
          timestamp
          notes
          email
        }
      }
    }
  }
}
    `;
export const GetAppOverviewDocument = gql`
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
      type
      id
      name
      ... on ChatWidgetAppChannel {
        key
        theme {
          primaryColor
        }
      }
      ... on IntelligentSearchAppChannel {
        key
        theme {
          accentColor
        }
      }
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
export const GetAppContentDocument = gql`
    query getAppContent($appId: ID!, $size: Int!, $from: Int!) {
  app(appId: $appId) {
    appId
    contentSources {
      __typename
      total
      sources {
        __typename
        webUrl
        webUrlPatterns
      }
    }
    content(size: $size, from: $from) {
      total
      content {
        _id
        name
        url
        type
        lastUpdated
        text
      }
    }
    faq(size: $size, from: $from) {
      total
      faq {
        name
        raw
        answer
        questions
      }
    }
  }
}
    `;
export const GetAppAnalyticsDocument = gql`
    query getAppAnalytics($appId: ID!, $startDate: DateTime!, $endDate: DateTime!) {
  app(appId: $appId) {
    _id
    __typename
    name
    analytics {
      user(start: $startDate, end: $endDate) {
        newUsers
        returningUsers
        totalSessions
        totalUsers
      }
    }
  }
}
    `;
export const GetAppSchedulesDocument = gql`
    query getAppSchedules($appId: ID!) {
  app(appId: $appId) {
    schedules {
      schedules {
        scheduleId
        type
        event
        parameters
      }
    }
  }
}
    `;
export const GetAnalyticsAndEventsDocument = gql`
    query getAnalyticsAndEvents($appId: ID!, $startDate: DateTime!, $endDate: DateTime!, $byTag: [String], $byRequestIntentId: [String], $byChannel: [String]) {
  app(appId: $appId) {
    _id
    __typename
    appId
    name
    analytics {
      user(start: $startDate, end: $endDate) {
        newUsers
        returningUsers
        totalSessions
        totalUsers
      }
    }
    events(
      startDate: $startDate
      endDate: $endDate
      byTag: $byTag
      byRequestIntentId: $byRequestIntentId
      byChannel: $byChannel
    ) {
      total
    }
  }
}
    `;
export const GetEventsDocument = gql`
    query getEvents($appId: ID!, $startDate: DateTime!, $endDate: DateTime!, $size: Int = 10, $from: Int = 0, $byTag: [String], $byRequestIntentId: [String], $byChannel: [String]) {
  app(appId: $appId) {
    _id
    __typename
    appId
    name
    events(
      size: $size
      from: $from
      startDate: $startDate
      endDate: $endDate
      byTag: $byTag
      byRequestIntentId: $byRequestIntentId
      byChannel: $byChannel
    ) {
      total
      events {
        eventId
        channel
        platform
        userId
        sessionId
        eventTime
        currentHandler
        selectedHandler
        environment
        eventType
        eventName
        request
        slots {
          name
          rawValue
          slotValue
        }
        stentorRequest {
          intentId
          rawQuery
          matchConfidence
        }
        response {
          outputSpeech {
            displayText
            ssml
            suggestions {
              title
              url
            }
          }
          reprompt {
            displayText
            ssml
            suggestions {
              title
              url
            }
          }
        }
        rawQuery
        errorCode
        errorMessage
        payload
      }
    }
  }
}
    `;