import createDocument from './createDocument'

export default async ({fullName, email, earlyAdopter}) =>  {
    let person = await createDocument ('Person', {fullName: fullName, email: email, earlyAdopter: earlyAdopter})

    return person
}
