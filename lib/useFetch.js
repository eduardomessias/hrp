import { useState, useEffect } from 'react'

export default function useFetch (url, options) {
    const [data, setData] = useState (null)
    const [error, setError] = useState (null)

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch (url, options)
                const json = await response.json ()

                setData (json)
            } catch (error) {
                setError (error)
            }
        }

        fetchData ()
    }, [url])

    return { data, error }
}
