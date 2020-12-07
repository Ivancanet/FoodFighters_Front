import './Footer.css'
import React from "react";



const Footer = () => {
    return (
        <div className='footer'>
            <footer>
            <h5>Club Food Fighters</h5>
                <ul>
                    <li><a href='https://www.instagram.com/clubfoodfighters' target='_blank' rel='noreferrer'>Instagram: @clubfoodfighters</a></li>
                    <li><a href='https://www.facebook.com/foodfightersclub/' target='_blank' rel='noreferrer'>Facebook: @foodfightersclub</a></li>
                    <li><a href="mailto:aquiVaElCorreo@algo.es">Correo: aquiVaElCorreo@algo.es</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
