import { useEffect } from "react"

import { useFetch } from "../../assets/hooks"
import BikeCard from "../../components/app/bike/bikeCard";

export default function Track () {
    const { makeRequest, apiData, isLoading, error } = useFetch()
    
    useEffect(() => {
        makeRequest(`bikes`)
    }, [])
    
    return (
        <>
        <h1>Bikes</h1>
        <div className="grid">
            { isLoading && <div aria-busy="true">Loading</div> ||
            error && <div>{error}</div> ||                    
            apiData &&
            apiData.map((data, index) => (
                <BikeCard key={index} id={data.id} />
            ))}
            <article>+ add</article>
        </div>
        </>
    )
}