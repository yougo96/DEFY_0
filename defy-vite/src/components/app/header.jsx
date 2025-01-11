import { useEffect } from "react"
import { NavLink } from "react-router"

import { useFetch, useConnexion } from "../../assets/hooks"

export default function Header () {
    const { connected, curentUser } = useConnexion()

    console.log(connected, curentUser)

    const logout = () => {
        localStorage.clear();
        location.reload();
    }

    return (
        <header>
            <nav>
                <NavLink to="/app"><h1 className="defy">DEFY</h1></NavLink>
            </nav>
            <nav>
                {connected ?
                    <> <NavLink to={'/app/users/'+curentUser.id}><img className="avatar" src={curentUser ? curentUser.avatar : "null"} /></NavLink>
                    <button onClick={logout}>Logout</button> </>
                    : <NavLink role="button" to="/login">Login</NavLink>
                }
            </nav>
        </header>
    )
}