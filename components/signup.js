const FormSignup = () => {
    const registerPerson = async event => {
        event.preventDefault ()

        const response = await fetch ('/api/people/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: event.target.fullName.value,
                email: event.target.email.value,
                earlyAdopter: false
            })
        })

        event.target.reset ()
    }

    return (
        <form name="form-signup" onSubmit={registerPerson} className="w-full max-w-sm">

            <h1 className="title-font font-medium text-3xl text-gray-900">Home Resources Planning</h1>
            
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fullName">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="fullName" type="text" placeholder="Jane Doe" />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" placeholder="jane.doe@email.com" />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>

            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Sign Up
                    </button>
                </div>
            </div>

        </form>
    )
}

export default FormSignup
