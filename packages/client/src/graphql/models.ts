/*! Copyright (c) 2022, XAPP AI*/ 
 /* eslint-disable */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  EntityNLU: { input: any; output: any; }
  HandlerResponseConditions: { input: any; output: any; }
  IntOrBoolean: { input: any; output: any; }
  IntOrString: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  PathConditions: { input: any; output: any; }
  StringMap: { input: any; output: any; }
  URL: { input: any; output: any; }
  URLString: { input: any; output: any; }
  XAPPLead_String_maxLength_150_format_email: { input: any; output: any; }
  awsEventBusArn_String_maxLength_200_pattern_arnawsusgovcneventsaz0909eventbus: { input: any; output: any; }
  businessDescription_String_maxLength_4000: { input: any; output: any; }
  contactName_String_maxLength_150: { input: any; output: any; }
  contactPhone_String_maxLength_50: { input: any; output: any; }
  contact_String_maxLength_150_format_email: { input: any; output: any; }
  contractDate_String_format_ISO8601: { input: any; output: any; }
  description_String_maxLength_4000: { input: any; output: any; }
  keywords_List_String_NotNull_maxLength_50: { input: any; output: any; }
  name_String_NotNull_maxLength_150: { input: any; output: any; }
  notes_String_maxLength_4000: { input: any; output: any; }
  settlingTimeSeconds_Int_max_5_exclusiveMin_0: { input: any; output: any; }
  templateType_String_maxLength_50: { input: any; output: any; }
  time_String_NotNull_format_date: { input: any; output: any; }
};

