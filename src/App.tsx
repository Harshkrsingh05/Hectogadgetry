import './App.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import IndividualProduct from './components/IndividualProduct';
import FilterProducts from './components/FilterProducts';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <ProductList/>
        <Routes>
          <Route path="/" element={<ProductCard/>}/>
          <Route path="/product" element={<ProductCard/>}/>
          <Route path="/products/:category" element={<FilterProducts/>}/>
          <Route path="/product/:productId" element={<IndividualProduct/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
