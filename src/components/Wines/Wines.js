import React from 'react';
import './Wines.css'
import WineService from './WineService';
import { Link } from 'react-router-dom';





class Wines extends React.Component {

    state = {
        wines: []
    }

    service = new WineService();




    componentDidMount() {

        this.service.viewWines()
            .then((wines) => {
                this.setState({ wines: wines });
                console.log(this.props.userLogged.username);
            })
            .catch((err) => {
                console.log(err);
            });

    }



    renderWines = () => {

        return this.state.wines.map((wines)=> {
            return (
                <div className='wines'>
                    <div className='background'>

                        <div className="card" >
                            <img src={wines.image} className="card-img-top" alt="..." />
                            <h3>{wines.name}</h3>
                            <div className="card-body">
                                <div className="card-text">
                                    <ul>
                                        <li>Añada: {wines.year}</li>
                                        <li>D.O: {wines.origin}</li>
                                        <li>Tipo: {wines.wineType}</li>
                                        <li>Uva: {wines.grapeType}</li>
                                        <li>Sensaciones: {wines.wineSensation}</li>
                                        <li>Bodega: {wines.cellar}</li>
                                        <li>Pvp: {wines.pvp}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                <h1>Wines Under Construction</h1>
                {this.props.userLogged.username && <Link to='/wines/create'>Crear Vino</Link>}

                {this.state.wines.length > 0 && this.renderWines()}


            </div>

        );
    };
};

export default Wines;