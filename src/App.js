import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage/HomePage.component'
import SignUp from './components/sign-up/sign-up.component'
import { connect } from 'react-redux'
import PhysicsPage from './components/PhysicsPage/physics-page.component'

class App extends React.Component {

    state = {currentUser: null}

    render() {
        return (
            <div>
                {/* <Switch> */}
                    <Route exact path='/' render={() => this.props.currentUser ? (<Redirect to='/physics' />) : (<HomePage />)} />
                    <Route exact path='/signup' component={SignUp} /> 
                    {/* <Route path='/signin' component={SignIn} /> */}
                    <Route exact path='/physics' component={PhysicsPage} /> 
                {/* </Switch> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.user.currentUser}
}

export default connect(mapStateToProps)(App)