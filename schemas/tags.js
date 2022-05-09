const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tagSchema = new Schema ({
  tag: {type: String, required: true}
})

const exportthis = mongoose.model('tags', tagSchema);
module.exports = exportthis;
