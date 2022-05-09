import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import About from './Pages/About.js';
import Dashboard from './Pages/Dashboard.js';
import Feed from './Pages/Feed.js';
import Profile from './Pages/Profile.js';
import Login from './Pages/Login.js';
import Landing from './Pages/Landing.js';

function App() {
//state drilling required instead of using redux
  const [loggedIn, updateLoggedIn] = useState(false);

  return (
    <Router className="AppOne">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path='/login' render={() => <Login updateLoggedInStatus={() => updateLoggedIn(true)}/>} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
