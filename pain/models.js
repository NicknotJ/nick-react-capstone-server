'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



const PainSchema = mongoose.Schema({
  username: {type: String, required: true},
  date: {type: Date, required: true, default: new Date()},
  location: {type: String, required: true},
  painLevel: {type: Number, required: true}
});

PainSchema.methods.serialize = function() {
  return {
    // username: this.username || ''
  };
};

const Pain = mongoose.model('Pain', PainSchema);

module.exports = {Pain};
