import { useState } from "react"

import { useFetch } from "../../assets/hooks"

export default function Login () {
    const { makeRequest, apiData, isLoading, error } = useFetch()
    const [formValid, setFormValid] = useState(true)

    async function handleForm (e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        await makeRequest('login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('success', res)
        })

        if (!error && apiData) {
            localStorage.setItem("id", apiData.id);
            localStorage.setItem("name", apiData.name);
            localStorage.setItem("avatar", apiData.avatar);
            localStorage.setItem("email", apiData.email);                
            localStorage.setItem("type", apiData.type);
            localStorage.setItem("token", apiData.value);
            window.location.href = "/app"
        } else {
            setFormValid(false)
        }
    }

    async function handleFormLegacy (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const res = await fetch('http://localhost:3333/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(resj => {
            console.log('resj', resj)
            localStorage.setItem("id", resj.id);
            localStorage.setItem("name", resj.name);
            localStorage.setItem("avatar", resj.avatar);
            localStorage.setItem("email", resj.email);                
            localStorage.setItem("type", resj.type);
            localStorage.setItem("token", resj.value);
            window.location.href = "/app"
        }).catch(err => {
            setFormValid(false)
        })

        console.log('res', res)

    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleForm(e)}>
                <input name="email" placeholder="email" type="email" />
                <input name="password" placeholder="password" type="password" />
                <input type="submit" value="Login" />
            </form>
            {formValid ? null : <span role="alert" style={{color:"red"}}>Invalid {error}</span>}
        </>
    )
}