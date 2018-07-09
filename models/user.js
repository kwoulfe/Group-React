const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, default: '', required: true },
  email: { type: String, default: '', required: true },
  password: { type: String, default: '', required: true },
  projectName: { type: String, default: '', required: true },
  githubLink: { type: String, default: '', required: true },
  synopsis: { type: String, default: '', required: true },
  image1: { type: String, default: '', required: true },
  image2: { type: String, default: '', required: true },
  image3: { type: String, default: '', required: true },
  donationGoal: { type: [Number], default: '', required: true },
  reasonForDonation: { type: String, default: '', required: true },
  donationUsedFor: { type: String, default: '', required: true },
  donationCurrent: { type: [Number], default: '', required: true },
  date: { type: Date, default: Date.now() }
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
