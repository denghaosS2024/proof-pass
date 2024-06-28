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
 * @interface UserLogin
 */
export interface UserLogin {
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    code?: string;
}

/**
 * Check if a given object implements the UserLogin interface.
 */
export function instanceOfUserLogin(value: object): value is UserLogin {
    return true;
}

export function UserLoginFromJSON(json: any): UserLogin {
    return UserLoginFromJSONTyped(json, false);
}

export function UserLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLogin {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function UserLoginToJSON(value?: UserLogin | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'code': value['code'],
    };
}

