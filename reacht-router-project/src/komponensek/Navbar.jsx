import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Főoldal</NavLink>
      <NavLink to="/receptek">Receptek</NavLink>
      <NavLink to="/kereses">Keresés</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  )
}
