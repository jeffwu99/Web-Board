const express = require('express');
const router = express.Router();
const tokenfunc = require('../authenticator');
const {userideas} = require('../schemas/Users');


//display a few matched ones followed by random ideas

//also have a save/favourite option for 1 idea or all of users ideas which needs new schema
//feed can have random/match tab and following tab

router.get('/', tokenfunc.validatetoken, async (req, res) => {
  //get 3 random ideas (refresh button to get another 5)
  let array = [];
  let b = await userideas.find().estimatedDocumentCount()
    .then(async (count) => {
      await userideas.findOne().skip(Math.floor(Math.random() * count)).exec()
      .then((result) => array.push({
        idea: result.idea,
        id: result._id,
        user: result.userID
      }));
      await userideas.findOne().skip(Math.floor(Math.random() * count)).exec()
      .then((result) => array.push({
        idea: result.idea,
        id: result._id,
        user: result.userID
      }));
      await userideas.findOne().skip(Math.floor(Math.random() * count)).exec()
      .then((result) => array.push({
        idea: result.idea,
        id: result._id,
        user: result.userID
      }));

      res.json(array);
    })
    .catch((err) => console.log(err));
  })

module.exports = router
