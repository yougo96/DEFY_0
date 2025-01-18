import { useEffect } from "react"
import { useNavigate } from "react-router";

import { useFetch } from "../../assets/hooks"
import ActivitieCard from "../../components/app/activitie/activitieCard";

export default function Home () {
    let navigate = useNavigate()
    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`activities`)
    }, [])

    return (
        <>
            <h1>HOME</h1>
            <hr />
            <h2>activities</h2>
            <div className="grid">
                { isLoading && <div aria-busy="true">Loading</div> ||
                error && <div>{error}</div> ||                    
                apiData &&
                apiData.map((data, index) => (
                    <ActivitieCard key={index} id={data.id} />
                ))}
                <article className="card-link" tabIndex="0" onClick={() => {navigate("activities/add")}} >+ add</article>
            </div>
        </>
    )
}