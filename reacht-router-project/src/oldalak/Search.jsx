import { useSearchParams } from "react-router-dom"
import { recipes } from "../adatok/receptek"

export default function Search() {
  const [params, setParams] = useSearchParams()
  const nev = params.get("nev") || ""

  const filtered = recipes.filter(r =>
    r.nev.toLowerCase().includes(nev.toLowerCase())
  )

  return (
    <div>
      <h2>Keresés</h2>
      <input
        value={nev}
        onChange={e => setParams({ nev: e.target.value })}
        placeholder="Recept neve..."
      />
      <ul>
        {filtered.map(r => (
          <li key={r.id}>{r.nev}</li>
        ))}
      </ul>
    </div>
  )
}
