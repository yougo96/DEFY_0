import { useEffect } from "react"
import { useNavigate, useParams } from "react-router";

import { useFetch } from "../../assets/hooks"
import Badge from '/src/components/app/utils/badge.jsx';

export default function ActivitiesId () {
    let { id } = useParams();
    const { makeRequest, apiData, isLoading, error } = useFetch(`activities/${id}`)

    return (
        <>
            <h1>Activities - {id}</h1>
            <hr />
            {isLoading && <div aria-busy="true">Loading</div> ||
            error && <div>{error}</div> ||                    
            apiData &&
            <>
            <h3>{apiData.name}</h3>
            <ul>
                <li>{apiData.date}</li>
                <li>{apiData.description}</li>
                <li><Badge endpoint={`tracks/${apiData.trackId}`} /> </li>
                <li><Badge endpoint={`bikes/${apiData.bikeId}`} /></li>
            </ul></>}
        </>
    )
}