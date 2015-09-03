var express = require('express');
var router = express.Router();
var User = require('../entities/User');
var config = require('../config');
var request = require('request');
var ensureAuthenticated = require('./helpers').ensureAuthenticated;
// var _ = require('../app/vendor/underscore/underscore-min.js');

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */

 router.param('sitterId', function(req, res, next, sitterId) {
   next()
 })


router.route('/allUsers')
  .get(function(req,res,next){
    console.log("SHOW ME");
    User.findById({}, function(err, users) {
      if(err) {
        res.send(err);
      }
      res.send(users);
    });
  });

router.route('/getCoords/:address')
  .get(function(req,res,next) {
    var address = req.params.address;
    // var regexAddress = address.replace(/\s/ig, ",");
    var apiKey = 'AIzaSyCaZ_fIluCmcGqUR68701_tYgQa5ClmFFI';
    var urlGoogs = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;
    console.log("GOOGLE URL", urlGoogs);
    request.get({url: urlGoogs}, function(err, response, data) {
      res.send(JSON.parse(response.body));
    })
  })


router.route('/me')
  .all(ensureAuthenticated)
  .get(function(req, res) {
    User.findById(req.user, function(err, user) {
      res.send(user);
    });
  })
  .put(function(req, res) {
    console.log('this is the req.body mitch', req.body);
    User.findById(req.user, function(err, user) {
      console.log('user in endpoint', user);
      if (!user) {
        return res.status(400).send({ message: 'User not found' });
      }
      //################
      // HERE!!!!
      //ADD REQ.BODY PROPERTIES FOR ALL THE SO THEY’LL SAVE !!!! -MWH
      // add any new user properties here as well as entities/User.js and routes/profile.js
      // user.newProperty = req.body.newProperty || user.newProperty
      //###############

      user.displayName = req.body.displayName || user.displayName;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      user.dogsName = req.body.dogsName || user.dogsName;
      user.phone = req.body.phone || user.phone;
      user.vetPhone = req.body.vetPhone || user.vetPhone;
      user.sitter = req.body.sitter || user.sitter;
      user.address = req.body.address || user.address;
      user.rate = req.body.rate || user.rate;
      user.picture = req.body.picture || user.picture;
      user.availability = req.body.availability || user.availability;
      user.sitterLocation = req.body.sitterLocation || user.sitterLocation;
      console.log("THIS IS THE SITTER", user);
      user.save(function(err) {
        console.log('I HAVE MESSED UP', err);
        res.status(200).end();
      });
    });
  });

  ////////get only sitters///////////
 router.route('/sitters')
  .get(function (req, res) {
    User.find({}, function (err,users) {
      var sitters = users.filter(function(el) {
        return el.sitter === true;
      });
      res.send(sitters);
    });
  });


  ////////get only owners///////////
 router.route('/owners')
  .get(function (req, res) {
    User.find({}, function (err,users) {
      var owners = users.filter(function(el) {
        return el.owners === true;
      });
      res.send(owners);
    });
  });


  ////////get only sitters///////////
   router.route('/sitters/:sitterId')
    .get(function (req, res) {
      User.findById(req.params.sitterId, function(err, sitter) {
        console.log('sitter in router', sitter);
        res.send(sitter);
      });
    });

module.exports = router;
