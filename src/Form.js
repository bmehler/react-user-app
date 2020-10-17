import React, {Component} from 'react'
import { Form, Button, Card } from 'react-bootstrap';

class UserForm extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = event => {
        const { name, value } = event.target;
        console.log('eventTarget', event.target);

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        console.log('state', this.state )
    }

    render() {
        const { name, job } = this.state;
    
        return (
        <Card>
            <Card.Header as="h5">Add User</Card.Header>
            <Form>
                <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <Form.Label htmlFor="job">Job</Form.Label>
                    <Form.Control
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                    <Button className="submit" variant="success" type="button" value="Submit" onClick={this.submitForm}>Submit</Button> 
            </Form>
        </Card>
        );
    }
}

export default UserForm;