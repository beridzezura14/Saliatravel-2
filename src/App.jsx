import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import HomePage from './HomPage';
import About from './About'
import ProductDetails from './ProductDetails'
import Footer from './components/Footer';
function App() {
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
