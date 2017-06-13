import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header twelve columns">
      <img src="banana.png" alt="banana"/>
      <h1><Link to={'/'}> Banana Board</Link></h1>
      
    </div>
  )
}

export default Header
