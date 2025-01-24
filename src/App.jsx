import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import Navbar from './assets/components/Navbar'
import UserProvider from './assets/context/UserProvider'

function App() {
  

  return (
    <UserProvider>
      <h1 className='font-semibold text-center bg-slate-500'>Contact Api</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </UserProvider>
  )
}

export default App
