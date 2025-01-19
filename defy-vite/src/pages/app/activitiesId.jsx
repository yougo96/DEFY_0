import { useEffect } from "react"
import { useNavigate, useParams } from "react-router";

import { useFetch } from "../../assets/hooks"
import ActivitieCard from "../../components/app/activitie/activitieCard";

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
            <ActivitieCard id={id} />}
        </>
    )
}