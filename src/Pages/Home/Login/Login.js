import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [login, setLogin] = useState(true)
    const [confirmError, setConfirmError] = useState('')
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [loginUser, loginloading, loginerror] = useAuthState(auth);
    const handleFormControl = (event) => {

        userInfo[event.target.name] = event.target.value
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (loginUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50 mx-auto'>
            <Form onSubmit={handleFormSubmit}>
                <h2 className='text-center'>Please Login here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onBlur={(event) => handleFormControl(event)} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onBlur={(event) => handleFormControl(event)} type="password" placeholder="Password" required />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Text className='text-danger'>
                        {confirmError}
                        {error?.message}
                    </Form.Text>
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mb-3">
                    <Form.Text>
                        New to Idle Trainer ? <Link className='text-decoration-none' to="/register">Register here</Link>
                    </Form.Text>
                </Form.Group>
                {user && <p>user login successs</p>}
            </Form>
        </div>
    );
};

export default Login;