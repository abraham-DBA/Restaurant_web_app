import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import RestaurantsPage from './pages/RestaurantsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menus' element={<MenuPage />} />
        <Route path='/restaurants' element={<RestaurantsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
