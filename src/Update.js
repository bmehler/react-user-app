import React, {Component} from 'react'
import { Form, Button, Card } from 'react-bootstrap';

class UpdateForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: this.props.updatedData.name,
          job: this.props.updatedData.job
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.log('eventTarget', event.target);

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.updateUser(this.state)
        console.log('state', this.state )
    }

    render() {
        const { name, job } = this.state;
        console.log('renderProps', this.props.updatedData)
    
        return (
        <Card>
            <Card.Header as="h5">Change User</Card.Header>
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
                    <Button className="submit" variant="warning" type="button" value="Submit" onClick={this.submitForm}>Change</Button> 
            </Form>
        </Card>
        );
    }
}

export default UpdateForm;