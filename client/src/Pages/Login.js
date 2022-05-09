import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LoginForm from '../Components/LoginForm.js';


export default function Login(props) {

  const [signUpNeeded, toggleSignUp] = useState(false);
  
  const changeCheck = (event) => {
    toggleSignUp(event.target.checked);
  };

  const checkboxStyle ={
    marginLeft:`${window.innerWidth/2-100}px`,
    paddingTop: '50px',
    color: 'coral'
  }

  const formatStyle = {
    backgroundColor: '#221C35',
    height: `${window.innerHeight}px`
  }

  if (signUpNeeded) {
    return(
      <div style={formatStyle}>
        <div style={checkboxStyle}>
          <FormControlLabel
            control={<Checkbox checked={signUpNeeded} onChange={changeCheck}/>}
            label="I'm New Here"
          />
        </div>
        <LoginForm giveInputs="signUpInputs" updateLoggedInStatus={() => props.updateLoggedInStatus()} />
      </div>
        )
  }

  else {
    return (
      <div style={formatStyle}>
        <div style={checkboxStyle}>
          <FormControlLabel
            control={<Checkbox checked={signUpNeeded} onChange={changeCheck}/>}
            label="I'm New Here"
          />
        </div>
        <LoginForm giveInputs="loginInputs" updateLoggedInStatus={() => props.updateLoggedInStatus()}/>
      </div>
    )
  }
}
