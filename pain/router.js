'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const {Pain} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();
const {jwtAuth, localAuth} = require('../auth/router')
//localAuth is primarily for password checking. jwtAuth is probably
//the middleware we want for route security

router.get('/', jwtAuth, (req, res, next) => {
    const searchTerm = req.user.username;
    Pain.find({username: searchTerm})
    .then(pain => {
    return res.json(pain)
    })
    .catch(err => {
      next(err);
    })
})

router.post('/', jwtAuth, jsonParser, (req, res, next) => {
    const requiredFields = ['location', 'painLevel'];
    const missingField = requiredFields.find(field => !(field in req.body));
    if (missingField) {
      return res.status(422).json({
        code: 422,
        reason: 'ValidationError',
        message: 'Missing field',
        location: missingField
      });
    }
    const { username } = req.user;
    const {location, painLevel} = req.body;
    const painInfo = {location, username, painLevel};
    return Pain.create({username, location, painLevel})
      .then(pain => {
        return res.status(201).json(pain.serialize());
      }
        )
        .catch(err => {
            next(err);
        })
    });




  

module.exports = {router};