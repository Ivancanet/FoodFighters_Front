import React from 'react';
import './Admin.css';
import { Link, Redirect, Route, Switch } from 'react-router-dom';


const Admin = (props) => {

    const { userLogged } = props;

    return (
        <div className='admin'>
            <h1>Hello {userLogged.username}</h1>
            <Switch>
            <Link to='/post'> Create Post</Link>
            </Switch>

            <ul>
                <li>Canviar Usuario</li>
                <li>Canviar Correo</li>
                <li>Canviar Contraseña</li>
            </ul>

            <div className="btn-group-vertical" role="group" aria-label="Basic example" >
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#userModal">Canviar Usuario</button>
                <button type="button" className="btn btn-secondary">Canviar Correo</button>
                <button type="button" className="btn btn-secondary">Canviar Contraseña</button>
            </div>



            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#changeModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">Change username</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <div className="form-group row">
                          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Usuario</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userLogged.username}/>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputUser" className="col-sm-2 col-form-label">Nuevo</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputUser" placeholder='Nuevo Usuario'/>
                          </div>
                        </div>
                      </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;