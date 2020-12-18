import './Footer.css'
import React from "react";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer'>
            <footer>
            <hr></hr>
                <h5>Club Food Fighters</h5>
                <ul>
                    <li><a href='https://www.instagram.com/clubfoodfighters' target='_blank' rel='noreferrer'> <img src='/images/instagram-logo.png' alt='instagram' /> @clubfoodfighters</a></li>
                    <li><a href='https://www.facebook.com/foodfightersclub/' target='_blank' rel='noreferrer'> <img src='/images/facebook-logo.png' alt='facebook' /> @foodfightersclub</a></li>
                    <li><a href="mailto:foodfightersgroup@gmail.com"> <img src='/images/email-logo.png' alt='email' /> foodfightersgroup@gmail.com </a></li>
                    <li><Link to='/contact'>Contacto</Link></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
