const FormEarlyAdopter = () => {
    const registerEarlyAdopter = async event => {
        event.preventDefault ()

        const response = await fetch ('/api/people/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: event.target.email.value,
                earlyAdopter: true
            })
        })

        event.target.reset ()
    }

    return (
        <form name="form-early-adopter" onSubmit={registerEarlyAdopter} className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input id="email" name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="jane.doe@email.com" aria-label="Email" />
                <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Notify me!
                </button>
            </div>
        </form>
    )
}

export default FormEarlyAdopter
