const mongoose = require('mongoose');

// add database URL to ENV file
mongoose.connect('mongodb+srv://george:george123@georgedb.ti1so.mongodb.net/?retryWrites=true&w=majority', {
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