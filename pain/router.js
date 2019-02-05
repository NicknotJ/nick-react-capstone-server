'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const {Pain} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

//Delete Me
router.get('/', (req, res) => {
    let note = {message: "I, the Pain Router, work!"};
    return res.json(note)
})

router.post('/', jsonParser, (req, res, next) => {
    const requiredFields = ['location', 'username' /*pain level*/];
    const missingField = requiredFields.find(field => !(field in req.body));
    if (missingField) {
      return res.status(422).json({
        code: 422,
        reason: 'ValidationError',
        message: 'Missing field',
        location: missingField
      });
    }
    const {location, username} = req.body;
    const painInfo = {location, username};
    console.log(painInfo);
    return Pain.create({username, location})
      .then(pain => {
        return res.status(201).json(pain.serialize());
      }
        )
        .catch(err => {
            next(err);
        })
    });




  

module.exports = {router};