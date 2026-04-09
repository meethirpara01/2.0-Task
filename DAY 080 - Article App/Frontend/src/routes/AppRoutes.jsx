import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Protected from '../components/Protected'
import Articles from '../pages/Articles'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<Protected />} >
                <Route path='/articles' element={<Articles />} />
            </Route>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default AppRoutes