// React
import { useEffect } from "react"
// Libs
// Files
import { useFetch } from "../../../assets/hooks"

export default function BikeCard ({id}) {

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`bikes/${id}`)
    }, [])

    return (
        isLoading && <div aria-busy="true">Loading</div> ||
        error && <div>{error}</div> ||                    
        apiData &&
        <article className="card-link" tabIndex="0" style={{}}>
            <h5>{apiData.name}</h5>
        </article >
    )
}