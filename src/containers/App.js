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
    currentUser: {},
    visit: null
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

  handleCreateVisit = (newVisitData) => {
      // {date: Mon Feb 11 2019 18:34:54 GMT-0500 (Eastern Standard Time),
      //  timeOfDay: "afternoon"}
      const copyOfUser = this.state.currentUser
      const data = {
        date: newVisitData.date,
        time_of_day: newVisitData.timeOfDay,
        user: copyOfUser
      }
      console.log(data)


    fetch('http://localhost:3000/api/v1/visits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(newVisit => {
        console.log(newVisit)
        // this.setState({
        //   allPokemon: [...this.state.allPokemon, newPokemon]
        // })
      })
  }



  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={() => { return (<HomePage
            currentUser={this.state.currentUser}
            createVisit={this.handleCreateVisit}
            />)
          }}
        />
        <Route exact path='/visits/:visitId/edit' component={() => { return (<EditVisitPage
            allArtwork={this.state.allArtwork}
            usersArtwork={this.state.usersArtwork}
            />)
          }}
        />
        <Route exact path='/visits' component={() => { return (<VisitsPage
            currentUser={this.state.currentUser}
            />)
          }}
        />
        <Route exact path='/profile' component={ProfilePage}/>
      </div>
    );
  }
}


export default App;
