import { Link } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";

const slides = ["/images/accueil1.jpg", "/images/accueil2.jpg", "/images/accueil3.jpg"]

export default function Home() {
    return (
        <div className="flex justify-center items-center relative">
            <div className="w-full">
                <Carousel autoSlide={true}>
                    {slides.map((s, index) => (
                        <img key={index} src={s} alt="images"/>
                    ))}
                </Carousel>
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 font-fjalla font-bold text-6xl text-White">Chocopap</h1>
                <Link to="/produits" className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black font-bold text-white px-10 py-6 rounded">
                    Voir la boutique
                </Link>
            </div>
        </div>
    )
}