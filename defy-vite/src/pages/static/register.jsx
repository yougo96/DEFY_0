// import React from 'react';
import { useFetch } from "../../assets/hooks"

export default function Register () {
    const { makeRequest, apiData, isLoading, error } = useFetch()

    async function handleForm (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        await makeRequest('users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={(e) => handleForm(e)}>
                <input name="pseudo" placeholder="pseudo" type="text" />
                <input name="avatar" placeholder="avatar" type="text" />
                <input name="email" placeholder="email" type="email" />
                <input name="password" placeholder="password" type="password" />
                <input type="submit" value="register" />
            </form>
        </>
    )
}