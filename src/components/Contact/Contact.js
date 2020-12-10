import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <h5>Como contactar con nosotros</h5>
            <p>Puedes contactar con nosotros enviandonos un correo al siguiente correo: <br />
                <a href="mailto:foodfightersgroup@gmail.com"> <img src='/images/email-logo.png' alt='email' /> foodfightersgroup@gmail.com </a> <br />
                Por un mensaje directo a nuestro instagram: <br />
                <a href='https://www.instagram.com/clubfoodfighters' target='_blank' rel='noreferrer'> <img src='/images/instagram-logo.png' alt='instagram' /> @clubfoodfighters</a> <br />
                O bien, por facebook: <br />
                <a href='https://www.facebook.com/foodfightersclub/' target='_blank' rel='noreferrer'> <img src='/images/facebook-logo.png' alt='facebook' /> @foodfightersclub</a> <br />
            </p>
        </div>
    );
};

export default Contact;