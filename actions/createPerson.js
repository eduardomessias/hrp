import createDocument from './createDocument'

export default async (email, earlyAdopter) =>  {
    let person = await createDocument ('Person', {email: email, earlyAdopter: earlyAdopter})

    return person
}
