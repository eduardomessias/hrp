// schema/graphQLClient.js

import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.FAUNAGRAPHQL_ENDPOINT

export const graphQLClient = (token) => {
    const secret = token || process.env.FAUNAGUEST_KEY

    return new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${secret}`
        }
    })
}
