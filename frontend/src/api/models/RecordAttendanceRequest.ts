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
 * @interface RecordAttendanceRequest
 */
export interface RecordAttendanceRequest {
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    nullifier?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    keyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordAttendanceRequest
     */
    adminCode?: string;
}

/**
 * Check if a given object implements the RecordAttendanceRequest interface.
 */
export function instanceOfRecordAttendanceRequest(value: object): value is RecordAttendanceRequest {
    return true;
}

export function RecordAttendanceRequestFromJSON(json: any): RecordAttendanceRequest {
    return RecordAttendanceRequestFromJSONTyped(json, false);
}

export function RecordAttendanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordAttendanceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'context': json['context'] == null ? undefined : json['context'],
        'nullifier': json['nullifier'] == null ? undefined : json['nullifier'],
        'keyId': json['key_id'] == null ? undefined : json['key_id'],
        'eventId': json['event_id'] == null ? undefined : json['event_id'],
        'adminCode': json['admin_code'] == null ? undefined : json['admin_code'],
    };
}

export function RecordAttendanceRequestToJSON(value?: RecordAttendanceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'context': value['context'],
        'nullifier': value['nullifier'],
        'key_id': value['keyId'],
        'event_id': value['eventId'],
        'admin_code': value['adminCode'],
    };
}

