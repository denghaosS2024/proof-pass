/* tslint:disable */
/* eslint-disable */
/**
 * Proof Pass API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    chainId?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    contextId?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    issuerKeyId?: string;
}

/**
 * Check if a given object implements the Event interface.
 */
export function instanceOfEvent(value: object): value is Event {
    return true;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'url': json['url'] == null ? undefined : json['url'],
        'chainId': json['chain_id'] == null ? undefined : json['chain_id'],
        'contextId': json['context_id'] == null ? undefined : json['context_id'],
        'issuerKeyId': json['issuer_key_id'] == null ? undefined : json['issuer_key_id'],
    };
}

export function EventToJSON(value?: Event | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'url': value['url'],
        'chain_id': value['chainId'],
        'context_id': value['contextId'],
        'issuer_key_id': value['issuerKeyId'],
    };
}

