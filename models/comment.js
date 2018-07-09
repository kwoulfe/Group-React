const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: String, default: '', required: true },
    text: { type: String, default: '', required: true },
    timeStamp: { type: Date, default: Date.now() },
    isDeleted: { type: Boolean, default: false }
});

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;