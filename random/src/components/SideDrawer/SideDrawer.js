import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../../utils/Authentication";

import './SideDrawer.css';

const SideDrawer = props => {
  // let drawerClasses = ['']

  return (
    <nav className='side-drawer'>
      <div className='toolbar-navigation-items'>
        <Link to="/welcome">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/ideas">Ideas</Link>
        <Link to="/contacts"> Contacts </Link>
        <Link to="/randomizer">Randomizer</Link>
        <a onClick={logout}>Sign Out</a>
      </div>
    </nav>
  );
}
export default SideDrawer;