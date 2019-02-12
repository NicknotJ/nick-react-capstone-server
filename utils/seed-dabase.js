const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');
const {User} = require('../users/models');
const {Pain} = require('../pain/models');

const { pains } = require('../db/data');

mongoose.connect(DATABASE_URL, {useNewUrlParser: true })
    .then(() => mongoose.connection.db.dropDatabase())
    // .then(() => User.insertMany(users))
    .then(() => Pain.insertMany(pains))
    .then(() => {
        console.info('Seeded the database!')
    })
    .then(() => mongoose.disconnect())
    .catch(err => {
        console.error(err);
    });