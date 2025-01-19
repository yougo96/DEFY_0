import { useEffect } from "react"
import { NavLink } from "react-router"

import { useFetch, useConnexion } from "../../../assets/hooks"

export default function Sidebar () {
    const { connected, curentUser } = useConnexion()

    const logout = () => {
        localStorage.clear();
        location.reload();
    }

    return (
        <aside className="sidebar">
            <ul style={{marginBottom: "auto"}}>
                <br />
                <NavLink to="/app"><h1 className="defy">DEFY</h1></NavLink>
                <hr />
                <li><NavLink to="/app/activities"><h3>Activities</h3></NavLink></li>
                <li><NavLink to="/app/analytics"><h3>Analytics</h3></NavLink></li>
                <li><NavLink to="/app/tracks"><h3>Tracks</h3></NavLink></li>
                <li><NavLink to="/app/bikes"><h3>Bikes</h3></NavLink></li>
                <hr />
                <li><NavLink to="/"><h3>landing</h3></NavLink></li>
            </ul>
            <hr />
            {connected && curentUser ?
                <details className="profile-dropdown dropdown">
                    <summary>
                        <NavLink to={'/app/users/'+curentUser.id}>
                            {curentUser.avatar ? <img className="avatar" src={curentUser.avatar} /> : <span className="avatar">{curentUser.name.charAt(0)}</span>}
                            <strong>{curentUser.name}</strong>
                        </NavLink>
                    </summary>
                    <ul dir="rtl">
                        <li><a>profile</a></li>
                        <li><a style={{color: "var(--pico-del-color)"}} onClick={logout}>Logout</a></li>
                    </ul>
                </details>
                :
                <NavLink role="button" to="/login">Login</NavLink>
            }
        </aside>
    )
}