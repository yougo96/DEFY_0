import { useEffect } from "react"

import { useFetch } from "../../assets/hooks"
import TrackCard from "../../components/app/track/trackCard";

export default function Tracks () {
    const { makeRequest, apiData, isLoading, error } = useFetch(`tracks`)
    
    return (
        <>
        <h1>Tracks</h1>
        <hr />
        <div className="grid">
            { isLoading && <div aria-busy="true">Loading</div> ||
            error && <div>{error}</div> ||                    
            apiData &&
            apiData.map((data, index) => (
                <TrackCard key={index} id={data.id} />
            ))}
        </div>
        </>
    )
}