import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Form, Button } from 'react-bootstrap'
import { InputGroup, FormControl, Container, Row, Col, Button, Card, Form } from 'react-bootstrap'


export default class BudgetItem extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2 w-50">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="150.00" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <p className="w-25">per</p>
                    </Col>
                    <Col xs="auto">
                    <InputGroup className="mb-2 w-25">
                            <FormControl id="inlineFormInputGroup" placeholder="1" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            as="select"
                            className="mb-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Days</option>
                            <option value="1">Weeks</option>
                            <option value="2">Months</option>
                            <option value="3">Years</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2 w-50">
                            <FormControl id="inlineFormInputGroup" placeholder="15" />
                            <InputGroup.Append>
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <p>per</p>
                    </Col>
                    <Col xs="auto">
                    <InputGroup className="mb-2 w-25">
                            <FormControl id="inlineFormInputGroup" placeholder="1" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            as="select"
                            className="mb-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Days</option>
                            <option value="1">Weeks</option>
                            <option value="2">Months</option>
                            <option value="3">Years</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Container>

            );
    }
}