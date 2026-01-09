import { useParams, useNavigate } from "react-router-dom"
import { recipes } from "../adatok/receptek"

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = recipes.find(r => r.id === Number(id))

  if (!recipe) return <p>Nincs ilyen recept.</p>

  return (
    <div>
      <h2>{recipe.nev}</h2>
      <p>Kategória: {recipe.kategoria}</p>
      <p>{recipe.leiras}</p>
      <button onClick={() => navigate(-1)}>Vissza</button>
    </div>
  )
}
