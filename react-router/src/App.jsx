import React from "react"
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { BookLayout } from "./pages/BookLayout"
import BookRoute from "./pages/BookRoute"

function App() {
  const location = useLocation()
  return (
    <>
      <Routes location="/books" >
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/"  >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home"
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" end >Books</NavLink>
          </li>

        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoute />}>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
