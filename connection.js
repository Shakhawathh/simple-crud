const mongoose = require('mongoose');

async function connectionToDB(url) {
  return await mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

module.exports = {
  connectionToDB,
};
