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
        </>
    )
}