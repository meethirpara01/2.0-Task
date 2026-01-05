import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Docs from "../pages/Docs"
import Contact from "../pages/Contact"
import Products from "../pages/Products"
import About from "../pages/about"
import Deshboard from "../pages/Deshboard"
import Profile from "../pages/Profile"
import Settings from "../pages/Settings"
import PageNotFound from "../pages/PageNotFound"
import ProductDetail from "../pages/ProductDetail"

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Deshboard" element={<Deshboard />} >
          <Route path="Profile" element={<Profile />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
        <Route path="/Products/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default AppRoute    