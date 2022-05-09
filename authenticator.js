const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const access_secret = process.env.access_secret;

function givetoken (newcheck) {
  return jwt.sign(newcheck.userID, access_secret)
}

function validatetoken (req, res, next) {
  const auth_header = req.headers['authorization'];
  const token = auth_header && auth_header.split(' ')[1];
  if (token == null)
    return res.sendStatus(401);
  jwt.verify(token, access_secret, (err, user) => {
    if (err)
      return res.sendStatus(403);
    req.userID = user;
  })
  next();
}



function validatecookie (req, res, next) {
  //returns req.userID string

  //cookie name is 'accesstoken', so slicing at 12 returns cookie value
  if (req.headers.cookie == null)
    res.json({accesstoken: false}); //will be a redirect once i figure everything else out
  let value = req.headers.cookie.slice(12);   //12 is index of equals in cookie
  jwt.verify(value, access_secret, (err, user) => {
    if (err)
      return res.json({accesstoken: false});
    req.userID = user;
  })
  next();
}


module.exports = {
  givetoken,
  validatetoken,
  validatecookie
}
