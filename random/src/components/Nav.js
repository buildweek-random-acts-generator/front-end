import React from "react";
import { Link } from 'react-router-dom';
import "../components/Nav.css";
import {logout} from "../utils/Authentication";

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';




const Nav = props => (
  <header className='toolbar'>
    <nav className='toolbar_navigation'>
      <div className='toolbar-toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar_logo'><h1 >RandomAct</h1></div>
      <div className='spacer'></div>

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
  </header>
)

export default Nav;