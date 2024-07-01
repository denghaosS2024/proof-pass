// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

/*
 * Proof Pass API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.1.0
 */

package openapi


import (
	"time"
)



type PutEmailCredentialRequest struct {

	Data string `json:"data,omitempty"`

	IssuedAt time.Time `json:"issued_at,omitempty"`

	ExpireAt time.Time `json:"expire_at,omitempty"`
}

// AssertPutEmailCredentialRequestRequired checks if the required fields are not zero-ed
func AssertPutEmailCredentialRequestRequired(obj PutEmailCredentialRequest) error {
	return nil
}

// AssertPutEmailCredentialRequestConstraints checks if the values respects the defined constraints
func AssertPutEmailCredentialRequestConstraints(obj PutEmailCredentialRequest) error {
	return nil
}
