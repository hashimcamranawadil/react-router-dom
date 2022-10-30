import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/components/Home'
import About from './pages/components/About'
import Products from './pages/components/Products'
import Login from './pages/components/Login'
import Navbar from './pages/components/Navbar'
import PageNotFound from './pages/components/PageNotFound'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
