import {query as q} from 'faunadb'
import {faunaClient} from '../../../lib/fauna'

export default async (req, res) => {
    if (req.method === 'GET') {
        let query = await faunaClient.query (
            q.Map (
                q.Paginate (q.Documents (q.Collection ('Person'))),
                q.Lambda ((person) => q.Get (person))
            )
        )
        res.status (200).json ({data: query.data })
    }
}
