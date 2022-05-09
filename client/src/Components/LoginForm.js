import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function LoginForm (props) {

  const [objectColor, changeColor] = useState("255, 127, 80");
  const [userInput, updateInput] = useState({
    Email: "",
    Password: "",
    Name: "",
    LinkedIn: ""
  });

  const textUpdate = (e) => {
    updateInput({
      Email: userInput.Email,
      Password: userInput.Password,
      Name: userInput.Name,
      LinkedIn: userInput.LinkedIn,
      [e.target.name]: e.target.value
    });
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    const obtainToken = await fetch('http://localhost:5000/login/submit', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then( async res => {
      updateInput({
        Email: "",
        Password: "",
        Name: "",
        LinkedIn: ""
      });
      let token = await res.json();
      return token;
    })
    if (obtainToken.accesstoken === true) {
      console.log('logged in');
      props.updateLoggedInStatus();
    }
    else {
      console.log(obtainToken);
    }
  }

  const submitSignup = async (e) => {
    e.preventDefault();
    const obtainToken = await fetch('http://localhost:5000/login/create', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then( async res => {
      updateInput({
        Email: "",
        Password: "",
        Name: "",
        LinkedIn: ""
      });
      let token = await res.json();
      return token;
    });
    if (obtainToken.accesstoken === true) {
      console.log('logged in');
      props.updateLoggedInStatus();
    }
    else {
      console.log(obtainToken);
    }
  }

//CSS INLINE BELOW
  const hovering = (event) => {
    if (event.type === "mouseenter")
      changeColor("80, 208, 255");
    else
      changeColor("255, 127, 80");
  }
  const submitStyling = {
    position: 'relative',
    top: '20px',
    left: '115px',
    marginTop: '10px',
    padding: '8px',
    width: '225px',
    fontSize: '23px',

    borderRadius: '25px',
    background: '#0d0a14',
    boxShadow: `3px 6px 10px rgba(${objectColor}, 0.1)`,
    color: `rgba(${objectColor}, 1)`
  }
  const formStylingLogin = {
    position:'relative',
    left: `${(window.innerWidth/2)-325}px`,
    margin:'100px',
    width: '450px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',

    borderRadius: '25px',
    backgroundColor: '#221C35',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(100, 83, 156, 0.1)'
  }
  const formStylingSignUp = {
    position:'relative',
    left: `${(window.innerWidth/2)-325}px`,
    margin:'100px',
    width: '450px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',

    borderRadius: '25px',
    backgroundColor: '#221C35',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(100, 83, 156, 0.1)'
  }
  const inputStyling = {
    marginTop: '25px',
    marginLeft: '20px',
    padding: '8px',
    fontSize: '18px',
    height: '32px',
    width: '394px',
    resize: 'none',

    borderRadius:'20px',
    backgroundColor: '#221C35',
    boxShadow: 'inset 2px 2px 10px rgba(0, 0, 0, 0.6), inset -2px -2px 10px rgba(255, 255, 255, 0.1)',
    color: 'coral'
  }


//displayed JSX
  if (props.giveInputs === "loginInputs") {
    return(
      <form style={formStylingLogin}>
        <textarea placeholder="Email" rows='1' name='Email'
          style={inputStyling} onChange={textUpdate} value={userInput.Email}
        />
        <textarea placeholder="Password" rows='1' name='Password'
          style={inputStyling} onChange={textUpdate} value={userInput.Password}
        />
        <input
          type='submit' value='Log In'
          style={submitStyling} onClick={submitLogin} onMouseEnter={hovering} onMouseLeave={hovering}
        />
      </form>
    )
  }

  else {
    return (
      <form style={formStylingSignUp}>
        <textarea placeholder="Email" rows='1' name='Email'
          style={inputStyling} onChange={textUpdate} value={userInput.Email}
        />
        <textarea placeholder="Password" rows='1' name='Password'
          style={inputStyling} onChange={textUpdate} value={userInput.Password}
        />
        <textarea placeholder="Name" rows='1' name='Name'
        style={inputStyling} onChange={textUpdate} value={userInput.Name}
        />
        <textarea placeholder="Your LinkedIn Profile Link" rows='1' name='LinkedIn'
          style={inputStyling} onChange={textUpdate} value={userInput.LinkedIn}
        />
        <input
          type='submit' value='Log In'
          style={submitStyling} onClick={submitSignup} onMouseEnter={hovering} onMouseLeave={hovering}
        />
      </form>
    )
  }

}
