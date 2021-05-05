// schema/faunaClient.js

import faunadb from 'faunadb'

export const guestClient = new faunadb.Client({
    secret: process.env.FAUNAGUEST_KEY
})

export const authClient = (secret) =>
    new faunadb.Client({
        secret,
    })
