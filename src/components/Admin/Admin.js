import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';


const Admin = (props) => {

    const { userLogged, changeHandler, submitUser } = props;

    return (
        <div className='admin'>


            <Link to='/post' className="nav-link active"> <h3>Create Post</h3> </Link>

            <br />

            <div className="btn-group-vertical" role="group" aria-label="Basic example" >
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#userModal">Canviar Usuario</button>
                <button type="button" className="btn btn-secondary">Canviar Correo</button>
                <button type="button" className="btn btn-secondary">Canviar Contraseña</button>
            </div>


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
                            <form onSubmit={submitUser}>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Usuario</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userLogged.username} />
                                    </div>
                                </div>
                                <div className="form-group row">

                                    <label htmlFor="username" className="col-sm-2 col-form-label">Nuevo</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name='username' id="inputUser" placeholder='Nuevo Usuario'
                                            onChange={(event) => {
                                                changeHandler(event.target)
                                            }} />

                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;