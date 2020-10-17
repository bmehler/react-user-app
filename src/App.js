import React, { Component } from 'react';
import './App.css';
import UserTable from './Table';
import { Container, Row, Col } from 'react-bootstrap';
import UserForm from './Form';
import UpdateForm from './Update';

class App extends Component {
  state = {
    characters: [],
    isActive: 1,
    update: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })

    this.setState({
      isActive: 1
    });
  }

  changeStatus = (name, job) => {
    if(this.state.isActive === 1) {
      this.setState({
        isActive: 0
      });
    }
    console.log('changeStatus', name + ':' + job);
    this.setState({update: {name: name, job: job}});
    //console.log('update', this.state.update);
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
    console.log('handleSubmit', character)
    this.setState({
      isActive: 1
    });
  }

  updateUser = character => {
    let prevName = this.state.update.name
    let updateName = character.name
    let prevJob = this.state.update.job
    let updateJob = character.job

    for (var i = 0; i < this.state.characters.length; i++){
      if (this.state.characters[i].name === prevName ||  this.state.characters[i].job === prevJob){
        this.state.characters[i].name = updateName;
        this.state.characters[i].job = updateJob;
      }
    }

    this.setState({
      isActive: 1
    });
  }

  render() {
    const { characters, update } = this.state

    console.log('this.state.update', update);
    
    if (this.state.isActive) {
      return (
        <Container>
          <Row>
            <Col sm={12}>
              <h1>Users</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <div className="container">
                <UserTable characterData={characters} removeCharacter={this.removeCharacter} changeStatus={this.changeStatus}/>
              </div>
              </Col>
              <Col sm={4}><UserForm handleSubmit={this.handleSubmit} /></Col>
          </Row>

        </Container>
      )
    } else {
      return (
        <Container>
          <Row>
            <Col sm={12}>
              <h1>Users</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <div className="container">
                <UserTable characterData={characters} removeCharacter={this.removeCharacter} changeStatus={this.changeStatus}/>
              </div>
              </Col>
              <Col sm={4}><UpdateForm updateUser={this.updateUser} updatedData={update}/></Col>
          </Row>
        </Container>
      )
    }
  }
}

export default App;
