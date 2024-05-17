import {ProductProvider} from './components/ProductProvider';
import {CartProvider} from './components/CartContext';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Panier from './pages/Panier';
import {Navbar} from './components/Navbar.jsx';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="bg-choco">
            <ProductProvider>
                <CartProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/boutique" element={<Boutique/>}/>
                        <Route path="/produits" element={<Boutique/>}/>
                        <Route path="/panier" element={<Panier/>}/>
                    </Routes>
                    <Footer/>
                </CartProvider>
            </ProductProvider>
        </div>
    );
}