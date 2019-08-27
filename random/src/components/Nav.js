import React from "react";
import { Link } from 'react-router-dom';

import "../components/Nav.css";




export default function Nav() {
  return (
    <div className='tab'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

