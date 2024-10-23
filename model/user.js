const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    title: String,
    job: String,
  },
  { timestamps: true }
);

//model
const User = mongoose.model('curd-user', userSchema);

module.exports = User;
