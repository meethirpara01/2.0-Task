import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}

export default AppRoutes