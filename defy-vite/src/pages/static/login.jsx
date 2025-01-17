import { useState } from "react"

import { useFetch } from "../../assets/hooks"

export default function Login () {
    const { makeRequest, apiData = "toto", isLoading, error } = useFetch()
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
        })
        
        console.log('apidata', apiData)

        if (!error && apiData) {
            localStorage.setItem("id", apiData.id);
            localStorage.setItem("pseudo", apiData.pseudo);
            localStorage.setItem("avatar", apiData.avatar);
            localStorage.setItem("email", apiData.email);                
            localStorage.setItem("type", apiData.type);
            localStorage.setItem("token", apiData.value);
            window.location.href = "/app"
        } else {
            setFormValid(false)
        }               

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