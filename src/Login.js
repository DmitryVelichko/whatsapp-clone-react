import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
//WA logo online src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
import logo from './images/WhatsAppLogo.svg';

function Login() {

    const signIn = () => {};

    return (
        <div className='login'>
            <div className="login__container">
                <img src={logo} alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
