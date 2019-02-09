import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import NavBar from '../components/NavBar'
import EditVisitPage from './EditVisitPage'
import HomePage from './HomePage'
import VisitsPage from './VisitsPage'
import ProfilePage from './ProfilePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/visits/:visitId/edit' component={EditVisitPage}/>
        <Route exact path='/visits' component={VisitsPage}/>
        <Route exact path='/profile' component={ProfilePage}/>
      </div>
    );
  }
}

export default App;
