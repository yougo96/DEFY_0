// React
import { useEffect } from "react"
import { useNavigate } from "react-router";
// Libs
// Files
import Badge from '/src/components/app/utils/badge.jsx';
import { useFetch } from "../../../assets/hooks"

export default function ActivitieCard ({id}) {
    let navigate = useNavigate()
    const { makeRequest, apiData, isLoading, error } = useFetch(`activities/${id}`)

    return (
        isLoading && <article className="card-link" aria-busy="true">Loading</article> ||
        error && <article className="card-link">{error}</article> ||                    
        apiData &&
        <article className="card-link" tabIndex="0" onClick={() => {navigate(`/app/activities/${id}`)}} style={{}}>
            <h5>{apiData.name}</h5>
            <ul>
                <li>{apiData.date}</li>
                <li>{apiData.description}</li>
                <li><Badge endpoint={`tracks/${apiData.trackId}`} hue='0' /> </li>
                <li><Badge endpoint={`bikes/${apiData.bikeId}`} /></li>
            </ul>
            
        </article >
    )
}