export type AwsPaymentAccount = {
  /** The usage for the given AWS subscription during the current pay period. */
  currentUsage: OrgUsageStats;
  /** The customerId of the customer that linked the account. */
  customerId?: Maybe<Scalars['String']['output']>;
  /** The date in which the subscription was placed. */
  date?: Maybe<Scalars['String']['output']>;
  /** The product within the product of the subscription. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** The product code of the aws product that is linked to the org. */
  productCode?: Maybe<Scalars['String']['output']>;
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
  alcoholAndTobaccoRelatedContent?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: Maybe<Scalars['Boolean']['output']>;
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
  alcoholAndTobaccoRelatedContent?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A channel that is specific for apps to run on the Actions On Google. */
export type ActionsOnGoogleAppChannel = BaseAppChannel & {
  /**
   * For "actions-on-google" type channels only.
   *
   * @deprecated: Actions-on-google is no longer supported at all.  It is gone.
   */
  additionalInformationQuestions?: Maybe<ActionsOnGoogleAdditionalInformationQuestions>;
  /** Deprecated: DO NOT USE. IT WILL BE REMOVED */
  credentialsURL?: Maybe<Scalars['String']['output']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean']['output'];
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the project on Google */
  projectId: Scalars['ID']['output'];
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


/** A channel that is specific for apps to run on the Actions On Google. */
export type ActionsOnGoogleAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ActionsOnGoogleAppChannelInput = {
  /**
   * For "actions-on-google" type channels only.
   *
   * @deprecated: Actions-on-google is no longer supported at all.  It is gone.
   */
  additionalInformationQuestions?: InputMaybe<ActionsOnGoogleAdditionalInformationQuestionsInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Credentials that are provided by Google which will allow Stentor to
 * call the Actions On Google resources on the client's behalf.
 */
export type ActionsOnGoogleCredentials = {
  auth_provider_x509_cert_url?: InputMaybe<Scalars['String']['input']>;
  auth_uri?: InputMaybe<Scalars['String']['input']>;
  client_email: Scalars['String']['input'];
  client_id?: InputMaybe<Scalars['String']['input']>;
  client_x509_cert_url?: InputMaybe<Scalars['String']['input']>;
  private_key: Scalars['String']['input'];
  private_key_id?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  token_uri?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ActiveWithinHandlerResponseSegment = HandlerResponseSegment & {
  activeWithin: HandlerResponseDuration;
  segment: ResponseOutput;
};

export type AddEntityInput = {
  appId: Scalars['ID']['input'];
  dialogflowId?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  /**
   * A unique identifier for the entity.  If one is not provided then
   * it will be derived from the display name.
   */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** Whether or not to exclude the entity from autocomplete suggestions. */
  excludeFromSuggestions?: InputMaybe<Scalars['Boolean']['input']>;
  nlu?: InputMaybe<Scalars['EntityNLU']['input']>;
  type?: InputMaybe<EntityType>;
  values?: InputMaybe<Array<EntityValueInput>>;
};

export type AddFaq = {
  /** The answer to those questions */
  answer: Scalars['String']['input'];
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: InputMaybe<Scalars['ID']['input']>;
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the FAQ */
  name: Scalars['String']['input'];
  /** Questions that the FAQ handles. */
  questions: Array<InputMaybe<Scalars['String']['input']>>;
  /** The raw text */
  raw?: InputMaybe<Scalars['String']['input']>;
  responses?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** The URL that the FAQ could be found on. */
  url?: InputMaybe<Scalars['URL']['input']>;
};

export type AddForwardReturn = {
  /** An intents graph with the updated graph */
  graph: IntentsGraph;
  /** The updated handler */
  handler: Handler;
};


export type AddForwardReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddHandlerInput = {
  /**
   * Base content map for the handler.
   *
   * All handlers have contextual help and cancel content
   */
  content?: InputMaybe<Array<InputMaybe<InputHandlerContent>>>;
  /**
   * Contexts the must be active to have this handler be weighted more heavily or selected.
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
  data?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  forward?: InputMaybe<Array<InputMaybe<HandlerForwardInput>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID']['input'];
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['input'];
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<HandlerPermissions>>>;
  redirect?: InputMaybe<Array<InputMaybe<HandlerRedirectInput>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']['input']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AddHandlerReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The handler that was added with the new attributes. */
  handler: Handler;
};


export type AddHandlerReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID']['input'];
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['input'];
  nlu?: InputMaybe<Scalars['JSON']['input']>;
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Slot type definition. */
  slotTypes?: InputMaybe<Scalars['JSON']['input']>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']['input']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AddIntentReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The intent that was added with the new attributes. */
  intent: Intent;
};


export type AddIntentReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  _id: Scalars['ID']['output'];
  answer: Scalars['String']['output'];
  associatedHandlerId?: Maybe<Scalars['String']['output']>;
  created: Scalars['String']['output'];
  excludeFromAutoComplete?: Maybe<Scalars['Boolean']['output']>;
  externalFAQId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  questions: Array<Maybe<Scalars['String']['output']>>;
  raw?: Maybe<Scalars['String']['output']>;
  /** If "wasAdded" was false, this provides the reason that the FAQ was not added. */
  reason?: Maybe<FaqNotAddedReason>;
  responses?: Maybe<Array<Maybe<HandlerResponse>>>;
  url?: Maybe<Scalars['String']['output']>;
  /** A boolean saying whether or not the FAQ was added in this operation. */
  wasAdded: Scalars['Boolean']['output'];
};

export type AdminAwsQuery = {
  /** Returns the AWS region that the graphql server is currently querying from. */
  region: Scalars['String']['output'];
};

export type AdminAppMutation = {
  update: AdminUpdateAppMutation;
};


export type AdminAppMutationUpdateArgs = {
  appId: Scalars['ID']['input'];
};

export enum AdminAppProduct {
  StudioComplete = 'STUDIO_COMPLETE',
  StudioLeads_2024 = 'STUDIO_LEADS_2024',
  StudioLeadsPlus_2024 = 'STUDIO_LEADS_PLUS_2024',
  StudioMax = 'STUDIO_MAX',
  StudioScheduler = 'STUDIO_SCHEDULER',
  StudioScheduler_2024 = 'STUDIO_SCHEDULER_2024'
}

export type AdminChatSuggestion = {
  answer?: Maybe<Scalars['String']['output']>;
  format: Array<Maybe<AdminChatSuggestionFormat>>;
  suggestion: Scalars['String']['output'];
  truncatedAnswer?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
};

export type AdminChatSuggestionFormat = {
  bold?: Maybe<AdminChatSuggestionFormatBold>;
  inputText?: Maybe<AdminChatSuggestionFormatInputText>;
};

export type AdminChatSuggestionFormatBold = {
  end: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

export type AdminChatSuggestionFormatInputText = {
  end: Scalars['Int']['output'];
  slotMatch: Scalars['String']['output'];
  start: Scalars['Int']['output'];
  text: Scalars['String']['output'];
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
  appId?: InputMaybe<Scalars['ID']['input']>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byFlag?: InputMaybe<Array<InputMaybe<RawQueryEventFlag>>>;
  byName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byPlatform?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  newSessionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  noFlag?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  rawQueryOnly?: InputMaybe<Scalars['Boolean']['input']>;
  rawQueryOrSlotsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  rawQueryText?: InputMaybe<Scalars['String']['input']>;
  responseOutputText?: InputMaybe<Scalars['String']['input']>;
  responseRepromptText?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminFaqSuggestionInput = {
  answer: Scalars['String']['input'];
  appId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  suggestion: Scalars['String']['input'];
};

export type AdminLaboratory = {
  chatSuggestions: AdminChatSuggestionReturn;
  /** This will return stats on the documents requested. */
  docsKendra?: Maybe<Scalars['JSON']['output']>;
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
  /** Execute the multi intent Prompt */
  multiIntent?: Maybe<Scalars['JSON']['output']>;
  /** This attempts to generate a valid answer based on a question for an app. */
  provideAnswer?: Maybe<Scalars['JSON']['output']>;
  /** This queries the Kendra instance available and returns the results. */
  queryKendra?: Maybe<Scalars['JSON']['output']>;
  /** Returns the response from the KNN Endpoint */
  sagemakerKnn: Scalars['JSON']['output'];
  /** Returns a spellcheck of the given sentence. */
  spellCheck: AdminSpellCheckLabResult;
  /** Query comparison vectors databases. */
  vectorsDatabases: VectorDatabaseQuery;
};


export type AdminLaboratoryChatSuggestionsArgs = {
  appId: Scalars['ID']['input'];
  indexVersion?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  queryText: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<InputMaybe<AdminChatSuggestionType>>>;
};


export type AdminLaboratoryDocsKendraArgs = {
  appId: Scalars['ID']['input'];
};


export type AdminLaboratoryEntitySearchArgs = {
  searchQuery: Scalars['String']['input'];
};


export type AdminLaboratoryEventsSearchArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  searchRawQueryAutoComplete?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryFaqSearchArgs = {
  answerAutoComplete?: InputMaybe<Scalars['String']['input']>;
  answerSuggestion?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  questionsAutoComplete?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryKnnQuestionsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  inputVectorSlice?: InputMaybe<Scalars['Int']['input']>;
  outputVectorSlice?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryKnnRawQuerySearchArgs = {
  appId: Scalars['ID']['input'];
  k?: InputMaybe<Scalars['Int']['input']>;
  minScore?: InputMaybe<Scalars['Float']['input']>;
  searchString: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryKnnSearchArgs = {
  inputVectorSlice?: InputMaybe<Scalars['Int']['input']>;
  k?: InputMaybe<Scalars['Int']['input']>;
  outputVectorSlice?: InputMaybe<Scalars['Int']['input']>;
  searchString: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryKnnSuggSearchArgs = {
  appId: Scalars['ID']['input'];
  k?: InputMaybe<Scalars['Int']['input']>;
  minScore?: InputMaybe<Scalars['Float']['input']>;
  searchString: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminLaboratoryMultiIntentArgs = {
  max_tokens?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  text: Scalars['String']['input'];
};


export type AdminLaboratoryProvideAnswerArgs = {
  appId: Scalars['ID']['input'];
  max_tokens?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  text: Scalars['String']['input'];
};


export type AdminLaboratoryQueryKendraArgs = {
  appId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type AdminLaboratorySagemakerKnnArgs = {
  text: Scalars['String']['input'];
};


export type AdminLaboratorySpellCheckArgs = {
  sentence: Scalars['String']['input'];
};

export type AdminMutation = {
  app: AdminAppMutation;
  isAdmin: Scalars['Boolean']['output'];
  laboratory: LabMutation;
  webCrawler?: Maybe<WebCrawlerSettings>;
};

export type AdminPinconeResultTextResult = {
  appId?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  executionId?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  s3TextUri?: Maybe<Scalars['String']['output']>;
  s3Uri?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  vectorAlgorithm?: Maybe<Scalars['String']['output']>;
};

export type AdminPineconeResult = {
  processedText: Scalars['String']['output'];
  results: Scalars['JSON']['output'];
  text: Scalars['String']['output'];
  textResults: Scalars['JSON']['output'];
  textVectors: Array<Scalars['Float']['output']>;
  xnlu: AdminXnluResult;
};


export type AdminPineconeResultXnluArgs = {
  appId: Scalars['ID']['input'];
  prodAppId: Scalars['ID']['input'];
};

export type AdminQuery = {
  /** Returns AWS server related stats. */
  aws: AdminAwsQuery;
  events: AdminEventsQuery;
  getLimitations: Scalars['JSON']['output'];
  isAdmin: Scalars['Boolean']['output'];
  laboratory: AdminLaboratory;
  webCrawler?: Maybe<WebCrawlerQuery>;
};


export type AdminQueryGetLimitationsArgs = {
  appId?: InputMaybe<Scalars['ID']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminSpellCheckLabResult = {
  result: Array<Maybe<AdminSpellCheckResult>>;
};

export type AdminSpellCheckResult = {
  isCorrect?: Maybe<Scalars['Boolean']['output']>;
  suggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  word?: Maybe<Scalars['String']['output']>;
};

export type AdminTotalEvents = {
  /** The events that are returned in the current query. */
  events?: Maybe<Array<Maybe<Events>>>;
  /** The total number of events that fit the last query. */
  total: Scalars['Int']['output'];
};

export type AdminUpdateAppMutation = {
  /**
   * Adds the product tier to an app without the user requiring to purchase the tier.
   *
   * This *adds* privileges to the app, it does not remove any existing privileges for paid subscription.
   *
   * You can only have one manual product tier at once.
   *
   * So if a user has paid for a "Leads" tier and you add a "Scheduler" tier, the user will have both "Leads" and "Scheduler" privileges applied
   * too the app.
   *
   * WARNING: The automatic scheduling is currently not implemented as this is currently in the demo stage.
   */
  addAppProduct: App;
  /** Adds a notification that users of the app are capable of seeing. */
  addNotification: SystemNotification;
  /** Removes all notifications associated with an app. */
  removeAllNotifications: Scalars['String']['output'];
  /** Removes a notification from the app list */
  removeNotification?: Maybe<Array<Maybe<SystemNotification>>>;
  /** Sets the verified status of a Google PlaceId for the app to the specified value. */
  verifyGooglePlacesId: App;
};


export type AdminUpdateAppMutationAddAppProductArgs = {
  durationInDays?: InputMaybe<Scalars['Int']['input']>;
  indefinite?: InputMaybe<Scalars['Boolean']['input']>;
  product: AdminAppProduct;
};


export type AdminUpdateAppMutationAddNotificationArgs = {
  level?: InputMaybe<SystemNotificationLevel>;
  message: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type AdminUpdateAppMutationRemoveNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type AdminUpdateAppMutationVerifyGooglePlacesIdArgs = {
  googlePlacesId: Scalars['ID']['input'];
  verified: Scalars['Boolean']['input'];
};

export type AdminXnluResult = {
  llmResponse: Scalars['JSON']['output'];
  ragResponse: Scalars['JSON']['output'];
};

export type AlexaAppChannel = BaseAppChannel & {
  /**
   * Part of the Alexa Skill Manifest.
   *
   * The category communicates what type of functionality the skill performs.
   */
  category?: Maybe<AlexaSkillCategories>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
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
  endPoint?: Maybe<Scalars['String']['output']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean']['output'];
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /**
   * The invocation name for the app.
   *
   * If not provided, the application level invocation name will be used.
   */
  invocationName?: Maybe<Scalars['String']['output']>;
  /**
   * Part of the Alexa Skill manifest publishing information.
   *
   * If true, the skill will be distributed in all countries covered by specified locales.
   */
  isAvailableWorldwide?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not the alexa channel is building on Alexa. */
  isBuilding: Scalars['Boolean']['output'];
  /**
   * If useManifest is true, it will use this manifest instead of generating one based on
   * other data about the assistant application
   */
  manifest?: Maybe<AlexaSkill>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * A regex to match against possible intent IDs to determine if they will be processed with the NLU.
   *
   * useNLU and nluSlotName must exist or else this is ignored.
   */
  nluIntentRegex?: Maybe<Scalars['String']['output']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: AlexaNluQuery;
  /** Slot name that will exist on the intent that is matched. */
  nluSlotName?: Maybe<Scalars['String']['output']>;
  /** Part of the Alexa Skill manifest. An array of named permissions that the skill can use. */
  permissions?: Maybe<Array<Maybe<AlexaPermissions>>>;
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: Maybe<AlexaPrivacyAndCompliance>;
  /** The skill ID within Alexa */
  skillId?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /**
   * If set to true, it will use the manifest property instead of generating one based
   * on other known data.
   */
  useManifest?: Maybe<Scalars['Boolean']['output']>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: Maybe<Scalars['String']['output']>;
  /**
   * The vendor ID of the SMAPI vendor that the app is published to.
   * If this is undefined, the vendor on the organization will be used instead.
   */
  vendorId?: Maybe<Scalars['ID']['output']>;
  vendors?: Maybe<Array<Maybe<SmapiVendor>>>;
};


export type AlexaAppChannelNluQueryArgs = {
  text: Scalars['String']['input'];
};


export type AlexaAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
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
  credentialsURL?: InputMaybe<Scalars['String']['input']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
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
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The invocation name for the app.
   *
   * If not provided, the application level invocation name will be used.
   */
  invocationName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Part of the Alexa Skill manifest publishing information.
   *
   * If true, the skill will be distributed in all countries covered by specified locales.
   */
  isAvailableWorldwide?: InputMaybe<Scalars['Boolean']['input']>;
  manifest?: InputMaybe<AlexaSkillInput>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * A regex to match against possible intent IDs to determine if they will be processed with the NLU.
   *
   * useNLU and nluSlotName must exist or else this is ignored.
   */
  nluIntentRegex?: InputMaybe<Scalars['String']['input']>;
  /** Slot name that will exist on the intent that is matched. */
  nluSlotName?: InputMaybe<Scalars['String']['input']>;
  /** Part of the Alexa Skill manifest. An array of named permissions that the skill can use. */
  permissions?: InputMaybe<Array<InputMaybe<AlexaPermissionsInput>>>;
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: InputMaybe<AlexaPrivacyAndComplianceInput>;
  /** The skill ID within Alexa */
  skillId?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * If set to true, it will use the manifest property instead of generating one based
   * on other known data.
   */
  useManifest?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
  /**
   * The vendor ID of the SMAPI vendor that the app is published to.
   * If this is undefined, the vendor on the organization will be used instead.
   */
  vendorId?: InputMaybe<Scalars['ID']['input']>;
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
  access_token: Scalars['String']['input'];
  expires_at: Scalars['String']['input'];
  expires_in: Scalars['Long']['input'];
  refresh_token: Scalars['String']['input'];
  token_type: Scalars['String']['input'];
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
  credentialsUrl: Scalars['String']['output'];
};

/** Attributes used for alexa publishing. */
export type AlexaIntegrationInput = {
  /** The location of the credentials needed to upload to alexa. */
  credentialsUrl: Scalars['String']['input'];
};

export type AlexaInteractionModel = {
  languageModel?: Maybe<AlexaLanguageModel>;
};

export type AlexaInteractionModelIntent = {
  name: Scalars['String']['output'];
  samples?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slots?: Maybe<Array<Maybe<AlexaInteractionModelSlot>>>;
};

export type AlexaInteractionModelSlot = {
  name: Scalars['String']['output'];
  samples?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Scalars['String']['output'];
};

export type AlexaInteractionModelSlotType = {
  name: Scalars['String']['output'];
  values: Array<Maybe<AlexaInteractionModelSlotTypeValue>>;
};

export type AlexaInteractionModelSlotTypeValue = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<AlexaInteractionModelSlotTypeValueName>;
};

export type AlexaInteractionModelSlotTypeValueName = {
  synonyms: Array<Maybe<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type AlexaLanguageModel = {
  intents: Array<Maybe<AlexaInteractionModelIntent>>;
  invocationName: Scalars['String']['output'];
  types?: Maybe<Array<Maybe<AlexaInteractionModelSlotType>>>;
};

export type AlexaNluQuery = {
  intentId: Scalars['String']['output'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String']['output'];
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
  platform: Scalars['String']['output'];
  /** Privacy and compliance data required for Alexa publishing */
  privacyAndCompliance: AlexaPrivacyAndCompliance;
};

export type AlexaPlatformDataInput = {
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String']['input'];
  /** Part of the Alexa Skill Manifest */
  privacyAndCompliance?: InputMaybe<AlexaPrivacyAndComplianceInput>;
};

/** Data that is required to publish to Alexa. It tells Amazon what the app can do. */
export type AlexaPrivacyAndCompliance = {
  /** Does the app allow purchases? */
  allowsPurchases?: Maybe<Scalars['Boolean']['output']>;
  /** Does the app contain ads? */
  containsAds?: Maybe<Scalars['Boolean']['output']>;
  /** Is the app directed at children? */
  isChildDirected?: Maybe<Scalars['Boolean']['output']>;
  /** Can the skill be imported and exported from the United States and all other countries and regions in which XAPP operates? */
  isExportCompliant?: Maybe<Scalars['Boolean']['output']>;
  /** Does the skill collect personal information? */
  usesPersonalInfo?: Maybe<Scalars['Boolean']['output']>;
};

export type AlexaPrivacyAndComplianceInput = {
  allowsPurchases?: InputMaybe<Scalars['Boolean']['input']>;
  containsAds?: InputMaybe<Scalars['Boolean']['input']>;
  isChildDirected?: InputMaybe<Scalars['Boolean']['input']>;
  isExportCompliant?: InputMaybe<Scalars['Boolean']['input']>;
  usesPersonalInfo?: InputMaybe<Scalars['Boolean']['input']>;
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
  manifestVersion?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<AlexaPermissions>>>;
  /** Privacy and compliance data required for Alexa publishing */
  privacyAndCompliance: AlexaPrivacyAndCompliance;
  publishingInformation?: Maybe<AlexaSkillmanifestPublishingInformation>;
};

export type AlexaSkillManifestInput = {
  lastUpdateRequest?: InputMaybe<AlexaSkillManifestLastUpdateRequestInput>;
  manifestVersion?: InputMaybe<Scalars['String']['input']>;
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
  isAvailableWorldwide: Scalars['Boolean']['output'];
  testingInstructions: Scalars['String']['output'];
};

export type AlexaSkillmanifestPublishingInformationInput = {
  category: AlexaSkillCategories;
  distributionCountries?: InputMaybe<AlexaDistrubutionCountry>;
  distributionMode: AlexaDistributionMode;
  isAvailableWorldwide: Scalars['Boolean']['input'];
  testingInstructions: Scalars['String']['input'];
};

export type Analytics = {
  /** An aggregated portion of Intent events. */
  selectedCount?: Maybe<Array<Maybe<SelectedCount>>>;
  /** The total number of handler events that are found. */
  totalCount: Scalars['Int']['output'];
};

export type App = {
  _id: Scalars['ID']['output'];
  /** Information about how people are accessing the app's widgets. */
  access: WidgetChannelAccess;
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']['output']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']['output']>;
  analytics?: Maybe<AppAnalytics>;
  /** Unique identifier of the app in Stentor. */
  appId: Scalars['ID']['output'];
  /** Settings for the availability of the CRM service. */
  availability?: Maybe<CrmServiceAvailabilitySettings>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: Maybe<Scalars['String']['output']>;
  beta?: Maybe<Scalars['JSON']['output']>;
  /**
   * A description of the business and it's services.
   *
   * This can be used for LLM operations
   */
  businessDescription?: Maybe<Scalars['String']['output']>;
  /**
   * A description of what they consider to be high value leads, prioritized queries that they
   * want to be notified immediately.
   *
   * This can be used for LLM operations
   */
  businessHighValueLeadDescription?: Maybe<Scalars['String']['output']>;
  /** The hours in which the business related to the app is open. */
  businessHours: Array<BusinessHours>;
  /** Whether or not the app can capture leads. */
  canCaptureLeads: Scalars['Boolean']['output'];
  /** The leads that have been caught recently. */
  caughtLeads: CaughtLeadsResult;
  /** The opportunity alerts that have been caught recently. */
  caughtOpportunityAlerts: CaughtOpportunityAlertsResult;
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
  defaultLocale?: Maybe<Scalars['String']['output']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']['output']>;
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
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Contains an externalId that is used by Stentor when assuming roles on client AWS accounts. */
  externalId?: Maybe<Scalars['String']['output']>;
  /** Retrieves the attributes used to download web content. */
  faq?: Maybe<TotalWebFaq>;
  /** Retrieves the attributes used to download web content */
  faqQuery: FaqQueryReturn;
  /** A Map of all the intents and their locations for mapping intents. */
  graph?: Maybe<IntentsGraph>;
  /** The handlers that are associated with the app. */
  handlers?: Maybe<HandlersQuery>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: Maybe<Scalars['String']['output']>;
  /** Retrieve the data for an integration. */
  integration: Integration;
  /** The intents that are associated with the app. */
  intents?: Maybe<IntentsQuery>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: Maybe<Scalars['String']['output']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']['output']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: Maybe<IpRights>;
  /** Whether or not the app is copyable to another organization. */
  isCopyable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: Maybe<Scalars['String']['output']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']['output']>;
  /** The Email address to send lead captures to. */
  leadsContact?: Maybe<Scalars['EmailAddress']['output']>;
  /** The phone number of a leads user. */
  leadsContactPhone?: Maybe<Scalars['String']['output']>;
  limitations: AppLimitations;
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
  mediumIcon?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the app. */
  name: Scalars['String']['output'];
  /** The NLUs that are available to the app. */
  nlu?: Maybe<Array<Maybe<AppNlu>>>;
  /** Potential opportunities. */
  opportunityAlerts: Array<BaseOpportunityAlert>;
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['ID']['output'];
  /** Google PlaceIds that correspond with the business. */
  places?: Maybe<Array<AppPlaceDescription>>;
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: Maybe<PlatformData>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  /** A referenceId is an ID of the app in a difference service outside this API */
  refernceId?: Maybe<AppReferenceId>;
  /** The status that the app is currently in Stentor. */
  schedules: AppSchedules;
  /** The leads by session id */
  sessionLeads: SessionLeadsResult;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']['output']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<Status>;
  /** The product that is linked to the subscription to this app in Stripe. */
  stripeProductId?: Maybe<Scalars['String']['output']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<SubscriptionDetails>;
  /** The payment status in Stripe. */
  subscriptionPaymentStatus?: Maybe<Scalars['String']['output']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: Maybe<Scalars['String']['output']>;
  /** Retrieves a list of notifications that the user should see related to the app. */
  systemNotifications?: Maybe<Array<Maybe<SystemNotification>>>;
  /** Type of template the app and its intents adhere to. */
  templateType?: Maybe<Scalars['String']['output']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: Maybe<Scalars['String']['output']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: Maybe<Scalars['String']['output']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: Maybe<ThirdPartyDeployments>;
  /** The usage statistics related to the app. */
  usage: AppUsageStats;
  /** Retrieves any events that are related to this specific app */
  usageEvents?: Maybe<TotalUsageEvents>;
  /** Primary website for the company or division of a company that the app is representing. */
  website?: Maybe<Scalars['String']['output']>;
  /** Data related to what was found on the customers website */
  websiteData?: Maybe<AppWebsiteData>;
};


export type AppAccessArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  refererDomain?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type AppCaughtLeadsArgs = {
  nextKey?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};


export type AppCaughtOpportunityAlertsArgs = {
  nextKey?: InputMaybe<Scalars['String']['input']>;
};


export type AppChannelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type AppContentArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  textHighlight?: InputMaybe<Scalars['String']['input']>;
};


export type AppContentErrorsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AppContentSourcesArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AppEntitiesArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  withDisplayName?: InputMaybe<Scalars['String']['input']>;
  withId?: InputMaybe<Scalars['String']['input']>;
  withIdOrDisplayName?: InputMaybe<Scalars['String']['input']>;
  withSynonym?: InputMaybe<Scalars['String']['input']>;
  withValue?: InputMaybe<Scalars['String']['input']>;
  withValueOrSynonym?: InputMaybe<Scalars['String']['input']>;
};


export type AppEventsArgs = {
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byFlag?: InputMaybe<Array<InputMaybe<RawQueryEventFlag>>>;
  byMatchConfidenceRange?: InputMaybe<MatchConfidenceRange>;
  byName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byPlatform?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bySimilarRawQueries?: InputMaybe<Scalars['String']['input']>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  newSessionsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  noFlag?: InputMaybe<Scalars['Boolean']['input']>;
  rawQueryOnly?: InputMaybe<Scalars['Boolean']['input']>;
  rawQueryOrSlotsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  rawQueryText?: InputMaybe<Scalars['String']['input']>;
  responseOutputText?: InputMaybe<Scalars['String']['input']>;
  responseRepromptText?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type AppFaqArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type AppFaqQueryArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AppGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type AppHandlersArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  withId?: InputMaybe<Scalars['String']['input']>;
  withIdOrName?: InputMaybe<Scalars['String']['input']>;
  withName?: InputMaybe<Scalars['String']['input']>;
};


export type AppIntegrationArgs = {
  type: IntegrationType;
};


export type AppIntentsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  withId?: InputMaybe<Scalars['String']['input']>;
  withIdOrName?: InputMaybe<Scalars['String']['input']>;
  withName?: InputMaybe<Scalars['String']['input']>;
};


export type AppSchedulesArgs = {
  previousKey?: InputMaybe<Scalars['String']['input']>;
};


export type AppSessionLeadsArgs = {
  sessionId?: InputMaybe<Scalars['String']['input']>;
};


export type AppUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppAnalytics = {
  user: AppUsageStat;
};


export type AppAnalyticsUserArgs = {
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};

export type AppChannel = BaseAppChannel & {
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type AppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppChannelInput = {
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
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
  /**
   * Adds a custom channel to the app.
   *
   * @deprecated Please use the specific channel mutation instead.
   */
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
  addFormWidgetChannel: FormWidgetAppChannel;
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


export type AppChannelMutationAddFormWidgetChannelArgs = {
  channel: FormWidgetAppChannelInput;
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
  channelId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppChannelStatus = {
  /** The email of the user who last changed the status. */
  email: Scalars['String']['output'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /** A brief history of the status changes. */
  statusHistory?: Maybe<Array<Maybe<AppChannelStatusHistory>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['output'];
  /** The status level of the app. */
  type: Scalars['String']['output'];
};

export type AppChannelStatusHistory = {
  /** The email of the user who changed the status. */
  email: Scalars['String']['output'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['output'];
  /** The status level that the app was. */
  type: Scalars['String']['output'];
};

export type AppInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']['input']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Unique identifier of the app in Stentor.
   * If not provided then the name will derive the appId.
   */
  appId?: InputMaybe<Scalars['ID']['input']>;
  /** Settings for the availability of the CRM service. */
  availability?: InputMaybe<CrmServiceAvailabilitySettingsInput>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']['input']>;
  beta?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * A description of the business and it's services.
   *
   * This can be used for LLM operations
   */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /**
   * A description of what they consider to be high value leads, prioritized queries that they
   * want to be notified immediately.
   *
   * This can be used for LLM operations
   */
  businessHighValueLeadDescription?: InputMaybe<Scalars['String']['input']>;
  /** The hours in which the business related to the app is open. */
  businessHours?: InputMaybe<Array<BusinessHoursInput>>;
  /** Third party analytics platforms. */
  dataStreams?: InputMaybe<DataStreamsInput>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The URL where the app is served. */
  endPoint?: InputMaybe<EndpointInput>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']['input']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']['input']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']['input']>;
  /** The Email address to send lead captures to. */
  leadsContact?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** The phone number of a leads user. */
  leadsContactPhone?: InputMaybe<Scalars['String']['input']>;
  /** Physical location associated with the app. */
  location?: InputMaybe<LocationInput>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the app. */
  name: Scalars['String']['input'];
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['ID']['input'];
  /** Google PlaceIds that correspond with the business. */
  places?: InputMaybe<Array<AppPlaceDescriptionInput>>;
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: InputMaybe<PlatformDataInput>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  /** A referenceId is an ID of the app in a difference service outside this API */
  refernceId?: InputMaybe<AppReferenceIdInput>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']['input']>;
  /** The status that the app is currently in Stentor. */
  status?: InputMaybe<StatusInput>;
  /** The product that is linked to the subscription to this app in Stripe. */
  stripeProductId?: InputMaybe<Scalars['String']['input']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  /** The payment status in Stripe. */
  subscriptionPaymentStatus?: InputMaybe<Scalars['String']['input']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** Type of template the app and its intents adhere to. */
  templateType?: InputMaybe<Scalars['String']['input']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']['input']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']['input']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: InputMaybe<ThirdPartyDeploymentsInput>;
  /** Primary website for the company or division of a company that the app is representing. */
  website?: InputMaybe<Scalars['URLString']['input']>;
  /** Data related to what was found on the customers website */
  websiteData?: InputMaybe<AppWebsiteDataInput>;
};

export type AppLimitations = {
  /** Whether the app can tag leads using AI */
  aiLeadTagging: Scalars['Boolean']['output'];
  /** The integrations that are allowed in the app */
  allowedIntegrations: Array<Scalars['String']['output']>;
  /** Whether the app can capture leads from the widget */
  captureLead: Scalars['Boolean']['output'];
  /** Whether a business representative can enter a live chat and talk to the client. */
  liveTakeover: Scalars['Boolean']['output'];
  /** The maximum number of entities that can be created in the app */
  maxEntities: Scalars['Int']['output'];
  /** The maximum number of handlers that can be created in the app */
  maxHandlers: Scalars['Int']['output'];
  /** The maximum number of intents that can be created in the app */
  maxIntents: Scalars['Int']['output'];
  /** The maximum number of Kendra documents that can be indexed in the app */
  maxKendraDocs: Scalars['Int']['output'];
  /** Whether the users can set preferred time for the appointment */
  preferredTime: Scalars['Boolean']['output'];
  /** Whether the app can be use the Reserve With Google actions widget. */
  reserveWithGoogle: Scalars['Boolean']['output'];
  /** Whether the app can use the schedule widget */
  schedule: Scalars['Boolean']['output'];
  /** Whether the app can access the chat transcript for a lead */
  transcriptAccess: Scalars['Boolean']['output'];
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
  appId?: InputMaybe<Scalars['ID']['input']>;
  modelOnly?: InputMaybe<Scalars['Boolean']['input']>;
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['URL']['input'];
};


export type AppMutationUpdateArgs = {
  appId: Scalars['ID']['input'];
};

export type AppNlu = BaseAppNlu & {
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']['output']>;
  /** The type of NLU. */
  type: Scalars['String']['output'];
};

export type AppNluInput = {
  /** The reference ID for the NLU */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The type of NLU. */
  type: Scalars['String']['input'];
};

export type AppPlaceDescription = {
  /** Legacy: Use formattedAddress */
  address?: Maybe<Scalars['String']['output']>;
  addressComponents?: Maybe<Array<AppPlaceDescriptionAddressComponent>>;
  /** Whether or not this business has been verified to be the owner of the Google PlaceId. */
  adminVerified?: Maybe<Scalars['Boolean']['output']>;
  /** Allows the business to opt-out of having a book online button on their profile. */
  bookingOptOut?: Maybe<Scalars['Boolean']['output']>;
  default?: Maybe<Scalars['Boolean']['output']>;
  formattedAddress?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  placeId?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['URLString']['output']>;
};

export type AppPlaceDescriptionAddressComponent = {
  /** The full text description or name of the address component as returned by the Google Places API Geocoder. */
  longName?: Maybe<Scalars['String']['output']>;
  /**
   * An abbreviated textual name for the address component, if available.
   * For example, an address component for the state of Alaska may have a longName of
   * "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation.
   */
  shortName?: Maybe<Scalars['String']['output']>;
  /** An array of strings denoting the type of this address component. */
  types?: Maybe<Array<Scalars['String']['output']>>;
};

export type AppPlaceDescriptionAddressComponentInput = {
  /** The full text description or name of the address component as returned by the Google Places API Geocoder. */
  longName?: InputMaybe<Scalars['String']['input']>;
  /**
   * An abbreviated textual name for the address component, if available.
   * For example, an address component for the state of Alaska may have a longName of
   * "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation.
   */
  shortName?: InputMaybe<Scalars['String']['input']>;
  /** An array of strings denoting the type of this address component. */
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AppPlaceDescriptionInput = {
  addressComponents?: InputMaybe<Array<AppPlaceDescriptionAddressComponentInput>>;
  /**
   * Allows the business to opt-out of having a book online button on their profile.
   *
   * This may take 24 hours to fully take effect.
   */
  bookingOptOut?: InputMaybe<Scalars['Boolean']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  placeId?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['URLString']['input']>;
};

export type AppReferenceId = {
  /** The ID of as it is in the service. */
  id: Scalars['ID']['output'];
  /** The service that the ID is referencing to. */
  service: Scalars['String']['output'];
};

export type AppReferenceIdInput = {
  /** The ID of as it is in the service. */
  id: Scalars['ID']['input'];
  /** The service that the ID is referencing to. */
  service: Scalars['String']['input'];
};

export type AppSchedules = {
  /** The key to include in the next query of schedules. */
  nextKey?: Maybe<Scalars['String']['output']>;
  /** The schedules that were found */
  schedules: Array<Maybe<WebCrawlSchedule>>;
};

export type AppSubscriptionMutation = {
  update: UpdateAppSubscriptionMutation;
};

export type AppTemplateInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']['input']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']['input']>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']['input']>;
  /** The location of the collaboration agreement between the app and XAPP. */
  collaborationAgreementUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']['input']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']['input']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']['input']>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the app. */
  name: Scalars['String']['input'];
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']['input']>;
  stripeProductId?: InputMaybe<Scalars['String']['input']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** The type of template that the app is to build from. */
  templateType: AppTemplateType;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']['input']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']['input']>;
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
  appId: Scalars['ID']['output'];
  /** COnfigurations for executing the test. */
  config?: Maybe<TestConfig>;
  /** The time that the test was created.  Format: ISO 8601 */
  createdOn: Scalars['String']['output'];
  /** Utterance Test Only: The expected result of the utterance test. */
  expectedResult?: Maybe<ExpectedUtteranceTestResult>;
  /** A list of the test history. */
  history?: Maybe<Array<Maybe<TestHistory>>>;
  /** Utterance Tests Only: The platform that the test should run on.  If not present, it will run on all platforms. */
  platform?: Maybe<Scalars['String']['output']>;
  /** Do Nothing Tests Only: The result of the test. */
  result?: Maybe<Scalars['String']['output']>;
  /** The state that the test is currently in. If there is no state, then the test was never executed. */
  state?: Maybe<TestState>;
  /** The unique identifier for the test. */
  testId: Scalars['ID']['output'];
  /** The type of tests that this is. */
  testType: Scalars['String']['output'];
  /** Utterance Tests Only: The utterance that the test is executing for. */
  utterance?: Maybe<Scalars['String']['output']>;
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
  appId: Scalars['ID']['output'];
  /** A CSV formatted output of the stats found. */
  csv: UsageStatCsvReturn;
  intervals: Array<Maybe<UsageStat>>;
  newUsers: Scalars['Int']['output'];
  returningUsers: Scalars['Int']['output'];
  totalSessions: Scalars['Int']['output'];
  totalUsers: Scalars['Int']['output'];
};

export type AppUsageStats = {
  /** The kendra documents that are currently downloaded to the app. */
  kendraDocs: MeteredStat;
};

export type AppWebsiteData = {
  /**
   * Calls to action such as "Free Quote", "Schedule Consultation".
   *
   * These can be used as suggestion chips.
   */
  callsToAction?: Maybe<Array<Scalars['String']['output']>>;
  /** The detected Content Management System (CMS) of the website. */
  cms?: Maybe<Scalars['String']['output']>;
  /** The last time that the crawl was completed that gathered this data. */
  crawlDate?: Maybe<Scalars['DateTime']['output']>;
  /** The executionId of the last crawl that collected this data. */
  crawlExecutionId?: Maybe<Scalars['String']['output']>;
  /** Primary theme color, hex value, based on an image of the website. */
  primaryColor?: Maybe<Scalars['String']['output']>;
  /** Secondary color, hex value, that complements the primary color on the website. */
  secondaryColor?: Maybe<Scalars['String']['output']>;
};

export type AppWebsiteDataInput = {
  /**
   * Calls to action such as "Free Quote", "Schedule Consultation".
   *
   * These can be used as suggestion chips.
   */
  callsToAction?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The detected Content Management System (CMS) of the website. */
  cms?: InputMaybe<Scalars['String']['input']>;
  /** The last time that the crawl was completed that gathered this data. */
  crawlDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The executionId of the last crawl that collected this data. */
  crawlExecutionId?: InputMaybe<Scalars['String']['input']>;
  /** Primary theme color, hex value, based on an image of the website. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** Secondary color, hex value, that complements the primary color on the website. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
};

/** A collections query which returns a collection of apps */
export type AppsQuery = {
  /** A subset of apps that were viewed. */
  apps?: Maybe<Array<Maybe<SearchedApp>>>;
  /** The total number of apps that were found in the query */
  total: Scalars['Int']['output'];
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
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type BaseAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type BaseAppNlu = {
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']['output']>;
  /** The type of NLU. */
  type: Scalars['String']['output'];
};

export type BaseDisplay = {
  payload?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BaseHandlerPath = {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
};

export type BaseOpportunityAlert = {
  /** Registered alerts */
  alerts: Array<OpportunityAlertDetail>;
  /** Temporarily disable the alert */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The Google PlaceID for the location */
  placeId?: Maybe<Scalars['String']['output']>;
};

export type BaseStudioTierPaymentAccount = {
  tier?: Maybe<StudioTierType>;
};

export type BaseSystemNotification = {
  /** A time when the notification was received */
  created: Scalars['DateTime']['output'];
  /** A unique identifier for the notification */
  id: Scalars['ID']['output'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String']['output'];
  /** A title or name of the notification */
  name: Scalars['String']['output'];
};

export type BaseWebContent = {
  /** Unique ID for the web content */
  _id: Scalars['String']['output'];
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime']['output'];
  /** The name of the content */
  name: Scalars['String']['output'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String']['output'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String']['output'];
};

export type BespokenDataStream = {
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BespokenDataStreamInput = {
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type BillingContact = {
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type BillingContactInput = {
  /**
   * The email of the contact.
   *
   * Required
   */
  email: Scalars['String']['input'];
  /** The name of the contact */
  name: Scalars['String']['input'];
  /**
   * The phone number of the contact.
   *
   * Optional
   */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type BlacklistedWebsite = {
  /** The user that blacklisted the website. */
  blacklistedBy?: Maybe<Scalars['String']['output']>;
  /** The date which the website was blacklisted */
  createdOn: Scalars['DateTime']['output'];
  /** URL of the blacklisted website. */
  url: Scalars['String']['output'];
};

export type BrandContact = {
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type BrandContactInput = {
  /**
   * The email of the contact.
   *
   * Required
   */
  email: Scalars['String']['input'];
  /** The name of the contact */
  name: Scalars['String']['input'];
  /**
   * The phone number of the contact.
   *
   * Optional
   */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum BusinessDayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type BusinessHourPeriod = {
  open: BusinessHourPeriodDetail;
};

export type BusinessHourPeriodDetail = {
  day: BusinessDayOfWeek;
  time: Scalars['DateTime']['output'];
};

export type BusinessHourPeriodDetailInput = {
  /** The day that the period relates to. */
  day: BusinessDayOfWeek;
  time: Scalars['time_String_NotNull_format_date']['input'];
};

export type BusinessHourPeriodInput = {
  open: BusinessHourPeriodDetailInput;
};

export type BusinessHours = {
  periods: Array<BusinessHourPeriod>;
};

export type BusinessHoursInput = {
  /** Each day that the busines is open. */
  periods: Array<BusinessHourPeriodInput>;
};

export type CmsMutation = {
  create: CreateCmsReturn;
  /** Update operations for CMS tokens related to the app. */
  update: CmsUpdateMutation;
};


export type CmsMutationUpdateArgs = {
  tokenId: Scalars['ID']['input'];
};

export type CmsToken = {
  /** The appId of the app that the token is associated with. */
  appId?: Maybe<Scalars['ID']['output']>;
  /** The day the token was created. */
  created: Scalars['DateTime']['output'];
  /** The last time the token was used. */
  lastUsed?: Maybe<Scalars['DateTime']['output']>;
  /** A partial human-readable portion of the token */
  mask: Scalars['String']['output'];
  /** The organizationId of the organization that the token is associated with. */
  organizationId?: Maybe<Scalars['ID']['output']>;
  /** The permissions that the token grants. */
  scope: Array<Maybe<Scalars['String']['output']>>;
  /** The ID of the token that was created */
  tokenId: Scalars['ID']['output'];
};

export type CmsUpdateMutation = {
  /** Removes the CMS token provided. */
  delete: Scalars['String']['output'];
};

export type CrmAvailabilityClass = {
  /**
   * Maximum number of appointments that can be scheduled per day for this type.
   *
   * If not provided, it is assumed to be unlimited.
   */
  appointmentsPerDay?: Maybe<Scalars['Int']['output']>;
  /** ID for the availability class, typically the slugged name. */
  id: Scalars['String']['output'];
  /** If true, this availability class is only for leads and not for appointments as they typically require more information and followup. */
  leadOnly?: Maybe<Scalars['Boolean']['output']>;
  /** Human readable name of the availability class */
  name: Scalars['String']['output'];
  /**
   * Minimum number of days out that can be scheduled for this type.
   *
   * This is independent of if the day is available or not.
   *
   * Value of 0 is the default if not provided, meaning same day could be available.
   */
  numberOfDaysOut?: Maybe<Scalars['Int']['output']>;
  /** Summary of the availability class.  This is used to describe the availability class so the AI can match it to user input.  It contains high level description as well as examples of input that would match to this class. */
  summary: Scalars['String']['output'];
};

export type CrmAvailabilityClassInput = {
  /**
   * Maximum number of appointments that can be scheduled per day for this type.
   *
   * If not provided, it is assumed to be unlimited.
   */
  appointmentsPerDay?: InputMaybe<Scalars['Int']['input']>;
  /** ID for the availability class, typically the slugged name. */
  id: Scalars['String']['input'];
  /** If true, this availability class is only for leads and not for appointments as they typically require more information and followup. */
  leadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Human readable name of the availability class */
  name: Scalars['String']['input'];
  /**
   * Minimum number of days out that can be scheduled for this type.
   *
   * This is independent of if the day is available or not.
   *
   * Value of 0 is the default if not provided, meaning same day could be available.
   */
  numberOfDaysOut?: InputMaybe<Scalars['Int']['input']>;
  /** Summary of the availability class.  This is used to describe the availability class so the AI can match it to user input.  It contains high level description as well as examples of input that would match to this class. */
  summary: Scalars['String']['input'];
};

export type CrmDateTime = {
  /** ISO-8601 for the date, in the format YYYY-MM-dd */
  date?: Maybe<Scalars['String']['output']>;
  /** ISO-8601 for time, in the format HH:mm:ss */
  time?: Maybe<Scalars['String']['output']>;
  /** ISO-8601 timezone offset string in the format -05:00 or Z */
  tz?: Maybe<Scalars['String']['output']>;
};

export type CrmDateTimeInput = {
  /** ISO-8601 for the date, in the format YYYY-MM-dd */
  date?: InputMaybe<Scalars['String']['input']>;
  /** ISO-8601 for time, in the format HH:mm:ss */
  time?: InputMaybe<Scalars['String']['input']>;
  /** ISO-8601 timezone offset string in the format -05:00 or Z */
  tz?: InputMaybe<Scalars['String']['input']>;
};

export enum CrmDayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type CrmServiceAvailabilitySettings = {
  /** The customer specific "availability classes" that describes the scheduling strategy for job types. */
  availabilityClasses?: Maybe<Array<Maybe<CrmAvailabilityClass>>>;
  /** The days of the week they are available to schedule appointments through the scheduler. */
  availableDays?: Maybe<Array<Maybe<CrmDayOfWeek>>>;
  /** These are holidays or any other days specific to the business that they are not available for appointments. */
  blockedDays?: Maybe<Array<Maybe<CrmDateTime>>>;
  /** The default availability class (when the AI cannot figure it out) */
  defaultAvailabilityClass?: Maybe<Scalars['String']['output']>;
  /** Job types, where we only schedule a few days (3) ahead */
  delayedJobTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum total number of appointments a day that can be scheduled through the scheduler. */
  maxTotalDailyAppointments?: Maybe<Scalars['Int']['output']>;
};

export type CrmServiceAvailabilitySettingsInput = {
  /** The customer specific "availability classes" that describes the scheduling strategy for job types. */
  availabilityClasses?: InputMaybe<Array<InputMaybe<CrmAvailabilityClassInput>>>;
  /** The days of the week they are available to schedule appointments through the scheduler. */
  availableDays?: InputMaybe<Array<InputMaybe<CrmDayOfWeek>>>;
  /** These are holidays or any other days specific to the business that they are not available for appointments. */
  blockedDays?: InputMaybe<Array<InputMaybe<CrmDateTimeInput>>>;
  /** The default availability class (when the AI cannot figure it out) */
  defaultAvailabilityClass?: InputMaybe<Scalars['String']['input']>;
  /** Job types, where we only schedule a few days (3) ahead */
  delayedJobTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Maximum total number of appointments a day that can be scheduled through the scheduler. */
  maxTotalDailyAppointments?: InputMaybe<Scalars['Int']['input']>;
};

export enum CtaAnimation {
  Bounce = 'bounce',
  Wiggle = 'wiggle'
}

export type CardDisplay = BaseDisplay & {
  accessibilityText?: Maybe<Scalars['String']['output']>;
  buttons?: Maybe<Array<Maybe<CardDisplayButton>>>;
  content?: Maybe<Scalars['String']['output']>;
  /** When present, if the image is clicked the provided website will open. */
  imageActionUrl?: Maybe<Scalars['String']['output']>;
  largeImageUrl?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  smallImageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CardDisplayButton = {
  openUrlAction: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CardDisplayButtonInput = {
  openUrlAction: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CardDisplayInput = {
  accessibilityText?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<Array<InputMaybe<CardDisplayButtonInput>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  largeImageUrl?: InputMaybe<Scalars['String']['input']>;
  smallImageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type CaughtLead = {
  /** The company related to the lead. */
  company?: Maybe<Scalars['String']['output']>;
  /** The date that the lead was sent. */
  date: Scalars['DateTime']['output'];
  /** The integrations that the lead was successfully sent to. */
  integrationSent?: Maybe<Array<LeadSentToIntegration>>;
  /** The lead that was sent to the app. */
  lead?: Maybe<Lead>;
  /** The session that the lead is related to. */
  sessionId?: Maybe<Scalars['ID']['output']>;
  /** The source of the lead (chat widget, form, etc) */
  source?: Maybe<Scalars['String']['output']>;
  /** The user that the lead is related to. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CaughtLeadsResult = {
  /** The leads that were found. */
  leads: Array<CaughtLead>;
  /** The key to retrieve more leads or null if there are none left. */
  nextKey?: Maybe<Scalars['String']['output']>;
  /** The total number of leads that are available. */
  total: Scalars['Int']['output'];
};

export type CaughtOpportunityAlert = {
  /** The type of opportunity alert that was found. */
  oppAlertType: Scalars['String']['output'];
  /** The sessionId of the chat session that threw the opportunity alert. */
  sessionId: Scalars['String']['output'];
};

export type CaughtOpportunityAlertsResult = {
  /** The key to retrieve more opportunity alerts or null if there are none left. */
  nextKey?: Maybe<Scalars['String']['output']>;
  /** The opportunity alerts that were found. */
  oppAlerts: Array<CaughtOpportunityAlert>;
};

export type ChargeSummary = {
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
};

/** A channel that is specific for apps to run on the Actions On Google. */
export type ChatWidgetAppChannel = BaseAppChannel & {
  /** Optional key used for basic authentication */
  accountKey?: Maybe<Scalars['String']['output']>;
  autoOpenOnPattern?: Maybe<WidgetAutoOpenOnPattern>;
  autoOpenOnWidth?: Maybe<Scalars['String']['output']>;
  autocompleteSuggestionsUrl?: Maybe<Scalars['URLString']['output']>;
  /** The web location for the avatar */
  avatarUrl?: Maybe<Scalars['URL']['output']>;
  botName?: Maybe<Scalars['String']['output']>;
  chatButton?: Maybe<ChatWidgetChatButtonConfig>;
  configurableMessages?: Maybe<WidgetConfigurableMessagesConfig>;
  connection?: Maybe<ChatWidgetServerConfig>;
  cta?: Maybe<CtaConfig>;
  direct?: Maybe<Scalars['Boolean']['output']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** Widget is disabled */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  footer?: Maybe<ChatWidgetFooterConfig>;
  header?: Maybe<ChatWidgetHeaderConfig>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  input?: Maybe<ChatWidgetInputConfig>;
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: Maybe<Scalars['String']['output']>;
  menu?: Maybe<ChatWidgetMenuConfig>;
  middlewareUrl?: Maybe<Scalars['String']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The backend for the URL
   * @deprecated Use connection
   */
  serverUrl?: Maybe<Scalars['URLString']['output']>;
  sessionExpiration?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** Theme for the widget */
  theme?: Maybe<ChatWidgetTheme>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


/** A channel that is specific for apps to run on the Actions On Google. */
export type ChatWidgetAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatWidgetAppChannelInput = {
  /** Optional key used for basic authentication */
  accountKey?: InputMaybe<Scalars['String']['input']>;
  autoOpenOnPattern?: InputMaybe<WidgetAutoOpenOnPatternInput>;
  autoOpenOnWidth?: InputMaybe<Scalars['String']['input']>;
  autocompleteSuggestionsUrl?: InputMaybe<Scalars['URLString']['input']>;
  /** The web location for the avatar */
  avatarUrl?: InputMaybe<Scalars['URL']['input']>;
  botName?: InputMaybe<Scalars['String']['input']>;
  chatButton?: InputMaybe<ChatWidgetChatButtonConfigInput>;
  configurableMessages?: InputMaybe<WidgetConfigurableMessagesConfigInput>;
  connection?: InputMaybe<ChatWidgetServerConfigInput>;
  cta?: InputMaybe<CtaConfigInput>;
  direct?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** Widget is disabled */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<ChatWidgetInputConfigInput>;
  menu?: InputMaybe<ChatWidgetMenuConfigInput>;
  middlewareUrl?: InputMaybe<Scalars['URLString']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * The backend for the URL
   *
   * @deprecated use connection
   */
  serverUrl?: InputMaybe<Scalars['URLString']['input']>;
  sessionExpiration?: InputMaybe<Scalars['String']['input']>;
  /** Theme for the widget */
  theme?: InputMaybe<ChatWidgetThemeInput>;
  /** The type of channel */
  type: Scalars['String']['input'];
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
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetAppChannelUrlBehaviorBase = {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlBehaviorInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatWidgetAppChannelUrlBehaviorNewTab = ChatWidgetAppChannelUrlBehaviorBase & {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlBehaviorNewWindow = ChatWidgetAppChannelUrlBehaviorBase & {
  height?: Maybe<Scalars['Int']['output']>;
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
  width?: Maybe<Scalars['Int']['output']>;
};

/** @deprecated(reason: "Use ChatWidgetAppChannelUrlBehaviorInput") */
export type ChatWidgetAppChannelUrlBehaviorNewWindowWinowInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatWidgetAppChannelUrlBehaviorSameWindow = ChatWidgetAppChannelUrlBehaviorBase & {
  type: ChatWidgetAppChannelWidgetUrlBehaviorType;
};

export type ChatWidgetAppChannelUrlPolicy = {
  behavior: ChatWidgetAppChannelUrlBehaviorBase;
  pattern: Scalars['String']['output'];
};

export type ChatWidgetAppChannelUrlPolicyInput = {
  behavior: ChatWidgetAppChannelUrlBehaviorInput;
  pattern: Scalars['String']['input'];
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
  color?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetBrandingConfig = {
  enabled?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetBrandingConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetBrandingTheme = {
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetBrandingThemeInput = {
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetButtonTheme = {
  color?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetButtonThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
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
  /** URL to an image for the button. Recommended to be 24x24 in size. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  tabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetChatButtonConfigInput = {
  /** URL to an image for the button. Recommended to be 24x24 in size. */
  imageUrl?: InputMaybe<Scalars['URLString']['input']>;
  tabIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetChatButtonTheme = {
  /** Widget chat button color */
  background?: Maybe<Scalars['String']['output']>;
  /** Widget margin */
  margin?: Maybe<ChatWidgetMarginsTheme>;
};

export type ChatWidgetChatButtonThemeInput = {
  /** Widget chat button color */
  background?: InputMaybe<Scalars['String']['input']>;
  /** Widget margin */
  margin?: InputMaybe<ChatWidgetMarginsThemeInput>;
};

export type ChatWidgetClearButtonConfig = {
  tabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetClearButtonConfigInput = {
  tabIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetContentTheme = {
  background?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetContentThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetCtaTheme = {
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetCtaThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
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
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  branding?: Maybe<ChatWidgetBrandingTheme>;
};

export type ChatWidgetFooterThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  branding?: InputMaybe<ChatWidgetBrandingThemeInput>;
};

export type ChatWidgetHeaderActionsConfig = {
  cancel?: Maybe<Scalars['Boolean']['output']>;
  cancelTabIndex?: Maybe<Scalars['String']['output']>;
  minimize?: Maybe<Scalars['Boolean']['output']>;
  minimizeTabIndex?: Maybe<Scalars['String']['output']>;
  refresh?: Maybe<Scalars['Boolean']['output']>;
  refreshTabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetHeaderConfig = {
  actions?: Maybe<ChatWidgetHeaderActionsConfig>;
  alignTextCenter?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<ChatWidgetHeaderStatusConfig>;
  subtitle?: Maybe<ChatWidgetHeaderSubtitleConfig>;
};

export type ChatWidgetHeaderConfigActionsInput = {
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  cancelTabIndex?: InputMaybe<Scalars['String']['input']>;
  minimize?: InputMaybe<Scalars['Boolean']['input']>;
  minimizeTabIndex?: InputMaybe<Scalars['String']['input']>;
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTabIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetHeaderConfigInput = {
  actions?: InputMaybe<ChatWidgetHeaderConfigActionsInput>;
  alignTextCenter?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<ChatWidgetHeaderStatusConfigInput>;
  subtitle?: InputMaybe<ChatWidgetHeaderSubtitleConfigInput>;
};

export type ChatWidgetHeaderStatusConfig = {
  away?: Maybe<Scalars['String']['output']>;
  connecting?: Maybe<Scalars['String']['output']>;
  offline?: Maybe<Scalars['String']['output']>;
  online?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetHeaderStatusConfigInput = {
  away?: InputMaybe<Scalars['String']['input']>;
  connecting?: InputMaybe<Scalars['String']['input']>;
  offline?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetHeaderSubtitleConfig = {
  enabled?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetHeaderSubtitleConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetHeaderTheme = {
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  subtitle?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetHeaderThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  subtitle?: InputMaybe<ChatWidgetTextThemeInput>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetInputConfig = {
  placeholder?: Maybe<Scalars['String']['output']>;
  tabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetInputConfigInput = {
  placeholder?: InputMaybe<Scalars['String']['input']>;
  tabIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetInputTheme = {
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  placeholder?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetInputThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  placeholder?: InputMaybe<ChatWidgetTextThemeInput>;
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetMarginsTheme = {
  bottom?: Maybe<Scalars['String']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetMarginsThemeInput = {
  bottom?: InputMaybe<Scalars['String']['input']>;
  left?: InputMaybe<Scalars['String']['input']>;
  right?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetMenuButtonConfig = {
  tabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetMenuButtonConfigInput = {
  tabIndex?: InputMaybe<Scalars['String']['input']>;
};

export enum ChatWidgetMenuButtonLocation {
  Footer = 'FOOTER',
  HeaderLeft = 'HEADER_LEFT'
}

export type ChatWidgetMenuConfig = {
  button?: Maybe<ChatWidgetMenuButtonConfig>;
  items?: Maybe<Array<Maybe<ChatWidgetMenuItems>>>;
  itemsTabIndex?: Maybe<Scalars['String']['output']>;
  menuButtonLocation?: Maybe<ChatWidgetMenuButtonLocation>;
};

export type ChatWidgetMenuConfigInput = {
  button?: InputMaybe<ChatWidgetMenuButtonConfigInput>;
  items?: InputMaybe<Array<InputMaybe<ChatWidgetMenuItemConfigInput>>>;
  itemsTabIndex?: InputMaybe<Scalars['String']['input']>;
  menuButtonLocation?: InputMaybe<ChatWidgetMenuButtonLocation>;
};

export type ChatWidgetMenuItemConfig = {
  label?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetMenuItemConfigInput = {
  behavior?: InputMaybe<ChatWidgetAppChannelUrlBehaviorInput>;
  body?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetMenuItemOpenUrl = {
  /** How the URL opens, defaults to defined behavior on URL opening config. */
  behavior?: Maybe<ChatWidgetAppChannelUrlBehaviorBase>;
  /** Display label for the URL */
  text: Scalars['String']['output'];
  /** URL to be opened */
  url: Scalars['String']['output'];
};

export type ChatWidgetMenuItemStaticImage = {
  imageUrl?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetMenuItemStaticText = {
  body?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetMenuItemTheme = {
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<ChatWidgetBorderTheme>;
  height?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<ChatWidgetTextTheme>;
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetMenuItemThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<ChatWidgetBorderThemeInput>;
  height?: InputMaybe<Scalars['String']['input']>;
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
  bubbleColor?: Maybe<Scalars['String']['output']>;
  /** Message text color */
  text?: Maybe<ChatWidgetTextTheme>;
};

export type ChatWidgetMessageThemeInput = {
  /** Message bubble color */
  bubbleColor?: InputMaybe<Scalars['String']['input']>;
  /** Message text color */
  text?: InputMaybe<ChatWidgetTextThemeInput>;
};

export type ChatWidgetMessagesTheme = {
  maxWidth?: Maybe<Scalars['String']['output']>;
  mine?: Maybe<ChatWidgetMessageTheme>;
  others?: Maybe<ChatWidgetMessageTheme>;
  padding?: Maybe<ChatWidgetPaddingTheme>;
};

export type ChatWidgetMessagesThemeInput = {
  maxWidth?: InputMaybe<Scalars['String']['input']>;
  mine?: InputMaybe<ChatWidgetMessageThemeInput>;
  others?: InputMaybe<ChatWidgetMessageThemeInput>;
  padding?: InputMaybe<ChatWidgetPaddingThemeInput>;
};

export type ChatWidgetPaddingTheme = {
  bottom?: Maybe<Scalars['String']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetPaddingThemeInput = {
  bottom?: InputMaybe<Scalars['String']['input']>;
  left?: InputMaybe<Scalars['String']['input']>;
  right?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetSendButtonConfig = {
  icon?: Maybe<Scalars['String']['output']>;
  tabIndex?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetSendButtonConfigInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  tabIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetServerConfig = {
  accountKey?: Maybe<Scalars['String']['output']>;
  serverUrl?: Maybe<Scalars['URLString']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetServerConfigInput = {
  accountKey?: InputMaybe<Scalars['String']['input']>;
  serverUrl?: InputMaybe<Scalars['URLString']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetSizeTheme = {
  height?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetSizeThemeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetTextTheme = {
  color?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
  fontStyle?: Maybe<Scalars['String']['output']>;
  fontWeight?: Maybe<Scalars['String']['output']>;
};

export type ChatWidgetTextThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
  fontStyle?: InputMaybe<Scalars['String']['input']>;
  fontWeight?: InputMaybe<Scalars['String']['input']>;
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
  primaryColor?: Maybe<Scalars['String']['output']>;
  /** ChatWidget refreshButton styling */
  refreshButton?: Maybe<ChatWidgetButtonTheme>;
  /** ChatWidget sendButton styling */
  sendButton?: Maybe<ChatWidgetButtonTheme>;
  sessionExpiration?: Maybe<Scalars['String']['output']>;
  /** Widget size */
  size?: Maybe<ChatWidgetSizeTheme>;
  textTypingStatus?: Maybe<ChatWidgetTextTypingStatusTheme>;
  /** Widget z-index */
  zIndex?: Maybe<Scalars['String']['output']>;
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
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** ChatWidget menuButton Styling */
  refreshButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  /** ChatWidget sendButton styling */
  sendButton?: InputMaybe<ChatWidgetButtonThemeInput>;
  sessionExpiration?: InputMaybe<Scalars['String']['input']>;
  /** Widget size */
  size?: InputMaybe<ChatWidgetSizeThemeInput>;
  textTypingStatus?: InputMaybe<ChatWidgetTextTypingStatusThemeInput>;
  /** Widget z-index */
  zIndex?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWidgetTypingStatusConfig = {
  textTypingStatusEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type ChatWidgetTypingStatusConfigInput = {
  textTypingStatusEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatbaseDataStream = {
  type: Scalars['String']['output'];
};

export type ChatbaseDataStreamInput = {
  type: Scalars['String']['input'];
};

export type ClearFaqReturn = {
  /** The task ID of the faq clear which can be queried to check if it's done. */
  taskId: Scalars['ID']['output'];
};

export type CodeChallenge = {
  codeChallenge: Scalars['String']['output'];
  codeChallengeMethod: Scalars['String']['output'];
  codeVerifier: Scalars['String']['output'];
};

export type CompilableHandlerPath = HistoricalHandlerPath | PreviousHandlerPath;

/** Attributes that can be overriden in the copyApp when creating the new app */
export type CopyAppOverrideAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCmsReturn = {
  /** The appId of the app that the token is associated with. */
  appId?: Maybe<Scalars['ID']['output']>;
  /** The day the token was created. */
  created: Scalars['DateTime']['output'];
  /** The last time the token was used. */
  lastUsed?: Maybe<Scalars['DateTime']['output']>;
  /** A partial human-readable portion of the token */
  mask: Scalars['String']['output'];
  /** The organizationId of the organization that the token is associated with. */
  organizationId?: Maybe<Scalars['ID']['output']>;
  /** The permissions that the token grants. */
  scope: Array<Maybe<Scalars['String']['output']>>;
  /** The authorization token that was generated for this app. */
  token: Scalars['String']['output'];
  /** The ID of the token that was created */
  tokenId: Scalars['ID']['output'];
};

export type CreateInteractionModelReturn = {
  /** The model that was created. */
  interactionModel: AlexaInteractionModel;
  /** The locale that the interaction model is for. */
  locale: Scalars['String']['output'];
};

export type CreateOrgCreateAppInput = {
  /** The new app that will be created upon org creation. */
  app: CreateOrganizationAppInput;
  /** Entities that are to be added to the app. */
  entities?: InputMaybe<Array<UpdateEntityInput>>;
  /** Handlers that are to be added to the app. */
  handlers?: InputMaybe<Array<AddHandlerInput>>;
  /** Intents that are to be added to the app. */
  intents?: InputMaybe<Array<AddIntentInput>>;
};

export type CreateOrgReturn = {
  /** The returned app after app creation. */
  app?: Maybe<App>;
  org: Organization;
};

/** Attributes that are linked to an app when creating one. */
export type CreateOrganizationAppInput = {
  /** URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080. */
  banner?: InputMaybe<Scalars['URL']['input']>;
  /** A description of the business and it's services. */
  businessDescription?: InputMaybe<Scalars['businessDescription_String_maxLength_4000']['input']>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['description_String_maxLength_4000']['input']>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['URL']['input']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<Scalars['keywords_List_String_NotNull_maxLength_50']['input']>>;
  /** The human-readable name of the app. */
  name: Scalars['name_String_NotNull_maxLength_150']['input'];
  /** Type of template the app and its intents adhere to. */
  templateType?: InputMaybe<Scalars['templateType_String_maxLength_50']['input']>;
  /** Primary website for the company or division of a company that the app is representing. */
  website?: InputMaybe<Scalars['URL']['input']>;
};

export type CreateOrganizationInput = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: InputMaybe<Scalars['XAPPLead_String_maxLength_150_format_email']['input']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: InputMaybe<Scalars['awsEventBusArn_String_maxLength_200_pattern_arnawsusgovcneventsaz0909eventbus']['input']>;
  /**
   * The email address of a user who can be contacted about issues
   * related to the organization.
   */
  contact?: InputMaybe<Scalars['contact_String_maxLength_150_format_email']['input']>;
  /** The organization contact's name. */
  contactName?: InputMaybe<Scalars['contactName_String_maxLength_150']['input']>;
  /** The organization contact's phone number. */
  contactPhone?: InputMaybe<Scalars['contactPhone_String_maxLength_50']['input']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: InputMaybe<Scalars['contractDate_String_format_ISO8601']['input']>;
  /** The human-readable description of the organization. */
  description?: InputMaybe<Scalars['description_String_maxLength_4000']['input']>;
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: InputMaybe<IPrightsInput>;
  /** URL for the organization's logo. */
  logoUrl?: InputMaybe<Scalars['URL']['input']>;
  /** The human-readable name of the organization. */
  name: Scalars['name_String_NotNull_maxLength_150']['input'];
  /** Any notes that are related to the organization. */
  notes?: InputMaybe<Scalars['notes_String_maxLength_4000']['input']>;
  /**
   * A unique ID for the organization. If one is not provided then the ID will
   * be based off the name.
   */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  /** Payment account information */
  paymentAccounts?: InputMaybe<PaymentAccountsInput>;
  /**
   * Third party publishing account information such as Amazon SMAPI's
   * service or Google's Dialogflow.
   */
  publishingAccounts?: InputMaybe<PublishingAccountsInput>;
  /** A URL to the organization's website. */
  website?: InputMaybe<Scalars['URL']['input']>;
};

export type CtaConfig = {
  /** Animation to perform on the button after the delay */
  animation?: Maybe<CtaAnimation>;
  /** How long to keep the animation going, in milliseconds.  If an animation exists */
  animationTimeout?: Maybe<Scalars['Int']['output']>;
  /** The delay, in milliseconds, to wait until the message is displayed */
  delay?: Maybe<Scalars['Int']['output']>;
  /**
   * Message to display in the chat bubble.
   *
   * An empty message will not display the chat bubble.
   */
  message?: Maybe<Scalars['String']['output']>;
  /** CTA Config that is used when mobile devices load it. */
  mobile?: Maybe<MobileCtaConfig>;
  /** How long, in milliseconds, to display the message */
  timeout?: Maybe<Scalars['Int']['output']>;
};

export type CtaConfigInput = {
  animation?: InputMaybe<CtaAnimation>;
  animationTimeout?: InputMaybe<Scalars['Int']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<MobileCtaConfigInput>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
};

export enum CurrentTestState {
  /** Assigned to  the test state if the test is currently executing. */
  Running = 'RUNNING',
  /** Assigned to the test state if the test is no longer executing. */
  Stopped = 'STOPPED'
}

export type DashbotDataStream = {
  type: Scalars['String']['output'];
};

export type DashbotDataStreamInput = {
  type: Scalars['String']['input'];
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
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteIntentIdKey = {
  /** The appId that was deleted during a delete operation. */
  appId: Scalars['String']['output'];
  /** The intentId that was updated during a delete operation. */
  intentId: Scalars['String']['output'];
};

export type DeleteIntentReturn = {
  /** The updated graph. */
  graph: IntentsGraph;
  /** The intents that were updated in the operation */
  intents: Array<Maybe<DeleteIntentIdKey>>;
};


export type DeleteIntentReturnGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  alcoholAndTobaccoRelatedContent?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Are children under the age of 13 one of the intended audience of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows developers to designate that their Actions are family-friendly, so parents and kids
   * can find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: Maybe<Scalars['Boolean']['output']>;
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
  alcoholAndTobaccoRelatedContent?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Are childer under the age of 13 one of the intended audienced of your actions?
   *
   * If yes, you must join the Actions for Families program. The Actions for Families
   * program allows develpers to dsignate that their Actions are family-friendly, so parents and kids
   * cand find trusted, high-quality content more easily on teh Google Assistant.
   */
  intendedForUnderThirteen?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannel = BaseAppChannel & {
  /** For "dialogflow" type channels only. */
  additionalInformationQuestions?: Maybe<DialogflowAdditionalInformationQuestions>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** Whether or not the credentials for the channel has been uploaded. */
  hasCredentials: Scalars['Boolean']['output'];
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /**
   * Boolean used to determine if the channel is currently being build on
   * dialogflow.
   */
  isBuilding: Scalars['Boolean']['output'];
  modelManagementMode?: Maybe<Scalars['Boolean']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: DialogflowNluQuery;
  /** The ID of the project on Dialogflow */
  projectId: Scalars['ID']['output'];
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannelNluQueryArgs = {
  text: Scalars['String']['input'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type DialogflowAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type DialogflowAppChannelInput = {
  /**
   * For "actions-on-google" type channels only.
   *
   * @deprecated: Actions-on-google is no longer supported at all.  It is gone.
   */
  additionalInformationQuestions?: InputMaybe<DialogflowAdditionalInformationQuestionsInput>;
  /** URL to find the credentials for accessing Google Cloud Services */
  dialogflowCredentials?: InputMaybe<DialogflowCredentialsInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type DialogflowAppNlu = BaseAppNlu & {
  /**
   * The URL of the JSON style credentials that provided
   * access to performing queries against the Dialogflow API
   */
  credentialsURL?: Maybe<Scalars['String']['output']>;
  /** The reference ID for the NLU */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: DialogflowNluQuery;
  /** The project ID of the Dialogflow agent */
  projectId?: Maybe<Scalars['String']['output']>;
  /** The type of NLU. */
  type: Scalars['String']['output'];
};


export type DialogflowAppNluNluQueryArgs = {
  text: Scalars['String']['input'];
};

export type DialogflowAppNluInput = {
  /**
   * The dialogflow credentials associated with the input.
   *
   * This will be stored and returned with the "credentialsURL" in the Dialogflow NLU.
   */
  dialogflowCredentials?: InputMaybe<DialogflowCredentialsInput>;
  /** The reference ID for the NLU */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The project ID of the Dialogflow agent */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The type of NLU. */
  type: Scalars['String']['input'];
};

export type DialogflowCredentialsInput = {
  auth_provider_x509_cert_url?: InputMaybe<Scalars['String']['input']>;
  auth_uri?: InputMaybe<Scalars['String']['input']>;
  client_email: Scalars['String']['input'];
  client_id?: InputMaybe<Scalars['String']['input']>;
  client_x509_cert_url?: InputMaybe<Scalars['String']['input']>;
  private_key: Scalars['String']['input'];
  private_key_id?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  token_uri?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Attributes used for dialogflow publishing. */
export type DialogflowIntegration = {
  /** The location of the credentials needed to upload to dialogflow. */
  credentialsUrl: Scalars['String']['output'];
};

/** Attributes used for dialogflow publishing. */
export type DialogflowIntegrationInput = {
  /** The location of the credentials needed to upload to dialogflow. */
  credentialsUrl: Scalars['String']['input'];
};

export type DialogflowNluQuery = {
  intentId: Scalars['String']['output'];
  knowledgeAnswer?: Maybe<DialogflowNluQueryKnowledgeAnswer>;
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String']['output'];
};

export type DialogflowNluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String']['output'];
  /** Raw question */
  faqQuestion: Scalars['String']['output'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Int']['output'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']['output']>;
};

export type DisplayImage = {
  contentDescription?: Maybe<Scalars['String']['output']>;
  sources: Array<Maybe<DisplayImageSpecification>>;
};

export type DisplayImageInput = {
  contentDescription?: InputMaybe<Scalars['String']['input']>;
  sources: Array<InputMaybe<DisplayImageSpecificationInput>>;
};

export type DisplayImageSpecification = {
  height: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type DisplayImageSpecificationInput = {
  height: Scalars['Int']['input'];
  imageUrl: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};

export type DisplayListButton = {
  title?: Maybe<Scalars['String']['output']>;
};

export type DisplayListButtonInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DisplayListItem = {
  buttons?: Maybe<Array<Maybe<DisplayListButton>>>;
  description: Scalars['String']['output'];
  image: DisplayImage;
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type DisplayListItemInput = {
  buttons?: InputMaybe<Array<InputMaybe<DisplayListButtonInput>>>;
  description: Scalars['String']['input'];
  image: DisplayImageInput;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DisplayTextContent = {
  primaryText?: Maybe<Scalars['String']['output']>;
  secondaryText?: Maybe<Scalars['String']['output']>;
  tertiaryText?: Maybe<Scalars['String']['output']>;
};

export type DisplayTextContentInput = {
  primaryText?: InputMaybe<Scalars['String']['input']>;
  secondaryText?: InputMaybe<Scalars['String']['input']>;
  tertiaryText?: InputMaybe<Scalars['String']['input']>;
};

/** Opportunity alert that sends the message to the user via email. */
export type EmailOpportunityAlert = BaseOpportunityAlert & {
  alerts: Array<OpportunityAlertDetail>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Email of the user to receive the alert. */
  email: Scalars['EmailAddress']['output'];
  placeId?: Maybe<Scalars['String']['output']>;
};

export type EmailOpportunityAlertInput = {
  /** Registered alerts */
  alerts: Array<OpportunityAlertDetailInput>;
  /** Temporarily disable the alert */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email of the user to receive the alert. */
  email: Scalars['EmailAddress']['input'];
  /** The Google PlaceID for the location */
  placeId?: InputMaybe<Scalars['String']['input']>;
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
  _id: Scalars['ID']['output'];
  /** A subset of entities that are found in the query. */
  entities?: Maybe<Array<Maybe<GetEntitiesListEntity>>>;
  /** The total number of entities that were found. */
  total: Scalars['Int']['output'];
};

export type Entity = {
  _id: Scalars['ID']['output'];
  /** The appId of the app that the slot is associated with. */
  appId: Scalars['ID']['output'];
  /** The date at which the entity was created. */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Optional ID if the slot type has a representation in Dialogflow. */
  dialogflowId?: Maybe<Scalars['String']['output']>;
  /** The name of the slot as it is to the user. */
  displayName: Scalars['String']['output'];
  /** The unique identification as it is in the database. */
  entityId: Scalars['ID']['output'];
  /** Whether or not to exclude the entity from autocomplete suggestions. */
  excludeFromSuggestions: Scalars['Boolean']['output'];
  intents: EntityIntentsSearchResult;
  /**
   * NLU specific metadata used when translating to the NLU entity.
   *
   * Use it to override the entity type for a specific NLU
   */
  nlu?: Maybe<Scalars['EntityNLU']['output']>;
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
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** A query for any errors that may be in the Entity. */
  validation: EntityValidation;
  /** The values that the slot can be. */
  values?: Maybe<Array<EntityValue>>;
};


export type EntityIntentsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type EntityErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime']['output'];
  /** A unique identifier for the notification */
  id: Scalars['ID']['output'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String']['output'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<EntityErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String']['output'];
};

export type EntityErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID']['output'];
  /** The ID of the entity that contains the error. */
  entityId: Scalars['ID']['output'];
};

export type EntityIntentsSearchResult = {
  intents?: Maybe<Array<Maybe<Intent>>>;
  total: Scalars['Int']['output'];
};

export type EntitySuggestion = {
  /** The ending location of the word in the provided sentence. */
  end: Scalars['Int']['output'];
  /**
   * The Stentor entityId that the word can map to.
   *
   * If this is blank then there is no entity that matches the word.
   */
  entityId: Scalars['String']['output'];
  /** A parsed suggestion for the word. */
  ner: Scalars['String']['output'];
  /** The original word */
  rawValue: Scalars['String']['output'];
  /** The starting location of the word in the provided sentence. */
  start: Scalars['Int']['output'];
  /** The value of the entity. */
  value: Scalars['String']['output'];
};

export enum EntityType {
  Regex = 'REGEX',
  ValueSynonyms = 'VALUE_SYNONYMS'
}

export type EntityValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<EntityValidationError>>;
  /** Whether or not the full entity is valid. */
  isValid: Scalars['Boolean']['output'];
};

export type EntityValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String']['output'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']['output']>;
};

export type EntityValue = {
  /** Used by Alexa.  This value is returned as a reference, such as "LAX" */
  canonicalId?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the entity.
   * For example, for an entity called cities, a value would
   * be "Los Angeles".
   */
  name: Scalars['String']['output'];
  /**
   * List of potential synonyms for the entity.
   *
   * For example, "L.A."" & "City of Angels"
   */
  synonyms?: Maybe<Array<Scalars['String']['output']>>;
};

export type EntityValueInput = {
  /** Used by Alexa.  This value is returned as a reference, such as "LAX" */
  canonicalId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the entity.
   * For example, for an entity called cities, a value would
   * be "Los Angeles".
   */
  name: Scalars['String']['input'];
  /**
   * List of potential synonyms for the entity.
   *
   * For example, "L.A."" & "City of Angels"
   */
  synonyms?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventFlag = {
  /** The flag that was set. */
  flag: RawQueryEventFlag;
  /** The date at which it was flagged. In ISO 8601 standard. */
  flaggedOn: Scalars['String']['output'];
  /** A not set by the user who flagged it. */
  note?: Maybe<Scalars['String']['output']>;
  /** The user who flagged the event. */
  userEmail: Scalars['String']['output'];
};

export type EventResolutionInput = {
  /** A note that the user may want to add to the resolution for clarity. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** The Stentor event that this resolution is linked to. */
  stentorEventId: Scalars['ID']['input'];
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
  displays?: Maybe<Scalars['JSON']['output']>;
  outputSpeech?: Maybe<EventResponseObject>;
  reprompt?: Maybe<EventResponseObject>;
};

export type EventResponseObject = {
  displayText?: Maybe<Scalars['String']['output']>;
  ssml?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Array<Maybe<EventResponseSuggestion>>>;
};

export type EventResponseSuggestion = {
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/**
 * The slots that were resolved when a user makes a request.
 *
 * The value of the slot can be a variety of different types.  The type
 * is associated with it's '___Value' parameter.
 */
export type EventSlots = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  /** The iso 8601 value of the date value. */
  dateValue?: Maybe<Scalars['String']['output']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: Maybe<Scalars['String']['output']>;
  /** The ID of the slot. */
  id?: Maybe<Scalars['String']['output']>;
  /** The value of a slot if it is an integer. */
  integerValue?: Maybe<Scalars['Int']['output']>;
  /** The name of the slot. */
  name?: Maybe<Scalars['String']['output']>;
  rawValue?: Maybe<Scalars['String']['output']>;
  /** A stringified value of the slot. This is used if the type could not be determined or is not supported yet. */
  slotValue?: Maybe<Scalars['String']['output']>;
  /** The iso 8601 value of the start date value. */
  startDateValue?: Maybe<Scalars['String']['output']>;
  /** String values of a slot array. */
  stringArrayValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: Maybe<Scalars['String']['output']>;
  successfulMatch?: Maybe<Scalars['Boolean']['output']>;
};

export type EventStentorRequest = {
  anonymous?: Maybe<Scalars['Boolean']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  intentId?: Maybe<Scalars['String']['output']>;
  isHealthCheck?: Maybe<Scalars['Boolean']['output']>;
  isNewSession?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  matchConfidence?: Maybe<Scalars['Float']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  rawQuery?: Maybe<Scalars['String']['output']>;
  sessionAttributes?: Maybe<EventStentorRequestsSessionAttributes>;
  sessionId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EventStentorRequestsSessionAttributes = {
  channel?: Maybe<Scalars['String']['output']>;
  sessionId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** Execution events that were captured by Stentor. */
export type Events = {
  /** The channel ID that threw the event. */
  channel?: Maybe<Scalars['String']['output']>;
  /** For intent request events, the handler that was currently fullfilling the request. */
  currentHandler?: Maybe<Scalars['String']['output']>;
  /** The Stentor environment that it was running (dev, stage, prod, etc.) */
  environment?: Maybe<Scalars['String']['output']>;
  /** For error events, the error code that was sent with the error if there was one. */
  errorCode?: Maybe<Scalars['Int']['output']>;
  /** For error events, the message that was sent with the error. */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The ID of the event that. */
  eventId: Scalars['String']['output'];
  /**
   * The index that the event is a part of.
   *
   * @deprecated The index is now part of the eventId.
   */
  eventIndex: Scalars['String']['output'];
  /** A more specific description of the event.  Can be thought of as a sub-section of eventType. */
  eventName?: Maybe<Scalars['String']['output']>;
  /** The time that the event was sent. */
  eventTime?: Maybe<Scalars['String']['output']>;
  /** The type of event that was thrown. */
  eventType?: Maybe<Scalars['String']['output']>;
  /** Flag history for the event.  Most recent at top. */
  flags?: Maybe<Array<Maybe<EventFlag>>>;
  /** Whether or not the event was a health check. */
  isHealthCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not the event is the first in its session. */
  isNewSession?: Maybe<Scalars['Boolean']['output']>;
  /** A string or JSON parselable string of the payload of the event. */
  payload?: Maybe<Scalars['String']['output']>;
  /** The platform that the event was runnign on. */
  platform?: Maybe<Scalars['String']['output']>;
  /** The captured action before it was interpreted by the platform.  Only for INTENT_REQUEST events on platforms that support it. */
  rawQuery?: Maybe<Scalars['String']['output']>;
  /** For intent requests, the intentId of the request. */
  request?: Maybe<Scalars['String']['output']>;
  /** For completed intent requests, the response that was found. */
  response?: Maybe<EventResponse>;
  /** For intent request events, the handler that was chosen to fulfill the next request. */
  selectedHandler?: Maybe<Scalars['String']['output']>;
  /** The ID of a specific session that is associated with the event. */
  sessionId?: Maybe<Scalars['String']['output']>;
  /** For intent requests, the slots that were resolved in teh request. */
  slots?: Maybe<Array<Maybe<EventSlots>>>;
  /** The request that was pulled out of the event. */
  stentorRequest?: Maybe<EventStentorRequest>;
  /** The tag that is related to the query. */
  tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ID of the user which was making the request. */
  userId?: Maybe<Scalars['String']['output']>;
};

export type ExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type ExpectedSlot = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  /** The iso 8601 value of the date value. */
  dateValue?: Maybe<Scalars['String']['output']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: Maybe<Scalars['String']['output']>;
  /** The value of a slot if it is a float. Integer values will also be included. */
  floatValue?: Maybe<Scalars['Float']['output']>;
  /** The value of a slot if it is an integer. */
  integerValue?: Maybe<Scalars['Int']['output']>;
  /** The name of the expected slot. */
  name: Scalars['String']['output'];
  /** The iso 8601 value of the start date value. */
  startDateValue?: Maybe<Scalars['String']['output']>;
  /** String values of a slot array. */
  stringArrayValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: Maybe<Scalars['String']['output']>;
};

export type ExpectedUtteranceTestResult = {
  /** The intentId that is expected to be returned when the utterance is found. */
  intentId: Scalars['String']['output'];
  /** The slots that are expected to be returned. */
  matchedSlots?: Maybe<Array<Maybe<ExpectedSlot>>>;
  /** The request type expected. */
  type?: Maybe<Scalars['String']['output']>;
};

export type ExportAppMutationResponse = {
  url: Scalars['URL']['output'];
};

export type ExportToCsvReturn = {
  url: Scalars['URL']['output'];
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
  includeTitle?: InputMaybe<Scalars['Boolean']['input']>;
  includeUrl?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FaqMutationUpdateArgs = {
  id: Scalars['ID']['input'];
};


export type FaqMutationUploadCsvArgs = {
  file: Scalars['URL']['input'];
  hasTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FaqNotAddedReason {
  AlreadyExists = 'ALREADY_EXISTS',
  Unknown = 'UNKNOWN'
}

export type FaqQuestionSuggestion = {
  /** The possible question */
  question: Scalars['String']['output'];
};

export type FaqQuestionSuggestions = {
  suggestions: Array<FaqQuestionSuggestion>;
};

export type FaqSuggestionReturn = {
  failedPutRequests: Scalars['Int']['output'];
  responses: Scalars['JSON']['output'];
};

export type FacebookMessengerAppChannel = BaseAppChannel & {
  /** Human readable name for the avatar. */
  avatarName?: Maybe<Scalars['String']['output']>;
  /** URL to the facebook page's avatar. */
  avatarUrl?: Maybe<Scalars['URL']['output']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** AppId of the app that it's linked to. */
  facebookAppId?: Maybe<Scalars['String']['output']>;
  /** Human readable name for the Facebook app. */
  facebookAppName?: Maybe<Scalars['String']['output']>;
  facebookAppSecret?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The pages that are linked to the channel. */
  pages?: Maybe<Array<Maybe<FacebookPage>>>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type FacebookMessengerAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FacebookMessengerAppChannelInput = {
  /** Human readable name for the avatar. */
  avatarName?: InputMaybe<Scalars['String']['input']>;
  /** URL to the facebook page's avatar. */
  avatarUrl?: InputMaybe<Scalars['URL']['input']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
  /** AppId of the app that it's linked to. */
  facebookAppId?: InputMaybe<Scalars['String']['input']>;
  /** Human readable name for the Facebook app. */
  facebookAppName?: InputMaybe<Scalars['String']['input']>;
  facebookAppSecret?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The pages that are linked to the channel. */
  pages?: InputMaybe<Array<InputMaybe<FacebookPageInput>>>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type FacebookPage = {
  pageId: Scalars['ID']['output'];
  pageName?: Maybe<Scalars['String']['output']>;
  pageToken?: Maybe<Scalars['String']['output']>;
};

export type FacebookPageInput = {
  pageId: Scalars['ID']['input'];
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageToken?: InputMaybe<Scalars['String']['input']>;
};

export type FaqQueryReturn = {
  faq: Array<Maybe<ScoredWebFaq>>;
  total: Scalars['Int']['output'];
};

export type FirstTimeHandlerResponseSegment = HandlerResponseSegment & {
  fistTime: Scalars['Boolean']['output'];
  segment: ResponseOutput;
};

export type FlagEventReturn = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Statistics on the flagged events */
export type FlagTotals = {
  CONFIRMED_CORRECT: Scalars['Int']['output'];
  CORRECT: Scalars['Int']['output'];
  FLAGGED: Scalars['Int']['output'];
  HELPFUL: Scalars['Int']['output'];
  INCORRECT: Scalars['Int']['output'];
  INCORRECT_RESOLVED: Scalars['Int']['output'];
  NEEDS_HUMAN: Scalars['Int']['output'];
  OPTIMAL: Scalars['Int']['output'];
};

export type FormWidgetAppChannel = BaseAppChannel & {
  /** Extra custom values */
  attributes?: Maybe<Scalars['StringMap']['output']>;
  /** The auto-greeting string (intent we start the widget with) */
  autoGreeting?: Maybe<Scalars['String']['output']>;
  /** Configure auto-open settings */
  autoOpen?: Maybe<FormWidgetAutoOpen>;
  /** Used for autocomplete suggestions. */
  autocompleteSuggestionsUrl?: Maybe<Scalars['URLString']['output']>;
  /** When provided, when on stand-along pages, it will display the business address */
  businessAddress?: Maybe<Scalars['String']['output']>;
  /** When provided, when on stand-along pages, it will display the business logo */
  businessLogoUrl?: Maybe<Scalars['String']['output']>;
  /** When provided, when on stand-along pages, it will display the business name */
  businessName?: Maybe<Scalars['String']['output']>;
  /** When provided, when on stand-along pages, it will display the business website */
  businessWebsite?: Maybe<Scalars['String']['output']>;
  /** When provided, for stand-alone pages, it will display the chat widget */
  chatWidgetKey?: Maybe<Scalars['String']['output']>;
  connection?: Maybe<FormWidgetConnectionConfig>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** Form Widget is disabled and will not appear on the website */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /**
   * The ID of the intent (thus the handler) that has the content for the form.
   *
   * If this is provided, autoGreeting will be ignored.
   *
   * This is the preferred method as it doesn't require an NLU at all and is more performant.
   */
  intentId?: Maybe<Scalars['ID']['output']>;
  /** The key that goes in the url when retrieving the form widget to apply custom themes. */
  key?: Maybe<Scalars['String']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  sideButtonLabel?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** Theme for the Form Widget */
  theme?: Maybe<FormWidgetTheme>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type FormWidgetAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FormWidgetAppChannelInput = {
  /** Extra custom values */
  attributes?: InputMaybe<Scalars['StringMap']['input']>;
  /** The auto-greeting string (intent we start the widget with) */
  autoGreeting?: InputMaybe<Scalars['String']['input']>;
  /** Configure auto-open settings */
  autoOpen?: InputMaybe<FormWidgetAutoOpenInput>;
  /** Used for autocomplete suggestions. */
  autocompleteSuggestionsUrl?: InputMaybe<Scalars['URLString']['input']>;
  /** When provided, when on stand-along pages, it will display the business address */
  businessAddress?: InputMaybe<Scalars['String']['input']>;
  /** When provided, when on stand-along pages, it will display the business logo */
  businessLogoUrl?: InputMaybe<Scalars['String']['input']>;
  /** When provided, when on stand-along pages, it will display the business name */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** When provided, when on stand-along pages, it will display the business website */
  businessWebsite?: InputMaybe<Scalars['String']['input']>;
  /** When provided, for stand-alone pages, it will display the chat widget */
  chatWidgetKey?: InputMaybe<Scalars['String']['input']>;
  connection?: InputMaybe<FormWidgetConnectionConfigInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** Form Widget is disabled and will not appear on the website */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the channel. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the intent (thus the handler) that has the content for the form.
   *
   * If this is provided, autoGreeting will be ignored.
   *
   * This is the preferred method as it doesn't require an NLU at all and is more performant.
   */
  intentId?: InputMaybe<Scalars['ID']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  sideButtonLabel?: InputMaybe<Scalars['String']['input']>;
  /** Theme for the search bar. */
  theme?: InputMaybe<FormWidgetThemeInput>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetAutoOpen = {
  /** If true, it will automatically open the form widget, remove the ability to close it, remove the shadow boxing effect. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type FormWidgetAutoOpenInput = {
  /** If true, it will automatically open the form widget, remove the ability to close it, remove the shadow boxing effect. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormWidgetCardTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetCardThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetCheckboxTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetCheckboxThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetChipsTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundColorSelected?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  colorSelected?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetChipsThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColorSelected?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  colorSelected?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetConnectionConfig = {
  /** Key used for basic authentication. */
  accountKey?: Maybe<Scalars['String']['output']>;
  /** Backend URL */
  serverUrl?: Maybe<Scalars['URLString']['output']>;
};

export type FormWidgetConnectionConfigInput = {
  /** Key used for basic authentication. */
  accountKey?: InputMaybe<Scalars['String']['input']>;
  /** Backend URL */
  serverUrl?: InputMaybe<Scalars['URLString']['input']>;
};

export type FormWidgetDateTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundColorSelected?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetDateThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColorSelected?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetDropdownTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetDropdownThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetSideButtonTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
  minLength?: Maybe<Scalars['String']['output']>;
  postion?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetSideButtonThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
  minLength?: InputMaybe<Scalars['String']['input']>;
  postion?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetStandAloneTheme = {
  /** Background color of the page */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** Header Theme that displays the logo and business name */
  header?: Maybe<FormWidgetTextTheme>;
};

export type FormWidgetStandAloneThemeInput = {
  /** Background color of the page */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** Header Theme that displays the logo and business name */
  header?: InputMaybe<FormWidgetTextThemeInput>;
};

export type FormWidgetTextTheme = {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
};

export type FormWidgetTextThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
};

export type FormWidgetTheme = {
  accentColor?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  card?: Maybe<FormWidgetCardTheme>;
  checkbox?: Maybe<FormWidgetCheckboxTheme>;
  chips?: Maybe<FormWidgetChipsTheme>;
  /**
   * Debug console that will allow people to attach and retrieve any data they want in the form widget.
   *
   * @deprecated This is a temporary solution and will be removed in the future. Please use attributes instead.
   */
  data?: Maybe<Scalars['JSON']['output']>;
  date?: Maybe<FormWidgetDateTheme>;
  dropdown?: Maybe<FormWidgetDropdownTheme>;
  headerBackgroundColor?: Maybe<Scalars['String']['output']>;
  headerTextColor?: Maybe<Scalars['String']['output']>;
  primaryButtonColor?: Maybe<Scalars['String']['output']>;
  primaryButtonTextColor?: Maybe<Scalars['String']['output']>;
  secondaryButtonColor?: Maybe<Scalars['String']['output']>;
  secondaryButtonTextColor?: Maybe<Scalars['String']['output']>;
  sideButton?: Maybe<FormWidgetSideButtonTheme>;
  standAlone?: Maybe<FormWidgetStandAloneTheme>;
  text?: Maybe<FormWidgetTextTheme>;
};

export type FormWidgetThemeInput = {
  accentColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  card?: InputMaybe<FormWidgetCardThemeInput>;
  checkbox?: InputMaybe<FormWidgetCheckboxThemeInput>;
  chips?: InputMaybe<FormWidgetChipsThemeInput>;
  date?: InputMaybe<FormWidgetDateThemeInput>;
  dropdown?: InputMaybe<FormWidgetDropdownThemeInput>;
  headerBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  headerTextColor?: InputMaybe<Scalars['String']['input']>;
  primaryButtonColor?: InputMaybe<Scalars['String']['input']>;
  primaryButtonTextColor?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonColor?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonTextColor?: InputMaybe<Scalars['String']['input']>;
  sideButton?: InputMaybe<FormWidgetSideButtonThemeInput>;
  standAlone?: InputMaybe<FormWidgetStandAloneThemeInput>;
  text?: InputMaybe<FormWidgetTextThemeInput>;
};

export type ForwardInput = {
  paths: Array<InputMaybe<Scalars['JSON']['input']>>;
};

export type Geocode = {
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeocodeInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** The available app attributes that are from a Organization Get Apps query. */
export type GetAppsListApp = {
  _id: Scalars['ID']['output'];
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']['output']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the app in Stentor. */
  appId: Scalars['String']['output'];
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']['output']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Scalars['String']['output']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the app. */
  name: Scalars['String']['output'];
  /** The ID of the organization that the app is linked to. */
  organizationId: Scalars['String']['output'];
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']['output']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<GetAppsListStatus>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: Maybe<Scalars['String']['output']>;
  /** The website associated with the app. */
  website?: Maybe<Scalars['String']['output']>;
};

export type GetAppsListStatus = {
  /** The email of the user who last changed the status. */
  email?: Maybe<Scalars['String']['output']>;
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The time the status was last changed.
   *
   * Format: ISO 8601 timestamp
   */
  timestamp: Scalars['String']['output'];
  /** The status level of the app. */
  type: Scalars['String']['output'];
};

export type GetAppsQuery = {
  _id: Scalars['ID']['output'];
  /** The apps that were discovered in the query. */
  apps: Array<Maybe<GetAppsListApp>>;
  /** The total number of apps that were found in the query */
  total: Scalars['Int']['output'];
};

export type GetEntitiesListEntity = {
  _id: Scalars['ID']['output'];
  /** The appId of the app that the slot is associated with. */
  appId: Scalars['ID']['output'];
  /** Optional ID if the slot type has a representation in Dialogflow. */
  dialogflowId?: Maybe<Scalars['String']['output']>;
  /** The name of the slot as it is to the user. */
  displayName: Scalars['String']['output'];
  /** The unique identification as it is in the database. */
  entityId: Scalars['ID']['output'];
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
  _id: Scalars['ID']['output'];
  /** The ID of the app that the handler is linked to. */
  appId: Scalars['String']['output'];
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the handler itself. */
  intentId: Scalars['String']['output'];
  /** The language code that the handler covers. */
  langCode?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the handler. */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the organization that the handler is linked to. */
  organizationId: Scalars['String']['output'];
  /** The type of handler that this is. */
  type: Scalars['String']['output'];
};

export type GetIntentsListIntent = {
  _id: Scalars['ID']['output'];
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['String']['output'];
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['String']['output'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['output'];
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['String']['output'];
  /** The slots of the intent. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type GoogleAnalyticsDataStream = {
  type: Scalars['String']['output'];
};

export type GoogleAnalyticsDataStreamInput = {
  type: Scalars['String']['input'];
};

export type GoogleBusinessMessagesAppChannel = BaseAppChannel & {
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type GoogleBusinessMessagesAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type GoogleBusinessMessagesAppChannelInput = {
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the channel. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type GooglePlatformAdditionalInformationQuestions = {
  /** Does the app contain content related to alcohol or tobacco? */
  alcoholAndTobaccoRelatedContent: Scalars['Boolean']['output'];
};

export type GooglePlatformAdditionalInformationQuestionsInput = {
  /** Does the app contain content related to alcohol or tobacco? */
  alcoholAndTobaccoRelatedContent: Scalars['Boolean']['input'];
};

export type GooglePlatformData = {
  /** Imformation about the app that Google needs to know before publishing. */
  additionalInformationQuestions?: Maybe<GooglePlatformAdditionalInformationQuestions>;
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String']['output'];
};

export type GooglePlatformDataInput = {
  /** Imformation about the app that Google needs to know before publishing. */
  additionalInformationQuestions?: InputMaybe<GooglePlatformAdditionalInformationQuestionsInput>;
  /**
   * The platform that the data is associated with
   * All Platform data has this. It determines the structure of the remaining data.
   */
  platform: Scalars['String']['input'];
};

export type GraphConnectionKeyDescription = {
  /** If true, the key will match for every string. */
  catchAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * If it exists, it is an array of possible strings
   * that will be omitted in the case of a catch all key.
   *
   * Note, this must be used in conjunction with catchAll = true.
   */
  excludedIntentIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If it exists, it is an array of possible strings that will match for the key. */
  includedIntentIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The key cannot be described with the current methods of description. */
  indescribable?: Maybe<Scalars['Boolean']['output']>;
  /** If intentId exists, it is the only string that will match the key. */
  intentId?: Maybe<Scalars['String']['output']>;
};

/** A connection is a link between one node to another. */
export type GraphConnections = {
  /** A detailed description of what this connection entails. */
  description?: Maybe<GraphConnectionKeyDescription>;
  /** The name of the node that this connection is coming from. */
  from: Scalars['String']['output'];
  /** The nid of the node that this connection is coming from. */
  from_node: Scalars['Float']['output'];
  /** Unique identifier of the connection. */
  id: Scalars['String']['output'];
  /** The total number of times the handler was used to transfer to the other node. */
  selectedCount: Scalars['Int']['output'];
  /** The name of the node that this connection is going to. */
  to: Scalars['String']['output'];
  /** The nid of the node that this connection is going to. */
  to_node: Scalars['Float']['output'];
};

/** Used by Stentor's UI component to graph the intents/handlers of an app. */
export type GraphCoords = {
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

/** Used by Stentor's UI component to graph the intents/handlers of an app. */
export type GraphCoordsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type GraphNode = {
  /** The titles that appear on the left (in) and right (out) side of a node. */
  fields: GraphNodeFields;
  /** The handler that is associated with this node. */
  handler: Handler;
  /** The unique identifier of the intent/handler that the node represents. */
  id: Scalars['String']['output'];
  /** The unique identifier of the node. */
  nid: Scalars['Float']['output'];
  /** The total number of time this handler was called. */
  totalCount: Scalars['Int']['output'];
  /** A descriptor of what kind of node this is supposed to represent. */
  type: Scalars['String']['output'];
  /** Position on the x axis of a graph.  The top-left of the node. */
  x: Scalars['Float']['output'];
  /** Position on the y axis of a graph.  The top-left of the node. */
  y: Scalars['Float']['output'];
};

export type GraphNodeField = {
  /** The field names of the nodes. */
  name: Scalars['String']['output'];
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
  appId: Scalars['ID']['output'];
  /**
   * Base content map for the handler.
   *
   * All handlers have contextual help and cancel content
   */
  content?: Maybe<Array<Maybe<HandlerContent>>>;
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
   * The date in which the Handler was created.
   *
   * Format: ISO 8601 date format.
   */
  createdAt?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the intent in Dialogflow. */
  dialogflowId?: Maybe<Scalars['ID']['output']>;
  forward?: Maybe<Array<Maybe<HandlerForward>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the Handler itself. */
  intentId: Scalars['ID']['output'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['output'];
  /** The ID of the organization that the Handler is linked to. */
  organizationId: Scalars['ID']['output'];
  /** The permissions that the intent requires in order to work. */
  permissions?: Maybe<Array<Maybe<HandlerPermissions>>>;
  redirect?: Maybe<Array<Maybe<HandlerRedirect>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /** The type of Handler that this is. */
  type: Scalars['String']['output'];
  /**
   * The date at which the Handler was last updated.
   *
   * Format: ISO 8601 date format.
   */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A query for any errors that may be in the handler. */
  validation: HandlerValidation;
};

export type HandlerContent = {
  handlerResponse: Array<Maybe<HandlerResponse>>;
  key: Scalars['String']['output'];
};

export type HandlerErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime']['output'];
  /** A unique identifier for the notification */
  id: Scalars['ID']['output'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String']['output'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<HandlerErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String']['output'];
};

export type HandlerErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID']['output'];
  /** The ID of the handler that contains the error. */
  intentId: Scalars['ID']['output'];
};

export type HandlerForward = {
  key: Scalars['String']['output'];
  paths: Array<Maybe<BaseHandlerPath>>;
};

export type HandlerForwardInput = {
  key: Scalars['String']['input'];
  paths: Array<InputMaybe<Scalars['JSON']['input']>>;
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
  handlerId: Scalars['ID']['input'];
};

export type HandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
};

export type HandlerPathInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** Conditions to be met. */
  conditions?: InputMaybe<Scalars['PathConditions']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: InputMaybe<Scalars['String']['input']>;
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
  key: Scalars['String']['output'];
  paths: Array<Maybe<BaseHandlerPath>>;
};

export type HandlerRedirectInput = {
  key: Scalars['String']['input'];
  paths: Array<InputMaybe<Scalars['JSON']['input']>>;
};

export type HandlerResponse = {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  /**
   * Optional active contexts which help influence the NLU.
   * https://cloud.google.com/dialogflow/es/docs/contexts-input-output
   * https://docs.aws.amazon.com/lex/latest/dg/context-mgmt-active-context.html
   */
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type HandlerResponseActiveContext = {
  /** Name of the context */
  name: Scalars['String']['output'];
  /** Parameters passed around with the context */
  parameters?: Maybe<Scalars['StringMap']['output']>;
  timeToLive?: Maybe<HandlerResponseActiveContextTtl>;
};

export type HandlerResponseActiveContextTtl = {
  /** Not supported in Dialogflow */
  timeToLiveInSeconds?: Maybe<Scalars['Int']['output']>;
  turnsToLive?: Maybe<Scalars['Int']['output']>;
};

export type HandlerResponseChannel = {
  /**
   * String to match with the name of the channel that will match.  It can either be the exact name of the
   * channel or a regex string to match multiple.
   */
  name?: Maybe<Scalars['String']['output']>;
};

export type HandlerResponseContext = {
  /** Matches to outputContexts on Dialogflow & activeContexts */
  active?: Maybe<Array<Maybe<HandlerResponseActiveContext>>>;
};

export type HandlerResponseDuration = {
  amount?: Maybe<Scalars['Float']['output']>;
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
  amount?: InputMaybe<Scalars['Float']['input']>;
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
  firstTime?: InputMaybe<Scalars['Boolean']['input']>;
  haveNotSeenWithin?: InputMaybe<HandlerResponseDurationInput>;
  requestMatch?: InputMaybe<Scalars['JSON']['input']>;
  schedule?: InputMaybe<HandlerResponseScheduleInput>;
  segment: ResponseOutputInput;
  slotMatch?: InputMaybe<Scalars['JSON']['input']>;
  storageMatch?: InputMaybe<Scalars['JSON']['input']>;
};

export type HandlerResponseSegmentItem = {
  key: Scalars['String']['output'];
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
  isValid: Scalars['Boolean']['output'];
};

export type HandlerValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String']['output'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']['output']>;
};

export type HandlersQuery = {
  /** Unique ID for the query type */
  _id: Scalars['ID']['output'];
  /** A subset of handlers that are found in the query. */
  handlers?: Maybe<Array<Maybe<GetHandlersListHandler>>>;
  /** The total number of handlers that were found. */
  total: Scalars['Int']['output'];
};

export type HaveNotSeenWithinHandlerResponseSegment = HandlerResponseSegment & {
  haveNotSeenWithin: HandlerResponseDuration;
  segment: ResponseOutput;
};

export type HistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
};

/** Contains urls for IP rights contracts related to the app. */
export type IpRights = {
  /** URL to the IP rights that are on Alexa. */
  alexa?: Maybe<Scalars['String']['output']>;
};

/** Contains urls for IP rights contracts related to the app. */
export type IpRightsInput = {
  /** URL to the IP rights that are on Alexa. */
  alexa?: InputMaybe<Scalars['String']['input']>;
};

export type IPrights = {
  /** The URL which can be used to download the Alexa IP rights document. */
  alexa?: Maybe<Scalars['String']['output']>;
};

export type IPrightsInput = {
  /** The URL which can be used to download the Alexa IP rights document. */
  alexa?: InputMaybe<Scalars['String']['input']>;
};

export type InputHandlerContent = {
  handlerResponse: Array<InputMaybe<Scalars['JSON']['input']>>;
  key: Scalars['String']['input'];
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
  inputText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Is the slot a list of values.
   * Supported natively by Dialogflow and shims for Alexa.
   * Can be a boolean or number.  When a number is used, it provides guidance to the Alexa shim on the max amount of expected
   * items in the list.  Minimum value is 2.  Value defaults to 6 when set to true.
   * * NOTE: Only one isList slot is supported per utterance pattern.
   */
  isList?: InputMaybe<Scalars['IntOrBoolean']['input']>;
  /**
   * The name of the slot, corresponds to how it is displayed in the
   * sample utterance.
   *
   * For example: "Play {Podcast}" where Podcast is the name.
   */
  name: Scalars['String']['input'];
  nlu?: InputMaybe<Scalars['JSON']['input']>;
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
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Integration = {
  /** Determines if the app integration is currently working. */
  isActive: Scalars['Boolean']['output'];
  /** Determines if the user is allowed to integrate with a given service based on their subscription level. */
  isAllowed: Scalars['Boolean']['output'];
  /** Determines if the app is currently linked to the integration. */
  isLinked: Scalars['Boolean']['output'];
  /** The integration parameters */
  token?: Maybe<Scalars['JSON']['output']>;
};

export enum IntegrationType {
  Fieldpulse = 'fieldpulse',
  Housecallpro = 'housecallpro',
  Jobber = 'jobber',
  Lacrm = 'lacrm',
  Servicefusion = 'servicefusion',
  Servicetitan = 'servicetitan',
  Surefire = 'surefire',
  TestCognito = 'test_cognito',
  Zapier = 'zapier'
}

export type IntegrationsMutation = {
  addFieldPulseIntegration: Integration;
  addHouseCallProIntegration: Integration;
  /**
   * Adds a new Service Titan Integration to the app.
   *
   * These attributes are to be generated on Service Titan's website and added here.
   */
  addServiceTitanIntegration: Integration;
  /** Adds a Surefire integration for the given app. */
  addSurefireIntegration: Integration;
  /**
   * Disconnects the integration from the app.
   *
   * The user will not be able to retrieve leads through this integration anymore after this.
   */
  disconnect: Integration;
};


export type IntegrationsMutationAddFieldPulseIntegrationArgs = {
  defaultJobTypeId: Scalars['String']['input'];
  lookAheadDays: Scalars['Int']['input'];
  maxJobsPerDay: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};


export type IntegrationsMutationAddHouseCallProIntegrationArgs = {
  token: Scalars['String']['input'];
};


export type IntegrationsMutationAddServiceTitanIntegrationArgs = {
  apiEndpoint: Scalars['String']['input'];
  authEndpoint: Scalars['String']['input'];
  bookingProviderId: Scalars['ID']['input'];
  clientId: Scalars['ID']['input'];
  clientSecret: Scalars['String']['input'];
  defaultBusinessUnitId: Scalars['Int']['input'];
  defaultCampaignId: Scalars['Int']['input'];
  defaultJobTypeId: Scalars['Int']['input'];
  serviceTitanAppId: Scalars['ID']['input'];
  tenantId: Scalars['ID']['input'];
};


export type IntegrationsMutationAddSurefireIntegrationArgs = {
  dataMap: Scalars['String']['input'];
  endpoint: Scalars['URLString']['input'];
  token: Scalars['String']['input'];
};


export type IntegrationsMutationDisconnectArgs = {
  type: IntegrationType;
};

export type IntelligentSearchAppChannel = BaseAppChannel & {
  autocompleteSuggestionsUrl?: Maybe<Scalars['URLString']['output']>;
  connection?: Maybe<IntelligentSearchConnectionConfig>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: Maybe<Scalars['String']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  theme?: Maybe<IntelligentSearchWidgetTheme>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
};


export type IntelligentSearchAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type IntelligentSearchAppChannelInput = {
  autocompleteSuggestionsUrl?: InputMaybe<Scalars['URLString']['input']>;
  connection?: InputMaybe<IntelligentSearchConnectionConfigInput>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /** The key that goes in the url when retrieving the chat widget to apply custom themes. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<IntelligentSearchWidgetThemeInput>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
};

export type IntelligentSearchConnectionConfig = {
  /** Optional key used for basic authentication. */
  accountKey?: Maybe<Scalars['String']['output']>;
  /** Backend URL */
  serverUrl?: Maybe<Scalars['URLString']['output']>;
};

export type IntelligentSearchConnectionConfigInput = {
  /** Optional key used for basic authentication. */
  accountKey?: InputMaybe<Scalars['String']['input']>;
  /** Backend URL */
  serverUrl?: InputMaybe<Scalars['URLString']['input']>;
};

export enum IntelligentSearchWidgetBorderStyle {
  Dashed = 'dashed',
  None = 'none',
  Solid = 'solid'
}

export type IntelligentSearchWidgetBorderTheme = {
  color?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['String']['output']>;
  style?: Maybe<IntelligentSearchWidgetBorderStyle>;
  width?: Maybe<Scalars['String']['output']>;
};

export type IntelligentSearchWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<IntelligentSearchWidgetBorderStyle>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type IntelligentSearchWidgetBubbleTheme = {
  background?: Maybe<Scalars['String']['output']>;
};

export type IntelligentSearchWidgetBubbleThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
};

export type IntelligentSearchWidgetCardTheme = {
  background?: Maybe<Scalars['String']['output']>;
  border?: Maybe<IntelligentWidgetBorderTheme>;
  description?: Maybe<IntelligentSearchWidgetTextBlockTheme>;
  link?: Maybe<IntelligentSearchWidgetLinkBlockTheme>;
  margin?: Maybe<IntelligentSearchWidgetMarginTheme>;
  padding?: Maybe<IntelligentSearchWidgetPaddingTheme>;
  title?: Maybe<IntelligentSearchWidgetTextBlockTheme>;
};

export type IntelligentSearchWidgetCardThemeInput = {
  background?: InputMaybe<Scalars['String']['input']>;
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
  bottom?: Maybe<Scalars['String']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type IntelligentSearchWidgetMarginThemeInput = {
  bottom?: InputMaybe<Scalars['String']['input']>;
  left?: InputMaybe<Scalars['String']['input']>;
  right?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
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
  bottom?: Maybe<Scalars['String']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type IntelligentSearchWidgetPaddingThemeInput = {
  bottom?: InputMaybe<Scalars['String']['input']>;
  left?: InputMaybe<Scalars['String']['input']>;
  right?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
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
  color?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
  fontStyle?: Maybe<Scalars['String']['output']>;
  fontWeight?: Maybe<Scalars['String']['output']>;
  lineHeight?: Maybe<Scalars['IntOrString']['output']>;
};

export type IntelligentSearchWidgetTextThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
  fontStyle?: InputMaybe<Scalars['String']['input']>;
  fontWeight?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['String']['input']>;
};

export type IntelligentSearchWidgetTheme = {
  accentColor?: Maybe<Scalars['String']['output']>;
  border?: Maybe<IntelligentWidgetBorderTheme>;
  card?: Maybe<IntelligentSearchWidgetCardTheme>;
  carousel?: Maybe<IntelligentSearchWidgetCarouselTheme>;
  list?: Maybe<IntelligentSearchWidgetListTheme>;
  messages?: Maybe<IntelligentSearchWidgetMessagesTheme>;
};

export type IntelligentSearchWidgetThemeInput = {
  accentColor?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<IntelligentSearchWidgetBorderThemeInput>;
  card?: InputMaybe<IntelligentSearchWidgetCardThemeInput>;
  carousel?: InputMaybe<IntelligentSearchWidgetCarouselThemeInput>;
  list?: InputMaybe<IntelligentSearchWidgetListThemeInput>;
  messages?: InputMaybe<IntelligentSearchWidgetMessagesThemeInput>;
};

export type IntelligentWidgetBorderTheme = {
  color?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['String']['output']>;
  style?: Maybe<IntelligentSearchWidgetBorderStyle>;
  width?: Maybe<Scalars['String']['output']>;
};

export type IntelligentWidgetBorderThemeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<IntelligentSearchWidgetBorderStyle>;
  width?: InputMaybe<Scalars['String']['input']>;
};

/**
 * A Stentor representation of an utterance resolver. Intents
 * tell applications how they will respond to specific voice queries.
 * These are translated to their platform specific counterparts when publishing.
 */
export type Intent = {
  _id: Scalars['String']['output'];
  /** Retrieve the analytics aggregations of the intent. */
  analytics?: Maybe<Analytics>;
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['ID']['output'];
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
  createdAt?: Maybe<Scalars['String']['output']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the intent in Dialogflow. */
  dialogflowId?: Maybe<Scalars['ID']['output']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: Maybe<GraphCoords>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID']['output'];
  /** The language code that the intent covers. */
  langCode?: Maybe<Scalars['String']['output']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['output'];
  nlu?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['ID']['output'];
  /** The permissions that the intent requires in order to work. */
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Slot type definition. */
  slotTypes?: Maybe<Scalars['JSON']['output']>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  /**
   * The date at which the Intent was last updated.
   *
   * Format: ISO 8601 date format.
   */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: Maybe<Array<Scalars['String']['output']>>;
  /** Retrieves suggestions of new possible utterances similar to the ones the intent already has. */
  utteranceSuggestions: UtteranceSuggestions;
  /** A query for any errors that may be in the Intent. */
  validation: IntentValidation;
};


/**
 * A Stentor representation of an utterance resolver. Intents
 * tell applications how they will respond to specific voice queries.
 * These are translated to their platform specific counterparts when publishing.
 */
export type IntentAnalyticsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IntentContext = {
  name?: Maybe<Scalars['String']['output']>;
};

export type IntentContextInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IntentErrorSystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime']['output'];
  /** A unique identifier for the notification */
  id: Scalars['ID']['output'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String']['output'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<IntentErrorSystemNotificationMeta>;
  /** A title or name of the notification */
  name: Scalars['String']['output'];
};

export type IntentErrorSystemNotificationMeta = {
  /** The ID of the app that owns the handler */
  appId: Scalars['ID']['output'];
  /** The ID of the handler that contains the error. */
  intentId: Scalars['ID']['output'];
};

export type IntentMutation = {
  add: AddIntentReturn;
  update: UpdateIntentMutationType;
};


export type IntentMutationAddArgs = {
  intent: AddIntentInput;
};


export type IntentMutationUpdateArgs = {
  intentId: Scalars['ID']['input'];
};

export type IntentToHandlerPropsInput = {
  /** The type that the handler should be. */
  type: Scalars['String']['input'];
};

export type IntentValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<IntentValidationError>>;
  /** Whether or not the full intent is valid. */
  isValid: Scalars['Boolean']['output'];
};

export type IntentValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String']['output'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']['output']>;
};

export type IntentsGraph = {
  /** The links between the handlers. */
  connections?: Maybe<Array<Maybe<GraphConnections>>>;
  /** Points on the graph that represent a handler. */
  nodes?: Maybe<Array<Maybe<GraphNode>>>;
};

export type IntentsQuery = {
  /** Unique ID for the query type */
  _id: Scalars['ID']['output'];
  /** A subset of intents that are found in the query. */
  intents?: Maybe<Array<Maybe<GetIntentsListIntent>>>;
  /** The total number of intents that were found. */
  total: Scalars['Int']['output'];
};

export type JsonDependableHandlerResponse = HandlerResponse & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']['output']>;
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type JsonDependentExecutableHandlerPath = BaseHandlerPath & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']['output']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
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
  JSONPathMatch?: Maybe<Scalars['JSON']['output']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
};

export type JsonDependentPreviousHandlerPath = BaseHandlerPath & {
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  JSONPathMatch?: Maybe<Scalars['JSON']['output']>;
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
};

export type KnnMutation = {
  addQuestion: KnnSearchHit;
};


export type KnnMutationAddQuestionArgs = {
  answer: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type KnnRawQueryHit = {
  _score: Scalars['Float']['output'];
  rawQuery: Scalars['String']['output'];
  rawQueryVector: Array<Maybe<Scalars['Float']['output']>>;
};

export type KnnRawQuerySearchOutput = {
  aggs: Scalars['JSON']['output'];
  hits: Array<Maybe<KnnRawQueryHit>>;
  total: Scalars['Int']['output'];
};

export type KnnRawQuerySearchQuery = {
  input: KnnSearchInput;
  output: KnnRawQuerySearchOutput;
};

export type KnnSearchHit = {
  _score: Scalars['Float']['output'];
  answer: Scalars['String']['output'];
  answerVector: Array<Maybe<Scalars['Float']['output']>>;
  question: Scalars['String']['output'];
  questionVector: Array<Maybe<Scalars['Float']['output']>>;
};

export type KnnSearchInput = {
  sentence: Scalars['String']['output'];
  vectors: Array<Maybe<Scalars['Float']['output']>>;
};

export type KnnSearchOutput = {
  hits: Array<Maybe<KnnSearchHit>>;
  total: Scalars['Int']['output'];
};

export type KnnSearchQuery = {
  input: KnnSearchInput;
  output: KnnSearchOutput;
};

export type KnnSuggSearchHit = {
  _score: Scalars['Float']['output'];
  suggVector: Array<Maybe<Scalars['Float']['output']>>;
  suggestion: Scalars['String']['output'];
};

export type KnnSuggSearchOutput = {
  aggs: Scalars['JSON']['output'];
  hits: Array<Maybe<KnnSuggSearchHit>>;
  total: Scalars['Int']['output'];
};

export type KnnSuggSearchQuery = {
  input: KnnSearchInput;
  output: KnnSuggSearchOutput;
};

export type KendraInstance = {
  faqs: KendraInstanceFaqList;
};


export type KendraInstanceFaqsArgs = {
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type KendraInstanceFaq = {
  /** The date and time that the FAQ was created */
  createdAt: Scalars['DateTime']['output'];
  /** The file type used to create the FAQ */
  fileFormat: Scalars['String']['output'];
  /** The ID of the kendra FAQ */
  id: Scalars['String']['output'];
  /** The code for the language the FAQ is written in. */
  languageCode: Scalars['String']['output'];
  /** The name of the kendra FAQ */
  name: Scalars['String']['output'];
  /** Current status of the FAQ */
  status: KendraInstanceFaqStatus;
  /** The date and time that the FAQ was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type KendraInstanceFaqList = {
  /** The faqs current synced to the Kendra instance */
  faqs: Array<Maybe<KendraInstanceFaq>>;
  /** The token to pass in to retrieve another page of FAQs. */
  nextToken?: Maybe<Scalars['String']['output']>;
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
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type LastActiveFirstTimeHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  firstTime: Scalars['Boolean']['output'];
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type LastActiveHandlerResponse = LastActiveActiveWithinHandlerResponse | LastActiveFirstTimeHandlerResponse | LastActiveHaveNotSeenWithinHandlerResponse;

export type LastActiveHandlerResponseSegment = ActiveWithinHandlerResponseSegment | FirstTimeHandlerResponseSegment | HaveNotSeenWithinHandlerResponseSegment;

export type LastActiveHaveNotSeenWithinHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  haveNotSeenWithin?: Maybe<HandlerResponseDuration>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type Lead = {
  /** Fields that are important to the lead. */
  fields: Array<LeadField>;
  transcript?: Maybe<Array<LeadTranscript>>;
};

export type LeadField = {
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type LeadSentToIntegration = {
  /** The date that the integration was sent. */
  date: Scalars['DateTime']['output'];
  /**
   * The error message detailing what happened.
   *
   * If the last attempt was successful, this will be null.
   */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the error that occurred.
   *
   * If the last attempt was successful, this will be null.
   */
  errorName?: Maybe<Scalars['String']['output']>;
  /**
   * The integration that the lead was sent to.
   *
   * @see IntegrationType
   */
  integrationId: Scalars['String']['output'];
  /** Third reference ID (the internal object id in the integration) */
  refId?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the last attempt was an error.
   *
   * If the last attempt was successful, this will be false.
   */
  wasError: Scalars['Boolean']['output'];
};

export type LeadTranscript = {
  /** The time the message was created */
  createdTime: Scalars['String']['output'];
  /** Who the message is from */
  from?: Maybe<LeadTranscriptUserProfile>;
  /** A simple version of the message.  It will not include displays or SSML if the original message includes it. */
  message: Scalars['String']['output'];
  /** Who the message is two, it can be to multiple recipients. */
  to?: Maybe<Array<LeadTranscriptUserProfile>>;
};

export type LeadTranscriptUserProfile = {
  /** The email of the user. */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique userId */
  id: Scalars['String']['output'];
  /** The first name, or given name, of the user. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannel = BaseAppChannel & {
  /** The name of the lex bot. */
  botName?: Maybe<Scalars['String']['output']>;
  /** The region that the bot is contained in. */
  botRegion?: Maybe<Scalars['String']['output']>;
  /** A description of the bot */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: Maybe<Scalars['Boolean']['output']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: Maybe<Scalars['Boolean']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: Maybe<Scalars['Int']['output']>;
  /** Used to determine if there is a kendra instance linked to this bot. */
  isLinkedToKendra: Scalars['Boolean']['output'];
  /**
   * Items related to the kendra instance that is linked to this channel.
   * Returns null if there is no kendra instance linked to this channel.
   */
  kendraInstance?: Maybe<KendraInstance>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: Maybe<Scalars['String']['output']>;
  /** The URL to the lex post text deployment. */
  lexPostTextUrl?: Maybe<Scalars['String']['output']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: Maybe<Scalars['String']['output']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: Maybe<Scalars['String']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Match score must be higher than the set threshold otherwise it will fallback to the unknown inputs.
   * Defaults to 0.4
   */
  nluIntentConfidenceThreshold?: Maybe<Scalars['Float']['output']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: LexNluQuery;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: Maybe<Scalars['String']['output']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannelNluQueryArgs = {
  text: Scalars['String']['input'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexConnectAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type LexConnectAppChannelInput = {
  /** The name of the lex bot. */
  botName?: InputMaybe<Scalars['String']['input']>;
  /** The region that the bot is contained in. */
  botRegion?: InputMaybe<Scalars['String']['input']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: InputMaybe<Scalars['Boolean']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: InputMaybe<Scalars['String']['input']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: InputMaybe<Scalars['String']['input']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Match score must be higher than the set threshold otherwise it will fallback to the unknown inputs.
   * Defaults to 0.4
   */
  nluIntentConfidenceThreshold?: InputMaybe<Scalars['Float']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: InputMaybe<Scalars['String']['input']>;
};

export type LexNluQuery = {
  /** The intentId of the intent that is linked to this lex ID. */
  intentId: Scalars['String']['output'];
  knowledgeAnswer?: Maybe<LexNluQueryKnowledgeAnswer>;
  /** The intentId of the intent that is in the LexBot. */
  lexIntentId: Scalars['String']['output'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String']['output'];
};

export type LexNluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String']['output'];
  /** Raw question */
  faqQuestion: Scalars['String']['output'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Float']['output'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']['output']>;
};

/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannel = BaseAppChannel & {
  /** The ID to the lex bot */
  botId?: Maybe<Scalars['String']['output']>;
  /** The name of the lex bot. */
  botName?: Maybe<Scalars['String']['output']>;
  /** The region that the bot is contained in. */
  botRegion?: Maybe<Scalars['String']['output']>;
  /** A description of the bot */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: Maybe<Scalars['Boolean']['output']>;
  /** URL for the directory listing. */
  directoryListing?: Maybe<Scalars['String']['output']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: Maybe<Scalars['Boolean']['output']>;
  /** URI where the channel can be accessed. */
  endPoint?: Maybe<Scalars['String']['output']>;
  /** The ID of the channel. */
  id: Scalars['String']['output'];
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: Maybe<Scalars['Int']['output']>;
  /** Used to determine if there is a kendra instance linked to this bot. */
  isLinkedToKendra: Scalars['Boolean']['output'];
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: Maybe<Scalars['String']['output']>;
  /** The URL to the lex post text deployment. */
  lexPostTextUrl?: Maybe<Scalars['String']['output']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: Maybe<Scalars['String']['output']>;
  /** The external ID if applicable that allows external accounts to assume the role. */
  managementRoleExternalId?: Maybe<Scalars['String']['output']>;
  /** The display name for the channel. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Query the text from the NLU. The channel must have valid credentials,
   * projectId, and nlu.
   */
  nluQuery: LexV2NluQuery;
  /** The lifecycle status of the app. */
  status?: Maybe<AppChannelStatus>;
  /** The type of channel */
  type: Scalars['String']['output'];
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
  useNLU?: Maybe<Scalars['String']['output']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: Maybe<Scalars['String']['output']>;
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannelNluQueryArgs = {
  text: Scalars['String']['input'];
};


/** A channel that is specific for apps to run on the Dialogflow. */
export type LexV2ConnectAppChannelUsageEventsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type LexV2ConnectAppChannelInput = {
  /** The ID to the lex bot */
  botId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the lex bot. */
  botName?: InputMaybe<Scalars['String']['input']>;
  /** The region that the bot is contained in. */
  botRegion?: InputMaybe<Scalars['String']['input']>;
  /**
   * If true, user utterances are sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL for the directory listing. */
  directoryListing?: InputMaybe<Scalars['String']['input']>;
  /** Set to true to enable natural language understanding improvements. */
  enableModelImprovements?: InputMaybe<Scalars['Boolean']['input']>;
  /** URI where the channel can be accessed. */
  endPoint?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The maximum time in seconds that Amazon Lex retains data
   * gathered in the conversation.
   *
   * Defaults to 300 seconds (5 minutes), minimum value of 60 and
   * maximum value of 86400
   */
  idleSessionTTLInSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** The ARN of the Lambda that acts as fulfillment for all the intents. */
  lexFulfillmentLambdaARN?: InputMaybe<Scalars['String']['input']>;
  /** The role that is used to manage Lex on alternate accounts. */
  managementRole?: InputMaybe<Scalars['String']['input']>;
  /** The display name for the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The type of channel */
  type: Scalars['String']['input'];
  /**
   * ID of the NLU to use within app.nlu[].
   *
   * If it exists, the channel will use the provided NLU at runtime
   * to convert the raw text to an Intent
   *
   * If the value is "*", then it will pick the first available NLU within app.nlu[]
   */
  useNLU?: InputMaybe<Scalars['String']['input']>;
  /** The Amazon Polly voice ID that you want Polly to use. */
  voiceId?: InputMaybe<Scalars['String']['input']>;
};

export type LexV2NluQuery = {
  /** The intentId of the intent that is linked to this lex ID. */
  intentId: Scalars['String']['output'];
  knowledgeAnswer?: Maybe<LexV2NluQueryKnowledgeAnswer>;
  /** The intentId of the intent that is in the LexBot. */
  lexIntentId: Scalars['String']['output'];
  slots?: Maybe<Array<Maybe<NluRequestSlot>>>;
  type: Scalars['String']['output'];
};

export type LexV2NluQueryKnowledgeAnswer = {
  /** Raw answer */
  answer: Scalars['String']['output'];
  /** Raw question */
  faqQuestion: Scalars['String']['output'];
  /** Confidence 0-1 */
  matchConfidence: Scalars['Float']['output'];
  /** Which knowledge base (optional) */
  source?: Maybe<Scalars['String']['output']>;
};

export type LinkOutSuggestion = {
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ListDisplay = BaseDisplay & {
  items?: Maybe<Array<Maybe<ListDisplayItem>>>;
  /** Used with itemsObject, it is then used to reference the current item in the list within the template. */
  itemsName?: Maybe<Scalars['String']['output']>;
  /**
   * Used when templating the list for automatic generation.
   *
   * When using itemsObject, the first item in the list is the template
   * and all other items in the list will be ignored.
   */
  itemsObject?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  /**
   * When itemsObject is provided, this is the amount of list items to display
   * along with the offset within the list.
   */
  range?: Maybe<ListDisplayRange>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ListDisplayButton = {
  /** Text to be displayed, also needs to be included in the interaction model */
  title: Scalars['String']['output'];
};

export type ListDisplayImage = {
  /** Describes the image for screen readers, referred to as ContentDescription in Alexa */
  accessibilityText?: Maybe<Scalars['String']['output']>;
  /** The height of the image */
  height?: Maybe<Scalars['Int']['output']>;
  /** When present, if the image is clicked the provided website will open. */
  imageActionUrl?: Maybe<Scalars['String']['output']>;
  /** The location of the image, publicly accessible */
  url: Scalars['String']['output'];
  /** THe location of the smaller version of the image, publicly accessible */
  urlIcon?: Maybe<Scalars['URL']['output']>;
  /** The width of the image */
  width?: Maybe<Scalars['Int']['output']>;
};

export type ListDisplayImageInput = {
  /** Describes the image for screen readers, referred to as ContentDescription in Alexa */
  accessibilityText?: InputMaybe<Scalars['String']['input']>;
  /** The height of the image */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The location of the image, publicly accessible */
  url: Scalars['String']['input'];
  /** THe location of the smaller version of the image, publicly accessible */
  urlIcon?: InputMaybe<Scalars['URL']['input']>;
  /** The width of the image */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ListDisplayInput = {
  items?: InputMaybe<Array<InputMaybe<ListDisplayItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type ListDisplayItem = {
  buttons?: Maybe<Array<Maybe<ListDisplayButton>>>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<ListDisplayImage>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
  /**
   * URL to open when the list item is selected.
   *
   * Not applicable to list type CAROUSEL or available on channels without a web browser available.
   */
  url?: Maybe<Scalars['String']['output']>;
};

export type ListDisplayItemInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ListDisplayImageInput>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  /**
   * URL to open when the list item is selected.
   *
   * Not applicable to list type CAROUSEL or available on channels without a web browser available.
   */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ListDisplayRange = {
  from: Scalars['Int']['output'];
  length: Scalars['Int']['output'];
};

/** The attributes that override the App attributes by locale. See the documentation in the app for description on each. */
export type LocaleApp = {
  accountLinkType?: Maybe<Scalars['String']['output']>;
  actionsOnGoogleId?: Maybe<Scalars['String']['output']>;
  alexaCategory?: Maybe<Scalars['String']['output']>;
  alexaSkillId?: Maybe<Scalars['String']['output']>;
  dataStreams?: Maybe<DataStreams>;
  description?: Maybe<Scalars['String']['output']>;
  dialogflowClientToken?: Maybe<Scalars['String']['output']>;
  dialogflowCrednetialsUrl?: Maybe<Scalars['String']['output']>;
  dialogflowDeveloperToken?: Maybe<Scalars['String']['output']>;
  endPoint?: Maybe<Endpoint>;
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  icon?: Maybe<Scalars['String']['output']>;
  internalNotes?: Maybe<Scalars['String']['output']>;
  invocationName?: Maybe<Scalars['String']['output']>;
  ipRights?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  largeBanner?: Maybe<Scalars['String']['output']>;
  largeIcon?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  mediumIcon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  platformData?: Maybe<PlatformData>;
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  smallIcon?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  stripeProductId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionPaymentStatus?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  templateType?: Maybe<Scalars['String']['output']>;
  termsOfUseUrl?: Maybe<Scalars['String']['output']>;
  testingInstructions?: Maybe<Scalars['String']['output']>;
};

/** The attributes that override the App attributes by locale. See the documentation in the app for description on each. */
export type LocaleAppInput = {
  accountLinkType?: InputMaybe<Scalars['String']['input']>;
  actionsOnGoogleId?: InputMaybe<Scalars['String']['input']>;
  alexaCategory?: InputMaybe<Scalars['String']['input']>;
  alexaSkillId?: InputMaybe<Scalars['String']['input']>;
  dataStreams?: InputMaybe<DataStreamsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dialogflowClientToken?: InputMaybe<Scalars['String']['input']>;
  dialogflowCrednetialsUrl?: InputMaybe<Scalars['String']['input']>;
  dialogflowDeveloperToken?: InputMaybe<Scalars['String']['input']>;
  endPoint?: InputMaybe<EndpointInput>;
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  invocationName?: InputMaybe<Scalars['String']['input']>;
  ipRights?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  largeBanner?: InputMaybe<Scalars['String']['input']>;
  largeIcon?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  mediumIcon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  platformData?: InputMaybe<PlatformDataInput>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  smallIcon?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StatusInput>;
  stripeProductId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  subscriptionPaymentStatus?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  templateType?: InputMaybe<Scalars['String']['input']>;
  termsOfUseUrl?: InputMaybe<Scalars['String']['input']>;
  testingInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type LocaleResponseOutput = {
  displayText?: Maybe<Scalars['String']['output']>;
  ssm?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Array<Maybe<SuggestionType>>>;
  textToSpeech?: Maybe<Scalars['String']['output']>;
};

export type LocaleResponseOutputInput = {
  displayText?: InputMaybe<Scalars['String']['input']>;
  ssm?: InputMaybe<Scalars['String']['input']>;
  suggestions?: InputMaybe<Array<InputMaybe<SuggestionTypeInput>>>;
  textToSpeech?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The phsysical real-world location to associate the app with.
 *
 * This is helpful when serving local based content.
 */
export type Location = {
  geocode?: Maybe<Geocode>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

/**
 * The phsysical real-world location to associate the app with.
 *
 * This is helpful when serving local based content.
 */
export type LocationInput = {
  geocode?: InputMaybe<GeocodeInput>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
};

/** A Range system to */
export type MatchConfidenceRange = {
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Float']['input']>;
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  lessThanOrEqual?: InputMaybe<Scalars['Float']['input']>;
};

export type MeteredStat = {
  /** The current number consumed. */
  current: Scalars['Int']['output'];
  /** Whether or not the current meter has reached its limit. */
  isAllowed: Scalars['Boolean']['output'];
  /**
   * The maximum limit that is allowed.
   *
   * A negative number means there is no limit.
   */
  limit: Scalars['Int']['output'];
  /**
   * The remaining number.
   *
   * A negative number means there is  no limit hence all remaining.
   */
  remaining: Scalars['Int']['output'];
};

export type MobileCtaConfig = {
  /** Animation to perform on the button after the delay */
  animation?: Maybe<CtaAnimation>;
  /** How long to keep the animation going, in milliseconds.  If an animation exists */
  animationTimeout?: Maybe<Scalars['Int']['output']>;
  /** Apply this config when */
  applyAtLessThanWidth?: Maybe<Scalars['String']['output']>;
  /** The delay, in milliseconds, to wait until the message is displayed */
  delay?: Maybe<Scalars['Int']['output']>;
  /**
   * Message to display in the chat bubble.
   *
   * An empty message will not display the chat bubble.
   */
  message?: Maybe<Scalars['String']['output']>;
  /** How long, in milliseconds, to display the message */
  timeout?: Maybe<Scalars['Int']['output']>;
};

export type MobileCtaConfigInput = {
  animation?: InputMaybe<CtaAnimation>;
  animationTimeout?: InputMaybe<Scalars['Int']['input']>;
  applyAtLessThanWidth?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
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
  blowUpTheServers?: Maybe<Scalars['String']['output']>;
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
  changeOrgSubscription?: Maybe<Scalars['String']['output']>;
  codeChallenge?: Maybe<CodeChallenge>;
  confirmSignUp: Scalars['String']['output'];
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
   *
   * @deprecated(reason: "Use the OrgsMutation instead")
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
  deleteChannel: Scalars['String']['output'];
  /**
   * Delete the entity.
   *
   * Returns "Success" on successful delete.
   */
  deleteEntity: Scalars['String']['output'];
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
  deleteNlu: Scalars['String']['output'];
  /** Will delete a test. */
  deleteTest: Scalars['String']['output'];
  /**
   * Will delete all tests for a specific app.
   *
   * This is an asynchronous process.  The actual deletion may take a couple minutes depending on
   * the amount of tests that needs to be deleted.
   */
  deleteTestsOfApp: Scalars['String']['output'];
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
  generateLexFileUploadUrl: Scalars['String']['output'];
  onboarding: OnboardingMutation;
  /** Mutations that are related to Organizations */
  org: OrgsMutation;
  /**
   * Provisions Lex
   *
   * Before using this, a Lex channel in the app must already exist.
   */
  pushLex: Scalars['String']['output'];
  resendConfirmationCode: Scalars['String']['output'];
  /**
   * Sets whether the app can be copyable from one organization to another.
   *
   * Returns the updated app.
   */
  setAppCopyable: App;
  /** Will start executing the tests. This is an asynchronous operation. Returns "Success" if the tests have begun. */
  startTests: Scalars['String']['output'];
  /**
   * Crawls a website and retrieves the FAQs found on the website. It saves the FAQs to a database, and downloads the items to S3.
   *
   * @deprecated(reason: "All app-specific mutations are migrating to the UpdateAppMutation type. Please refer to the corresponding mutation there.")
   */
  startWebsiteCrawling: Scalars['String']['output'];
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
  trainDialogflowAgent: Scalars['String']['output'];
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
  updateDialogflowAgent: Scalars['String']['output'];
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
  appId: Scalars['ID']['input'];
  channel: ActionsOnGoogleAppChannelInput;
};


export type MutationAddAlexaChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: AlexaAppChannelInput;
};


export type MutationAddAlexaCredentialsArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  credentials: AlexaCredentialsInput;
};


export type MutationAddAlexaCredentialsByCodeArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  code: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddAppArgs = {
  app?: InputMaybe<AppInput>;
};


export type MutationAddAppLocaleArgs = {
  appId: Scalars['ID']['input'];
  locale: AddLocaleEnum;
  localeObj: LocaleAppInput;
};


export type MutationAddChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: AppChannelInput;
};


export type MutationAddChatWidgetChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: ChatWidgetAppChannelInput;
};


export type MutationAddDialogflowChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: DialogflowAppChannelInput;
};


export type MutationAddDialogflowCredentialsArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  credentials: DialogflowCredentialsInput;
};


export type MutationAddDialogflowNlusArgs = {
  appId: Scalars['ID']['input'];
  nlu: DialogflowAppNluInput;
};


export type MutationAddEntityArgs = {
  entity: AddEntityInput;
};


export type MutationAddFacebookMessengerChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: FacebookMessengerAppChannelInput;
};


export type MutationAddHandlerArgs = {
  appId: Scalars['ID']['input'];
  handler: AddHandlerInput;
};


export type MutationAddIntentArgs = {
  appId: Scalars['ID']['input'];
  intent: AddIntentInput;
};


export type MutationAddLexChannelArgs = {
  appId: Scalars['ID']['input'];
  channel: LexConnectAppChannelInput;
};


export type MutationAddUtteranceTestByEventArgs = {
  eventId: Scalars['String']['input'];
  eventIndex: Scalars['String']['input'];
  platform?: InputMaybe<TestPlatform>;
};


export type MutationAddUtteranceTestByStringArgs = {
  appId: Scalars['ID']['input'];
  platform?: InputMaybe<TestPlatform>;
  testString: Scalars['String']['input'];
};


export type MutationAppArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttachSmapiVendorArgs = {
  orgId: Scalars['ID']['input'];
  vendorId: Scalars['ID']['input'];
};


export type MutationAttachSmapiVendorToChannelArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  vendorId: Scalars['ID']['input'];
};


export type MutationChangeIntentToHandlerArgs = {
  appId: Scalars['ID']['input'];
  handlerProps: IntentToHandlerPropsInput;
  intentId: Scalars['ID']['input'];
};


export type MutationChangeOrgSubscriptionArgs = {
  organizationId: Scalars['ID']['input'];
  type: SubscriptionType;
};


export type MutationConfirmSignUpArgs = {
  clientId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  origin?: InputMaybe<AuthVerifyOrigin>;
  userName: Scalars['String']['input'];
};


export type MutationCopyAppArgs = {
  appId: Scalars['ID']['input'];
  overrideApp?: InputMaybe<CopyAppOverrideAttributes>;
  toOrg: Scalars['ID']['input'];
};


export type MutationCreateAppFromLexFileArgs = {
  fileUrl: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};


export type MutationCreateInteractionModelArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateOrgArgs = {
  appTemplate?: InputMaybe<AppTemplateInput>;
  org: CreateOrganizationInput;
};


export type MutationCreateSkillArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteChannelArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelType: Scalars['String']['input'];
};


export type MutationDeleteEntityArgs = {
  appId: Scalars['ID']['input'];
  entityId: Scalars['ID']['input'];
};


export type MutationDeleteHandlerArgs = {
  appId: Scalars['ID']['input'];
  handlerId: Scalars['ID']['input'];
};


export type MutationDeleteIntentArgs = {
  appId: Scalars['ID']['input'];
  intentId: Scalars['ID']['input'];
};


export type MutationDeleteNluArgs = {
  appId: Scalars['ID']['input'];
  nluId?: InputMaybe<Scalars['ID']['input']>;
  nluType: Scalars['String']['input'];
};


export type MutationDeleteTestArgs = {
  createdOn: Scalars['String']['input'];
  testId: Scalars['ID']['input'];
};


export type MutationDeleteTestsOfAppArgs = {
  appId: Scalars['ID']['input'];
};


export type MutationFlagEventArgs = {
  eventId: Scalars['ID']['input'];
  eventIndex?: InputMaybe<Scalars['String']['input']>;
  flag: NewRawQueryFlag;
  note?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGenerateLexFileUploadUrlArgs = {
  organizationId: Scalars['ID']['input'];
};


export type MutationPushLexArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationResendConfirmationCodeArgs = {
  clientId: Scalars['ID']['input'];
  origin?: InputMaybe<AuthVerifyOrigin>;
  userName: Scalars['String']['input'];
};


export type MutationSetAppCopyableArgs = {
  appId: Scalars['ID']['input'];
  isCopyable: Scalars['Boolean']['input'];
};


export type MutationStartTestsArgs = {
  appId: Scalars['ID']['input'];
  channelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testType: Scalars['String']['input'];
};


export type MutationStartWebsiteCrawlingArgs = {
  appId: Scalars['ID']['input'];
  channelId: Scalars['String']['input'];
  kendra?: InputMaybe<WebCrawlKendraInput>;
  s3RegionalDomain?: InputMaybe<Scalars['String']['input']>;
  settlingTimeSeconds?: InputMaybe<Scalars['settlingTimeSeconds_Int_max_5_exclusiveMin_0']['input']>;
  stealth?: InputMaybe<Scalars['Boolean']['input']>;
  webUrl: Scalars['URL']['input'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationSubmitForAlexaCertArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTrainDialogflowAgentArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateAppArgs = {
  app: UpdateAppInput;
  appId: Scalars['ID']['input'];
};


export type MutationUpdateDialogflowAgentArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateEntityArgs = {
  appId: Scalars['ID']['input'];
  entity: UpdateEntityInput;
  entityId: Scalars['ID']['input'];
};


export type MutationUpdateHandlerArgs = {
  appId: Scalars['ID']['input'];
  handler: UpdateHandlerInput;
  handlerId: Scalars['ID']['input'];
};


export type MutationUpdateIntentArgs = {
  appId: Scalars['ID']['input'];
  intent: UpdateIntentInput;
  intentId: Scalars['ID']['input'];
};


export type MutationUpdateOrgArgs = {
  org: UpdateOrganizationInput;
  organizationId: Scalars['ID']['input'];
};


export type MutationUpdateSkillArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUtteranceTestArgs = {
  createdOn: Scalars['String']['input'];
  testId: Scalars['ID']['input'];
  update: UtteranceTestUpdate;
};


export type MutationUploadAppTemplateArgs = {
  appId?: InputMaybe<Scalars['ID']['input']>;
  organizationId: Scalars['ID']['input'];
  template: AppTemplateInput;
};


export type MutationWithdrawFromAlexaCertArgs = {
  appId: Scalars['ID']['input'];
  channelId?: InputMaybe<Scalars['ID']['input']>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
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
  id?: Maybe<Scalars['String']['output']>;
  /** Confidence on the slot match.  Range is between 0 - 1 where 1 is the highest confidence. */
  matchConfidence?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /**
   * The raw spoken value.
   *
   * For example, "cavaliers" or "red"
   */
  rawValue?: Maybe<Scalars['String']['output']>;
  /** If the entity resolution was successful or not. */
  successfulMatch?: Maybe<Scalars['Boolean']['output']>;
};

export type OnboardingMutation = {
  /**
   * Downloads a website and retrieves specific details outlining the websites details like icon, primary/secondary colors,
   * and what technologies that the website uses.
   */
  startRetrieveWebsiteDetails: StartRetreiveWebsiteDetailsResult;
};


export type OnboardingMutationStartRetrieveWebsiteDetailsArgs = {
  webUrl: Scalars['URL']['input'];
};

export type OnboardingQuery = {
  /** Returns the execution data for gathering website details. */
  webDetailsExecution: WebDetailsExecution;
};


export type OnboardingQueryWebDetailsExecutionArgs = {
  executionId: Scalars['ID']['input'];
};

export type OpportunityAlertDetail = {
  /** Whether or not to receive the messages during the business hours */
  duringBusinessHours?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not to receive the messages outside the business hours */
  outsideBusinessHours?: Maybe<Scalars['Boolean']['output']>;
  /** Type of alert that it is. */
  type: OpportunityAlertDetailType;
};

export type OpportunityAlertDetailInput = {
  /** Whether or not to receive the messages during the business hours */
  duringBusinessHours?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not to receive the messages outside the business hours */
  outsideBusinessHours?: InputMaybe<Scalars['Boolean']['input']>;
  /** Type of alert that it is. */
  type: OpportunityAlertDetailType;
};

export enum OpportunityAlertDetailType {
  AgentRequested = 'AGENT_REQUESTED',
  BuyingIntent = 'BUYING_INTENT',
  ChatStarted = 'CHAT_STARTED',
  NewSession = 'NEW_SESSION',
  UnansweredQuestion = 'UNANSWERED_QUESTION'
}

export type OrgAcceptToSReturn = {
  updatedOrg: Organization;
};

export type OrgAcceptedTermsOfService = {
  /** The ISO date in which the user accepted the terms. */
  acceptedOn: Scalars['DateTime']['output'];
  /** The email address of the user that accepted the terms */
  email: Scalars['String']['output'];
  /** The URL of the terms sheet that was accepted. */
  url: Scalars['URL']['output'];
  /** The user that accepted the terms of service */
  userId: Scalars['String']['output'];
};

export type OrgAnalytics = {
  user: OrgUsageStat;
};


export type OrgAnalyticsUserArgs = {
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byEnvironment?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
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
  email: Scalars['String']['output'];
  policy: OrgPolicy;
  userId: Scalars['ID']['output'];
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
  remove: Scalars['String']['output'];
  /** Removes the invitation for a user. */
  removeInvite: Scalars['String']['output'];
};


export type OrgMembersMutationInviteArgs = {
  email: Scalars['String']['input'];
  roles: Array<InputMaybe<Scalars['String']['input']>>;
};


export type OrgMembersMutationRemoveArgs = {
  userId: Scalars['ID']['input'];
};


export type OrgMembersMutationRemoveInviteArgs = {
  email: Scalars['String']['input'];
  invitationId: Scalars['ID']['input'];
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
  /** Notifies us that the user has accepted the Terms of Service. */
  acceptTos: OrgAcceptToSReturn;
  cms: CmsMutation;
  /** Deletes the attributes of the organization. */
  delete: Scalars['String']['output'];
  /**
   * Links an organization to an AWS subscription if one is available.
   *
   * Setting the subscription type to "FREE" will unlink the organization and
   * free up the subscription for another organization.
   */
  linkToAWSSub: Scalars['String']['output'];
  /** Mutations related to the members of an organization. */
  members: OrgMembersMutation;
  /** Updates the attributes of the organization. */
  update: Organization;
  /** Updates the billing contact of an org. */
  updateBillingContact: Organization;
  /** Updates the brand contact of an org. */
  updateBrandContact: Organization;
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
  updateTier: Scalars['String']['output'];
};


export type OrgMutationLinkToAwsSubArgs = {
  type: SubscriptionType;
};


export type OrgMutationUpdateArgs = {
  org: UpdateOrganizationInput;
};


export type OrgMutationUpdateBillingContactArgs = {
  contact: BillingContactInput;
};


export type OrgMutationUpdateBrandContactArgs = {
  contact: BrandContactInput;
};


export type OrgMutationUpdateTierArgs = {
  type: SubscriptionType;
};

export type OrgPolicy = {
  permissions: Array<Maybe<Scalars['String']['output']>>;
  roles: Array<Maybe<Scalars['String']['output']>>;
};

export type OrgUsageStat = {
  /** A CSV formatted output of the stats found. */
  csv: UsageStatCsvReturn;
  intervals: Array<Maybe<UsageStat>>;
  newUsers: Scalars['Int']['output'];
  /** ID of the organization that contains the app */
  organizationId: Scalars['ID']['output'];
  returningUsers: Scalars['Int']['output'];
  totalSessions: Scalars['Int']['output'];
  totalUsers: Scalars['Int']['output'];
};

export type OrgUsageStats = {
  docsCrawled: Scalars['Int']['output'];
  entities: Scalars['Int']['output'];
  handlers: Scalars['Int']['output'];
  intents: Scalars['Int']['output'];
  testsExecuted: Scalars['Int']['output'];
  totalDocs: Scalars['Int']['output'];
  uniqueSessions: Scalars['Int']['output'];
};

/**
 * An organization is a group which contains and manages specific apps.
 * Each organization is a representation of a company which publishes
 * apps in the Stentor platform.
 */
export type Organization = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: Maybe<Scalars['String']['output']>;
  _id: Scalars['ID']['output'];
  /** Returns true if the org has accepted the latest version of the terms of service. */
  acceptedLatestTermsOfService: Scalars['Boolean']['output'];
  acceptedTermsOfService: Array<OrgAcceptedTermsOfService>;
  analytics?: Maybe<OrgAnalytics>;
  /** The apps that the organization contains. */
  apps?: Maybe<GetAppsQuery>;
  /** Deprecated: The Auth0 Group that the organization is linked to. */
  auth0GroupId?: Maybe<Scalars['ID']['output']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: Maybe<Scalars['String']['output']>;
  /** An object of feature flags */
  beta?: Maybe<Scalars['JSON']['output']>;
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
  contact?: Maybe<Scalars['String']['output']>;
  /** The organization contact's name. */
  contactName?: Maybe<Scalars['String']['output']>;
  /** The organization contact's phone number. */
  contactPhone?: Maybe<Scalars['String']['output']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: Maybe<Scalars['String']['output']>;
  /** The date at which the organization was created */
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The human-readable description of the organization. */
  description: Scalars['String']['output'];
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: Maybe<IPrights>;
  /** URL for the organization's logo. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The members statics for the given time frame. */
  members: OrgMembers;
  /** The human-readable name of the organization. */
  name: Scalars['String']['output'];
  /** Any notes that are related to the organization. */
  notes?: Maybe<Scalars['String']['output']>;
  /** A unique ID to identify a specific organization. */
  organizationId: Scalars['ID']['output'];
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
  website?: Maybe<Scalars['String']['output']>;
};


/**
 * An organization is a group which contains and manages specific apps.
 * Each organization is a representation of a company which publishes
 * apps in the Stentor platform.
 */
export type OrganizationAppsArgs = {
  byName?: InputMaybe<Scalars['String']['input']>;
  byStatusType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from?: InputMaybe<Scalars['Int']['input']>;
  nuSortBy?: InputMaybe<Array<InputMaybe<OrgAppQuerySortByParameters>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
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
  add: CreateOrgReturn;
  org: OrgMutation;
};


export type OrgsMutationAddArgs = {
  app?: InputMaybe<CreateOrgCreateAppInput>;
  appTemplate?: InputMaybe<AppTemplateInput>;
  org: CreateOrganizationInput;
};


export type OrgsMutationOrgArgs = {
  organizationId: Scalars['ID']['input'];
};

/** A collections query which returns a collection of organizations. */
export type OrgsQuery = {
  /** A subset of organizations that are viewed. */
  orgs?: Maybe<Array<Maybe<SearchedOrg>>>;
  /** The total number of organizations that were found in the query. */
  total: Scalars['Int']['output'];
};

export type PaymentAccounts = {
  _id: Scalars['ID']['output'];
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
  email: Scalars['String']['output'];
  invitationId: Scalars['ID']['output'];
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
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
};

export type PublishingAccounts = {
  _id: Scalars['ID']['output'];
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
  /** The version that the API is currently in. */
  apiVersion: Scalars['String']['output'];
  /** Fetches a single app */
  app?: Maybe<App>;
  /** Fetches a list of apps */
  apps?: Maybe<AppsQuery>;
  /** These are the test types that are currently available to search and execute. */
  availableTestTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  entity?: Maybe<Entity>;
  /** Retrieve a batch of entities for the given word. */
  entitySuggestions?: Maybe<Suggestion>;
  /** Retrieve a specific Handler */
  handler?: Maybe<Handler>;
  /** Retrieve a specific intent */
  intent?: Maybe<Intent>;
  onboarding: OnboardingQuery;
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
  appId: Scalars['ID']['input'];
};


/** Top level query for Stentor. */
export type QueryEntityArgs = {
  appId: Scalars['String']['input'];
  entityId: Scalars['String']['input'];
};


/** Top level query for Stentor. */
export type QueryEntitySuggestionsArgs = {
  appId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


/** Top level query for Stentor. */
export type QueryHandlerArgs = {
  appId: Scalars['ID']['input'];
  intentId: Scalars['ID']['input'];
};


/** Top level query for Stentor. */
export type QueryIntentArgs = {
  appId: Scalars['ID']['input'];
  intentId: Scalars['ID']['input'];
};


/** Top level query for Stentor. */
export type QueryOrgArgs = {
  organizationId: Scalars['ID']['input'];
};


/** Top level query for Stentor. */
export type QueryOrgsArgs = {
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  withIdOrName?: InputMaybe<Scalars['String']['input']>;
};


/** Top level query for Stentor. */
export type QueryProfileArgs = {
  jwt?: InputMaybe<Scalars['String']['input']>;
};


/** Top level query for Stentor. */
export type QueryTestsArgs = {
  appId: Scalars['ID']['input'];
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testType?: InputMaybe<Scalars['String']['input']>;
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
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type RequestDependentHandlerPath = RequestDependentExecutableHandlerPath | RequestDependentHistoricalHandlerPath | RequestDependentPreviousHandlerPath;

export type RequestDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  requestMatch?: Maybe<Scalars['JSON']['output']>;
  segments?: Maybe<Array<Maybe<HandlerResponseSegmentItem>>>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type RequestDependentHandlerResponseSegment = HandlerResponseSegment & {
  requestMatch: Scalars['JSON']['output'];
  segment: ResponseOutput;
};

export type RequestDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
};

export type RequestDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  requestMatch?: Maybe<Scalars['JSON']['output']>;
};

export type ResponseOutput = {
  defaultLocale?: Maybe<Scalars['String']['output']>;
  displayText?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<ResponseOutputLocales>;
  ssml?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Array<Maybe<SuggestionType>>>;
  textToSpeech?: Maybe<Scalars['String']['output']>;
};

export type ResponseOutputInput = {
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  displayText?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<ResponseOutputLocalesInput>;
  ssml?: InputMaybe<Scalars['String']['input']>;
  suggestions?: InputMaybe<Array<InputMaybe<SuggestionTypeInput>>>;
  textToSpeech?: InputMaybe<Scalars['String']['input']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  /** The origin of the code. */
  origin?: InputMaybe<AuthOrigin>;
};

export type SchedulableDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
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
  dayOfWeek?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  time: Scalars['String']['output'];
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type ScheduleStartInput = {
  dayOfWeek?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  time: Scalars['String']['input'];
  timeZone?: InputMaybe<Scalars['String']['input']>;
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

export type ScoredWebFaq = {
  /** ID of the webFAQ */
  _id: Scalars['ID']['output'];
  /** The score received based on the query presented. */
  _score: Scalars['Float']['output'];
  /** The answer of the FAQ questions */
  answer: Scalars['String']['output'];
  associatedHandlerId?: Maybe<Scalars['String']['output']>;
  /** The time it was created. */
  created: Scalars['String']['output'];
  /** The name assigned to the question-answer page */
  name: Scalars['String']['output'];
  /** Questions that are linked to the answer */
  questions: Array<Maybe<Scalars['String']['output']>>;
  /** The raw text of the FAQ page */
  raw?: Maybe<Scalars['String']['output']>;
  /** The URL that the FAQ came from */
  url?: Maybe<Scalars['String']['output']>;
  /** A query for any errors that may be in the ScoredWebFAQ */
  validation: WebFaqValidation;
};

/** Organization that is returned from a Search query. */
export type SearchedApp = {
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: Maybe<Scalars['String']['output']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the app. */
  appId: Scalars['String']['output'];
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: Maybe<Scalars['String']['output']>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: Maybe<Scalars['String']['output']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: Maybe<Scalars['String']['output']>;
  /** The name of the app. */
  name: Scalars['String']['output'];
  /** The unique identifier for the organization that the app is a part of. */
  organizationId: Scalars['String']['output'];
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: Maybe<Scalars['String']['output']>;
  /** The status that the app is currently in Stentor. */
  status?: Maybe<SearchedAppStatus>;
  /** A short description of what the app does. */
  summary?: Maybe<Scalars['String']['output']>;
};

export type SearchedAppStatus = {
  /** The email of the user who last changed the status. */
  email: Scalars['String']['output'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The time the status was last changed.
   *
   * Format: ISO 8601
   */
  timestamp: Scalars['String']['output'];
  /** The status level of the app. */
  type: Scalars['String']['output'];
};

/** Organization that is returned from a Search query. */
export type SearchedOrg = {
  /** The email of the XAPP employee which is the main contact for the organization. */
  XAPPLead?: Maybe<Scalars['String']['output']>;
  /** The contact email of the organization. */
  contact?: Maybe<Scalars['String']['output']>;
  /** The name of the contact. */
  contactName?: Maybe<Scalars['String']['output']>;
  /** A human-readable description of the organization. */
  description?: Maybe<Scalars['String']['output']>;
  /** URL for the organization's logo. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the organization. */
  name: Scalars['String']['output'];
  /** Internal notes on the organization. */
  notes?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the organization. */
  organizationId: Scalars['String']['output'];
  /** Payment account information */
  paymentAccounts?: Maybe<PaymentAccounts>;
  /** The type of subscription that the organization currently is under. */
  type: SubscriptionType;
};

export type SelectedCount = {
  /** The number of times the 'selectedHandler' was selected from the current intent. */
  count: Scalars['Int']['output'];
  /** The handler/intent ID that was selected during execution. */
  selectedHandler: Scalars['String']['output'];
};

export type Sentences = {
  /** The ending position of the sentence in the phrase. */
  end: Scalars['Int']['output'];
  /** The starting position of the sentence in the phrase. */
  start: Scalars['Int']['output'];
};

export type ServiceOrderAccount = {
  /**
   * The date which the service order was created.
   *
   * Format: ISO 8601 date.
   */
  date?: Maybe<Scalars['String']['output']>;
  /** The number of apps that the organization is allowed to publish. */
  numberOfApps?: Maybe<Scalars['Int']['output']>;
  /** The type of payment that the organization uses (check, card, etc.) */
  paymentType?: Maybe<Scalars['String']['output']>;
};

export type ServiceOrderAccountInput = {
  /**
   * The date which the service order was created.
   *
   * Format: ISO 8601 date.
   */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The number of apps that the organization is allowed to publish. */
  numberOfApps?: InputMaybe<Scalars['Int']['input']>;
  /** The type of payment that the organization uses (check, card, etc.) */
  paymentType?: InputMaybe<Scalars['String']['input']>;
};

export type SessionLeadsResult = {
  /** The leads that were found. */
  leads: Array<CaughtLead>;
  /** The key to retrieve more leads or null if there are none left. */
  nextKey?: Maybe<Scalars['String']['output']>;
};

export type SimpleDisplay = BaseDisplay & {
  backButtonVisible?: Maybe<Scalars['Boolean']['output']>;
  backgroundImage?: Maybe<DisplayImage>;
  image?: Maybe<DisplayImage>;
  items?: Maybe<Array<Maybe<DisplayListItem>>>;
  listItems?: Maybe<Array<Maybe<DisplayListItem>>>;
  payload?: Maybe<Scalars['JSON']['output']>;
  textContent?: Maybe<DisplayTextContent>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SimpleDisplayInput = {
  backButtonVisible?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundImage?: InputMaybe<DisplayImageInput>;
  image?: InputMaybe<DisplayImageInput>;
  listItems?: InputMaybe<Array<InputMaybe<DisplayListItemInput>>>;
  textContent?: InputMaybe<DisplayTextContentInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type SimpleHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type SimpleHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
};

export type Slot = {
  _id: Scalars['String']['output'];
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
  inputText?: Maybe<Scalars['String']['output']>;
  /**
   * Is the slot a list of values.
   * Supported natively by Dialogflow and shims for Alexa.
   * Can be a boolean or number.  When a number is used, it provides guidance to the Alexa shim on the max amount of expected
   * items in the list.  Minimum value is 2.  Value defaults to 6 when set to true.
   * * NOTE: Only one isList slot is supported per utterance pattern.
   */
  isList?: Maybe<Scalars['IntOrBoolean']['output']>;
  /**
   * The name of the slot, corresponds to how it is displayed in the
   * sample utterance.
   *
   * For example: "Play {Podcast}" where Podcast is the name.
   */
  name: Scalars['String']['output'];
  nlu?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type SlotDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type SlotDependentHandlerPath = SlotDependentExecutableHandlerPath | SlotDependentHistoricalHandlerPath | SlotDependentPreviousHandlerPath;

export type SlotDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  slotMatch?: Maybe<Scalars['JSON']['output']>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type SlotDependentHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
  slotMatch: Scalars['JSON']['output'];
};

export type SlotDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
};

export type SlotDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  slotMatch?: Maybe<Scalars['JSON']['output']>;
};

export enum SlotObfuscation {
  Full = 'FULL',
  Partial = 'PARTIAL'
}

export type SmapiAccount = {
  /** The ID for the linked SMAPI developer account. */
  vendorId: Scalars['ID']['output'];
};

export type SmapiAccountInput = {
  /** The ID for the linked SMAPI developer account. */
  vendorId: Scalars['ID']['input'];
};

export type SmapiVendor = {
  /** The vendorId of the smapi vendor. */
  id: Scalars['ID']['output'];
  /** The human readable name for the vendor. */
  name: Scalars['String']['output'];
  /** The permissions that the user has in the vendor. */
  roles: Array<Maybe<Scalars['String']['output']>>;
};

/** These are the attributes that are available for sorting when querying apps of an organization. */
export enum SortableAppAttributes {
  /** Sort alphabetically by appId */
  AppId = 'APP_ID',
  /** Sort by most recent status time */
  StatusTime = 'STATUS_TIME'
}

export type StartRetreiveWebsiteDetailsResult = {
  /** The execution ID of the website to crawl. */
  executionId: Scalars['ID']['output'];
};

export type StartRetreiveWebsiteDetailsSyncResult = {
  /**
   * The website details downloaded.
   *
   * null on error
   */
  result?: Maybe<WebsiteData>;
};

export type Status = {
  /** The email of the user who last changed the status. */
  email: Scalars['String']['output'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /** A brief history of the status changes. */
  statusHistory?: Maybe<Array<Maybe<StatusHistory>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['output'];
  /** The status level of the app. */
  type: Scalars['String']['output'];
};

export type StatusHistory = {
  /** The email of the user who changed the status. */
  email: Scalars['String']['output'];
  /** Any notes that was associated with the status change. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['output'];
  /** The status level that the app was. */
  type: Scalars['String']['output'];
};

export type StatusHistoryInput = {
  /** The email of the user who changed the status. */
  email: Scalars['String']['input'];
  /** Any notes that was associated with the status change. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /**
   * The time the status was changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['input'];
  /** The status level that the app was. */
  type: Scalars['String']['input'];
};

export type StatusInput = {
  /** The email of the user who last changed the status. */
  email: Scalars['String']['input'];
  /** Any notes that was associated with the status change. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** A brief history of the status changes. */
  statusHistory?: InputMaybe<Array<InputMaybe<StatusHistoryInput>>>;
  /**
   * The time the status was last changed.
   *
   * Format: UNIX timestamp
   */
  timestamp: Scalars['Long']['input'];
  /** The status level of the app. */
  type: Scalars['String']['input'];
};

export type StorageDependentExecutableHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type StorageDependentHandlerPath = StorageDependentExecutableHandlerPath | StorageDependentHistoricalHandlerPath | StorageDependentPreviousHandlerPath;

export type StorageDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  storageMatch?: Maybe<Scalars['JSON']['output']>;
  /** System responses to perform account links, control media, surface changes, and permission requests. */
  system?: Maybe<HandlerResponseSystem>;
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type StorageDependentHandlerResponseSegment = HandlerResponseSegment & {
  segment: ResponseOutput;
  storageMatch?: Maybe<Scalars['JSON']['output']>;
};

export type StorageDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']['output']>;
};

export type StorageDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
  /**
   * Match data for the JSON path.
   *
   * 'name' on Match is the JSON path
   */
  storageMatch?: Maybe<Scalars['JSON']['output']>;
};

export type StripePaymentAccount = {
  /** The Stripe customer ID linked to the organization. */
  customerId: Scalars['ID']['output'];
};

export type StripePaymentAccountInput = {
  /** The Stripe customer ID linked to the organization. */
  customerId: Scalars['ID']['input'];
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

export type SubscriptionDetails = {
  summary?: Maybe<SubscriptionSummary>;
};

export type SubscriptionSummary = {
  /** Subscription is cancelled */
  isCancelled: Scalars['Boolean']['output'];
  /** When we last charged them and what amount */
  lastCharge?: Maybe<ChargeSummary>;
  /** When is the next bill and what that amount will be */
  nextCharge?: Maybe<UpcomingInvoice>;
  /** Subscription status(stripe) */
  status: Scalars['String']['output'];
  /** When their trial runs out  (The ISO formatted date) */
  trialEndDate?: Maybe<Scalars['String']['output']>;
};

export enum SubscriptionType {
  AppSub = 'APP_SUB',
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
  text: Scalars['String']['output'];
  tokens: Array<Maybe<Tokens>>;
};

export type SuggestionIntent = {
  /** The ID of the app that the intent is linked to. */
  appId: Scalars['ID']['output'];
  /** The entity IDs of the entities in this suggestion that use this intent. */
  entities: Array<Maybe<Scalars['String']['output']>>;
  /** The unique identifier of the intent itself. */
  intentId: Scalars['ID']['output'];
  /** The human-readable name of the intent. */
  name: Scalars['String']['output'];
  /** The ID of the organization that the intent is linked to. */
  organizationId: Scalars['ID']['output'];
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: Maybe<Array<Maybe<Slot>>>;
};

export type SuggestionObject = {
  title: Scalars['String']['output'];
};

export type SuggestionType = LinkOutSuggestion | SuggestionObject;

export type SuggestionTypeInput = {
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SuggestionsMutation = {
  addFAQSuggestion: FaqSuggestionReturn;
};


export type SuggestionsMutationAddFaqSuggestionArgs = {
  countToGenerate: Scalars['Int']['input'];
  suggestion?: InputMaybe<AdminFaqSuggestionInput>;
};

export type SyncFaqToKendraReturn = {
  executionId: Scalars['String']['output'];
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
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the handler to forward or redirect the request to */
  intentId: Scalars['String']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
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
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemDependentHandlerPath = SystemDependentExecutableHandlerPath | SystemDependentHistoricalHandlerPath | SystemDependentPreviousHandlerPath;

export type SystemDependentHandlerResponse = HandlerResponse & {
  /** Description of the channel that will be */
  channel?: Maybe<HandlerResponseChannel>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['HandlerResponseConditions']['output']>;
  context?: Maybe<HandlerResponseContext>;
  data?: Maybe<Scalars['JSON']['output']>;
  displays?: Maybe<Array<Maybe<BaseDisplay>>>;
  /** The name of the intent that the response is linked to. */
  intent: Scalars['String']['output'];
  /**
   * Name of the response
   *
   * Used to help differentiate multiple responses.
   */
  name?: Maybe<Scalars['String']['output']>;
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
  /**
   * Used for tracking the response in third party analytics.
   *
   * @deprecated(reason: Tags can be arrays now. Use tags instead.  This one will only return the top tag if it's an array.)
   */
  tag?: Maybe<Scalars['String']['output']>;
  /** Used for tracking the response in third party analytics. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type SystemDependentHistoricalHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * The number of handlers to go back into the history of.
   *
   * This is typically just one and can be no more than 10.
   */
  historicalIndex: Scalars['Int']['output'];
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /**
   * Optional, if redirecting or forwarding to a handler that is expecting slots,
   * set these to pre-populate them on the request.
   */
  slots?: Maybe<Scalars['JSON']['output']>;
  systemCondition?: Maybe<SystemConditionType>;
};

export type SystemDependentPreviousHandlerPath = BaseHandlerPath & {
  actions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Conditions to be met. */
  conditions?: Maybe<Scalars['PathConditions']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Optional platform filter for the path.
   *
   * If set, the path will only apply to the specified platform.
   */
  platform?: Maybe<Scalars['String']['output']>;
  /** Set to true to request the previous handler paths. */
  previousHandler: Scalars['Boolean']['output'];
  systemCondition?: Maybe<SystemConditionType>;
};

export type SystemNotification = BaseSystemNotification & {
  /** A time when the notification was received */
  created: Scalars['DateTime']['output'];
  /** A unique identifier for the notification */
  id: Scalars['ID']['output'];
  /** The custom level that the notification should be at. */
  level: SystemNotificationLevel;
  /** A details description of the notification */
  message: Scalars['String']['output'];
  /**
   * Meta data that is associated with the system notification.
   *
   * The meta data returned is dependent on the type of notification.
   */
  meta?: Maybe<Scalars['JSON']['output']>;
  /** A title or name of the notification */
  name: Scalars['String']['output'];
};

export enum SystemNotificationLevel {
  Error = 'ERROR',
  Info = 'INFO',
  Warn = 'WARN'
}

export type TaskResult = {
  completed: Scalars['Boolean']['output'];
};

export type TestConfig = {
  /**
   * The duration after a test executes that the runner should wait.
   *
   * Note: The test runner runs batches of tests in parallel. This will
   * slow down execution of the current batch but some tests will
   * still execute while this one is waiting.
   */
  delayAfter?: Maybe<Scalars['Int']['output']>;
  /**
   * The duration before a test executes that the runner should wait.
   *
   * Note: The test runner runs batches of tests in parallel. This will
   * slow down execution of the current batch but some tests will
   * still execute while this one is waiting.
   */
  delayBefore?: Maybe<Scalars['Int']['output']>;
};

export type TestFailureReason = {
  /** A more detailed description of the failure. */
  details: Scalars['String']['output'];
  /** The reason the test failed. */
  reason: Scalars['String']['output'];
};

export type TestHistory = {
  /** The time that the test was executed. Format: ISO 8601 */
  executed: Scalars['String']['output'];
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
  executionStart: Scalars['String']['output'];
  /** The time that the ended. Format: ISO 8601 */
  executionStop?: Maybe<Scalars['String']['output']>;
  /** The current state of the test. */
  state: CurrentTestState;
};

/** Opportunity alert that sends the message to the user via text message. */
export type TextOpportunityAlert = BaseOpportunityAlert & {
  alerts: Array<OpportunityAlertDetail>;
  /**
   * Did the user consent to receiving messages.
   *
   * Keeping track of this for compliance purposes.
   */
  consented: Scalars['Boolean']['output'];
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Phone number of the user to receive the alert.
   *
   * It is assumed that this number belongs to a mobile device with web browsing capabilities.
   */
  phoneNumber: Scalars['String']['output'];
  placeId?: Maybe<Scalars['String']['output']>;
};

export type TextOpportunityAlertInput = {
  /** Registered alerts */
  alerts: Array<OpportunityAlertDetailInput>;
  /**
   * Did the user consent to receiving messages.
   *
   * Keeping track of this for compliance purposes.
   */
  consented: Scalars['Boolean']['input'];
  /** Temporarily disable the alert */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Phone number of the user to receive the alert.
   *
   * It is assumed that this number belongs to a mobile device with web browsing capabilities.
   */
  phoneNumber: Scalars['String']['input'];
  /** The Google PlaceID for the location */
  placeId?: InputMaybe<Scalars['String']['input']>;
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
  dep: Scalars['String']['output'];
  end: Scalars['Int']['output'];
  head: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pos: Scalars['String']['output'];
  start: Scalars['Int']['output'];
  tag: Scalars['String']['output'];
};

export type TotalEvents = {
  /** The events that are returned in the current query. */
  events?: Maybe<Array<Maybe<Events>>>;
  /** Statistics on the number of flags in a given query */
  flagTotals: FlagTotals;
  /** The total number of events that fit the last query. */
  total: Scalars['Int']['output'];
};

export type TotalQueryAppTests = {
  /** The tests that were found in this query. */
  tests?: Maybe<Array<Maybe<AppTest>>>;
  /** The total number of app tests that fit the last query. */
  total: Scalars['Int']['output'];
};

export type TotalUsageEvents = {
  /** The total number of events available */
  total: Scalars['Int']['output'];
  /** The usage events retrieved in this query. */
  usageEvents?: Maybe<Array<Maybe<UsageEvents>>>;
};

export type TotalWebContent = {
  /** The content that was downloaded for the app */
  content: Array<Maybe<WebContentWithHighlights>>;
  /** The total number of web content found. */
  total: Scalars['Int']['output'];
};

export type TotalWebContentErrors = {
  /** Any errors that may have happened during content attempts */
  errors: Array<Maybe<WebContentErrors>>;
  /** The total number of web content found. */
  total: Scalars['Int']['output'];
};

export type TotalWebContentSources = {
  /** Stats for the last generated web crawl. Will be undefined if there was no crawl yet. */
  lastCrawl?: Maybe<TotalWebContentSourcesLastCrawl>;
  /** The crawl sources that downloaded the content */
  sources: Array<Maybe<WebContentSources>>;
  /** The total number of web content found. */
  total: Scalars['Int']['output'];
};

export type TotalWebContentSourcesLastCrawl = {
  documents: Array<Maybe<WebContent>>;
  ended: Scalars['DateTime']['output'];
  errors: Array<Maybe<WebContentErrors>>;
  started: Scalars['DateTime']['output'];
};

export type TotalWebFaq = {
  faq: Array<Maybe<WebFaq>>;
  /** The total number of web content found. */
  total: Scalars['Int']['output'];
};

export type TrialTierPaymentAccount = BaseStudioTierPaymentAccount & {
  /** The duration that the trial will last. */
  durationMs: Scalars['Long']['output'];
  /** The end date that the trial will end */
  endDate: Scalars['DateTime']['output'];
  /** The time that the trial started. */
  startDate: Scalars['DateTime']['output'];
  tier: StudioTierType;
};

/** A currently unsupported opportunity alert. */
export type UnknownOpportunityAlert = BaseOpportunityAlert & {
  alerts: Array<OpportunityAlertDetail>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  placeId?: Maybe<Scalars['String']['output']>;
};

export type UpcomingInvoice = {
  amountDue: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['String']['output'];
};

export type UpdateAppChannelMutation = {
  deleteScheduledEvent: Scalars['String']['output'];
  scheduleWeeklyWebCrawls: WebCrawlSchedule;
  syncFAQToKendra: SyncFaqToKendraReturn;
};


export type UpdateAppChannelMutationDeleteScheduledEventArgs = {
  scheduleId: Scalars['ID']['input'];
};


export type UpdateAppChannelMutationScheduleWeeklyWebCrawlsArgs = {
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>>;
  stealth?: InputMaybe<Scalars['Boolean']['input']>;
  webUrl: Scalars['URL']['input'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateAppInput = {
  /** The type of the account linking. This tells us how to redeem the token for PII. */
  accountLinkType?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the google action that the app is linked to. */
  actionsOnGoogleId?: InputMaybe<Scalars['String']['input']>;
  /** The category that the app will fall in to when published to Alexa. */
  alexaCategory?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the alexa skill that the app is linked to. */
  alexaSkillId?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the app in Stentor. This attribute will not be updated on an update request. */
  appId?: InputMaybe<Scalars['ID']['input']>;
  /** Settings for the availability of the CRM service. */
  availability?: InputMaybe<CrmServiceAvailabilitySettingsInput>;
  /**
   * URL of the original banner image with aspect ratio of 16:9 and minimum dimensions of 1920x1080.
   *
   * Required by Actions on Google
   */
  banner?: InputMaybe<Scalars['String']['input']>;
  beta?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * A description of the business and it's services.
   *
   * This can be used for LLM operations
   */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /**
   * A description of what they consider to be high value leads, prioritized queries that they
   * want to be notified immediately.
   *
   * This can be used for LLM operations
   */
  businessHighValueLeadDescription?: InputMaybe<Scalars['String']['input']>;
  /** The hours in which the business related to the app is open. */
  businessHours?: InputMaybe<Array<BusinessHoursInput>>;
  /**
   * The description for the app.
   *
   * The description cannot be more than 4000 characters.
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Example phrases the help users know how to use the app.
   *
   * At least three are required for publication.
   */
  examplePhrases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * URL to the original icon file before transformation.
   *
   * Aspect ration must be 1:1 and minimum dimensions are 512x512.
   */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Allows stentor_admins to view and add notes to apps for internal use. */
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  /** The phrase a user must speak to wake the app up on a specific platform. */
  invocationName?: InputMaybe<Scalars['String']['input']>;
  /** Allows app-specific overriding of IPRights. */
  ipRights?: InputMaybe<IpRightsInput>;
  /**
   * Keywords to help when searching directories for the app
   *
   * Max of 30 keywords are allowed.
   */
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Banner that is 1920x1080.
   *
   * Required by Actions on Google
   */
  largeBanner?: InputMaybe<Scalars['String']['input']>;
  /**
   * A large icon for the app, 512x512 PNG
   *
   * Required for Alexa
   */
  largeIcon?: InputMaybe<Scalars['String']['input']>;
  /** The Email address to send lead captures to. */
  leadsContact?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** The phone number of a leads user. */
  leadsContactPhone?: InputMaybe<Scalars['String']['input']>;
  /** Physical location associated with the app. */
  location?: InputMaybe<LocationInput>;
  /**
   * A medium icon for the app, 192x192 PNG.
   *
   * Required for Actions On Google
   */
  mediumIcon?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the app. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the organization that the app is linked to. This attribute will not be updated on an update request. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  /** Google PlaceIds that correspond with the business. */
  places?: InputMaybe<Array<AppPlaceDescriptionInput>>;
  /**
   * Platform specific data for the app that does not correspond
   * with other high level data that is shared.
   */
  platformData?: InputMaybe<PlatformDataInput>;
  /** URL to the privacy policy for the app. */
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  /** A referenceId is an ID of the app in a difference service outside this API */
  refernceId?: InputMaybe<AppReferenceIdInput>;
  /**
   * A small icon for the app, 108x108 PNG
   *
   * Required for Alexa
   */
  smallIcon?: InputMaybe<Scalars['String']['input']>;
  /** The product that is linked to the subscription to this app in Stripe. */
  stripeProductId?: InputMaybe<Scalars['String']['input']>;
  /** The subscription ID that is linked to this app in Stripe. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  /** The payment status in Stripe. */
  subscriptionPaymentStatus?: InputMaybe<Scalars['String']['input']>;
  /**
   * The summary of the app.
   *
   * Shorter than the description, maximum 160 characters.
   */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** Type of template the app and its intents adhere to. */
  templateType?: InputMaybe<Scalars['String']['input']>;
  /** URL to the terms of use for the app */
  termsOfUseUrl?: InputMaybe<Scalars['String']['input']>;
  /** Instructions for platform testers on how to test the app. */
  testingInstructions?: InputMaybe<Scalars['String']['input']>;
  /** Contains fields related to publishing the app to various platforms such as dialogflow or alexa. */
  thirdPartyDeployments?: InputMaybe<ThirdPartyDeploymentsInput>;
  /** Primary website for the company or division of a company that the app is representing. */
  website?: InputMaybe<Scalars['URLString']['input']>;
  /** Data related to what was found on the customers website */
  websiteData?: InputMaybe<AppWebsiteDataInput>;
};

export type UpdateAppMutation = {
  /** Takes a document at a given URL and uploads it to the backed knowledgebase. */
  addDocumentToKnowledgebase: Scalars['String']['output'];
  addEmailOpportunityAlert: App;
  addTextOpportunityAlert: App;
  /** Updates the status of the app. */
  changeStatus: App;
  /** Mutations related to the app channel */
  channel: AppChannelMutation;
  cms: CmsMutation;
  /** Deletes the app. */
  deleteApp: Scalars['String']['output'];
  deleteScheduledEvent: Scalars['String']['output'];
  /** Exports the app to a file. Returns the URL of the file to download. */
  exportApp: ExportAppMutationResponse;
  faq: FaqMutation;
  /** This method will flag all events that are equal to the event specified. */
  flagEvent: FlagEventReturn;
  /** Operations that are related to updating handlers */
  handler: HandlerMutation;
  integration: IntegrationsMutation;
  /** Operations that are related to updating intents */
  intent: IntentMutation;
  /** Clears all notifications from the app. */
  removeAllNotifications: Scalars['String']['output'];
  /** Removes a notification from the app.  Returns a list of notifications that remain. */
  removeNotification: Array<Maybe<SystemNotification>>;
  scheduleWeeklyWebCrawls: WebCrawlSchedule;
  /** Crawls a website and retrieves the FAQs found on the website. It saves the FAQs to a database, and downloads the items to S3. */
  startWebsiteCrawling: Scalars['String']['output'];
  subscriptions: AppSubscriptionMutation;
  /**
   * Update an existing app.  Only the attributes included will be updated.
   *
   * This app can include an appId and organization for a drop-in replacement. These attributes will
   * be ignored as they are to remain constant.
   */
  updateApp: App;
};


export type UpdateAppMutationAddDocumentToKnowledgebaseArgs = {
  locationId?: InputMaybe<Scalars['String']['input']>;
  makePublic?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['URL']['input'];
};


export type UpdateAppMutationAddEmailOpportunityAlertArgs = {
  alert: EmailOpportunityAlertInput;
};


export type UpdateAppMutationAddTextOpportunityAlertArgs = {
  alert: TextOpportunityAlertInput;
};


export type UpdateAppMutationChangeStatusArgs = {
  note?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type UpdateAppMutationDeleteScheduledEventArgs = {
  scheduleId: Scalars['ID']['input'];
};


export type UpdateAppMutationFlagEventArgs = {
  eventId: Scalars['ID']['input'];
  flag: NewRawQueryFlag;
  note?: InputMaybe<Scalars['String']['input']>;
};


export type UpdateAppMutationRemoveNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type UpdateAppMutationScheduleWeeklyWebCrawlsArgs = {
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>>;
  webUrl: Scalars['URL']['input'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpdateAppMutationStartWebsiteCrawlingArgs = {
  channelId: Scalars['String']['input'];
  kendra?: InputMaybe<WebCrawlKendraInput>;
  s3RegionalDomain?: InputMaybe<Scalars['String']['input']>;
  settlingTimeSeconds?: InputMaybe<Scalars['settlingTimeSeconds_Int_max_5_exclusiveMin_0']['input']>;
  stealth?: InputMaybe<Scalars['Boolean']['input']>;
  webUrl: Scalars['URL']['input'];
  webUrlPatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpdateAppMutationUpdateAppArgs = {
  app: UpdateAppInput;
};

export type UpdateAppSubscriptionMutation = {
  cancel: App;
  uncancel: App;
};

export type UpdateEntityInput = {
  dialogflowId?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  /**
   * A unique identifier for the entity.  If one is not provided then
   * it will be derived from the display name.
   */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** Whether or not to exclude the entity from autocomplete suggestions. */
  excludeFromSuggestions?: InputMaybe<Scalars['Boolean']['input']>;
  nlu?: InputMaybe<Scalars['EntityNLU']['input']>;
  type?: InputMaybe<EntityType>;
  values?: InputMaybe<Array<EntityValueInput>>;
};

export type UpdateFaq = {
  /** The answer for the questions. */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: InputMaybe<Scalars['ID']['input']>;
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: InputMaybe<Scalars['ID']['input']>;
  /** Questions associated with the FAQ */
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The raw text */
  raw?: InputMaybe<Scalars['String']['input']>;
  responses?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** The URL where the FAQ can be found. */
  url?: InputMaybe<Scalars['URL']['input']>;
};

export type UpdateFaqMutation = {
  /** Permanently deletes the FAQ. */
  deleteFAQ: Scalars['String']['output'];
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
  /**
   * Contexts the must be active to have this handler be weighted more heavily or selected.
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
  data?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * The locale that all the attributes in this intent are used for before
   * they are overridden.
   */
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  forward?: InputMaybe<Array<InputMaybe<HandlerForwardInput>>>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the intent. */
  name: Scalars['String']['input'];
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<InputMaybe<HandlerPermissions>>>;
  redirect?: InputMaybe<Array<InputMaybe<HandlerRedirectInput>>>;
  /** The slots defined within the utterance patterns and their Entity types. */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']['input']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  key: Scalars['ID']['input'];
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
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  /** deprecated: No longer used. */
  dialogflowId?: InputMaybe<Scalars['String']['input']>;
  /** The location that the intent was last saved in Stentor's Handler Graph UI. */
  graphCoords?: InputMaybe<GraphCoordsInput>;
  /** The language code that the intent covers. */
  langCode?: InputMaybe<Scalars['String']['input']>;
  /** The name of the intent */
  name?: InputMaybe<Scalars['String']['input']>;
  nlu?: InputMaybe<Scalars['JSON']['input']>;
  /** The permissions that the intent requires in order to work. */
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Slot type definition. */
  slotTypes?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * The slots defined within the utterance patterns and their Entity types.
   *
   * This will replace the slots that are current in the intent.  Use
   * "addSlot" or "updateSlot" to update slots within an intent.
   */
  slots?: InputMaybe<Array<InputMaybe<InputSlot>>>;
  /** The type of intent that this is. */
  type?: InputMaybe<Scalars['String']['input']>;
  /**
   * An array of utterance patterns.
   *
   * For more information on syntax see https://github.com/alexa-js/alexa-utterances
   */
  utterancePatterns?: InputMaybe<Array<Scalars['String']['input']>>;
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
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateOrganizationInput = {
  /** The email XAPPineer that is in charge of handling the organization's account */
  XAPPLead?: InputMaybe<Scalars['String']['input']>;
  /** An event bus that is attatched to the organization to receive specific events related to the organization such as App status changes. */
  awsEventBusArn?: InputMaybe<Scalars['String']['input']>;
  /** An object of feature flags */
  beta?: InputMaybe<Scalars['JSON']['input']>;
  billingContact?: InputMaybe<BillingContactInput>;
  brandContact?: InputMaybe<BrandContactInput>;
  /**
   * The email address of a user who can be contacted about issues
   * related to the organization.
   */
  contact?: InputMaybe<Scalars['String']['input']>;
  /** The organization contact's name. */
  contactName?: InputMaybe<Scalars['String']['input']>;
  /** The organization contact's phone number. */
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Date in which the organization signed a contract to publish
   * apps.
   *
   * Format: ISO-8601 date format
   */
  contractDate?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable description of the organization. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Organization's IP rights which were loaded that give permissions to
   * publish apps on their behalf.
   */
  ipRights?: InputMaybe<IPrightsInput>;
  /** URL for the organization's logo. */
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  /** The human-readable name of the organization. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Any notes that are related to the organization. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Payment account information */
  paymentAccounts?: InputMaybe<PaymentAccountsInput>;
  /**
   * Third party publishing account information such as Amazon SMAPI's
   * service or Google's Dialogflow.
   */
  publishingAccounts?: InputMaybe<PublishingAccountsInput>;
  /** A URL to the organization's website. */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFaqReturn = {
  faqsAdded: Scalars['Int']['output'];
};

export type UploadUrlResult = {
  /**
   * The URL that files can be uploaded to.
   *
   * Pass this URL to other endpoints once the file has been uploaded to use it.
   */
  url: Scalars['URL']['output'];
};

export type UploadedLexApp = {
  app?: Maybe<App>;
  entities?: Maybe<Array<Maybe<Entity>>>;
  handlers?: Maybe<Array<Maybe<Handler>>>;
  intents?: Maybe<Array<Maybe<Intent>>>;
};

export type Url = {
  /** The actual URL that serves the app. */
  url: Scalars['String']['output'];
};

export type UrlInput = {
  /** The actual URL that serves the app. */
  url: Scalars['String']['input'];
};

/** Events that have occurred in the platform. */
export type UsageEvents = {
  /** The appId of the app that the event is related to if applicable. */
  appId?: Maybe<Scalars['ID']['output']>;
  /** The channelId of the channel that the event is related to if applicable */
  channelId?: Maybe<Scalars['ID']['output']>;
  /** A detailed description of the event. */
  description: Scalars['String']['output'];
  /** The time and date in which the event occurred. */
  eventTime: Scalars['DateTime']['output'];
  /** A human-readable name for the event. */
  name: Scalars['String']['output'];
  /** The organizationId of the organization that the event is related to if applicable. */
  organizationId?: Maybe<Scalars['ID']['output']>;
  /** Any payload that is connected to the event. */
  payload?: Maybe<Scalars['JSON']['output']>;
  /** The permission level of users who can see the event. */
  permissionLevel?: Maybe<Scalars['String']['output']>;
  /** The type of event that it is */
  type: Scalars['String']['output'];
  /** The email of the user which caused the event if applicable */
  userEmail?: Maybe<Scalars['String']['output']>;
  /** The userId of the user which caused the event if applicable. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UsageStat = {
  interval: AppUsageInterval;
  /** The ISO formatted date that the stats covers. */
  isoDate: Scalars['String']['output'];
  newUsers: Scalars['Int']['output'];
  returningUsers: Scalars['Int']['output'];
  totalSessions: Scalars['Int']['output'];
  totalUsers: Scalars['Int']['output'];
};

export type UsageStatCsvReturn = {
  /** The CSV formatted data */
  csv: Scalars['String']['output'];
  /** The file location of the CSV data */
  file: Scalars['URL']['output'];
};

export type UserEntitlements = {
  /** Specifies the number of pro tier entitlements that the user has available */
  availablePro: Scalars['Int']['output'];
  /** Specifies the number of standard tier entitlements that the user has available */
  availableStandard: Scalars['Int']['output'];
  /** Specifies the number of trial tier entitlements that the user has available */
  availableTrial: Scalars['Int']['output'];
  /** Specifies the number of pro tier entitlements the user currently has */
  pro: Scalars['Int']['output'];
  /** Specifies the number of standard tier entitlements the user currently has */
  standard: Scalars['Int']['output'];
  /** Specifies the number of trial tier entitlements the user currently has */
  trial: Scalars['Int']['output'];
};

/** The User Profile of a Stentor User */
export type UserProfile = {
  _id: Scalars['ID']['output'];
  /** Email address of the user */
  email: Scalars['String']['output'];
  /** Determines whether or not the user's email address has been verified. */
  emailVerified: Scalars['Boolean']['output'];
  /**
   * Requests the number of entitlements or subscriptions that the user
   * has available.
   */
  entitlements?: Maybe<UserEntitlements>;
  /**
   * The first name for the user
   *
   * This is an optional parameter. It may not exist.
   */
  firstName?: Maybe<Scalars['String']['output']>;
  /**
   * The full name of the user that includes first, middle, and last name.
   *
   * This is an optional parameter. It may not exist.
   */
  fullName?: Maybe<Scalars['String']['output']>;
  /** Icon URL to the profile picture. */
  icon?: Maybe<Scalars['String']['output']>;
  /** Identities of linked accounts. */
  identities: Array<Maybe<UserProfileIdentity>>;
  /** Determines whether or not the user is an admin of Stentor */
  isAdmin: Scalars['Boolean']['output'];
  /**
   * The last name for the user.
   *
   * This is an optional parameter. It may not exist.
   */
  lastName?: Maybe<Scalars['String']['output']>;
  /**
   * The middle name for the user
   *
   * This is an optional parameter. It may not exist.
   */
  middleName?: Maybe<Scalars['String']['output']>;
  /** The authentication origin */
  origin: AuthOrigin;
  /** The user permissions that the user is allowed to perform in Stentor. */
  roles: Array<Maybe<UserProfileRole>>;
  /** User ID of the user in the system */
  userId: Scalars['String']['output'];
};

export type UserProfileIdentity = {
  provider: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserProfileRole = {
  /** The organization ID of the organization that the user has the roles applied to. */
  organizationId: Scalars['String']['output'];
  /** The user's roles that they are allowed to use on the organization. */
  roles: Array<Maybe<Scalars['String']['output']>>;
};

export type Utils = {
  /**
   * Randomly generates an external ID that can be used by third party IAM roles so
   * stentor can securely assume it.
   */
  generateExternalID: Scalars['String']['output'];
  /** Returns the result of a task */
  task: TaskResult;
  /** Retrieve a URL that files can be uploaded to. */
  uploadURL: UploadUrlResult;
};


export type UtilsTaskArgs = {
  taskId: Scalars['ID']['input'];
};


export type UtilsUploadUrlArgs = {
  contentType: Scalars['String']['input'];
};

export type UtteranceSuggestion = {
  /** The possible utterance */
  utterance: Scalars['String']['output'];
};

export type UtteranceSuggestions = {
  suggestions: Array<UtteranceSuggestion>;
};

export type UtteranceTest = {
  /** The unique identifier of the app that the test is linked to. */
  appId: Scalars['ID']['output'];
  /** The time that the test was created.  Format: ISO 8601 */
  createdOn: Scalars['String']['output'];
  /** The expected result of the utterance test. */
  expectedResult?: Maybe<ExpectedUtteranceTestResult>;
  /** A list of the test history. */
  history?: Maybe<Array<Maybe<TestHistory>>>;
  /** The platform that the test should run on.  If not present, it will run on all platforms. */
  platform?: Maybe<Scalars['String']['output']>;
  /** The state that the test is currently in. If there is no state, then the test was never executed. */
  state?: Maybe<TestState>;
  /** The unique identifier for the test. */
  testId: Scalars['ID']['output'];
  /** The type of tests that this is. */
  testType: Scalars['String']['output'];
  /** The utterance that the test is executing for. */
  utterance?: Maybe<Scalars['String']['output']>;
};

export type UtteranceTestUpdate = {
  /** Test configurations */
  config?: InputMaybe<UtteranceTestUpdateConfig>;
  /** The expected result from the NLU. */
  expectedResult?: InputMaybe<UtteranceTestUpdateExpectedResult>;
  /** The specific platform that the test is intended for. Removing the platform will perform the test on all available platforms. */
  platform?: InputMaybe<Scalars['String']['input']>;
  /** The utterance that the test should execute for. */
  utterance?: InputMaybe<Scalars['String']['input']>;
};

export type UtteranceTestUpdateConfig = {
  /** The number of seconds after a test is executed to wait before continuing. */
  delayAfter?: InputMaybe<Scalars['Int']['input']>;
  /** The number of seconds before a test is executed to wait to execute */
  delayBefore?: InputMaybe<Scalars['Int']['input']>;
};

export type UtteranceTestUpdateExpectedResult = {
  /** The intentId of the intent that is expected to be returned. */
  intentId?: InputMaybe<Scalars['String']['input']>;
  /** The slots that are expected to be returned. */
  matchedSlots?: InputMaybe<Array<InputMaybe<UtteranceTestUpdateMatchedSlot>>>;
  /** The expected request type. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UtteranceTestUpdateMatchedSlot = {
  /** The value of the slot if it is a boolean. */
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The iso 8601 value of the date value. */
  dateValue?: InputMaybe<Scalars['String']['input']>;
  /** The iso 8601 value of the end date value. */
  endDateValue?: InputMaybe<Scalars['String']['input']>;
  /** The value of a slot if it is a float. Integer values will also be included. */
  floatValue?: InputMaybe<Scalars['Float']['input']>;
  /** The value of a slot if it is an integer. */
  integerValue?: InputMaybe<Scalars['Int']['input']>;
  /** The name of the expected slot. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The iso 8601 value of the start date value. */
  startDateValue?: InputMaybe<Scalars['String']['input']>;
  /** String values of a slot array. */
  stringArrayValue?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The value of the slot if it is a string. */
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type VectorDatabaseQuery = {
  pinecone: AdminPineconeResult;
};


export type VectorDatabaseQueryPineconeArgs = {
  appId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  topK?: InputMaybe<Scalars['Int']['input']>;
};

export type WebContent = BaseWebContent & {
  /** Unique ID for the web content */
  _id: Scalars['String']['output'];
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime']['output'];
  /** The name of the content */
  name: Scalars['String']['output'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String']['output'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String']['output'];
};

export type WebContentErrors = {
  /** The time at which this was thrown. */
  date: Scalars['DateTime']['output'];
  /** The details for the error. */
  detail: Scalars['String']['output'];
  /**
   * The execution ID of the scrape execution that threw the error. It's possible
   * that this does not exist.
   */
  executionId?: Maybe<Scalars['String']['output']>;
  /** The name of the error. */
  name: Scalars['String']['output'];
  /**
   * The url that was linked to the error. This could be missing depending on
   * the type of error caught (for example if the execution started without one).
   */
  url?: Maybe<Scalars['String']['output']>;
};

export type WebContentHighlight = {
  /** The text that is highlighted from the match. */
  text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WebContentSources = {
  /** The starting URL for the crawl */
  webUrl: Scalars['String']['output'];
  /** The patterns that were used to during the crawl */
  webUrlPatterns: Array<Maybe<Scalars['String']['output']>>;
};

export enum WebContentType {
  Website = 'WEBSITE'
}

export type WebContentWithHighlights = BaseWebContent & {
  /** Unique ID for the web content */
  _id: Scalars['String']['output'];
  /** The highlights found in the match query. */
  highlight?: Maybe<WebContentHighlight>;
  /** The last time the website was updated. */
  lastUpdated: Scalars['DateTime']['output'];
  /** The name of the content */
  name: Scalars['String']['output'];
  /**
   * The raw-text of the content.
   *
   * For websites, this will be the text of the website with the HTML removed.
   */
  text: Scalars['String']['output'];
  /** The type of content that was parsed. */
  type: WebContentType;
  /** The full URL of the web content */
  url: Scalars['String']['output'];
};

export type WebCrawlKendraInput = {
  /**
   * The account role that is allowed to listen to Kendra if the Kendra
   * instance is on another account.
   */
  accountRole?: InputMaybe<Scalars['String']['input']>;
  /** The ARN of the kendra data source. */
  kendraDataSourceArn: Scalars['String']['input'];
};

export type WebCrawlMonthlySchedule = WebCrawlSchedule & {
  /** The day of hte month that the schedule is scheduled to run */
  dayOfMonth: Scalars['Int']['output'];
  /** The event that is to be performed on the schedule. */
  event: Scalars['String']['output'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON']['output'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID']['output'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String']['output'];
};

export type WebCrawlSchedule = {
  /** The event that is to be performed on the schedule. */
  event: Scalars['String']['output'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON']['output'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID']['output'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String']['output'];
};

export type WebCrawlWeeklySchedule = WebCrawlSchedule & {
  /** The days of the week that the crawler is scheduled for. */
  daysOfWeek: Array<Maybe<ScheduleDaysOfWeek>>;
  /** The event that is to be performed on the schedule. */
  event: Scalars['String']['output'];
  /** The parameters that the schedule holds. */
  parameters: Scalars['JSON']['output'];
  /** The ID of the schedule. */
  scheduleId: Scalars['ID']['output'];
  /** The type of schedule that this is. ("weekly" is currently only option) */
  type: Scalars['String']['output'];
};

export type WebCrawlerQuery = {
  /**
   * Retrieve stats for a blacklisted website.  Returns null
   * if the website is not blacklisted.
   */
  blacklistedWebsite?: Maybe<BlacklistedWebsite>;
};


export type WebCrawlerQueryBlacklistedWebsiteArgs = {
  website: Scalars['URL']['input'];
};

export type WebCrawlerSettings = {
  addBlacklistedWebsite: Scalars['String']['output'];
  /**
   * Allows blacklist of websites with wildcards.
   *
   * Blacklisting websites including subdomains:
   * *.mainDomain.topLevelDomain
   *
   * Blacklisting websites with extension:
   * *.jpg
   */
  addBlacklistedWebsitePath: Scalars['String']['output'];
  removeBlacklistedWebsite?: Maybe<Scalars['String']['output']>;
};


export type WebCrawlerSettingsAddBlacklistedWebsiteArgs = {
  website: Scalars['URL']['input'];
};


export type WebCrawlerSettingsAddBlacklistedWebsitePathArgs = {
  website: Scalars['String']['input'];
};


export type WebCrawlerSettingsRemoveBlacklistedWebsiteArgs = {
  website: Scalars['URL']['input'];
};

export type WebDetailsExecution = {
  /** Whether or not the execution details are still being gathered. */
  completed: Scalars['Boolean']['output'];
  /** The data that has been gathered so far. */
  data: WebsiteData;
  /** The executionId of the crawl */
  excutionId: Scalars['String']['output'];
  /** The date and time that the crawl was last updated. */
  lastUpdated: Scalars['DateTime']['output'];
  /** The website that is being crawled. */
  siteCrawled: Scalars['URL']['output'];
};

export type WebFaq = {
  /** ID of the webFAQ */
  _id: Scalars['ID']['output'];
  /** The answer of the FAQ questions */
  answer: Scalars['String']['output'];
  /** An ID to a Handler that is associated with the FAQ */
  associatedHandlerId?: Maybe<Scalars['String']['output']>;
  /** The time it was created. */
  created: Scalars['String']['output'];
  /** Set to true if the FAQ should be excluded from the auto-complete search. */
  excludeFromAutoComplete?: Maybe<Scalars['Boolean']['output']>;
  /** An ID linked to an external system in which the FAQ was derived from. */
  externalFAQId?: Maybe<Scalars['ID']['output']>;
  /** Returns suggestions for further questions that answer the FAQ. */
  faqQuestionsSuggestions: FaqQuestionSuggestions;
  /** The name assigned to the question-answer page */
  name: Scalars['String']['output'];
  /** Questions that are linked to the answer */
  questions: Array<Maybe<Scalars['String']['output']>>;
  /** The raw text of the FAQ page */
  raw?: Maybe<Scalars['String']['output']>;
  responses?: Maybe<Array<Maybe<HandlerResponse>>>;
  /** The URL that the FAQ came from */
  url?: Maybe<Scalars['String']['output']>;
  /** A query for any errors that may be in the WebFAQ */
  validation: WebFaqValidation;
};

export type WebFaqValidation = {
  /** Any errors that may be associated with the object. */
  errors: Array<Maybe<WebFaqValidationError>>;
  /** Whether or not the full FAQ is valid. */
  isValid: Scalars['Boolean']['output'];
};

export type WebFaqValidationError = {
  /** A description of the error message */
  errorMessage: Scalars['String']['output'];
  /** The property that is in error. */
  propertyName?: Maybe<Scalars['String']['output']>;
};

export type WebsiteData = {
  business?: Maybe<WebsiteDataBusinessData>;
  detectedTechnologies: Array<WebsiteDataDetectedTechnology>;
  schema: Scalars['JSON']['output'];
  site?: Maybe<WebsiteDataDescriptiveData>;
};

export type WebsiteDataBusinessData = {
  address?: Maybe<WebsiteDataBusinessDataAddress>;
  /** Category related to the business of the website. */
  category?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<WebsiteDataBusinessDataGeo>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumbers?: Maybe<Array<WebsiteDataPhoneNumber>>;
  serviceArea?: Maybe<WebsiteDataBusinessDataAreasServed>;
  services?: Maybe<Array<WebsiteDataBusinessDataService>>;
  /** How the business describes themselves */
  typeRaw?: Maybe<Scalars['String']['output']>;
};

export type WebsiteDataBusinessDataAddress = {
  country?: Maybe<Scalars['String']['output']>;
  formated?: Maybe<Scalars['String']['output']>;
  /** City, Town or Locality.  This is typically from the "city" of "city", "state" */
  locality?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Typically the state. */
  region?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

export type WebsiteDataBusinessDataAreasServed = {
  locality?: Maybe<Scalars['String']['output']>;
};

export type WebsiteDataBusinessDataGeo = {
  lat: Scalars['String']['output'];
  lon: Scalars['String']['output'];
};

export enum WebsiteDataBusinessDataService {
  HomeConstructionServices = 'HOME_CONSTRUCTION_SERVICES',
  HomeServices = 'HOME_SERVICES',
  ProfessionalServices = 'PROFESSIONAL_SERVICES'
}

export type WebsiteDataCallsToAction = {
  callToAction: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type WebsiteDataDescriptiveData = {
  /** Calls to action detected on the website such as "Free Quote" or "Schedule Consultation" */
  callsToAction?: Maybe<Array<WebsiteDataCallsToAction>>;
  /** A description of the organization found on the website */
  description?: Maybe<Scalars['String']['output']>;
  /** The likely logo for the website */
  logo?: Maybe<Scalars['String']['output']>;
  /** The phone numbers found on the website. */
  phoneNumbers?: Maybe<Array<WebsiteDataPhoneNumber>>;
  /** The primary color of the website */
  primaryColor?: Maybe<Scalars['String']['output']>;
  /** The secondary color of the website */
  secondaryColor?: Maybe<Scalars['String']['output']>;
};

export type WebsiteDataDetectedTechnology = {
  installed: Scalars['Boolean']['output'];
  technology: Scalars['String']['output'];
};

export type WebsiteDataPhoneNumber = {
  number?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
};

export type WidgetAutoOpenOnPattern = {
  minimumWidth?: Maybe<Scalars['String']['output']>;
  patterns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WidgetAutoOpenOnPatternInput = {
  minimumWidth?: InputMaybe<Scalars['String']['input']>;
  patterns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Access statistics on the app's widgets. */
export type WidgetChannelAccess = {
  /** Number of times the widget was accessed. */
  total: Scalars['Int']['output'];
};

export type WidgetConfigurableMessageConfig = {
  delay?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type WidgetConfigurableMessageConfigInput = {
  delay?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
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

export type HandlerPartsFragment = { __typename: 'Handler', appId: string, intentId: string, organizationId: string, createdAt?: string | null, updatedAt?: string | null, name: string, langCode?: string | null, utterancePatterns?: Array<string | null> | null, dialogflowId?: string | null, type: string, defaultLocale?: string | null, permissions?: Array<HandlerPermissions | null> | null, data?: any | null, graphCoords?: { x?: number | null, y?: number | null } | null, slots?: Array<{ name: string, type?: string | null, isList?: any | null, nlu?: any | null, _id: string } | null> | null, validation: { isValid: boolean, errors: Array<{ errorMessage: string, propertyName?: string | null } | null> }, content?: Array<{ __typename: 'HandlerContent', key: string, handlerResponse: Array<{ __typename: 'JSONDependableHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveActiveWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveFirstTimeHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveHaveNotSeenWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'RequestDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SchedulableDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, schedule?: { start?: { format?: string | null, dayOfWeek?: string | null, time: string, timeZone?: string | null } | null, duration?: { format?: HandlerResponseDurationFormat | null, amount?: number | null } | null } | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SimpleHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SlotDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'StorageDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SystemDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | null> } | null> | null, forward?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null, redirect?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null };

export type GetHandlerQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  intentId: Scalars['ID']['input'];
}>;


export type GetHandlerQuery = { handler?: { __typename: 'Handler', appId: string, intentId: string, organizationId: string, createdAt?: string | null, updatedAt?: string | null, name: string, langCode?: string | null, utterancePatterns?: Array<string | null> | null, dialogflowId?: string | null, type: string, defaultLocale?: string | null, permissions?: Array<HandlerPermissions | null> | null, data?: any | null, graphCoords?: { x?: number | null, y?: number | null } | null, slots?: Array<{ name: string, type?: string | null, isList?: any | null, nlu?: any | null, _id: string } | null> | null, validation: { isValid: boolean, errors: Array<{ errorMessage: string, propertyName?: string | null } | null> }, content?: Array<{ __typename: 'HandlerContent', key: string, handlerResponse: Array<{ __typename: 'JSONDependableHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveActiveWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveFirstTimeHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveHaveNotSeenWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'RequestDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SchedulableDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, schedule?: { start?: { format?: string | null, dayOfWeek?: string | null, time: string, timeZone?: string | null } | null, duration?: { format?: HandlerResponseDurationFormat | null, amount?: number | null } | null } | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SimpleHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SlotDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'StorageDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SystemDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | null> } | null> | null, forward?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null, redirect?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null } | null };

export type UpdateHandlerMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  handlerId: Scalars['ID']['input'];
  handler: UpdateHandlerInput;
}>;


export type UpdateHandlerMutation = { updateHandler: { __typename: 'Handler', appId: string, intentId: string, organizationId: string, createdAt?: string | null, updatedAt?: string | null, name: string, langCode?: string | null, utterancePatterns?: Array<string | null> | null, dialogflowId?: string | null, type: string, defaultLocale?: string | null, permissions?: Array<HandlerPermissions | null> | null, data?: any | null, graphCoords?: { x?: number | null, y?: number | null } | null, slots?: Array<{ name: string, type?: string | null, isList?: any | null, nlu?: any | null, _id: string } | null> | null, validation: { isValid: boolean, errors: Array<{ errorMessage: string, propertyName?: string | null } | null> }, content?: Array<{ __typename: 'HandlerContent', key: string, handlerResponse: Array<{ __typename: 'JSONDependableHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveActiveWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveFirstTimeHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveHaveNotSeenWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'RequestDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SchedulableDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, schedule?: { start?: { format?: string | null, dayOfWeek?: string | null, time: string, timeZone?: string | null } | null, duration?: { format?: HandlerResponseDurationFormat | null, amount?: number | null } | null } | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SimpleHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SlotDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'StorageDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SystemDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | null> } | null> | null, forward?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null, redirect?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null } };

export type CreateHandlerMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  handler: AddHandlerInput;
}>;


export type CreateHandlerMutation = { addHandler: { __typename: 'Handler', appId: string, intentId: string, organizationId: string, createdAt?: string | null, updatedAt?: string | null, name: string, langCode?: string | null, utterancePatterns?: Array<string | null> | null, dialogflowId?: string | null, type: string, defaultLocale?: string | null, permissions?: Array<HandlerPermissions | null> | null, data?: any | null, graphCoords?: { x?: number | null, y?: number | null } | null, slots?: Array<{ name: string, type?: string | null, isList?: any | null, nlu?: any | null, _id: string } | null> | null, validation: { isValid: boolean, errors: Array<{ errorMessage: string, propertyName?: string | null } | null> }, content?: Array<{ __typename: 'HandlerContent', key: string, handlerResponse: Array<{ __typename: 'JSONDependableHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveActiveWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveFirstTimeHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'LastActiveHaveNotSeenWithinHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'RequestDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SchedulableDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, schedule?: { start?: { format?: string | null, dayOfWeek?: string | null, time: string, timeZone?: string | null } | null, duration?: { format?: HandlerResponseDurationFormat | null, amount?: number | null } | null } | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SimpleHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SlotDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'StorageDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | { __typename: 'SystemDependentHandlerResponse', name?: string | null, tag?: string | null, system?: HandlerResponseSystem | null, data?: any | null, conditions?: any | null, displays?: Array<{ __typename: 'CardDisplay', content?: string | null, smallImageUrl?: string | null, largeImageUrl?: string | null, imageActionUrl?: string | null, accessibilityText?: string | null, type: string, token?: string | null, title?: string | null, buttons?: Array<{ title: string, openUrlAction: string } | null> | null } | { __typename: 'ListDisplay', itemsName?: string | null, itemsObject?: string | null, type: string, token?: string | null, title?: string | null, range?: { length: number, from: number } | null, items?: Array<{ token?: string | null, url?: string | null, synonyms?: Array<string | null> | null, title: string, description?: string | null, image?: { url: string, urlIcon?: any | null, imageActionUrl?: string | null, accessibilityText?: string | null, width?: number | null, height?: number | null } | null, buttons?: Array<{ title: string } | null> | null } | null> | null } | { __typename: 'SimpleDisplay', type: string, token?: string | null, title?: string | null } | null> | null, outputSpeech?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion', title: string, url: string } | { __typename: 'SuggestionObject', title: string } | null> | null } | null, segments?: Array<{ key: string, segments: Array<{ segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | { segment: { ssml?: string | null, displayText?: string | null } } | null> } | null> | null, reprompt?: { ssml?: string | null, textToSpeech?: string | null, displayText?: string | null, suggestions?: Array<{ __typename: 'LinkOutSuggestion' } | { __typename: 'SuggestionObject' } | null> | null } | null, context?: { active?: Array<{ name: string, parameters?: any | null, timeToLive?: { timeToLiveInSeconds?: number | null, turnsToLive?: number | null } | null } | null> | null } | null, channel?: { name?: string | null } | null } | null> } | null> | null, forward?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null, redirect?: Array<{ key: string, paths: Array<{ intentId: string, slots?: any | null, type?: string | null, actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | { actions?: Array<any | null> | null, conditions?: any | null, data?: any | null, platform?: string | null } | null> } | null> | null } };

export type StartCrawlMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  url: Scalars['URL']['input'];
  pattern?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  channelId: Scalars['String']['input'];
}>;


export type StartCrawlMutation = { startWebsiteCrawling: string };

export type AddScheduledCrawlMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  url: Scalars['URL']['input'];
  pattern?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  daysOfWeek: Array<InputMaybe<SchedulerDaysOfWeek>> | InputMaybe<SchedulerDaysOfWeek>;
}>;


export type AddScheduledCrawlMutation = { app: { update: { scheduleWeeklyWebCrawls: { dayOfMonth: number, scheduleId: string, type: string, event: string, parameters: any } | { daysOfWeek: Array<ScheduleDaysOfWeek | null>, scheduleId: string, type: string, event: string, parameters: any } } } };

export type UpdateStatusMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateStatusMutation = { app: { update: { changeStatus: { status?: { type: string, notes?: string | null, email: string, timestamp: any, statusHistory?: Array<{ type: string, email: string, timestamp: any, notes?: string | null } | null> | null } | null } } } };

export type AddChatWidgetChannelMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  channel: ChatWidgetAppChannelInput;
}>;


export type AddChatWidgetChannelMutation = { addChatWidgetChannel: { __typename: 'ChatWidgetAppChannel', id: string, type: string, endPoint?: string | null, useNLU?: string | null, directoryListing?: string | null, direct?: boolean | null, disabled?: boolean | null, accountKey?: string | null, botName?: string | null, avatarUrl?: any | null, key?: string | null, serverUrl?: any | null, middlewareUrl?: string | null, autocompleteSuggestionsUrl?: any | null, autoOpenOnWidth?: string | null, status?: { type: string } | null, cta?: { message?: string | null, timeout?: number | null } | null, urls?: { policies: Array<{ pattern: string, behavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null>, defaultBehavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null, header?: { status?: { online?: string | null, offline?: string | null, away?: string | null, connecting?: string | null } | null, actions?: { minimize?: boolean | null, cancel?: boolean | null } | null } | null, theme?: { primaryColor?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, carousel?: { button?: { color?: string | null } | null, subtitle?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null, title?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null } | null, chatButton?: { background?: string | null, margin?: { top?: string | null, right?: string | null, bottom?: string | null, left?: string | null } | null } | null, content?: { background?: string | null } | null, cta?: { background?: string | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, footer?: { background?: string | null } | null, header?: { background?: string | null, border?: { color?: string | null, radius?: string | null, width?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, input?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, menu?: { item?: { height?: string | null, background?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null } | null, menuButton?: { color?: string | null } | null, messages?: { maxWidth?: string | null, mine?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, others?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, padding?: { left?: string | null, right?: string | null, bottom?: string | null, top?: string | null } | null } | null, minimizeButton?: { color?: string | null } | null, cancelButton?: { color?: string | null } | null, sendButton?: { color?: string | null } | null, size?: { width?: string | null, height?: string | null } | null } | null } };

export type AddAppMutationVariables = Exact<{
  app?: InputMaybe<AppInput>;
}>;


export type AddAppMutation = { addApp?: { appId: string, name: string, organizationId: string } | null };

export type UpdateAppByMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  app: UpdateAppInput;
}>;


export type UpdateAppByMutation = { updateApp?: { appId: string, name: string, organizationId: string, description?: string | null, keywords?: Array<string | null> | null, largeIcon?: string | null, mediumIcon?: string | null, smallIcon?: string | null, summary?: string | null, templateType?: string | null, internalNotes?: string | null, website?: string | null, websiteData?: { callsToAction?: Array<string> | null, primaryColor?: string | null, secondaryColor?: string | null } | null } | null };

export type AddLexV2ChannelMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  channel: LexV2ConnectAppChannelInput;
}>;


export type AddLexV2ChannelMutation = { app: { update: { channel: { addLexV2Channel: { __typename: 'LexV2ConnectAppChannel', id: string, type: string, name?: string | null, endPoint?: string | null, botId?: string | null, botName?: string | null, botRegion?: string | null, detectSentiment?: boolean | null, enableModelImprovements?: boolean | null, idleSessionTTLInSeconds?: number | null, isLinkedToKendra: boolean, lexFulfillmentLambdaARN?: string | null, lexPostTextUrl?: string | null, managementRole?: string | null, managementRoleExternalId?: string | null, voiceId?: string | null, status?: { type: string } | null } } } } };

export type AddFormWidgetChannelMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  channel: FormWidgetAppChannelInput;
}>;


export type AddFormWidgetChannelMutation = { app: { update: { channel: { addFormWidgetChannel: { __typename: 'FormWidgetAppChannel', id: string, type: string, name?: string | null, endPoint?: string | null, directoryListing?: string | null, autoGreeting?: string | null, intentId?: string | null, sideButtonLabel?: string | null, useNLU?: string | null, businessName?: string | null, businessLogoUrl?: string | null, businessAddress?: string | null, businessWebsite?: string | null, chatWidgetKey?: string | null, key?: string | null, autocompleteSuggestionsUrl?: any | null, attributes?: any | null, theme?: { accentColor?: string | null, backgroundColor?: string | null, headerBackgroundColor?: string | null, headerTextColor?: string | null, primaryButtonColor?: string | null, primaryButtonTextColor?: string | null, secondaryButtonColor?: string | null, secondaryButtonTextColor?: string | null, data?: any | null, card?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null } | null, checkbox?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null } | null, chips?: { backgroundColor?: string | null, backgroundColorSelected?: string | null, color?: string | null, colorSelected?: string | null, fontSize?: string | null } | null, date?: { backgroundColor?: string | null, backgroundColorSelected?: string | null, color?: string | null, fontSize?: string | null } | null, dropdown?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null } | null, sideButton?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null, minLength?: string | null, top?: string | null } | null, text?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null } | null, standAlone?: { backgroundColor?: string | null, header?: { backgroundColor?: string | null, color?: string | null, fontSize?: string | null } | null } | null } | null, connection?: { serverUrl?: any | null, accountKey?: string | null } | null, status?: { type: string } | null } } } } };

export type AddSurefireIntegrationMutationVariables = Exact<{
  appId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  endpoint: Scalars['URLString']['input'];
  dataMap: Scalars['String']['input'];
}>;


export type AddSurefireIntegrationMutation = { app: { update: { integration: { addSurefireIntegration: { isLinked: boolean, isActive: boolean } } } } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { profile?: { email: string } | null };

export type GetOrgAnalyticsQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
}>;


export type GetOrgAnalyticsQuery = { org?: { __typename: 'Organization', _id: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null } | null };

export type GetAppsForOrgQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  from?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  byStatusType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAppsForOrgQuery = { org?: { apps?: { total: number, apps: Array<{ appId: string, organizationId: string, name: string, largeIcon?: string | null, smallIcon?: string | null, description?: string | null, summary?: string | null, website?: string | null, status?: { type: string, timestamp: string, notes?: string | null, email?: string | null } | null } | null> } | null } | null };

export type GetAppOverviewQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  start: Scalars['DateTime']['input'];
  end: Scalars['DateTime']['input'];
  env?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAppOverviewQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, description?: string | null, summary?: string | null, organizationId: string, invocationName?: string | null, templateType?: string | null, icon?: string | null, smallIcon?: string | null, largeIcon?: string | null, banner?: string | null, largeBanner?: string | null, website?: string | null, businessDescription?: string | null, businessHighValueLeadDescription?: string | null, location?: { streetAddress?: string | null, geocode?: { latitude?: number | null, longitude?: number | null } | null } | null, places?: Array<{ name?: string | null, placeId?: string | null, formattedAddress?: string | null, address?: string | null, website?: any | null, phone?: string | null, bookingOptOut?: boolean | null, adminVerified?: boolean | null, addressComponents?: Array<{ types?: Array<string> | null, longName?: string | null, shortName?: string | null }> | null }> | null, status?: { type: string, timestamp: any, email: string, statusHistory?: Array<{ type: string, email: string, timestamp: any, notes?: string | null } | null> | null } | null, handlers?: { _id: string, total: number, handlers?: Array<{ _id: string, name?: string | null, intentId: string, type: string } | null> | null } | null, intents?: { _id: string, total: number, intents?: Array<{ _id: string, name: string, intentId: string } | null> | null } | null, entities?: { _id: string, total: number, entities?: Array<{ _id: string, entityId: string, displayName: string } | null> | null } | null, content?: { __typename: 'TotalWebContent', total: number, content: Array<{ __typename: 'WebContentWithHighlights', _id: string, name: string, url: string } | null> } | null, contentSources?: { __typename: 'TotalWebContentSources', total: number, sources: Array<{ __typename: 'WebContentSources', webUrl: string, webUrlPatterns: Array<string | null> } | null> } | null, faq?: { total: number } | null, channels?: Array<{ __typename: 'ActionsOnGoogleAppChannel', type: string, id: string, name?: string | null } | { __typename: 'AlexaAppChannel', type: string, id: string, name?: string | null } | { __typename: 'AppChannel', type: string, id: string, name?: string | null } | { __typename: 'ChatWidgetAppChannel', key?: string | null, type: string, id: string, name?: string | null, theme?: { primaryColor?: string | null } | null } | { __typename: 'DialogflowAppChannel', type: string, id: string, name?: string | null } | { __typename: 'FacebookMessengerAppChannel', type: string, id: string, name?: string | null } | { __typename: 'FormWidgetAppChannel', type: string, id: string, name?: string | null } | { __typename: 'GoogleBusinessMessagesAppChannel', type: string, id: string, name?: string | null } | { __typename: 'IntelligentSearchAppChannel', key?: string | null, type: string, id: string, name?: string | null, theme?: { accentColor?: string | null } | null } | { __typename: 'LexConnectAppChannel', type: string, id: string, name?: string | null } | { __typename: 'LexV2ConnectAppChannel', type: string, id: string, name?: string | null } | null> | null, analytics?: { user: { totalUsers: number, totalSessions: number, returningUsers: number, newUsers: number } } | null } | null };

export type GetAppContentQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  size: Scalars['Int']['input'];
  from: Scalars['Int']['input'];
}>;


export type GetAppContentQuery = { app?: { appId: string, contentSources?: { __typename: 'TotalWebContentSources', total: number, sources: Array<{ __typename: 'WebContentSources', webUrl: string, webUrlPatterns: Array<string | null> } | null> } | null, content?: { total: number, content: Array<{ _id: string, name: string, url: string, type: WebContentType, lastUpdated: any, text: string } | null> } | null, faq?: { total: number, faq: Array<{ name: string, raw?: string | null, answer: string, questions: Array<string | null> } | null> } | null } | null };

export type GetAppAnalyticsQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
}>;


export type GetAppAnalyticsQuery = { app?: { __typename: 'App', _id: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null } | null };

export type GetAppSchedulesQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
}>;


export type GetAppSchedulesQuery = { app?: { schedules: { schedules: Array<{ scheduleId: string, type: string, event: string, parameters: any } | { scheduleId: string, type: string, event: string, parameters: any } | null> } } | null };

export type GetAnalyticsAndEventsQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAnalyticsAndEventsQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, analytics?: { user: { newUsers: number, returningUsers: number, totalSessions: number, totalUsers: number } } | null, events?: { total: number } | null } | null };

export type GetEventsQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  byTag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  byRequestIntentId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  byChannel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  byEnv?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetEventsQuery = { app?: { __typename: 'App', _id: string, appId: string, name: string, events?: { total: number, events?: Array<{ eventId: string, channel?: string | null, platform?: string | null, userId?: string | null, sessionId?: string | null, eventTime?: string | null, currentHandler?: string | null, selectedHandler?: string | null, environment?: string | null, eventType?: string | null, eventName?: string | null, request?: string | null, rawQuery?: string | null, errorCode?: number | null, errorMessage?: string | null, payload?: string | null, slots?: Array<{ name?: string | null, rawValue?: string | null, slotValue?: string | null } | null> | null, stentorRequest?: { intentId?: string | null, rawQuery?: string | null, matchConfidence?: number | null } | null, response?: { displays?: any | null, outputSpeech?: { displayText?: string | null, ssml?: string | null, suggestions?: Array<{ title?: string | null, url?: string | null } | null> | null } | null, reprompt?: { displayText?: string | null, ssml?: string | null, suggestions?: Array<{ title?: string | null, url?: string | null } | null> | null } | null } | null } | null> | null } | null } | null };

export type GetAppChannelQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  channelId: Scalars['ID']['input'];
}>;


export type GetAppChannelQuery = { app?: { __typename: 'App', appId: string, organizationId: string, invocationName?: string | null, channel?: { __typename: 'ActionsOnGoogleAppChannel', hasCredentials: boolean, type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, additionalInformationQuestions?: { intendedForUnderThirteen?: boolean | null, alcoholAndTobaccoRelatedContent?: boolean | null } | null, status?: { type: string } | null } | { __typename: 'AlexaAppChannel', invocationName?: string | null, hasCredentials: boolean, skillId?: string | null, vendorId?: string | null, category?: AlexaSkillCategories | null, distributionMode?: AlexaDistributionMode | null, isAvailableWorldwide?: boolean | null, distributionCountries?: Array<AlexaDistrubutionCountry | null> | null, useManifest?: boolean | null, type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, permissions?: Array<{ name?: AlexaChannelPermissionType | null } | null> | null, vendors?: Array<{ id: string, name: string, roles: Array<string | null> } | null> | null, privacyAndCompliance?: { allowsPurchases?: boolean | null, containsAds?: boolean | null, isChildDirected?: boolean | null, isExportCompliant?: boolean | null, usesPersonalInfo?: boolean | null } | null, status?: { type: string } | null } | { __typename: 'AppChannel', id: string, type: string, name?: string | null, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, status?: { type: string } | null } | { __typename: 'ChatWidgetAppChannel', name?: string | null, direct?: boolean | null, disabled?: boolean | null, accountKey?: string | null, botName?: string | null, avatarUrl?: any | null, key?: string | null, serverUrl?: any | null, middlewareUrl?: string | null, autocompleteSuggestionsUrl?: any | null, autoOpenOnWidth?: string | null, type: string, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, cta?: { message?: string | null, timeout?: number | null, delay?: number | null, animation?: CtaAnimation | null, animationTimeout?: number | null, mobile?: { applyAtLessThanWidth?: string | null, message?: string | null, timeout?: number | null, delay?: number | null, animation?: CtaAnimation | null, animationTimeout?: number | null } | null } | null, menu?: { menuButtonLocation?: ChatWidgetMenuButtonLocation | null, itemsTabIndex?: string | null, items?: Array<{ label?: string | null, subtitle?: string | null } | { url: string, text: string, behavior?: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | null } | { imageUrl?: string | null } | { title?: string | null, body?: string | null } | null> | null, button?: { tabIndex?: string | null } | null } | null, configurableMessages?: { items?: Array<{ delay?: number | null, text?: string | null } | null> | null } | null, urls?: { policies: Array<{ pattern: string, behavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null>, defaultBehavior: { type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { width?: number | null, height?: number | null, type: ChatWidgetAppChannelWidgetUrlBehaviorType } | { type: ChatWidgetAppChannelWidgetUrlBehaviorType } } | null, autoOpenOnPattern?: { minimumWidth?: string | null, patterns?: Array<string | null> | null } | null, chatButton?: { tabIndex?: string | null } | null, header?: { alignTextCenter?: boolean | null, status?: { online?: string | null, offline?: string | null, away?: string | null, connecting?: string | null } | null, subtitle?: { enabled?: boolean | null, text?: string | null } | null, actions?: { refresh?: boolean | null, refreshTabIndex?: string | null, minimize?: boolean | null, minimizeTabIndex?: string | null, cancel?: boolean | null, cancelTabIndex?: string | null } | null } | null, footer?: { branding?: { enabled?: boolean | null, text?: string | null } | null, sendButton?: { icon?: string | null, tabIndex?: string | null } | null, clearButton?: { tabIndex?: string | null } | null } | null, typingStatus?: { textTypingStatusEnabled?: boolean | null } | null, theme?: { primaryColor?: string | null, zIndex?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, carousel?: { button?: { color?: string | null } | null, subtitle?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null, title?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null } | null } | null, chatButton?: { background?: string | null, margin?: { top?: string | null, right?: string | null, bottom?: string | null, left?: string | null } | null } | null, content?: { background?: string | null } | null, cta?: { background?: string | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null } | null, footer?: { background?: string | null, border?: { color?: string | null, radius?: string | null, width?: string | null } | null, branding?: { text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null } | null } | null } | null, header?: { background?: string | null, border?: { color?: string | null, radius?: string | null, width?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null } | null, subtitle?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null } | null } | null, input?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null } | null, placeholder?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, menu?: { item?: { height?: string | null, background?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null } | null, menuButton?: { color?: string | null } | null, messages?: { maxWidth?: string | null, mine?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, others?: { bubbleColor?: string | null, text?: { color?: string | null, fontSize?: string | null, fontFamily?: string | null, fontWeight?: string | null, fontStyle?: string | null } | null } | null, padding?: { left?: string | null, right?: string | null, bottom?: string | null, top?: string | null } | null } | null, minimizeButton?: { color?: string | null } | null, cancelButton?: { color?: string | null } | null, refreshButton?: { color?: string | null } | null, sendButton?: { color?: string | null, width?: string | null } | null, size?: { width?: string | null, height?: string | null } | null, textTypingStatus?: { text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null } | null } | null } | null, input?: { placeholder?: string | null } | null, connection?: { type?: string | null, serverUrl?: any | null } | null, status?: { type: string } | null } | { __typename: 'DialogflowAppChannel', hasCredentials: boolean, type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, additionalInformationQuestions?: { intendedForUnderThirteen?: boolean | null, alcoholAndTobaccoRelatedContent?: boolean | null } | null, status?: { type: string } | null } | { __typename: 'FacebookMessengerAppChannel', type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, status?: { type: string } | null } | { __typename: 'FormWidgetAppChannel', type: string, name?: string | null, id: string, autoGreeting?: string | null, directoryListing?: string | null, useNLU?: string | null, attributes?: any | null, endPoint?: string | null, connection?: { serverUrl?: any | null, accountKey?: string | null } | null, theme?: { accentColor?: string | null } | null, status?: { type: string } | null } | { __typename: 'GoogleBusinessMessagesAppChannel', type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, status?: { type: string } | null } | { __typename: 'IntelligentSearchAppChannel', type: string, name?: string | null, key?: string | null, autocompleteSuggestionsUrl?: any | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, connection?: { serverUrl?: any | null } | null, theme?: { accentColor?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null, style?: IntelligentSearchWidgetBorderStyle | null } | null, card?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null, style?: IntelligentSearchWidgetBorderStyle | null } | null, description?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null, link?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { default?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null, margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, title?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null, carousel?: { card?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null, style?: IntelligentSearchWidgetBorderStyle | null } | null, description?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null, link?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { default?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null, margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, title?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null } | null, list?: { card?: { background?: string | null, border?: { color?: string | null, width?: string | null, radius?: string | null, style?: IntelligentSearchWidgetBorderStyle | null } | null, description?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null, link?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { default?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null, margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, title?: { margin?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, padding?: { bottom?: string | null, left?: string | null, right?: string | null, top?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null } | null, messages?: { others?: { bubble?: { background?: string | null } | null, text?: { color?: string | null, fontFamily?: string | null, fontSize?: string | null, fontStyle?: string | null, fontWeight?: string | null, lineHeight?: any | null } | null } | null } | null } | null, status?: { type: string } | null } | { __typename: 'LexConnectAppChannel', voiceId?: string | null, nluIntentConfidenceThreshold?: number | null, idleSessionTTLInSeconds?: number | null, detectSentiment?: boolean | null, isLinkedToKendra: boolean, lexPostTextUrl?: string | null, enableModelImprovements?: boolean | null, botName?: string | null, type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, status?: { type: string } | null } | { __typename: 'LexV2ConnectAppChannel', voiceId?: string | null, idleSessionTTLInSeconds?: number | null, detectSentiment?: boolean | null, isLinkedToKendra: boolean, lexPostTextUrl?: string | null, enableModelImprovements?: boolean | null, botId?: string | null, botName?: string | null, botRegion?: string | null, lexFulfillmentLambdaARN?: string | null, managementRole?: string | null, managementRoleExternalId?: string | null, type: string, name?: string | null, id: string, directoryListing?: string | null, endPoint?: string | null, useNLU?: string | null, status?: { type: string } | null } | null } | null };

export const HandlerPartsFragmentDoc = gql`
    fragment HandlerParts on Handler {
  __typename
  appId
  intentId
  organizationId
  createdAt
  updatedAt
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
  validation {
    isValid
    errors {
      errorMessage
      propertyName
    }
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
            url
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
      context {
        active {
          name
          parameters
          timeToLive {
            timeToLiveInSeconds
            turnsToLive
          }
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
      channel {
        name
      }
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
    `;
export const GetHandlerDocument = gql`
    query getHandler($appId: ID!, $intentId: ID!) {
  handler(appId: $appId, intentId: $intentId) {
    ...HandlerParts
  }
}
    ${HandlerPartsFragmentDoc}`;
export const UpdateHandlerDocument = gql`
    mutation updateHandler($appId: ID!, $handlerId: ID!, $handler: UpdateHandlerInput!) {
  updateHandler(appId: $appId, handlerId: $handlerId, handler: $handler) {
    ...HandlerParts
  }
}
    ${HandlerPartsFragmentDoc}`;
export const CreateHandlerDocument = gql`
    mutation createHandler($appId: ID!, $handler: AddHandlerInput!) {
  addHandler(appId: $appId, handler: $handler) {
    ...HandlerParts
  }
}
    ${HandlerPartsFragmentDoc}`;
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
export const AddAppDocument = gql`
    mutation addApp($app: AppInput) {
  addApp(app: $app) {
    appId
    name
    organizationId
  }
}
    `;
export const UpdateAppByDocument = gql`
    mutation updateAppBy($appId: ID!, $app: UpdateAppInput!) {
  updateApp(appId: $appId, app: $app) {
    appId
    name
    organizationId
    description
    keywords
    largeIcon
    mediumIcon
    smallIcon
    summary
    templateType
    internalNotes
    website
    websiteData {
      callsToAction
      primaryColor
      secondaryColor
    }
  }
}
    `;
export const AddLexV2ChannelDocument = gql`
    mutation addLexV2Channel($appId: ID!, $channel: LexV2ConnectAppChannelInput!) {
  app {
    update(appId: $appId) {
      channel {
        addLexV2Channel(channel: $channel) {
          __typename
          id
          type
          name
          endPoint
          status {
            type
          }
          botId
          botName
          botRegion
          detectSentiment
          enableModelImprovements
          idleSessionTTLInSeconds
          isLinkedToKendra
          lexFulfillmentLambdaARN
          lexPostTextUrl
          managementRole
          managementRoleExternalId
          voiceId
        }
      }
    }
  }
}
    `;
export const AddFormWidgetChannelDocument = gql`
    mutation addFormWidgetChannel($appId: ID!, $channel: FormWidgetAppChannelInput!) {
  app {
    update(appId: $appId) {
      channel {
        addFormWidgetChannel(channel: $channel) {
          __typename
          id
          type
          name
          endPoint
          directoryListing
          autoGreeting
          intentId
          sideButtonLabel
          useNLU
          businessName
          businessLogoUrl
          businessAddress
          businessWebsite
          chatWidgetKey
          key
          theme {
            accentColor
            backgroundColor
            headerBackgroundColor
            headerTextColor
            primaryButtonColor
            primaryButtonTextColor
            secondaryButtonColor
            secondaryButtonTextColor
            data
            card {
              backgroundColor
              color
              fontSize
            }
            checkbox {
              backgroundColor
              color
              fontSize
            }
            chips {
              backgroundColor
              backgroundColorSelected
              color
              colorSelected
              fontSize
            }
            date {
              backgroundColor
              backgroundColorSelected
              color
              fontSize
            }
            dropdown {
              backgroundColor
              color
              fontSize
            }
            sideButton {
              backgroundColor
              color
              fontSize
              minLength
              top
            }
            text {
              backgroundColor
              color
              fontSize
            }
            standAlone {
              backgroundColor
              header {
                backgroundColor
                color
                fontSize
              }
            }
          }
          connection {
            serverUrl
            accountKey
          }
          status {
            type
          }
          autocompleteSuggestionsUrl
          attributes
        }
      }
    }
  }
}
    `;
export const AddSurefireIntegrationDocument = gql`
    mutation addSurefireIntegration($appId: ID!, $token: String!, $endpoint: URLString!, $dataMap: String!) {
  app {
    update(appId: $appId) {
      integration {
        addSurefireIntegration(token: $token, endpoint: $endpoint, dataMap: $dataMap) {
          isLinked
          isActive
          isActive
        }
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
    query getAppsForOrg($organizationId: ID!, $from: Int = 0, $size: Int = 10, $byStatusType: [String]) {
  org(organizationId: $organizationId) {
    apps(from: $from, size: $size, byStatusType: $byStatusType) {
      total
      apps {
        appId
        organizationId
        name
        largeIcon
        smallIcon
        description
        summary
        website
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
    query getAppOverview($appId: ID!, $start: DateTime!, $end: DateTime!, $env: [String]) {
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
    website
    businessDescription
    businessHighValueLeadDescription
    location {
      geocode {
        latitude
        longitude
      }
      streetAddress
    }
    places {
      name
      placeId
      formattedAddress
      address
      addressComponents {
        types
        longName
        shortName
      }
      website
      phone
      bookingOptOut
      adminVerified
    }
    status {
      type
      timestamp
      email
      statusHistory {
        type
        email
        timestamp
        notes
      }
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
      user(start: $start, end: $end, byEnvironment: $env) {
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
    query getEvents($appId: ID!, $startDate: DateTime!, $endDate: DateTime!, $size: Int = 10, $from: Int = 0, $byTag: [String], $byRequestIntentId: [String], $byChannel: [String], $byEnv: [String]) {
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
      byEnvironment: $byEnv
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
          displays
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
export const GetAppChannelDocument = gql`
    query getAppChannel($appId: ID!, $channelId: ID!) {
  app(appId: $appId) {
    __typename
    appId
    organizationId
    invocationName
    channel(id: $channelId) {
      __typename
      type
      name
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
        botId
        botName
        botRegion
        lexFulfillmentLambdaARN
        managementRole
        managementRoleExternalId
      }
      ... on ChatWidgetAppChannel {
        cta {
          message
          timeout
          delay
          animation
          animationTimeout
          mobile {
            applyAtLessThanWidth
            message
            timeout
            delay
            animation
            animationTimeout
          }
        }
        name
        direct
        disabled
        accountKey
        botName
        avatarUrl
        key
        menu {
          menuButtonLocation
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
            ... on ChatWidgetMenuItemOpenURL {
              url
              text
              behavior {
                type
                ... on ChatWidgetAppChannelUrlBehaviorNewWindow {
                  width
                  height
                }
              }
            }
          }
          itemsTabIndex
          button {
            tabIndex
          }
        }
        serverUrl
        middlewareUrl
        autocompleteSuggestionsUrl
        configurableMessages {
          items {
            delay
            text
          }
        }
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
        autoOpenOnPattern {
          minimumWidth
          patterns
        }
        chatButton {
          tabIndex
        }
        header {
          status {
            online
            offline
            away
            connecting
          }
          subtitle {
            enabled
            text
          }
          actions {
            refresh
            refreshTabIndex
            minimize
            minimizeTabIndex
            cancel
            cancelTabIndex
          }
          alignTextCenter
        }
        footer {
          branding {
            enabled
            text
          }
          sendButton {
            icon
            tabIndex
          }
          clearButton {
            tabIndex
          }
        }
        typingStatus {
          textTypingStatusEnabled
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
            }
            title {
              color
              fontFamily
              fontSize
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
            border {
              color
              radius
              width
            }
            branding {
              text {
                color
                fontFamily
                fontSize
                fontStyle
                fontWeight
              }
            }
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
              fontStyle
              fontWeight
            }
            subtitle {
              color
              fontFamily
              fontSize
              fontStyle
              fontWeight
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
            placeholder {
              color
              fontFamily
              fontSize
              fontWeight
              fontStyle
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
          refreshButton {
            color
          }
          primaryColor
          zIndex
          sendButton {
            color
            width
          }
          size {
            width
            height
          }
          textTypingStatus {
            text {
              color
              fontFamily
              fontSize
              fontStyle
              fontWeight
            }
          }
        }
        input {
          placeholder
        }
        connection {
          type
          serverUrl
        }
      }
      ... on IntelligentSearchAppChannel {
        type
        name
        key
        autocompleteSuggestionsUrl
        connection {
          serverUrl
        }
        theme {
          accentColor
          border {
            color
            width
            radius
            style
          }
          card {
            background
            border {
              color
              width
              radius
              style
            }
            description {
              margin {
                bottom
                left
                right
                top
              }
              padding {
                bottom
                left
                right
                top
              }
              text {
                color
                fontFamily
                fontSize
                fontStyle
                fontWeight
                lineHeight
              }
            }
            link {
              margin {
                bottom
                left
                right
                top
              }
              padding {
                bottom
                left
                right
                top
              }
              text {
                default {
                  color
                  fontFamily
                  fontSize
                  fontStyle
                  fontWeight
                  lineHeight
                }
              }
            }
            margin {
              bottom
              left
              right
              top
            }
            padding {
              bottom
              left
              right
              top
            }
            title {
              margin {
                bottom
                left
                right
                top
              }
              padding {
                bottom
                left
                right
                top
              }
              text {
                color
                fontFamily
                fontSize
                fontStyle
                fontWeight
                lineHeight
              }
            }
          }
          carousel {
            card {
              background
              border {
                color
                width
                radius
                style
              }
              description {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  color
                  fontFamily
                  fontSize
                  fontStyle
                  fontWeight
                  lineHeight
                }
              }
              link {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  default {
                    color
                    fontFamily
                    fontSize
                    fontStyle
                    fontWeight
                    lineHeight
                  }
                }
              }
              margin {
                bottom
                left
                right
                top
              }
              padding {
                bottom
                left
                right
                top
              }
              title {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  color
                  fontFamily
                  fontSize
                  fontStyle
                  fontWeight
                  lineHeight
                }
              }
            }
          }
          list {
            card {
              background
              border {
                color
                width
                radius
                style
              }
              description {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  color
                  fontFamily
                  fontSize
                  fontStyle
                  fontWeight
                  lineHeight
                }
              }
              link {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  default {
                    color
                    fontFamily
                    fontSize
                    fontStyle
                    fontWeight
                    lineHeight
                  }
                }
              }
              margin {
                bottom
                left
                right
                top
              }
              padding {
                bottom
                left
                right
                top
              }
              title {
                margin {
                  bottom
                  left
                  right
                  top
                }
                padding {
                  bottom
                  left
                  right
                  top
                }
                text {
                  color
                  fontFamily
                  fontSize
                  fontStyle
                  fontWeight
                  lineHeight
                }
              }
            }
          }
          messages {
            others {
              bubble {
                background
              }
              text {
                color
                fontFamily
                fontSize
                fontStyle
                fontWeight
                lineHeight
              }
            }
          }
        }
      }
      ... on AppChannel {
        id
        type
      }
      ... on FormWidgetAppChannel {
        type
        name
        id
        autoGreeting
        directoryListing
        useNLU
        connection {
          serverUrl
          accountKey
        }
        theme {
          accentColor
        }
        attributes
      }
    }
  }
}
    `;