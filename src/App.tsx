import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { ProductPage } from './pages/ProductPage'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  const RedirectToHome = () => <Navigate to="/home" replace />;

  return (
    <ShoppingCartProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/ecom/" element={<RedirectToHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
