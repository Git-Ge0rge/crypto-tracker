const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// FOR TOKEN AUTH
const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  watchlist: {type:[String], default:[]},
  // portfolio: [String]
}, {
  timestamps: true
});

// FOR TOKEN AUTH 
userSchema.pre('save', function (next) {
    const user = this;
    
    // edge case -- move on if no password 
    if (!user.isModified('password')) {
      next();
    }
  
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
      // edge case -- err
      if (err) next(err);
  
      user.password = hash;
      next();
    })
  
  })
  
  userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });

module.exports = mongoose.model('User', userSchema);