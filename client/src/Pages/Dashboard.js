import React, { useState, useEffect } from 'react';
import Nav from '../Nav.js';
import Display from '../Components/Display.js';

function Dashboard() {

  const [loggedIn, updateLoggedIn] = useState(true);
  const [content, updateContent] = useState([
    {idea: {Desc: 'pls work', Links:'pls work 2'}}]);


  useEffect( async () => {
    const ideas = await fetch('http://localhost:5000/dashboard', {
      credentials: 'include',
      method: 'GET',
    })
    .then( async res => {
      let response = await res.json();
      if (!response.accesstoken) {
        updateLoggedIn(false);
        console.log('login changed to false');
      }
      else {
        console.log(response.sendideas[2].idea.Desc);
        updateContent(response.sendideas);
      }
    })
  }, [])



  const backgroundStyling = {
    backgroundColor: 'grey',
  }




  return (
    <div style={backgroundStyling}>
      <Nav styleFor="navBar"/>
      <h1> Dashboard</h1>
      <Display content={content} />
    </div>
  );
}

export default Dashboard;
