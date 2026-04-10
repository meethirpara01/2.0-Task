import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Protected from '../components/Protected'
import Articles from '../pages/Articles'
import CreateArticle from '../pages/CreateArticle'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<Protected />} >
                <Route path='/articles' element={<Articles />} />
            </Route>
            <Route path='/create' element={<CreateArticle />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default AppRoutes