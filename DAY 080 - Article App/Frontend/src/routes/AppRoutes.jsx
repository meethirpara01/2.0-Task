import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
    </Routes>
  )
}

export default AppRoutes