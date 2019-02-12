import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../met-icon.png'

const NavBar = (props) => {
  return(
    <div className="ui red inverted massive menu">
      <Link to='/' className="item">
        <img src={logo} alt="MET logo"/>
      </Link>
      <Link to="/" className="item">Home</Link>
      <Link to="/profile" className="item">Profile</Link>
      <Link to="/visits" className="item">Past Visits</Link>

      <div class="right menu">

          <Link to="/profile" className="item">Log Out</Link>
      
      </div>
   </div>
  )
}

export default NavBar
