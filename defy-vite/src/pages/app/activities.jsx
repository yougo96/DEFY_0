import { useEffect } from "react"
import { useNavigate } from "react-router";

import { useFetch } from "../../assets/hooks"
import ActivitieCard from "../../components/app/activitie/activitieCard";

export default function Activities () {
    let navigate = useNavigate()
    const { makeRequest, apiData, isLoading, error } = useFetch(`activities`)

    return (
        <>
            <h1>Activities</h1>
            <hr />
            <h2>activities</h2>
            <div className="grid">
                <article className="card-link" tabIndex="0" style={{outline: "solid 1px var(--pico-ins-color)"}} onClick={() => {navigate("add")}} >+ add</article>
                { isLoading && <div aria-busy="true">Loading</div> ||
                error && <div>{error}</div> ||                    
                apiData &&
                apiData.map((data, index) => (
                    <ActivitieCard key={index} id={data.id} />
                ))}
            </div>
        </>
    )
}