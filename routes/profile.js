var express = require('express');
var router = express.Router();
var User = require('../entities/User');
var config = require('../config');
var ensureAuthenticated = require('./helpers').ensureAuthenticated;


/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
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


module.exports = router;
