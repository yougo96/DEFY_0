import { useState } from "react"
let apiUrl = new URL(location.origin)
apiUrl.port = '3333';
apiUrl += ''
// const apiUrl = "http://localhost:3000/"
// const apiUrl = "https://kasa-eosin-ten.vercel.app:3000/"

export function useFetch() {
    
    const [apiData, setApiData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const makeRequest = async (url, options = {}) => {

        console.log("requesting "+apiUrl+url)

        await fetch(apiUrl+url.toString(), 
        {
            ...options,
            headers: {
                ...options.headers
        }
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .then((data) => {
            setApiData(data)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            if (error.message === "Failed to fetch") {
                setError("403")
            } else {
                setError(error.message)
            }            
        })
        .finally(() => {
            setError(null)
        })
    }

    // console.log(apiData, isLoading, error)
    return { makeRequest, apiData, isLoading, error }

}

export function useConnexion() {
    const sessionId = localStorage.getItem("id")
    const sessionPseudo = localStorage.getItem("pseudo")
    const sessionAvatar = localStorage.getItem("avatar")
    const sessionEmail = localStorage.getItem("email")
    const sessionType = localStorage.getItem("type")
    const sessionToken = localStorage.getItem("token")

    const [connected, setConnected] = useState(sessionId && sessionToken)
    const [curentUser, setCurentUser] = useState({
        id: sessionId,
        pseudo: sessionPseudo,
        avatar: sessionAvatar,
        email: sessionEmail,
        type: sessionType,
        token: sessionToken
    })
    return {connected, curentUser}
}