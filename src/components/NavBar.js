import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src='/images/logo-foodfighters-vf-3.png' alt='Boton Inicio'/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <Link className="nav-link" to="/blog">Criticas Gastronomicas</Link>
                        <Link className="nav-link disabled" to="/restaurants" tabIndex="-1" aria-disabled="true">Restaurantes</Link>
                        <Link className="nav-link" to="/wines">Vinos</Link>
                        <Link className="nav-link" to="/formations">Formaciones</Link>
                        <Link className="nav-link" to="/experiencies">Experiencias</Link>
                        <Link className="nav-link" to="/aboutUs">Sobre Nosotros</Link>
                        <Link className="nav-link" to="/contact">Contacto</Link>
                        {!props.userLogged.username && <Link className="nav-link" to="/admin">Administradores</Link>}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;