// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

/*
 * ZK Ticketing API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.0.1
 */

package openapi

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// DefaultAPIController binds http requests to an api service and writes the service results to the http response
type DefaultAPIController struct {
	service DefaultAPIServicer
	errorHandler ErrorHandler
}

// DefaultAPIOption for how the controller is set up.
type DefaultAPIOption func(*DefaultAPIController)

// WithDefaultAPIErrorHandler inject ErrorHandler into controller
func WithDefaultAPIErrorHandler(h ErrorHandler) DefaultAPIOption {
	return func(c *DefaultAPIController) {
		c.errorHandler = h
	}
}

// NewDefaultAPIController creates a default api controller
func NewDefaultAPIController(s DefaultAPIServicer, opts ...DefaultAPIOption) *DefaultAPIController {
	controller := &DefaultAPIController{
		service:      s,
		errorHandler: DefaultErrorHandler,
	}

	for _, opt := range opts {
		opt(controller)
	}

	return controller
}

// Routes returns all the api routes for the DefaultAPIController
func (c *DefaultAPIController) Routes() Routes {
	return Routes{
		"EventsEventIdGet": Route{
			strings.ToUpper("Get"),
			"/api/v1/events/{eventId}",
			c.EventsEventIdGet,
		},
		"EventsGet": Route{
			strings.ToUpper("Get"),
			"/api/v1/events",
			c.EventsGet,
		},
		"HealthGet": Route{
			strings.ToUpper("Get"),
			"/api/v1/health",
			c.HealthGet,
		},
	}
}

// EventsEventIdGet - Get event details
func (c *DefaultAPIController) EventsEventIdGet(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	eventIdParam := params["eventId"]
	if eventIdParam == "" {
		c.errorHandler(w, r, &RequiredError{"eventId"}, nil)
		return
	}
	result, err := c.service.EventsEventIdGet(r.Context(), eventIdParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}

// EventsGet - Get list of events
func (c *DefaultAPIController) EventsGet(w http.ResponseWriter, r *http.Request) {
	result, err := c.service.EventsGet(r.Context())
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}

// HealthGet - Check the health of the API
func (c *DefaultAPIController) HealthGet(w http.ResponseWriter, r *http.Request) {
	result, err := c.service.HealthGet(r.Context())
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}
