/* tslint:disable */
/* eslint-disable */
/**
 * ZK Ticketing API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PutTicketCredentialRequest
 */
export interface PutTicketCredentialRequest {
    /**
     * 
     * @type {string}
     * @memberof PutTicketCredentialRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PutTicketCredentialRequest
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof PutTicketCredentialRequest
     */
    data?: string;
    /**
     * 
     * @type {Date}
     * @memberof PutTicketCredentialRequest
     */
    issuedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PutTicketCredentialRequest
     */
    expireAt?: Date;
}

/**
 * Check if a given object implements the PutTicketCredentialRequest interface.
 */
export function instanceOfPutTicketCredentialRequest(value: object): value is PutTicketCredentialRequest {
    return true;
}

export function PutTicketCredentialRequestFromJSON(json: any): PutTicketCredentialRequest {
    return PutTicketCredentialRequestFromJSONTyped(json, false);
}

export function PutTicketCredentialRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutTicketCredentialRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'eventId': json['event_id'] == null ? undefined : json['event_id'],
        'data': json['data'] == null ? undefined : json['data'],
        'issuedAt': json['issued_at'] == null ? undefined : (new Date(json['issued_at'])),
        'expireAt': json['expire_at'] == null ? undefined : (new Date(json['expire_at'])),
    };
}

export function PutTicketCredentialRequestToJSON(value?: PutTicketCredentialRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'event_id': value['eventId'],
        'data': value['data'],
        'issued_at': value['issuedAt'] == null ? undefined : ((value['issuedAt']).toISOString()),
        'expire_at': value['expireAt'] == null ? undefined : ((value['expireAt']).toISOString()),
    };
}

