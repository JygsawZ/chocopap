import {CartProvider} from './components/CartContext';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import {Navbar} from './components/Navbar.jsx';
import Footer from './components/Footer';
import ProductCardDetail from "./components/ProductCardDetail.jsx";
import {ProductsProvider} from "./components/ProductsContext.jsx";

export default function App() {
    return (
        <div className="bg-choco">
            <ProductsProvider>
                <CartProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/boutique" element={<Boutique/>}/>
                        <Route path="/produits" element={<Boutique/>}/>
                        <Route path="/product/:id" element={<ProductCardDetail/>}/>
                    </Routes>
                    <Footer/>
                </CartProvider>
            </ProductsProvider>
        </div>
    );
}