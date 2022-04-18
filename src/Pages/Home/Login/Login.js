import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <p>New to Idle trainer? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>

        </div>
    );
};

export default Login;