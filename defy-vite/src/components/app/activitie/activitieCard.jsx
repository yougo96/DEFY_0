// React
import { useEffect } from "react"
import { useNavigate } from "react-router";
// Libs
// Files
import { useFetch } from "../../../assets/hooks"

export default function ActivitieCard ({id}) {
    let navigate = useNavigate()
    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`activities/${id}`)
    }, [])

    return (
        isLoading && <div aria-busy="true">Loading</div> ||
        error && <div>{error}</div> ||                    
        apiData &&
        <article className="card-link" tabIndex="0" onClick={() => {navigate(`activities/${id}`)}} style={{}}>
            <h5>{apiData.name}</h5>
            <ul>
                <li>{apiData.date}</li>
                <li>{apiData.description}</li>
                <li>{apiData.trackId}</li>
                <li>{apiData.bikeId}</li>
            </ul>
            
        </article >
    )
}