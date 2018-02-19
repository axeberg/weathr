'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User')

/**
 * Populate database with sample application data
 */

//Add a default user
User.create({
  provider: 'local',
  name: 'Test User',
  email: 'test@test.com',
  password: 'test'
}, function() {
    console.log('finished populating users');
  }
);