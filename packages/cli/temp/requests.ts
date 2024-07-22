/*! Copyright (c) 2022, XAPP AI*/
/* This is a generated file */
import { IntentRequest, Request, RequestSlotMap } from "stentor";

export interface AddressIntentRequestSlotMap extends RequestSlotMap {
    city?: {
        name: "city";
        value: string;
    };
    state?: {
        name: "state";
        value: string;
    };
    zip?: {
        name: "zip";
        value: string;
    };
    street_name?: {
        name: "street_name";
        value: string;
    };
    street_number?: {
        name: "street_number";
        value: string;
    };
}

export interface AddressIntentRequest extends IntentRequest {
    intentId: "Address";
    slots: AddressIntentRequestSlotMap;
}

export function isAddressIntentRequest(request: Request): request is AddressIntentRequest {
    return !!request && (request as IntentRequest).intentId === "Address";
}


export interface ConsultationIntentRequestSlotMap extends RequestSlotMap {
    consultation?: {
        name: "consultation";
        value: string;
    };
    exterior_product?: {
        name: "exterior_product";
        value: string;
    };
    work_product?: {
        name: "work_product";
        value: string;
    };
    quote_prefix?: {
        name: "quote_prefix";
        value: string;
    };
}

export interface ConsultationIntentRequest extends IntentRequest {
    intentId: "Consultation";
    slots: ConsultationIntentRequestSlotMap;
}

export function isConsultationIntentRequest(request: Request): request is ConsultationIntentRequest {
    !!request && (request as IntentRequest).intentId === "Consultation";
}


export interface EmailIntentRequestSlotMap extends RequestSlotMap {
    email?: {
        name: "email";
        value: string;
    };
}

export interface EmailIntentRequest extends IntentRequest {
    intentId: "Email";
    slots: EmailIntentRequestSlotMap;
}

export function isEmailIntentRequest(request: Request): request is EmailIntentRequest {
    !!request && (request as IntentRequest).intentId === "Email";
}


export interface EmailOnlyIntentRequestSlotMap extends RequestSlotMap {
    email?: {
        name: "email";
        value: string;
    };
}

export interface EmailOnlyIntentRequest extends IntentRequest {
    intentId: "EmailOnly";
    slots: EmailOnlyIntentRequestSlotMap;
}

export function isEmailOnlyIntentRequest(request: Request): request is EmailOnlyIntentRequest {
    !!request && (request as IntentRequest).intentId === "EmailOnly";
}


export interface HelpWithIntentRequestSlotMap extends RequestSlotMap {
    exterior_product?: {
        name: "exterior_product";
        value: string;
    };
    building_type?: {
        name: "building_type";
        value: string;
    };
}

export interface HelpWithIntentRequest extends IntentRequest {
    intentId: "HelpWith";
    slots: HelpWithIntentRequestSlotMap;
}

export function isHelpWithIntentRequest(request: Request): request is HelpWithIntentRequest {
    !!request && (request as IntentRequest).intentId === "HelpWith";
}


export interface NameIntentRequestSlotMap extends RequestSlotMap {
    first_name?: {
        name: "first_name";
        value: string;
    };
    last_name?: {
        name: "last_name";
        value: string;
    };
}

export interface NameIntentRequest extends IntentRequest {
    intentId: "Name";
    slots: NameIntentRequestSlotMap;
}

export function isNameIntentRequest(request: Request): request is NameIntentRequest {
    !!request && (request as IntentRequest).intentId === "Name";
}


export interface NameOnlyIntentRequestSlotMap extends RequestSlotMap {
    first_name?: {
        name: "first_name";
        value: string;
    };
    last_name?: {
        name: "last_name";
        value: string;
    };
    last_initial?: {
        name: "last_initial";
        value: string;
    };
    middle_initial?: {
        name: "middle_initial";
        value: string;
    };
}

export interface NameOnlyIntentRequest extends IntentRequest {
    intentId: "NameOnly";
    slots: NameOnlyIntentRequestSlotMap;
}

export function isNameOnlyIntentRequest(request: Request): request is NameOnlyIntentRequest {
    !!request && (request as IntentRequest).intentId === "NameOnly";
}


export interface NumberOnlyIntentRequestSlotMap extends RequestSlotMap {
    number?: {
        name: "number";
        value: string;
    };
}

export interface NumberOnlyIntentRequest extends IntentRequest {
    intentId: "NumberOnly";
    slots: NumberOnlyIntentRequestSlotMap;
}

export function isNumberOnlyIntentRequest(request: Request): request is NumberOnlyIntentRequest {
    !!request && (request as IntentRequest).intentId === "NumberOnly";
}


export interface OCNoIntentRequestSlotMap extends RequestSlotMap {
    no?: {
        name: "no";
        value: string;
    };
}

export interface OCNoIntentRequest extends IntentRequest {
    intentId: "OCNo";
    slots: OCNoIntentRequestSlotMap;
}

export function isOCNoIntentRequest(request: Request): request is OCNoIntentRequest {
    !!request && (request as IntentRequest).intentId === "OCNo";
}


export interface OCYesIntentRequestSlotMap extends RequestSlotMap {
    yes?: {
        name: "yes";
        value: string;
    };
}

export interface OCYesIntentRequest extends IntentRequest {
    intentId: "OCYes";
    slots: OCYesIntentRequestSlotMap;
}

export function isOCYesIntentRequest(request: Request): request is OCYesIntentRequest {
    !!request && (request as IntentRequest).intentId === "OCYes";
}


export interface PhoneNumberIntentRequestSlotMap extends RequestSlotMap {
    phone?: {
        name: "phone";
        value: string;
    };
}

export interface PhoneNumberIntentRequest extends IntentRequest {
    intentId: "PhoneNumber";
    slots: PhoneNumberIntentRequestSlotMap;
}

export function isPhoneNumberIntentRequest(request: Request): request is PhoneNumberIntentRequest {
    !!request && (request as IntentRequest).intentId === "PhoneNumber";
}


export interface PhoneNumberOnlyIntentRequestSlotMap extends RequestSlotMap {
    phone?: {
        name: "phone";
        value: string;
    };
}

export interface PhoneNumberOnlyIntentRequest extends IntentRequest {
    intentId: "PhoneNumberOnly";
    slots: PhoneNumberOnlyIntentRequestSlotMap;
}

export function isPhoneNumberOnlyIntentRequest(request: Request): request is PhoneNumberOnlyIntentRequest {
    !!request && (request as IntentRequest).intentId === "PhoneNumberOnly";
}


export interface RepeatIntentIntentRequest extends IntentRequest {
    intentId: "RepeatIntent";
}

export function isRepeatIntentIntentRequest(request: Request): request is RepeatIntentIntentRequest {
    !!request && (request as IntentRequest).intentId === "RepeatIntent";
}


export interface StopIntentIntentRequest extends IntentRequest {
    intentId: "StopIntent";
}

export function isStopIntentIntentRequest(request: Request): request is StopIntentIntentRequest {
    !!request && (request as IntentRequest).intentId === "StopIntent";
}


export interface ThanksIntentRequest extends IntentRequest {
    intentId: "Thanks";
}

export function isThanksIntentRequest(request: Request): request is ThanksIntentRequest {
    !!request && (request as IntentRequest).intentId === "Thanks";
}


export interface ThatsAllIntentIntentRequest extends IntentRequest {
    intentId: "ThatsAllIntent";
}

export function isThatsAllIntentIntentRequest(request: Request): request is ThatsAllIntentIntentRequest {
    !!request && (request as IntentRequest).intentId === "ThatsAllIntent";
}


