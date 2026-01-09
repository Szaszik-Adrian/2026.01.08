import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./komponensek/Navbar"

import Home from "./oldalak/Home"
import Recipes from "./oldalak/Recipes"
import RecipeDetail from "./oldalak/RecipeDetail"
import Search from "./oldalak/Search"
import Admin from "./oldalak/Admin"
import NotFound from "./oldalak/NotFound"

export default function App() {
  const isLoggedIn = true

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receptek" element={<Recipes />} />
        <Route path="/receptek/:id" element={<RecipeDetail />} />
        <Route path="/kereses" element={<Search />} />
        <Route
          path="/admin"
          element={isLoggedIn ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
