import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table } from 'react-bootstrap';
import DollarItem from './DollarItem';

export default class Budget extends React.Component {
    constructor() {
        super();
        this.addRow = this.addRow.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
        // TODO: Make "rows" into a map so that you can interact with items by index?
        this.state = {
            rows: [],
            // rows: new Set(),
        };
    }

    addRow() {
        const newId = Date.now().toString();
        this.state.rows.push(<DollarItem delete={this.deleteRow} key={newId} deleteKey={newId}/>)
        this.setState({
            rows: this.state.rows
        });
    }

    deleteRow(rowKey) {
        this.state.rows = this.state.rows.filter(row => row.key !== rowKey)
        this.setState({
            rows: this.state.rows
        });
    }

    render() {
        return(
            <div>
                <Table>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </Table>
                <Button onClick={this.addRow} variant="primary">Add Row</Button>
            </div>
        );
    }
}