import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // We use e.preventDefault() to prevent the page from reloading 
    // because of the form tag.
    // When the login button is pressed, the value of the states of textboxes are 
    // passed to Firebase to authenticate. Firebase does its magic, and if the 
    // authentication is successful returns a promise or throws an error.
    // The useHistory() is a hook from react-router-dom which helps you to redirect 
    // user from the actual code.
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
                .catch(error => alert(error.message))
    }
    

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                {/* We have two local states which keep the track of the values of 
                the textboxes. Whenever the value of the textboxes change, we change 
                the value of state */}
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={
                            e => setEmail(e.target.value)} 
                    />
                    <h5>Password</h5>
                    <input type='text' value={password} onChange={
                        e => setEmail(e.target.value)}
                    />
                    <button type='submit'className='login__signInButton'>
                            Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button 
                    onClick={register}
                    className='login__registerButton'>
                        Create your Amazon Account
                </button>
            </div>
            
        </div>
    )
}

export default Login
