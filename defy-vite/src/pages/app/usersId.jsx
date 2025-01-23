import { useEffect } from "react"
import { useParams } from 'react-router';

import { useFetch, useConnexion } from "../../assets/hooks"
import Badge from '/src/components/app/utils/badge.jsx';

export default function UsersId () {
    let { id } = useParams();

    const { connected, curentUser } = useConnexion()
    const { makeRequest: userMakeRequest, apiData: userApiData, isLoading: userIsLoading, error: userError } = useFetch(`users/${id}`)
    const { makeRequest: sessionMakeRequest, apiData: sessionApiData, isLoading: sessionIsLoading, error: sessionError } = useFetch(`session`, { method: 'GET', headers: { 'Authorization': `Bearer ${curentUser.token}` }})
    
    return (
        <article>
            <h1>Users - {id}</h1>
            <hr />
            <Badge endpoint={`users/${id}`} hue='122' />

            <br />
            {userIsLoading && <div>Loading</div> ||
            userError && <div>{userError}</div> ||                    
            userApiData &&
                <>
                <span>Users Id</span>
                <pre>{JSON.stringify(userApiData)}</pre>
                </>
            }

            <hr />
            {
                <>
                <span>Users Session</span>
                <pre>{JSON.stringify(sessionApiData)}</pre>
                </>
            }
        </article>
    )
}