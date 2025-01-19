import { useEffect } from "react"

import { useFetch } from "../../assets/hooks"
import BikeCard from "../../components/app/bike/bikeCard";

export default function Bikes () {
    const { makeRequest, apiData, isLoading, error } = useFetch(`bikes`)
    
    return (
        <>
        <h1>Bikes</h1>
        <hr />
        <div className="grid">
            { isLoading && <div aria-busy="true">Loading</div> ||
            error && <div>{error}</div> ||                    
            apiData &&
            apiData.map((data, index) => (
                <BikeCard key={index} id={data.id} />
            ))}
        </div>
        </>
    )
}