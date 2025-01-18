// import React from 'react';
import { useFetch, useConnexion } from "../../assets/hooks"

export default function PostActivitie () {
    const { makeRequest, apiData, isLoading, error } = useFetch()
    const { connected, curentUser } = useConnexion()

    async function handleForm (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.userId = curentUser.id

        await makeRequest('activities', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="container">
            <h1>Add activitie</h1>
            <hr />
            <form onSubmit={(e) => handleForm(e)}>
                <input name="name" placeholder="name" type="text" />
                <hr />
                <input name="trackId" placeholder="track" type="number" />
                <input name="bikeId" placeholder="bike" type="number" />
                <input name="date" type="date" />
                <hr />
                <textarea name="description" placeholder="description" type="text" rows="8">
                    - Engine setup:
                    - Suspensions setup:
                    - Electronics setup:
                    - Final drive ratio:

                    - Rider impressions:
                </textarea>
                <input name="images" placeholder="images" type="text" />
                <input name="gps" placeholder="gps" type="text" />

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}