// import React from 'react';
import { NavLink } from "react-router"

export default function Landing () {
    return (
        <>
            <h1>Welcome</h1>
            <a role="button" href="/app">app</a>&nbsp;
            <hr />
            <a role="button" href="/login">Login</a>&nbsp;
            <a role="button" href="/register">Register</a>&nbsp;
        </>
    )
}