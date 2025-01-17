// React
import { useEffect } from "react"
// Libs
// Files
import { useFetch } from "../../../assets/hooks"

export default function TrackCard ({id}) {

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`tracks/${id}`)
    }, [])

    return (
        isLoading && <div aria-busy="true">Loading</div> ||
        error && <div>{error}</div> ||                    
        apiData &&
        <article style={{}}>
            <h5>{apiData.name}</h5>
        </article >
    )
}