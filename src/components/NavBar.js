import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div className="">
      <h1>NavBar!</h1>
      <Link to='/' className="item">Icon</Link>
      <Link to="/" className="item">Home</Link>
      <Link to="/profile" className="item">Profile</Link>
      <Link to="/visits" className="item">Past Visits</Link>
   </div>
  )
}

export default NavBar
