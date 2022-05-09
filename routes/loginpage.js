const express = require('express');
const bcrypt = require('bcryptjs');
const {v4: uuidv4} = require('uuid');
const router = express.Router();
const {users} = require('../schemas/Users');
const tokenfunc = require('../authenticator');

//creating new user at signup
router.post('/create', async (req, res) => {
  //check if email already exists in database
  let newcheck = await users.findOne({email: req.body.Email}).exec()
    .then((newcheck) => {
      if (newcheck != null) {
        res.status(409).json({accesstoken: false, userexists: true}); //change responce to json changing react state (dispalys user exists)
      }
      else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err)
            throw err;
          bcrypt.hash(req.body.Password, salt, (err, hash) => {
            if (err)
              throw err;
            const newUser = new users({
              userID: uuidv4(),
              userName: req.body.Name,
              password: hash,
              email: req.body.Email// add linkedinlink later into project
            });
            newUser.save()
              .then((objectcreated)=> {
                if (objectcreated != null) {
                  res.cookie(
                    'accesstoken', tokenfunc.givetoken(newUser),
                    {maxAge: 15*60*1000, httpOnly: true, sameSite: true});
                  res.json({accesstoken: true})
                }
              }); //should use res.redirect to dashboard
          })
        })
      }
    })
    .catch((err) => console.log(err));
})

//user logging in
router.post('/submit', async (req, res) => {
  newcheck = await users.findOne({email: req.body.Email}).exec()
  .then((newcheck) => {
    if (newcheck == null)
      res.json({accesstoken: false});
    else {
      bcrypt.compare(req.body.Password, newcheck.password, (err, bool) => {
        if (err)
          throw err;
        else if (bool) {
          //give jsonwebtoken
          res.cookie(
            'accesstoken', tokenfunc.givetoken(newcheck),
            {maxAge: 15*60*1000, httpOnly:false, sameSite: true});
          res.json({accesstoken: true});
        }
        else {
          res.json({accesstoken: false})//change responce to json changing react state (dispalys wrong pass)
        }
      })
    }
  })
  .catch((err) => console.log(err))
})

//check to see if user has token
router.get('/check', tokenfunc.validatetoken, (req, res) => {

  res.send(req.userID);
})


router.get('/cookiecheck', tokenfunc.validatecookie, (req, res) => {

  res.json(req.userID);
})
//user logging out
router.delete('/logout', (req, res) => {
  res.clearCookie('accesstoken');
  res.sendStatus(204);
})


//user deleting data (whole account)
//router.delete('/erase', async(req, res) =>{})

module.exports = router
