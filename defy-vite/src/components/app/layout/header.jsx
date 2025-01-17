import { useEffect } from "react"
import { NavLink } from "react-router"

import { useFetch, useConnexion } from "../../../assets/hooks"

export default function Header () {
    const { connected, curentUser } = useConnexion()

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
                {connected && curentUser ?
                    <> <NavLink to={'/app/users/'+curentUser.id}>
                        {curentUser.avatar ? <img className="avatar" src={curentUser.avatar} /> : <span className="avatar">{curentUser.pseudo.charAt(0)}</span>}
                    </NavLink>
                    <button onClick={logout}>Logout</button> </>
                    : <NavLink role="button" to="/login">Login</NavLink>
                }
            </nav>
        </header>
    )
}