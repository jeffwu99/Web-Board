const express = require('express');
const router = express.Router();
const {userideas} = require('../schemas/Users');
const tags = require('../schemas/tags');
const tokenfunc = require('../authenticator');

//see all posts
router.get('/', tokenfunc.validatecookie, async (req, res) => {
  let ideas = await userideas.find({userID: req.userID}).exec()
    .then((entryobject) => {
      let sendideas = [];
      for (i = 0; i < entryobject.length; i++) {
        sendideas.push({idea: entryobject[i].idea, id: entryobject[i]._id});
      }
      res.json({accesstoken: true, sendideas});
    })
    .catch((err) => console.log(err));
})

//make new post
router.post('/submit', tokenfunc.validatecookie, (req, res) => {
  const newidea = new userideas({
    userID: req.userID,
    idea: {
      Desc: req.body.Desc,
      Links: req.body.Links,
      Tags: req.body.Tags,
      DateCreated: req.body.DateCreated,
      wip: req.body.wip
    }
  });
  newidea.save().then(() => res.json({saved: true, newidea: newidea.idea}));
})

//delete a post
/*if schemas are scaled up for multiple collections then _id is not unique,
therefore use userID and _id compound index */
router.delete('/delete', tokenfunc.validatecookie, async (req, res) => {
  let del = await userideas.findOne({_id: req.body._id}).exec()
    .then((ideaobject) => {
      if (ideaobject.userID == req.userID) {
        let delconfirm = userideas.findOneAndDelete(
          {_id: req.body._id},
          () => {res.send("deleted")}
        )
      }
      else {
        res.sendStatus(403)
      }
    })
    .catch((err) => res.send("idea already deleted"))
})

//ADMIN
//add tags (should have jwt for admin purposes... too lazy to make these login requests)
router.post('/addtag', async (req, res) =>{
  //verify admin making requests
  //if(req.userID ==  "a191d689-d84b-404e-a6b1-79d3c2e13775")
  let tagcheck = await tags.findOne({tag: req.body.tag}).exec()
    .then((rtr) =>{
      if(rtr != null)
        res.send("tag already exists");
      else {
        const newtag = new tags({tag: req.body.tag});
        newtag.save().then(() => res.send("tag created"));
      }
    })


})

module.exports = router;
