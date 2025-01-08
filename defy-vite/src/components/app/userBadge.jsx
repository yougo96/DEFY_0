// React
import { useEffect } from "react"
// Libs
// Files
import { useFetch } from "../../assets/hooks"

export default function UserBadge ({id}) {

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`users/${id}`)
    }, [])

    return (

        isLoading && <div>Loading</div> ||
        error && <div>{error}</div> ||                    
        apiData &&
        <>
            <div style={{display: "flex", alignItems: "center"}}>
                <img className="avatar" src={apiData.avatar} title={apiData.pseudo} alt="avatar"/>
                <h5>{apiData.pseudo}</h5>
            </div >
        </>
    )
}