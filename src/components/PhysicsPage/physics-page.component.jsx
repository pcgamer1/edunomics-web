import React from 'react'
import {Row, Col, Container, Card} from 'react-bootstrap'
import CustomCard  from '../card.component'

import './physics-page.styles.scss'
import Header1 from '../Header1/header.component'
import Chart1 from '../Chart1'

class PhysicsPage extends React.Component {

    state = {sidebarOpen: true}

    onSetSidebarOpen = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }
    
    render() {
        return (
            <>
            <Header1 />
                {/* <br /> <br /> <br /> */}
                <Row>
                <Col md={2} className='sidebar'>
                    <div className='option'>Home</div>
                    <div className='option'>Sessions</div>
                    <div className='option'>Downloads</div>
                    <div className='option'>Settings</div>
                    <div className='option'>About</div>
                </Col>
                <Col md={10} className='content-wrap'>
                    <Row>
                        <Col md={4}>
                            <CustomCard variant='light' title='All Interactive Sessions'/>
                        </Col>
                        <Col md={4}>
                            <CustomCard variant='light' title='Practice Questions'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <CustomCard variant='light' title='Downloads'/>
                        </Col>
                        <Col md={4}>
                            <CustomCard variant='light' title='Ask Questions'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Chart1 />
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>
        )
    }
}

export default PhysicsPage