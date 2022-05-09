const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*small scale as it is assumed collections are not at risk of filling. If
full collections do become a problem, then checks and multiple models of
same schema are needed (THIS CHANGE IS NOT APPLIED IN THIS FILE THOUGH)*/


const userSchema = new Schema ({
  userID: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, index: true},
  linkedInLink: {type: String, required: false},
  starred: [String],                     //havent tested
  following: [String]                   //havent tested
})

const userIdeasSchema = new Schema ({
  userID: {type: String, required: true, index: true},
  idea: {
    Desc: {type: String, require: true},
    Links: {type: String, require: false},
    Tags: {type: String, require: false},
    DateCreated: {type: String, require: true},
    wip: {type: Boolean, require: true}
  }
})

const expone = mongoose.model('users', userSchema);
const exptwo = mongoose.model('userideas', userIdeasSchema);

module.exports = {
  users: expone,
  userideas: exptwo
}
