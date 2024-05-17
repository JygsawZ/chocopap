import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="flex justify-between items-center h-full mb-4 m-0 p-0 ">
            <div id="header-logo">
                <img src="/images/logo.png" alt="logo" width={70} height={70}/>
            </div>
            <nav className="flex">
                <Link to="/" className="mx-2 font-fjalla font-bold">Accueil</Link>
                <Link to="/boutique" className="mx-2 font-fjalla font-bold">Boutique</Link>
                <Link to="/panier" className="mx-2"><img src="/images/panier.png" alt="panier" width={50} height={50}/></Link>
            </nav>
        </div>
    )
}