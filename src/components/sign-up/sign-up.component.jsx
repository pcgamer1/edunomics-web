import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils' 
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = { displayName: '', email: '', password: '', confirmPassword: '', loader: false }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if(password !== confirmPassword) {
            alert('Password do not match')
            return 
        }
        try {
            this.setState({ loader: true })
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '', loader: false })
        } catch(error) {
            this.setState({ loader: false })
            console.log('error: ', error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword, loader } = this.state
        return (
            <div className='sign-container'>
            <div className='sign-up'>
                <h4 className='title'>I do not have an account</h4>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                    <div className='buttons'>
                        {
                            loader ? (
                                <div className="loader"></div>
                            ) : (
                                <CustomButton type='submit'>SIGN UP</CustomButton>
                            )
                        }
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default SignUp