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
 * @interface UnencryptedTicketCredential
 */
export interface UnencryptedTicketCredential {
    /**
     * 
     * @type {string}
     * @memberof UnencryptedTicketCredential
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UnencryptedTicketCredential
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof UnencryptedTicketCredential
     */
    credential?: string;
    /**
     * 
     * @type {Date}
     * @memberof UnencryptedTicketCredential
     */
    issuedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UnencryptedTicketCredential
     */
    expireAt?: Date;
}

/**
 * Check if a given object implements the UnencryptedTicketCredential interface.
 */
export function instanceOfUnencryptedTicketCredential(value: object): value is UnencryptedTicketCredential {
    return true;
}

export function UnencryptedTicketCredentialFromJSON(json: any): UnencryptedTicketCredential {
    return UnencryptedTicketCredentialFromJSONTyped(json, false);
}

export function UnencryptedTicketCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnencryptedTicketCredential {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'eventId': json['event_id'] == null ? undefined : json['event_id'],
        'credential': json['credential'] == null ? undefined : json['credential'],
        'issuedAt': json['issued_at'] == null ? undefined : (new Date(json['issued_at'])),
        'expireAt': json['expire_at'] == null ? undefined : (new Date(json['expire_at'])),
    };
}

export function UnencryptedTicketCredentialToJSON(value?: UnencryptedTicketCredential | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'event_id': value['eventId'],
        'credential': value['credential'],
        'issued_at': value['issuedAt'] == null ? undefined : ((value['issuedAt']).toISOString()),
        'expire_at': value['expireAt'] == null ? undefined : ((value['expireAt']).toISOString()),
    };
}

