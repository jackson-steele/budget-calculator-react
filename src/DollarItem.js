import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, InputGroup, FormControl, Container, Row, Col, Button, Card, Form } from 'react-bootstrap'


export default class DollarItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteMe = this.deleteMe.bind(this)
        this.state = {

        };
    }

    deleteMe = () => {
        this.props.delete(this.props.deleteKey)
    }

    render() {
        return(
            <tr>
                <td>
                    <InputGroup className="mb-2">
                        <FormControl id="inlineFormInputGroup" placeholder="Item Name" />
                    </InputGroup>
                </td>
                <td>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup" placeholder="150.00" />
                    </InputGroup>
                </td>
                <td>
                    <p className="mb-2">per</p>
                </td>
                <td>
                    <InputGroup className="mb-2">
                        <FormControl id="inlineFormInputGroup" placeholder={"15"} />
                    </InputGroup>
                </td>
                <td>
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
                </td>
                <td>
                    <Button onClick={this.deleteMe}>x</Button>
                </td>
            </tr>
        );
    }
}