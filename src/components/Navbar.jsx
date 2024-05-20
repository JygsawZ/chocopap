import {Link} from "react-router-dom";
import {useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Panier from '../pages/Panier';

export function Navbar() {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const togglePane = () => {
        setIsPaneOpen(!isPaneOpen);
    };

    return (
        <div className="flex justify-between items-center h-full mb-4 m-0 p-0 ">
            <div id="header-logo">
                <img src="/images/logo.png" alt="logo" width={70} height={70}/>
            </div>
            <nav className="flex">
                <Link to="/" className="mx-2 font-fjalla font-bold">Accueil</Link>
                <Link to="/boutique" className="mx-2 font-fjalla font-bold">Boutique</Link>
                <Link to="/panier" className="mx-2" onClick={togglePane}>
                    <img src="/images/panier.png" alt="panier" width={50} height={50}/>
                </Link>
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
                <Panier />
            </SlidingPane>
        </div>
    )
}