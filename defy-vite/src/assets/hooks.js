import { useState, useEffect } from "react"
let apiUrl = new URL(location.origin)
apiUrl.port = '3333';
apiUrl += ''
// const apiUrl = "http://localhost:3000/"
// const apiUrl = "https://kasa-eosin-ten.vercel.app:3000/"

export function useFetch(urlArg, optionsArg = {}) {
    
    const [apiData, setApiData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const makeRequest = (url, options = {}) => {
        console.log('makeRequest',apiUrl+url.toString())
        setIsLoading(true);
        setError(null);

        return fetch(apiUrl+url.toString(), 
        {
            ...options,
            headers: {
                ...options.headers
        }
        }).then((response) => {
            if (!response.ok) { throw Error(response.status) }
            return response.json()
        })
        .then((data) => {
            setApiData(data)
            setIsLoading(false)
            return data
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error.message)
            throw error.message
        })
    }

    if (urlArg) {
        useEffect(() => {
            makeRequest(urlArg, optionsArg)
        }, [urlArg])
    }
    return { makeRequest, apiData, isLoading, error }
}

export function useConnexion() {
    const sessionId = localStorage.getItem("id")
    const sessionName = localStorage.getItem("name")
    const sessionAvatar = localStorage.getItem("avatar")
    const sessionEmail = localStorage.getItem("email")
    const sessionType = localStorage.getItem("type")
    const sessionToken = localStorage.getItem("token")

    const [connected, setConnected] = useState(sessionId && sessionToken)
    const [curentUser, setCurentUser] = useState({
        id: sessionId,
        name: sessionName,
        avatar: sessionAvatar,
        email: sessionEmail,
        type: sessionType,
        token: sessionToken
    })
    return {connected, curentUser}
}