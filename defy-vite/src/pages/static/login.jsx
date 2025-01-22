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
            if (res) {
                localStorage.setItem("id", res.id);
                localStorage.setItem("name", res.name);
                localStorage.setItem("avatar", res.avatar);
                localStorage.setItem("email", res.email);                
                localStorage.setItem("type", res.type);
                localStorage.setItem("token", res.value);
                window.location.href = "/app"
            } else { setFormValid(false) }
        }).catch((err) => { setFormValid(false) })


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