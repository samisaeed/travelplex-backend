const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://localhost/travelplex', {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => console.log('Could not connect to MongoDB...', error));
}
module.exports = { connect };
