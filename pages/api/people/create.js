import createPerson from '../../../actions/createPerson'

export default async (req, res) => {
    if (req.method === 'POST') {        
        let earlyAdopter = await createPerson ({fullName: req.body.fullName, email: req.body.email, earlyAdopter: req.body.earlyAdopter})
        
        res.status(200).json({ data: earlyAdopter })
    }
}
