'use strict';

const mongoose = require('mongoose'),
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
  });

module.exports = mongoose.model('Subscriber', subscriberSchema);
