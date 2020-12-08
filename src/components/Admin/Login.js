import React from 'react';

class Login extends React.Component {

    state = {
        user: { username: '', password: '' }
    };

    submitForm = (event) => {
        event.preventDefault();
        console.log('hola');

        fetch('http://localhost:3000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application7json'
            },
            body: JSON.stringify(this.state.user)
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    changeHandler = (_eventTarget) => {
        this.setState({ user: { ...this.state.user, [_eventTarget.name]: _eventTarget.value } });
    };

    render() {
        return (
            <div>
                <h1>Login Under Construction</h1>

                <form onSubmit={this.submitForm}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={this.state.user.username} onChange={(event)=>{
                    this.changeHandler(event.target)
                }}/>

                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={this.state.user.password} onChange={(event)=>{
                    this.changeHandler(event.target)
                }}/>

                <button type='submit'>Log In</button>


                </form>
            </div>
        );
    };
};

export default Login;