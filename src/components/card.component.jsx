import React from 'react'
import { Card } from 'react-bootstrap'

class CustomCard extends React.Component {
    render() {

    const { variant, text, title } = this.props

        return (
            <Card
                bg={variant.toLowerCase()}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                <Card.Title>{title} </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CustomCard