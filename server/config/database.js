const mongoose = require('mongoose');

// add database URL to ENV file
mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
// not supported anymore // useFindAndModify might be needed for certain errors
//   useCreateIndex: true,
//   useFindAndModify: false 
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});