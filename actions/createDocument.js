import {query as q} from 'faunadb'
import {faunaClient} from '../lib/fauna'

export default async (collection, data) => {
    let doc = await faunaClient.query (q.Create (q.Collection (collection), { data: data }))
    
    return doc
}
