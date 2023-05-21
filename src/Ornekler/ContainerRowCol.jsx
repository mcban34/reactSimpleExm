import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Test() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='col-8 border'>
                        <p>COL-8</p>
                    </Col>
                    <Col className='col-4 border'>
                        <p>COL-4</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Test