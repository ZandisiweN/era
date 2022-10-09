import React from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
// import CategoryScreen from './screens/CategoryScreen'
import HomeScreen from './screens/HomeScreen'
import ProductsScreen from './screens/ProductsScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <Header />
        <Container>
          <main>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
            </Routes>
          </main>
        </Container>

        <Footer />
      </div>
    </Router>
  )
}

export default App
