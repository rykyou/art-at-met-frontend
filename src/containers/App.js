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
    allVisits: [],
    visit: null
  }

  componentDidMount() {
    this.getAllArtwork()
    this.getAllVisits()
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

  getAllVisits = () => {
    fetch('http://localhost:3000/api/v1/visits')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allVisits: data
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
      const formattedTimeOfDay = newVisitData.timeOfDay.charAt(0).toUpperCase() + newVisitData.timeOfDay.slice(1)
      const userId = this.state.currentUser.id
      const data = {
        date: newVisitData.date,
        time_of_day: formattedTimeOfDay,
        user_id: userId
      }

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
        // console.log(newVisit)
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            visits: [...this.state.currentUser.visits, newVisit]
          }
        })
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
      <Route exact path='/visits/:visitId/edit' render={(props) => {
          let visitIdInUrl = props.match.params.visitId
          return (<EditVisitPage
            allArtwork={this.state.allArtwork}
            allVisits={this.state.allVisits}
            visitId={visitIdInUrl}
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
