import { useEffect } from "react"
import { useParams } from 'react-router';

import { useFetch, useConnexion } from "../../assets/hooks"
import Badge from '/src/components/app/utils/badge.jsx';

export default function Users () {
    const { connected, curentUser } = useConnexion()
    const { makeRequest: userMakeRequest, apiData: userApiData, isLoading: userIsLoading, error: userError } = useFetch(`users`)
    const { makeRequest: sessionMakeRequest, apiData: sessionApiData, isLoading: sessionIsLoading, error: sessionError } = useFetch(`session`, { method: 'GET', headers: { 'Authorization': `Bearer ${curentUser.token}` }})
    
    return (
        <article>
            <h1>Users</h1>
            <hr />
            {userIsLoading && <div>Loading</div> ||
            userError && <div>{userError}</div> ||                    
            userApiData &&
            userApiData.map((data, index) => (
                <Badge key={index} endpoint={`users/${data.id}`} />
            ))}
            <hr />
            {
                <pre>{JSON.stringify(sessionApiData)}</pre>
            }
        </article>
    )
}