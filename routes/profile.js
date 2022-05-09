const express = require('express');
const router = express.Router();
const tokenfunc = require('../authenticator');
const {users} = require('../schemas/Users');
const bcrypt = require('bcryptjs');

//get profile information
router.get('/', tokenfunc.validatetoken, async (req, res) => {
  let userinfo = await users.findOne({userID: req.userID}).exec()
    .then((userinfo) => res.json(userinfo))
    .catch((err) => console.log(err))
})

//change profile information
router.patch('/change', tokenfunc.validatetoken, async (req, res) => {
  let changer = await users.findOne({userID: req.userID}).exec()
    .then(async (person) =>{
      let newname = person.userName;
      let newlink = person.linkedInLink;
      let newpass = person.password;
      if (req.body.userName !== undefined)
        newname = req.body.userName;
      if (req.body.linkedInLink !== undefined)
        newlink = req.body.linkedInLink;
      if (req.body.password !== undefined) {
        let salt = bcrypt.genSaltSync(10);
        newpass = bcrypt.hashSync(req.body.password, salt);
      }
      const update = await users.findOneAndUpdate(
        {userID: req.userID},
        {userName: newname, linkedInLink: newlink, password: newpass},
        {new: true}
      )
        .then((update) => res.send(update))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  })

module.exports = router
