import { Link } from "react-router-dom"
import { recipes } from "../adatok/receptek"

export default function Recipes() {
  return (
    <div>
      <h2>Receptek</h2>
      <ul>
        {recipes.map(r => (
          <li key={r.id}>
            <Link to={`/receptek/${r.id}`}>
              {r.nev} – {r.kategoria}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
