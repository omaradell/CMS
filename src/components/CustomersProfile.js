import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomersProfileOrders from './CustomersProfileOrders'
import CustomerProfileCard from './CustomerProfileCard'

export default class CustomersProfile extends Component {
    render() {
        return (
        <>
        <Container fluid>
            <Row>
                <h3> Profile</h3>
            </Row>
            <Row>
                {/* Left */}
                <Col>
                    <CustomersProfileOrders/>
                    {/* <Customeb brsProfileReviews/> */}
                </Col>
                {/* Right */}
                <Col md={4}>
                    <CustomerProfileCard/>
                </Col>
            </Row>
        </Container>
        </>
        )
    }
}
