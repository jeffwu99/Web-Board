import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav.js';
import ScrollToShow from '../Components/ScrollToShow.js';
import flowercircle from '../landingpagephotoone.JPG';

function Landing() {
  return (
    <div id="wrapperDiv">
      <div className="sectionOne">
        <Nav styleFor="landingPage"/>
        <p className="pitches" id="pitchOne">
          Personal projects are great for resumes, but they can be better.
          //"ProjectMatch"// is a hub for sharing ideas, seeing what others are brainstorming,
          and connecting the dots to start a collab.
        </p>
      </div>
      <div className="sectionTwo">
          <img src={flowercircle} alt="logomaybe"/>
          <p id="pitchTwo">
          Jot down and develop any product ideas that you want to create or want to see.
           //"ProjectMatch"// will keep a record for that one day you get motivated to
           be productive
           </p>
      </div>
      <div className="sectionThree">
        <ScrollToShow/>
      </div>
      <div className="sectionFour">
        <ul id="formatPitchFour">
          <li className="lists" id="listLeft">
            More heads raises the potential! Scale up your idea to pack in more features,
            appeal to a wider audience, or just beef up that resume.
          </li>
          <li className="lists" id="listMid">
            Maybe you’re stuck and in need of inspiration for a new project.
            Discover something new with what other are posting on //*ProjectMatch*//.
          </li>
          <li className="lists" id="listRight">
            //flip this card to display this (lemon will b button):
            You can also anonymously spam your thoughts over the internet to see how others
            will react to them. Definitely better than annoying your friends over your
            “Yo lets start a business I got this idea"
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;
