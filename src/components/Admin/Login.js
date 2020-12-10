import React from 'react';

const Login = (props) => {

    const { submitLogin, changeHandler } = props
  
    return (
        <div>
            <h1>Login Under Construction</h1>

            <form onSubmit={submitLogin}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' placeholder='Manolo' onChange={(event) => {
                    changeHandler(event.target)
                }} />

                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' placeholder='Contraseña' onChange={(event) => {
                    changeHandler(event.target)
                }} />

                <button type='submit'>Log In</button>

            </form>
        </div>
    );
};


export default Login;