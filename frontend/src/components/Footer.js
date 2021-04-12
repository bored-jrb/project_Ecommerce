import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        
        <footer style={{backgroundColor: "#343a40"}}>
            <Container> 
                <Row>
                    <Col className="text-center py-3" style={{color: 'white'}}> Copyright &copy; Kali 2021</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
