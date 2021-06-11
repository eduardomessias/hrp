import createPerson from '../../../actions/createPerson'

export default async (req, res) => {
    if (req.method === 'POST') {        
        let earlyAdopter = await createPerson (req.body.email, req.body.earlyAdopter)
        
        res.status(200).json({ data: earlyAdopter })
    }
}
