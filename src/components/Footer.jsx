const Footer = () => {
    return (
        <>
            <div className="bg-Yell flex row-auto bottom-0 w-full z-50">
                <div id="informations" className="text-left m-4 w-1/3">
                    <h2 className="text-style3 font-droid font-bold">Choco pap</h2>
                    <div className="text-style4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </div>
                </div>
                <div id="contact" className="text-left font-droid m-4 w-1/3 ">
                    <h2 className="text-style3 font-bold">Contact</h2>
                    <div className="text-style4">
                        Adresse : 51 rue du chocolat <br/>
                        75000 Paris Téléphone: 01 23 45 67 89 <br/>
                        Horaires: 9h00-17h00 du Lundi au vendredi
                    </div>
                </div>
                <div id="social-network" className="flex space-x-4 m-4 w-auto">
                    <div>
                        <img src="/images/logo-facebook.png" className="w-10 h-10" alt="facebook"/>
                    </div>
                    <div>
                        <img src="/images/logo-instagram.jpeg" className="w-10 h-10" alt="instagram"/>
                    </div>
                    <div>
                        <img src="/images/logo-twitter.png" className="w-10 h-10" alt="twitter"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;