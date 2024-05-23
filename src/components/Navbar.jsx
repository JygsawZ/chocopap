import {Link} from "react-router-dom";
import {useContext, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {CartContext} from "./CartContext.jsx";

export function Navbar() {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const togglePane = () => {
        setIsPaneOpen(!isPaneOpen);
    };

    const {cart} = useContext(CartContext);

    return (
        <div className="flex justify-between items-center h-full mb-4 m-0 p-0 ">
            <div className="p-4" id="header-logo">
                <img src="/images/logo.png" alt="logo" width={70} height={70}/>
            </div>
            <nav className="flex">
                <Link to="/" className="mx-2 font-fjalla font-bold">Accueil</Link>
                <Link to="/boutique" className="mx-2 font-fjalla font-bold">Boutique</Link>
                <a className="mx-2" onClick={togglePane}>
                    <img src="/images/panier.png" alt="panier" width={50} height={50}/>
                </a>
            </nav>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={isPaneOpen}
                title='Mon Panier'
                from='right'
                width='320px'
                onRequestClose={() => setIsPaneOpen(false)}
            >
                {cart.map(({product, quantity}) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>Quantité: {quantity}</p>
                        <p>Prix: {product.price}€</p>
                    </div>
                ))}
            </SlidingPane>
        </div>
    )
}