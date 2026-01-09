import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>ReceptTár</h1>
      <p>Üdvözlünk a receptgyűjteményben!</p>
      <button onClick={() => navigate("/receptek")}>
        Receptek
      </button>
    </div>
  )
}
