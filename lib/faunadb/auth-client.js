// lib/faunadb/auth-client.js

import faunadb from 'faunadb'

export const client = (secret) =>
    new faunadb.Client ({ secret })
