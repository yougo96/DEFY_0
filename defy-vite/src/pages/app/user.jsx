import { useEffect } from "react"
import { useParams } from 'react-router';

import { useFetch, useConnexion } from "../../assets/hooks"
import UserBadge from '../../components/app/user/userBadge';

export default function User () {
    const { makeRequest: userMakeRequest, apiData: userApiData, isLoading: userIsLoading, error: userError } = useFetch()
    const { makeRequest: sessionMakeRequest, apiData: sessionApiData, isLoading: sessionIsLoading, error: sessionError } = useFetch()
    const { connected, curentUser } = useConnexion()
    
    useEffect(() => {
        userMakeRequest(`users`)
        sessionMakeRequest(`session`, { method: 'GET', headers: { 'Authorization': `Bearer ${curentUser.token}` }})
    }, [])
    
    return (

    <article>
        {userIsLoading && <div>Loading</div> ||
        userError && <div>{userError}</div> ||                    
        userApiData &&
        userApiData.map((data, index) => (
            <UserBadge key={index} id={data.id} />
        ))}
        <hr />
        {
            <pre>{JSON.stringify(sessionApiData)}</pre>
        }
    </article>
    )
}