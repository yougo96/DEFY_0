import { useEffect } from "react"
import { useParams } from 'react-router';

import { useFetch, useConnexion } from "../../assets/hooks"
import Badge from '/src/components/app/utils/badge.jsx';

export default function Users () {
    const { makeRequest, apiData, isLoading, error } = useFetch(`users`)
    
    return (
        <article>
            <h1>Users</h1>
            <hr />
            <div className="grid">
            {isLoading && <div className="badge" aria-busy>Loading</div> ||
            error && <div className="badge">{Error}</div> ||                    
            apiData &&
            apiData.map((data, index) => (
                    <Badge key={index} endpoint={`users/${data.id}`} hue='122' />
            ))}
            </div>
        </article>
    )
}