// React
import { useEffect } from "react"
import { useParams, Navigate } from "react-router"
// Libs
import { Avatar, Title } from '@mantine/core';
// Files
import { useFetch } from "../assets/hooks"

export function ProfileBadge () {
    const {id} = useParams()

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest(`users/${id}`)
    }, [])

    return (

        isLoading && <div>Loading</div> ||
        error && <div>{error}</div> ||                    
        apiData &&
        <>
        <div>
            <Avatar src={apiData.avatar} name={apiData.pseudo} alt="avatar"/>
            <Title order={5}>{apiData.pseudo}</Title>
        </div>

        <style>{` 
            div {
            display: flex;
            align-items: center;
            flex-wrap: nowrap; } 
        `}</style>
        </>
    )
}