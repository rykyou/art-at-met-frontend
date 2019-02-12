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
    currentUser: {}
    // allVisits: []
  }

  componentDidMount() {
    this.getAllArtwork()
    // this.getAllVisits()
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

  // getAllVisits = () => {
  //   fetch('http://localhost:3000/api/v1/visits')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       allVisits: data
  //     })
  //   })
  // }

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
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            visits: [...this.state.currentUser.visits, newVisit]
          }
        })
      })
  }

  handleDeleteVisit = (visitId) => {
    fetch(`http://localhost:3000/api/v1/visits/${visitId}`, {
        method: 'DELETE',
    })

    let copyOfVisits = [...this.state.currentUser.visits]
    let index = copyOfVisits.findIndex(visit => visit.id === visitId)
    copyOfVisits.splice(index, 1)

    this.setState({
      currentUser: {
        ...this.state.currentUser,
        visits: copyOfVisits
      }
    })
  }

  handleAddArtwork = (artworkObj, visitId) => {
    console.log('attempting to ADD', artworkObj, "to user's list")
    const data = {
      artwork_id: artworkObj.id,
      visit_id: visitId
    }

    fetch(`http://localhost:3000/api/v1/visits/${visitId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(editedVisit => {
        let copyOfUser = JSON.parse(JSON.stringify(this.state.currentUser))
        let index = copyOfUser.visits.findIndex(visit => visit.id === editedVisit.id)
        copyOfUser.visits[index] = editedVisit

        this.setState({
          currentUser: copyOfUser
        })
      })
  }

  handleRemoveArtwork = (artworkObj, visitId) => {
    console.log('attempting to REMOVE', artworkObj, "from user's list")

    fetch(`http://localhost:3000/api/v1/visits/${visitId}/artworks/${artworkObj.id}`, {
        method: 'DELETE'
    })

    let copyOfUser = JSON.parse(JSON.stringify(this.state.currentUser))
    let visitIndex = copyOfUser.visits.findIndex(visit => visit.id === visitId)
    let copyOfArtworks = JSON.parse(JSON.stringify(copyOfUser.visits[visitIndex].artworks))

    let artworkToDeleteIndex = copyOfArtworks.findIndex(artwork => artwork.id === artworkObj.id)
    copyOfArtworks.splice(artworkToDeleteIndex, 1)

    copyOfUser.visits[visitIndex] = copyOfArtworks
    debugger
    this.setState({
      currentUser: copyOfUser
    })

  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => { return (<HomePage
            currentUser={this.state.currentUser}
            createVisit={this.handleCreateVisit}
            handleDeleteVisit={this.handleDeleteVisit}
            setCurrentVisit={this.setCurrentVisit}
            />)
          }}
        />

        <Route exact path='/visits/:visitId/edit' render={(props) => {
            const visitIdInUrl = parseInt(props.match.params.visitId)
            let visit = this.state.currentUser.visits.find(visitObj => visitObj.id === visitIdInUrl )

            // console.log('visit:', visit)
            return (<EditVisitPage
              allArtwork={this.state.allArtwork}
              allVisits={this.state.allVisits}
              currentVisit={visit}
              currentVisitArtworks={this.state.currentVisitArtworks}
              handleAddArtwork={this.handleAddArtwork}
              handleRemoveArtwork={this.handleRemoveArtwork}
              />)
            }}
          />

        <Route exact path='/visits' render={() => { return (<VisitsPage
            currentUser={this.state.currentUser}
            />)
          }}
        />

        <Route exact path='/profile' render={() => { return (<ProfilePage
            currentUser={this.state.currentUser}
            />)
          }}
        />
      </div>
    );
  }
}


export default App;
