import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import LoginButton from './Components/LoginButton.js';
import LogoutButton from './Components/LogoutButton.js';

function Nav(props) {
//conditional rendering depending on what page is being viewed
  if (props.styleFor === "landingPage") {
    return (
      <nav>
        <ul className="super">
          {/*item left*/}
          <Link to="/" className={props.styleFor}>
            <li>logo</li>
          </Link>
          {/*item middle*/}
          <li>
            <ul className='minor'>
              <Link to="/" className={props.styleFor}>
                <li>Landing</li>
              </Link>
              <Link to="/Feed" className={props.styleFor}>
                <li>Feed</li>
              </Link>
              <Link to="/Dashboard" className={props.styleFor}>
                <li>Dashboard</li>
              </Link>
              <Link to="/Profile" className={props.styleFor}>
                <li>Profile</li>
              </Link>
              <Link to="/About" className={props.styleFor}>
                <li>About</li>
              </Link>
            </ul>
          </li>
          {/*item right*/}
          <li>
            <Link to="/Login" style={{textDecoration: 'none'}}>
              <LoginButton/>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  else {
    return (
      <nav>
        <ul className="super">
          {/*item left*/}
          <Link to="/" className={props.styleFor}>
            <li>logo</li>
          </Link>
          {/*item middle*/}
          <li>
            <ul className='minor'>
              <Link to="/" className={props.styleFor}>
                <li>Landing</li>
              </Link>
              <Link to="/Feed" className={props.styleFor}>
                <li>Feed</li>
              </Link>
              <Link to="/Dashboard" className={props.styleFor}>
                <li>Dashboard</li>
              </Link>
              <Link to="/Profile" className={props.styleFor}>
                <li>Profile</li>
              </Link>
              <Link to="/About" className={props.styleFor}>
                <li>About</li>
              </Link>
            </ul>
          </li>
          {/*item right*/}
          <li>
            <LogoutButton/>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
