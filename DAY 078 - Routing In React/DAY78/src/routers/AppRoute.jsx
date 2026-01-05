import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Docs from "../pages/Docs"
import Contact from "../pages/Contact"
import Products from "../pages/Products"
import About from "../pages/about"

const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </>
  )
}

export default AppRoute    