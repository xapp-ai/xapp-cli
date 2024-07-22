"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCrawlDocument = exports.CreateHandlerDocument = exports.UpdateHandlerDocument = exports.GetHandlerDocument = exports.HandlerPartsFragmentDoc = exports.WithdrawFromAlexaCertReasons = exports.WebsiteDataBusinessDataService = exports.WebContentType = exports.TestResult = exports.TestPlatform = exports.SystemNotificationLevel = exports.SystemConditionType = exports.SubscriptionType = exports.StudioTierType = exports.SortableAppAttributes = exports.SlotObfuscation = exports.SchedulerDaysOfWeek = exports.ScheduleDaysOfWeek = exports.RawQueryEventFlag = exports.OrgMeteredTimeFrame = exports.OrgAppQuerySortByParametersOrder = exports.OpportunityAlertDetailType = exports.NewRawQueryFlag = exports.KendraInstanceFileFormat = exports.KendraInstanceFaqStatus = exports.IntelligentSearchWidgetBorderStyle = exports.IntegrationType = exports.HandlerResponseSystem = exports.HandlerResponseDurationFormat = exports.HandlerPermissions = exports.FaqNotAddedReason = exports.EventResolutionType = exports.EntityType = exports.CurrentTestState = exports.ChatWidgetMenuButtonLocation = exports.ChatWidgetAppChannelWidgetUrlBehaviorType = exports.CtaAnimation = exports.BusinessDayOfWeek = exports.AuthVerifyOrigin = exports.AuthOrigin = exports.AppUsageInterval = exports.AppTemplateType = exports.AlexaSkillManifestRequestStatus = exports.AlexaSkillCategories = exports.AlexaDistrubutionCountry = exports.AlexaDistributionMode = exports.AlexaChannelPermissionType = exports.AdminChatSuggestionType = exports.AdminAppProduct = exports.AddLocaleEnum = void 0;
exports.GetAppChannelDocument = exports.GetEventsDocument = exports.GetAnalyticsAndEventsDocument = exports.GetAppSchedulesDocument = exports.GetAppAnalyticsDocument = exports.GetAppContentDocument = exports.GetAppOverviewDocument = exports.GetAppsForOrgDocument = exports.GetOrgAnalyticsDocument = exports.GetProfileDocument = exports.AddSurefireIntegrationDocument = exports.AddLexV2ChannelDocument = exports.UpdateAppByDocument = exports.AddAppDocument = exports.AddChatWidgetChannelDocument = exports.UpdateStatusDocument = exports.AddScheduledCrawlDocument = void 0;
/*! Copyright (c) 2022, XAPP AI*/
/* eslint-disable */
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var AddLocaleEnum;
(function (AddLocaleEnum) {
    /** Danish */
    AddLocaleEnum["Da"] = "da";
    /** German */
    AddLocaleEnum["De"] = "de";
    /** German German */
    AddLocaleEnum["DeDe"] = "deDE";
    /** English */
    AddLocaleEnum["En"] = "en";
    /** English Australian */
    AddLocaleEnum["EnAu"] = "enAU";
    /** English Canada */
    AddLocaleEnum["EnCa"] = "enCA";
    /** English Great Britain */
    AddLocaleEnum["EnGb"] = "enGB";
    /** English India */
    AddLocaleEnum["EnIn"] = "enIN";
    /** English United States */
    AddLocaleEnum["EnUs"] = "enUS";
    /** Spanish */
    AddLocaleEnum["Es"] = "es";
    /** Spanish: Only supported in Google. */
    AddLocaleEnum["Es419"] = "es419";
    /** Spanish Spain */
    AddLocaleEnum["EsEs"] = "esES";
    /** Spanish Mexico */
    AddLocaleEnum["EsMx"] = "esMX";
    /** French */
    AddLocaleEnum["Fr"] = "fr";
    /** French Canada */
    AddLocaleEnum["FrCa"] = "frCA";
    /** French France */
    AddLocaleEnum["FrFr"] = "frFR";
    /** Italian */
    AddLocaleEnum["It"] = "it";
    /** Italian Italy */
    AddLocaleEnum["ItIt"] = "itIT";
    /** Japanese */
    AddLocaleEnum["Ja"] = "ja";
    /** Japanese Japan */
    AddLocaleEnum["JaJp"] = "jaJP";
    /** Dutch */
    AddLocaleEnum["Nl"] = "nl";
    /** Norwegian */
    AddLocaleEnum["No"] = "no";
    /** Portuguese */
    AddLocaleEnum["Pt"] = "pt";
    /** Portuguese Brazil */
    AddLocaleEnum["PtBr"] = "ptBR";
    /** Russian */
    AddLocaleEnum["Ru"] = "ru";
    /** Swedish */
    AddLocaleEnum["Sv"] = "sv";
    /** Thai */
    AddLocaleEnum["Th"] = "th";
    /** Turkish */
    AddLocaleEnum["Tr"] = "tr";
    /** Ukranian */
    AddLocaleEnum["Uk"] = "uk";
    /** Chinese */
    AddLocaleEnum["Zh"] = "zh";
    /** Chinese China */
    AddLocaleEnum["ZhCh"] = "zhCH";
    /** Chinese Hong Kong */
    AddLocaleEnum["ZhHk"] = "zhHK";
    /** Chinese Taiwan */
    AddLocaleEnum["ZhTw"] = "zhTW";
})(AddLocaleEnum || (exports.AddLocaleEnum = AddLocaleEnum = {}));
var AdminAppProduct;
(function (AdminAppProduct) {
    AdminAppProduct["StudioComplete"] = "STUDIO_COMPLETE";
    AdminAppProduct["StudioMax"] = "STUDIO_MAX";
    AdminAppProduct["StudioScheduler"] = "STUDIO_SCHEDULER";
})(AdminAppProduct || (exports.AdminAppProduct = AdminAppProduct = {}));
var AdminChatSuggestionType;
(function (AdminChatSuggestionType) {
    AdminChatSuggestionType["Faq"] = "FAQ";
    AdminChatSuggestionType["Historical"] = "HISTORICAL";
    AdminChatSuggestionType["Intent"] = "INTENT";
})(AdminChatSuggestionType || (exports.AdminChatSuggestionType = AdminChatSuggestionType = {}));
var AlexaChannelPermissionType;
(function (AlexaChannelPermissionType) {
    AlexaChannelPermissionType["AddressCountryAndPostalCode"] = "ADDRESS_COUNTRY_AND_POSTAL_CODE";
    AlexaChannelPermissionType["AddressFull"] = "ADDRESS_FULL";
    AlexaChannelPermissionType["EmailRead"] = "EMAIL_READ";
    AlexaChannelPermissionType["GivenNameRead"] = "GIVEN_NAME_READ";
    AlexaChannelPermissionType["HouseholdListRead"] = "HOUSEHOLD_LIST_READ";
    AlexaChannelPermissionType["HouseholdListWrite"] = "HOUSEHOLD_LIST_WRITE";
    AlexaChannelPermissionType["MobileRead"] = "MOBILE_READ";
    AlexaChannelPermissionType["NameRead"] = "NAME_READ";
    AlexaChannelPermissionType["NotificationWrite"] = "NOTIFICATION_WRITE";
    AlexaChannelPermissionType["RemindersReadWrite"] = "REMINDERS_READ_WRITE";
    AlexaChannelPermissionType["SkillReadWrite"] = "SKILL_READ_WRITE";
})(AlexaChannelPermissionType || (exports.AlexaChannelPermissionType = AlexaChannelPermissionType = {}));
var AlexaDistributionMode;
(function (AlexaDistributionMode) {
    AlexaDistributionMode["Private"] = "PRIVATE";
    AlexaDistributionMode["Public"] = "PUBLIC";
})(AlexaDistributionMode || (exports.AlexaDistributionMode = AlexaDistributionMode = {}));
var AlexaDistrubutionCountry;
(function (AlexaDistrubutionCountry) {
    AlexaDistrubutionCountry["Ca"] = "CA";
    AlexaDistrubutionCountry["De"] = "DE";
    AlexaDistrubutionCountry["Gb"] = "GB";
    AlexaDistrubutionCountry["In"] = "IN";
    AlexaDistrubutionCountry["Us"] = "US";
})(AlexaDistrubutionCountry || (exports.AlexaDistrubutionCountry = AlexaDistrubutionCountry = {}));
var AlexaSkillCategories;
(function (AlexaSkillCategories) {
    AlexaSkillCategories["AlarmsAndClocks"] = "ALARMS_AND_CLOCKS";
    AlexaSkillCategories["Astrology"] = "ASTROLOGY";
    AlexaSkillCategories["BusinessAndFinance"] = "BUSINESS_AND_FINANCE";
    AlexaSkillCategories["Calculators"] = "CALCULATORS";
    AlexaSkillCategories["CalendarsAndReminders"] = "CALENDARS_AND_REMINDERS";
    AlexaSkillCategories["ChildrensEducationAndReference"] = "CHILDRENS_EDUCATION_AND_REFERENCE";
    AlexaSkillCategories["ChildrensGames"] = "CHILDRENS_GAMES";
    AlexaSkillCategories["ChildrensMusticAndAudio"] = "CHILDRENS_MUSTIC_AND_AUDIO";
    AlexaSkillCategories["ChildrensNoveltyAndHumor"] = "CHILDRENS_NOVELTY_AND_HUMOR";
    AlexaSkillCategories["Communication"] = "COMMUNICATION";
    AlexaSkillCategories["ConnectedCar"] = "CONNECTED_CAR";
    AlexaSkillCategories["CookingAndRecipe"] = "COOKING_AND_RECIPE";
    AlexaSkillCategories["CurrencyGuidesAndConverters"] = "CURRENCY_GUIDES_AND_CONVERTERS";
    AlexaSkillCategories["Dating"] = "DATING";
    AlexaSkillCategories["DeliveryAndTakeout"] = "DELIVERY_AND_TAKEOUT";
    AlexaSkillCategories["DeviceTracking"] = "DEVICE_TRACKING";
    AlexaSkillCategories["EducationAndReference"] = "EDUCATION_AND_REFERENCE";
    AlexaSkillCategories["EventFinders"] = "EVENT_FINDERS";
    AlexaSkillCategories["ExerciseAndWorkout"] = "EXERCISE_AND_WORKOUT";
    AlexaSkillCategories["FashionAndStyle"] = "FASHION_AND_STYLE";
    AlexaSkillCategories["FlightFinders"] = "FLIGHT_FINDERS";
    AlexaSkillCategories["FriendsAndFamily"] = "FRIENDS_AND_FAMILY";
    AlexaSkillCategories["Games"] = "GAMES";
    AlexaSkillCategories["GameInfoAndAccessory"] = "GAME_INFO_AND_ACCESSORY";
    AlexaSkillCategories["HealthAndFitness"] = "HEALTH_AND_FITNESS";
    AlexaSkillCategories["HotelFinders"] = "HOTEL_FINDERS";
    AlexaSkillCategories["KnowledgeAndTrivia"] = "KNOWLEDGE_AND_TRIVIA";
    AlexaSkillCategories["MovieAndTvKnowledgeAndTrivia"] = "MOVIE_AND_TV_KNOWLEDGE_AND_TRIVIA";
    AlexaSkillCategories["MovieInfoAndReviews"] = "MOVIE_INFO_AND_REVIEWS";
    AlexaSkillCategories["MovieShowtimes"] = "MOVIE_SHOWTIMES";
    AlexaSkillCategories["MusicAndAudioAccessories"] = "MUSIC_AND_AUDIO_ACCESSORIES";
    AlexaSkillCategories["MusicAndAudioKnowledgeAndTrivia"] = "MUSIC_AND_AUDIO_KNOWLEDGE_AND_TRIVIA";
    AlexaSkillCategories["MusicInfoReviewsAndRecognitionService"] = "MUSIC_INFO_REVIEWS_AND_RECOGNITION_SERVICE";
    AlexaSkillCategories["News"] = "NEWS";
    AlexaSkillCategories["Novelty"] = "NOVELTY";
    AlexaSkillCategories["NA"] = "N_A";
    AlexaSkillCategories["OrganizersAndAssistants"] = "ORGANIZERS_AND_ASSISTANTS";
    AlexaSkillCategories["PetsAndAnimal"] = "PETS_AND_ANIMAL";
    AlexaSkillCategories["Podcast"] = "PODCAST";
    AlexaSkillCategories["PublicTransportation"] = "PUBLIC_TRANSPORTATION";
    AlexaSkillCategories["ReligionAndSpirituality"] = "RELIGION_AND_SPIRITUALITY";
    AlexaSkillCategories["RestaurantBookingInfoAndReview"] = "RESTAURANT_BOOKING_INFO_AND_REVIEW";
    AlexaSkillCategories["Schools"] = "SCHOOLS";
    AlexaSkillCategories["ScoreKeeping"] = "SCORE_KEEPING";
    AlexaSkillCategories["SelfImprovement"] = "SELF_IMPROVEMENT";
    AlexaSkillCategories["Shopping"] = "SHOPPING";
    AlexaSkillCategories["SmartHome"] = "SMART_HOME";
    AlexaSkillCategories["SocialNetworking"] = "SOCIAL_NETWORKING";
    AlexaSkillCategories["SportsGames"] = "SPORTS_GAMES";
    AlexaSkillCategories["SportsNews"] = "SPORTS_NEWS";
    AlexaSkillCategories["StreamingService"] = "STREAMING_SERVICE";
    AlexaSkillCategories["TaxiAndRidesharing"] = "TAXI_AND_RIDESHARING";
    AlexaSkillCategories["ToDoListsAndNotes"] = "TO_DO_LISTS_AND_NOTES";
    AlexaSkillCategories["Translators"] = "TRANSLATORS";
    AlexaSkillCategories["TvGuides"] = "TV_GUIDES";
    AlexaSkillCategories["UnitConverters"] = "UNIT_CONVERTERS";
    AlexaSkillCategories["Weather"] = "WEATHER";
    AlexaSkillCategories["WineAndBeverage"] = "WINE_AND_BEVERAGE";
    AlexaSkillCategories["ZipCodeLookup"] = "ZIP_CODE_LOOKUP";
})(AlexaSkillCategories || (exports.AlexaSkillCategories = AlexaSkillCategories = {}));
var AlexaSkillManifestRequestStatus;
(function (AlexaSkillManifestRequestStatus) {
    AlexaSkillManifestRequestStatus["InProgress"] = "IN_PROGRESS";
})(AlexaSkillManifestRequestStatus || (exports.AlexaSkillManifestRequestStatus = AlexaSkillManifestRequestStatus = {}));
var AppTemplateType;
(function (AppTemplateType) {
    AppTemplateType["OcStudioStarterTemplate"] = "OC_STUDIO_STARTER_TEMPLATE";
    AppTemplateType["PodcastTemplate"] = "PODCAST_TEMPLATE";
    AppTemplateType["RadioTemplate"] = "RADIO_TEMPLATE";
})(AppTemplateType || (exports.AppTemplateType = AppTemplateType = {}));
var AppUsageInterval;
(function (AppUsageInterval) {
    AppUsageInterval["Day"] = "day";
    AppUsageInterval["Hour"] = "hour";
    AppUsageInterval["Month"] = "month";
    AppUsageInterval["Week"] = "week";
    AppUsageInterval["Year"] = "year";
})(AppUsageInterval || (exports.AppUsageInterval = AppUsageInterval = {}));
var AuthOrigin;
(function (AuthOrigin) {
    /** Auth0's third-party authentication platform. */
    AuthOrigin["Auth0"] = "auth0";
    /** Amazon's Cognito authentication platform. */
    AuthOrigin["Cognito"] = "cognito";
})(AuthOrigin || (exports.AuthOrigin = AuthOrigin = {}));
var AuthVerifyOrigin;
(function (AuthVerifyOrigin) {
    AuthVerifyOrigin["Cognito"] = "COGNITO";
})(AuthVerifyOrigin || (exports.AuthVerifyOrigin = AuthVerifyOrigin = {}));
var BusinessDayOfWeek;
(function (BusinessDayOfWeek) {
    BusinessDayOfWeek["Friday"] = "FRIDAY";
    BusinessDayOfWeek["Monday"] = "MONDAY";
    BusinessDayOfWeek["Saturday"] = "SATURDAY";
    BusinessDayOfWeek["Sunday"] = "SUNDAY";
    BusinessDayOfWeek["Thursday"] = "THURSDAY";
    BusinessDayOfWeek["Tuesday"] = "TUESDAY";
    BusinessDayOfWeek["Wednesday"] = "WEDNESDAY";
})(BusinessDayOfWeek || (exports.BusinessDayOfWeek = BusinessDayOfWeek = {}));
var CtaAnimation;
(function (CtaAnimation) {
    CtaAnimation["Bounce"] = "bounce";
    CtaAnimation["Wiggle"] = "wiggle";
})(CtaAnimation || (exports.CtaAnimation = CtaAnimation = {}));
var ChatWidgetAppChannelWidgetUrlBehaviorType;
(function (ChatWidgetAppChannelWidgetUrlBehaviorType) {
    ChatWidgetAppChannelWidgetUrlBehaviorType["NewTab"] = "newTab";
    ChatWidgetAppChannelWidgetUrlBehaviorType["NewWindow"] = "newWindow";
    ChatWidgetAppChannelWidgetUrlBehaviorType["SameWindow"] = "sameWindow";
})(ChatWidgetAppChannelWidgetUrlBehaviorType || (exports.ChatWidgetAppChannelWidgetUrlBehaviorType = ChatWidgetAppChannelWidgetUrlBehaviorType = {}));
var ChatWidgetMenuButtonLocation;
(function (ChatWidgetMenuButtonLocation) {
    ChatWidgetMenuButtonLocation["Footer"] = "FOOTER";
    ChatWidgetMenuButtonLocation["HeaderLeft"] = "HEADER_LEFT";
})(ChatWidgetMenuButtonLocation || (exports.ChatWidgetMenuButtonLocation = ChatWidgetMenuButtonLocation = {}));
var CurrentTestState;
(function (CurrentTestState) {
    /** Assigned to  the test state if the test is currently executing. */
    CurrentTestState["Running"] = "RUNNING";
    /** Assigned to the test state if the test is no longer executing. */
    CurrentTestState["Stopped"] = "STOPPED";
})(CurrentTestState || (exports.CurrentTestState = CurrentTestState = {}));
var EntityType;
(function (EntityType) {
    EntityType["Regex"] = "REGEX";
    EntityType["ValueSynonyms"] = "VALUE_SYNONYMS";
})(EntityType || (exports.EntityType = EntityType = {}));
var EventResolutionType;
(function (EventResolutionType) {
    /** The noted problem with the event can not be fixed. */
    EventResolutionType["CanNotFix"] = "CAN_NOT_FIX";
    /** The problem with the event has been resolved. */
    EventResolutionType["Fixed"] = "FIXED";
    /** The noted problem with the event will not be fixed. */
    EventResolutionType["WillNotFix"] = "WILL_NOT_FIX";
})(EventResolutionType || (exports.EventResolutionType = EventResolutionType = {}));
var FaqNotAddedReason;
(function (FaqNotAddedReason) {
    FaqNotAddedReason["AlreadyExists"] = "ALREADY_EXISTS";
    FaqNotAddedReason["Unknown"] = "UNKNOWN";
})(FaqNotAddedReason || (exports.FaqNotAddedReason = FaqNotAddedReason = {}));
var HandlerPermissions;
(function (HandlerPermissions) {
    HandlerPermissions["DeviceCoarseLocation"] = "DEVICE_COARSE_LOCATION";
    HandlerPermissions["DevicePreciseLocation"] = "DEVICE_PRECISE_LOCATION";
    HandlerPermissions["Email"] = "EMAIL";
    HandlerPermissions["List"] = "LIST";
    HandlerPermissions["Name"] = "NAME";
    HandlerPermissions["PhoneNumber"] = "PHONE_NUMBER";
})(HandlerPermissions || (exports.HandlerPermissions = HandlerPermissions = {}));
var HandlerResponseDurationFormat;
(function (HandlerResponseDurationFormat) {
    HandlerResponseDurationFormat["D"] = "d";
    HandlerResponseDurationFormat["Day"] = "day";
    HandlerResponseDurationFormat["Days"] = "days";
    HandlerResponseDurationFormat["H"] = "h";
    HandlerResponseDurationFormat["Hour"] = "hour";
    HandlerResponseDurationFormat["Hours"] = "hours";
    HandlerResponseDurationFormat["M"] = "m";
    HandlerResponseDurationFormat["Millisecond"] = "millisecond";
    HandlerResponseDurationFormat["Milliseconds"] = "milliseconds";
    HandlerResponseDurationFormat["Minute"] = "minute";
    HandlerResponseDurationFormat["Minutes"] = "minutes";
    HandlerResponseDurationFormat["Month"] = "month";
    HandlerResponseDurationFormat["Months"] = "months";
    HandlerResponseDurationFormat["Ms"] = "ms";
    HandlerResponseDurationFormat["Quarter"] = "quarter";
    HandlerResponseDurationFormat["Quarters"] = "quarters";
    HandlerResponseDurationFormat["S"] = "s";
    HandlerResponseDurationFormat["Second"] = "second";
    HandlerResponseDurationFormat["Seconds"] = "seconds";
    HandlerResponseDurationFormat["W"] = "w";
    HandlerResponseDurationFormat["Week"] = "week";
    HandlerResponseDurationFormat["Weeks"] = "weeks";
    HandlerResponseDurationFormat["Y"] = "y";
    HandlerResponseDurationFormat["Year"] = "year";
    HandlerResponseDurationFormat["Years"] = "years";
})(HandlerResponseDurationFormat || (exports.HandlerResponseDurationFormat = HandlerResponseDurationFormat = {}));
var HandlerResponseSystem;
(function (HandlerResponseSystem) {
    HandlerResponseSystem["AccountLink"] = "ACCOUNT_LINK";
    HandlerResponseSystem["MediaEnqueue"] = "MEDIA_ENQUEUE";
    HandlerResponseSystem["MediaStop"] = "MEDIA_STOP";
    HandlerResponseSystem["PermissionEmail"] = "PERMISSION_EMAIL";
    HandlerResponseSystem["PermissionList"] = "PERMISSION_LIST";
    HandlerResponseSystem["PermissionLocationCoarse"] = "PERMISSION_LOCATION_COARSE";
    HandlerResponseSystem["PermissionLocationPrecise"] = "PERMISSION_LOCATION_PRECISE";
    HandlerResponseSystem["PermissionNotification"] = "PERMISSION_NOTIFICATION";
    HandlerResponseSystem["PermissionPhoneNumber"] = "PERMISSION_PHONE_NUMBER";
    HandlerResponseSystem["SurfaceChange"] = "SURFACE_CHANGE";
})(HandlerResponseSystem || (exports.HandlerResponseSystem = HandlerResponseSystem = {}));
var IntegrationType;
(function (IntegrationType) {
    IntegrationType["Housecallpro"] = "housecallpro";
    IntegrationType["Jobber"] = "jobber";
    IntegrationType["Lacrm"] = "lacrm";
    IntegrationType["Servicefusion"] = "servicefusion";
    IntegrationType["Servicetitan"] = "servicetitan";
    IntegrationType["Surefire"] = "surefire";
    IntegrationType["TestCognito"] = "test_cognito";
})(IntegrationType || (exports.IntegrationType = IntegrationType = {}));
var IntelligentSearchWidgetBorderStyle;
(function (IntelligentSearchWidgetBorderStyle) {
    IntelligentSearchWidgetBorderStyle["Dashed"] = "dashed";
    IntelligentSearchWidgetBorderStyle["None"] = "none";
    IntelligentSearchWidgetBorderStyle["Solid"] = "solid";
})(IntelligentSearchWidgetBorderStyle || (exports.IntelligentSearchWidgetBorderStyle = IntelligentSearchWidgetBorderStyle = {}));
var KendraInstanceFaqStatus;
(function (KendraInstanceFaqStatus) {
    KendraInstanceFaqStatus["Active"] = "ACTIVE";
    KendraInstanceFaqStatus["Creating"] = "CREATING";
    KendraInstanceFaqStatus["Deleting"] = "DELETING";
    KendraInstanceFaqStatus["Failed"] = "FAILED";
    KendraInstanceFaqStatus["Updating"] = "UPDATING";
})(KendraInstanceFaqStatus || (exports.KendraInstanceFaqStatus = KendraInstanceFaqStatus = {}));
var KendraInstanceFileFormat;
(function (KendraInstanceFileFormat) {
    KendraInstanceFileFormat["Csv"] = "CSV";
    KendraInstanceFileFormat["CsvWithHeader"] = "CSV_WITH_HEADER";
    KendraInstanceFileFormat["Json"] = "JSON";
})(KendraInstanceFileFormat || (exports.KendraInstanceFileFormat = KendraInstanceFileFormat = {}));
var NewRawQueryFlag;
(function (NewRawQueryFlag) {
    /**
     * For utterance events. It means the recognition was good. No issues.
     * If it was already confirmed and a new user confirms,
     * the event will be set to CONFIRMED_CORRECT.
     */
    NewRawQueryFlag["Correct"] = "CORRECT";
    /** For utterance events. The raw query needs attention. */
    NewRawQueryFlag["Flagged"] = "FLAGGED";
    /**
     * For response events, indicates that the response was good, but could
     * be better.
     */
    NewRawQueryFlag["Helpful"] = "HELPFUL";
    /** For utterance events. It means it was determined that the recognition was bad. Tuning is needed. */
    NewRawQueryFlag["Incorrect"] = "INCORRECT";
    /** For utterance events. It means it was determined that the recognition was bad, but there has been a resolution. */
    NewRawQueryFlag["IncorrectResolved"] = "INCORRECT_RESOLVED";
    /**
     * For response events, indicates the response will always need to go
     * to a live human agent.
     */
    NewRawQueryFlag["NeedsHuman"] = "NEEDS_HUMAN";
    /**
     * For response events, indicates that this is the best
     * response available.
     */
    NewRawQueryFlag["Optimal"] = "OPTIMAL";
})(NewRawQueryFlag || (exports.NewRawQueryFlag = NewRawQueryFlag = {}));
var OpportunityAlertDetailType;
(function (OpportunityAlertDetailType) {
    OpportunityAlertDetailType["AgentRequested"] = "AGENT_REQUESTED";
    OpportunityAlertDetailType["BuyingIntent"] = "BUYING_INTENT";
    OpportunityAlertDetailType["ChatStarted"] = "CHAT_STARTED";
    OpportunityAlertDetailType["NewSession"] = "NEW_SESSION";
    OpportunityAlertDetailType["UnansweredQuestion"] = "UNANSWERED_QUESTION";
})(OpportunityAlertDetailType || (exports.OpportunityAlertDetailType = OpportunityAlertDetailType = {}));
var OrgAppQuerySortByParametersOrder;
(function (OrgAppQuerySortByParametersOrder) {
    OrgAppQuerySortByParametersOrder["Asc"] = "ASC";
    OrgAppQuerySortByParametersOrder["Desc"] = "DESC";
})(OrgAppQuerySortByParametersOrder || (exports.OrgAppQuerySortByParametersOrder = OrgAppQuerySortByParametersOrder = {}));
/** The time frame in which the items were metered. */
var OrgMeteredTimeFrame;
(function (OrgMeteredTimeFrame) {
    /** All usage stats since the beginning of the day */
    OrgMeteredTimeFrame["Day"] = "DAY";
    /** All stats since the bottom of the hour. */
    OrgMeteredTimeFrame["Hour"] = "HOUR";
    /** All usage stats since the beginning of the month */
    OrgMeteredTimeFrame["Month"] = "MONTH";
    /** All usage stats since the beginning of the week (Sunday) */
    OrgMeteredTimeFrame["Week"] = "WEEK";
})(OrgMeteredTimeFrame || (exports.OrgMeteredTimeFrame = OrgMeteredTimeFrame = {}));
/** Flags for events of raw queries. */
var RawQueryEventFlag;
(function (RawQueryEventFlag) {
    /** For utterance events. A second user confirmed the recognition. 'Correct' must be set before this is. */
    RawQueryEventFlag["ConfirmedCorrect"] = "CONFIRMED_CORRECT";
    /** For utterance events. It means the recognition was good. No issues. */
    RawQueryEventFlag["Correct"] = "CORRECT";
    /** For utterance events. The raw query needs attention. */
    RawQueryEventFlag["Flagged"] = "FLAGGED";
    /**
     * For response events, indicates that the response was good, but could
     * be better.
     */
    RawQueryEventFlag["Helpful"] = "HELPFUL";
    /** For utterance events. It means it was determined that the recognition was bad. Tuning is needed. */
    RawQueryEventFlag["Incorrect"] = "INCORRECT";
    /** For utterance events. It means it was determined that the recognition was bad, but there has been a resolution. */
    RawQueryEventFlag["IncorrectResolved"] = "INCORRECT_RESOLVED";
    /**
     * For response events, indicates the response will always need to go
     * to a live human agent.
     */
    RawQueryEventFlag["NeedsHuman"] = "NEEDS_HUMAN";
    /**
     * For response events, indicates that this is the best
     * response available.
     */
    RawQueryEventFlag["Optimal"] = "OPTIMAL";
})(RawQueryEventFlag || (exports.RawQueryEventFlag = RawQueryEventFlag = {}));
var ScheduleDaysOfWeek;
(function (ScheduleDaysOfWeek) {
    ScheduleDaysOfWeek["Friday"] = "FRIDAY";
    ScheduleDaysOfWeek["Monday"] = "MONDAY";
    ScheduleDaysOfWeek["Saturday"] = "SATURDAY";
    ScheduleDaysOfWeek["Sunday"] = "SUNDAY";
    ScheduleDaysOfWeek["Thursday"] = "THURSDAY";
    ScheduleDaysOfWeek["Tuesday"] = "TUESDAY";
    ScheduleDaysOfWeek["Wednesday"] = "WEDNESDAY";
})(ScheduleDaysOfWeek || (exports.ScheduleDaysOfWeek = ScheduleDaysOfWeek = {}));
var SchedulerDaysOfWeek;
(function (SchedulerDaysOfWeek) {
    SchedulerDaysOfWeek["Friday"] = "FRIDAY";
    SchedulerDaysOfWeek["Monday"] = "MONDAY";
    SchedulerDaysOfWeek["Saturday"] = "SATURDAY";
    SchedulerDaysOfWeek["Sunday"] = "SUNDAY";
    SchedulerDaysOfWeek["Thursday"] = "THURSDAY";
    SchedulerDaysOfWeek["Tuesday"] = "TUESDAY";
    SchedulerDaysOfWeek["Wednesday"] = "WEDNESDAY";
})(SchedulerDaysOfWeek || (exports.SchedulerDaysOfWeek = SchedulerDaysOfWeek = {}));
var SlotObfuscation;
(function (SlotObfuscation) {
    SlotObfuscation["Full"] = "FULL";
    SlotObfuscation["Partial"] = "PARTIAL";
})(SlotObfuscation || (exports.SlotObfuscation = SlotObfuscation = {}));
/** These are the attributes that are available for sorting when querying apps of an organization. */
var SortableAppAttributes;
(function (SortableAppAttributes) {
    /** Sort alphabetically by appId */
    SortableAppAttributes["AppId"] = "APP_ID";
    /** Sort by most recent status time */
    SortableAppAttributes["StatusTime"] = "STATUS_TIME";
})(SortableAppAttributes || (exports.SortableAppAttributes = SortableAppAttributes = {}));
var StudioTierType;
(function (StudioTierType) {
    StudioTierType["Free"] = "FREE";
    StudioTierType["Pro"] = "PRO";
    StudioTierType["Standard"] = "STANDARD";
    StudioTierType["TrialStandard"] = "TRIAL_STANDARD";
})(StudioTierType || (exports.StudioTierType = StudioTierType = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["AppSub"] = "APP_SUB";
    /** OCS Bronze tier */
    SubscriptionType["Bronze"] = "BRONZE";
    /** OCS Bronze Light tier */
    SubscriptionType["BronzeLite"] = "BRONZE_LITE";
    /** The Apps under this organization are frozen. */
    SubscriptionType["Free"] = "FREE";
    /** OCS Gold Tier */
    SubscriptionType["Gold"] = "GOLD";
    /** OCS Platinum tier */
    SubscriptionType["Platinum"] = "PLATINUM";
    /** A top-tier privileged organization */
    SubscriptionType["Pro"] = "PRO";
    /** OCS Silver tier */
    SubscriptionType["Silver"] = "SILVER";
    /** A very limited privileged organization */
    SubscriptionType["Standard"] = "STANDARD";
    /** A temporary period for the organization which gives them "STANDARD" privileges */
    SubscriptionType["Trial"] = "TRIAL";
})(SubscriptionType || (exports.SubscriptionType = SubscriptionType = {}));
var SystemConditionType;
(function (SystemConditionType) {
    SystemConditionType["AccountLinked"] = "ACCOUNT_LINKED";
    SystemConditionType["BargeIn"] = "BARGE_IN";
    SystemConditionType["HealthCheck"] = "HEALTH_CHECK";
    SystemConditionType["NotificationPermissionGranted"] = "NOTIFICATION_PERMISSION_GRANTED";
    SystemConditionType["NotAccountLinked"] = "NOT_ACCOUNT_LINKED";
    SystemConditionType["NotBargeIn"] = "NOT_BARGE_IN";
    SystemConditionType["NotHealthCheck"] = "NOT_HEALTH_CHECK";
    SystemConditionType["NotNotificationPermissionGranted"] = "NOT_NOTIFICATION_PERMISSION_GRANTED";
    SystemConditionType["NotOptionSelect"] = "NOT_OPTION_SELECT";
    SystemConditionType["NotPermissionGranted"] = "NOT_PERMISSION_GRANTED";
    SystemConditionType["NotSurfaceChanged"] = "NOT_SURFACE_CHANGED";
    SystemConditionType["OptionSelect"] = "OPTION_SELECT";
    SystemConditionType["PermissionGranted"] = "PERMISSION_GRANTED";
    SystemConditionType["SurfaceChanged"] = "SURFACE_CHANGED";
})(SystemConditionType || (exports.SystemConditionType = SystemConditionType = {}));
var SystemNotificationLevel;
(function (SystemNotificationLevel) {
    SystemNotificationLevel["Error"] = "ERROR";
    SystemNotificationLevel["Info"] = "INFO";
    SystemNotificationLevel["Warn"] = "WARN";
})(SystemNotificationLevel || (exports.SystemNotificationLevel = SystemNotificationLevel = {}));
/** The various platforms that are currently supported for testing. */
var TestPlatform;
(function (TestPlatform) {
    /** Platform for Amazon's Alexa device. */
    TestPlatform["Alexa"] = "ALEXA";
    /** Platform for Google's Home device (which uses Dialogflow as its backend). */
    TestPlatform["Dialogflow"] = "DIALOGFLOW";
})(TestPlatform || (exports.TestPlatform = TestPlatform = {}));
var TestResult;
(function (TestResult) {
    /** The result of a test that did not meet expectations. */
    TestResult["Fail"] = "FAIL";
    /** The result of a test that did not execute for various reasons.  It does not necessarily indicate a failure. */
    TestResult["NotRun"] = "NOT_RUN";
    /** The result of a test that met expectations. */
    TestResult["Pass"] = "PASS";
})(TestResult || (exports.TestResult = TestResult = {}));
var WebContentType;
(function (WebContentType) {
    WebContentType["Website"] = "WEBSITE";
})(WebContentType || (exports.WebContentType = WebContentType = {}));
var WebsiteDataBusinessDataService;
(function (WebsiteDataBusinessDataService) {
    WebsiteDataBusinessDataService["HomeConstructionServices"] = "HOME_CONSTRUCTION_SERVICES";
    WebsiteDataBusinessDataService["HomeServices"] = "HOME_SERVICES";
    WebsiteDataBusinessDataService["ProfessionalServices"] = "PROFESSIONAL_SERVICES";
})(WebsiteDataBusinessDataService || (exports.WebsiteDataBusinessDataService = WebsiteDataBusinessDataService = {}));
var WithdrawFromAlexaCertReasons;
(function (WithdrawFromAlexaCertReasons) {
    WithdrawFromAlexaCertReasons["DiscoveredIssue"] = "DISCOVERED_ISSUE";
    WithdrawFromAlexaCertReasons["MoreFeatures"] = "MORE_FEATURES";
    WithdrawFromAlexaCertReasons["NotIntendedToPublish"] = "NOT_INTENDED_TO_PUBLISH";
    WithdrawFromAlexaCertReasons["NotReceivedCertificationFeedback"] = "NOT_RECEIVED_CERTIFICATION_FEEDBACK";
    WithdrawFromAlexaCertReasons["Other"] = "OTHER";
    WithdrawFromAlexaCertReasons["TestSkill"] = "TEST_SKILL";
})(WithdrawFromAlexaCertReasons || (exports.WithdrawFromAlexaCertReasons = WithdrawFromAlexaCertReasons = {}));
exports.HandlerPartsFragmentDoc = (0, graphql_tag_1.default) `
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
exports.GetHandlerDocument = (0, graphql_tag_1.default) `
    query getHandler($appId: ID!, $intentId: ID!) {
  handler(appId: $appId, intentId: $intentId) {
    ...HandlerParts
  }
}
    ${exports.HandlerPartsFragmentDoc}`;
exports.UpdateHandlerDocument = (0, graphql_tag_1.default) `
    mutation updateHandler($appId: ID!, $handlerId: ID!, $handler: UpdateHandlerInput!) {
  updateHandler(appId: $appId, handlerId: $handlerId, handler: $handler) {
    ...HandlerParts
  }
}
    ${exports.HandlerPartsFragmentDoc}`;
exports.CreateHandlerDocument = (0, graphql_tag_1.default) `
    mutation createHandler($appId: ID!, $handler: AddHandlerInput!) {
  addHandler(appId: $appId, handler: $handler) {
    ...HandlerParts
  }
}
    ${exports.HandlerPartsFragmentDoc}`;
exports.StartCrawlDocument = (0, graphql_tag_1.default) `
    mutation startCrawl($appId: ID!, $url: URL!, $pattern: [String], $channelId: String!) {
  startWebsiteCrawling(
    appId: $appId
    webUrl: $url
    webUrlPatterns: $pattern
    channelId: $channelId
  )
}
    `;
exports.AddScheduledCrawlDocument = (0, graphql_tag_1.default) `
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
exports.UpdateStatusDocument = (0, graphql_tag_1.default) `
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
exports.AddChatWidgetChannelDocument = (0, graphql_tag_1.default) `
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
exports.AddAppDocument = (0, graphql_tag_1.default) `
    mutation addApp($app: AppInput) {
  addApp(app: $app) {
    appId
    name
    organizationId
  }
}
    `;
exports.UpdateAppByDocument = (0, graphql_tag_1.default) `
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
exports.AddLexV2ChannelDocument = (0, graphql_tag_1.default) `
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
exports.AddSurefireIntegrationDocument = (0, graphql_tag_1.default) `
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
exports.GetProfileDocument = (0, graphql_tag_1.default) `
    query getProfile {
  profile {
    email
  }
}
    `;
exports.GetOrgAnalyticsDocument = (0, graphql_tag_1.default) `
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
exports.GetAppsForOrgDocument = (0, graphql_tag_1.default) `
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
exports.GetAppOverviewDocument = (0, graphql_tag_1.default) `
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
exports.GetAppContentDocument = (0, graphql_tag_1.default) `
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
exports.GetAppAnalyticsDocument = (0, graphql_tag_1.default) `
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
exports.GetAppSchedulesDocument = (0, graphql_tag_1.default) `
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
exports.GetAnalyticsAndEventsDocument = (0, graphql_tag_1.default) `
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
exports.GetEventsDocument = (0, graphql_tag_1.default) `
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
exports.GetAppChannelDocument = (0, graphql_tag_1.default) `
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
//# sourceMappingURL=models.js.map