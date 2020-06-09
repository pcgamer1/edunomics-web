import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'

import './header.styles.scss'

const Header1 = ({ handleSign }) => {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <div className='logo'>
                    Welcome To Edunomics
                </div>
            </div>
            <div className='options'>
                <CustomButton inverted variant='light'>My Account</CustomButton>
            </div>
        </div>
    )
}

export default Header1