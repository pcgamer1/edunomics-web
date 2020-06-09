import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './HomePage.styles.scss'
import myimg from '../../assets/new.jpg'
import damn from '../../assets/damn.png'
import Header from '../Header/header.component'
import SignIn from '../sign-in/sign-in.component'

class HomePage extends React.Component {

    state = {signin: false}

    handleClick = () => {
        this.setState({signin: true})
    }

    componentDidMount() {
        this.setState({signin: false})
        console.log('lol')
    }

    render() {
        const { signin } = this.state
        return (
            <>
            <Header handleSign={this.handleClick}/>
            <div className='signin-container'>
                {
                    signin ? <SignIn /> : null
                }
            </div>
            <div className='home-container'>
                <div className='image-wrapper'>
                    <img src={myimg}></img>
                </div>
                <div className='content-wrapper'>
                    <h4>Hi There!</h4>
                    <div className='content'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    </div>
                    <img src={damn} />
                    <div className='content'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quam voluptatum ipsam ea sunt, illum commodi culpa aut placeat vel ipsum ut exercitationem minima ex necessitatibus quos deleniti autem.                    
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HomePage