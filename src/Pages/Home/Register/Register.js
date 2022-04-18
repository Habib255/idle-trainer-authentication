import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
const Register = () => {
    const navigate = useNavigate()
    const [CreateUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const submitCreateUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value
        if (password !== confirmPassword) {
            const error = ('Your two password did not match')
            return
        }
        CreateUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center'>Please Register here</h3>
            <Form onSubmit={submitCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree our terms and conditions" required />
                </Form.Group>

                <input className='btn btn-primary w-100' type="submit" value="Submit" />


            </Form>

            <p className='text-center'>Or</p>
            <button className='btn btn-info w-100'>Sign in with Google</button>

            <p>Already Register? <span className='text-primary ' onClick={navigateToLogin} >Login here</span></p>



        </div >
    );
};

export default Register;