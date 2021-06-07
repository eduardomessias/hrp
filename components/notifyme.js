import {useState} from 'react'

const NotifyMe = () => {
    let [email, setEmail] = useState ('')

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    async function handleCreatePerson() {
        const res = await fetch('/api/people/create', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            })
        })
        setEmail('')        
    }

    return (
        <form name="formNotifyMe" onSubmit={handleCreatePerson}>
            <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                    <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Sign up to the waiting list with your email address</label>
                    <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" data-ms-editor="true" onChange={handleEmail} />
                </div>
                <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Notify me</button>
            </div>
        </form>
    )
}

export default NotifyMe
