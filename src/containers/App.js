import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import NavBar from '../components/NavBar'
import EditVisitPage from './EditVisitPage'
import HomePage from './HomePage'
import VisitsPage from './VisitsPage'
import ProfilePage from './ProfilePage'

class App extends Component {
  state = {
    allArtwork: [],
    usersArtwork: [],
    currentUser: {}
  }

  componentDidMount() {
    this.getAllArtwork()
    this.getCurrentUser()
  }

  getAllArtwork = () => {
    fetch('http://localhost:3000/api/v1/artworks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allArtwork: data
      })
    })
  }

  getCurrentUser = () => {
    fetch(`http://localhost:3000/api/v1/users`)
    .then(res => res.json())
    .then(data => {
      let loggedInUser = data.find(userObj => userObj.id === 1)
      this.setState({
        currentUser: loggedInUser
      })
    })
  }




  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={() => { return (<HomePage
            currentUser={this.state.currentUser}
            />)
          }}
        />
        <Route exact path='/visits/:visitId/edit' component={() => { return (<EditVisitPage
            allArtwork={this.state.allArtwork}
            usersArtwork={this.state.usersArtwork}
            />)
          }}
        />
        <Route exact path='/visits' component={VisitsPage}/>
        <Route exact path='/profile' component={ProfilePage}/>
      </div>
    );
  }
}
// () => { return (<HomePage user={this.state.currentUser}/>)

export default App;
