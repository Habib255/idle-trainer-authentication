import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [confirmError, setConfirmError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [user, loading, error] = useAuthState(auth);
    const handleFormControl = (event) => {
        console.log(event.target.name, event.target.value)
        userInfo[event.target.name] = event.target.value
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (userInfo.password !== userInfo.confirmPassword) {
            setConfirmError("password doesn't match")
        }
        setConfirmError('')
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    if (user) {
        navigate('/')
    }
    return (

        <div className='container w-50 mx-auto'>
            <Form onSubmit={handleFormSubmit}>
                <h2 className='text-center'>Please Register here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onBlur={(event) => handleFormControl(event)} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onBlur={(event) => handleFormControl(event)} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Text className='text-danger'>
                        {confirmError}
                    </Form.Text>
                    {createError && <p className='text-danger'>{createError?.message}</p>}
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mb-3">
                    <Form.Text>
                        Already register ? <Link className=' text-decoration-none' to="/login">Login here</Link>
                    </Form.Text>
                </Form.Group>
                {createUser && <p>user reg succ</p>}
            </Form>
        </div>
    );
};

export default Register;