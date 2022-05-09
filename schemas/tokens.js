const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema ({
  token: {type: String, required: true}
})

const tokens =  mongoose.model('tokens', tokenSchema);
module.exports = tokens
