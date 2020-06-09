import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'

import './header.styles.scss'

const Header = ({ handleSign }) => {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <div className='logo'>
                    Welcome To Edunomics
                </div>
            </div>
            <div className='options'>
                <CustomButton onClick={() => handleSign()} inverted variant='light'>Sign In</CustomButton>
                <Link to='/signup'><CustomButton inverted>Sign Up</CustomButton></Link>
            </div>
        </div>
    )
}

export default Header