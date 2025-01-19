// React
import { useEffect } from "react"
// Libs
// Files
import { useFetch } from "../../../assets/hooks"

export default function badge ({endpoint}) {
    const { makeRequest, apiData, isLoading, error } = useFetch(endpoint)

    return (

        isLoading && <div>Loading</div> |
        error && <div>{error}</div> ||                    
        apiData &&
        <div className="badge">
            { apiData.avatar && <img src={apiData.avatar} title={apiData.name} alt="avatar"/>}
            <b>{apiData.name}</b>
        </div >
    )
}