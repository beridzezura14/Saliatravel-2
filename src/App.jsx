import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import Home from './Home';
import About from './About'
import ProductDetails from './ProductDetails'
import Footer from './components/Footer';
function App() {
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
