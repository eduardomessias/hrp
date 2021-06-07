//lib/faunadb/guest-client.js

import faunadb from 'faunadb'

export const client = new faunadb.Client ({ secret: process.env.FAUNAGUEST_KEY })
