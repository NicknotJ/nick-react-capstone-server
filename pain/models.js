'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PainSchema = mongoose.Schema({
  username: {type: String, required: true},
  date: {type: Date, required: true, default: Date.now()},
  location: {type: String, required: true}
  /*pain: level of pain*/
});

PainSchema.methods.serialize = function() {
  return {
    // username: this.username || '',
    // firstName: this.firstName || '',
    // lastName: this.lastName || ''
  };
};

const Pain = mongoose.model('Pain', PainSchema);

module.exports = {Pain};
