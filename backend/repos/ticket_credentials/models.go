// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0

package ticket_credentials

import (
	"github.com/jackc/pgx/v5/pgtype"
)

type TicketCredential struct {
	ID       string
	Email    string
	EventID  string
	Data     string
	IssuedAt pgtype.Timestamptz
	ExpireAt pgtype.Timestamptz
}