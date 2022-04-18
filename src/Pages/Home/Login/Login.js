import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import { useRef } from 'react';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate('')
    const location = useLocation()
    let from = location.state?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigateToRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmitLogIn = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onClick={handleSubmitLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <p>New to Idle trainer? <span className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</span> </p>
            <p>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>

        </div>
    );
};

export default Login;