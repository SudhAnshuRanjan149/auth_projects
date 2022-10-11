import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
	<div>
		<Link to="/">Home</Link>
		<Link to="/register">register</Link>
		<Link to="/login">login</Link>
		<Link to="/customers">customers</Link>
	</div>
  )
}

export default Navbar