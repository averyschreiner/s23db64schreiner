var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

router.get('/', function (req, res) {
  res.render('index', { title: 'Dessert App', user : req.user });
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'Dessert App Registration'});
});
router.post('/register', function(req, res) {
  Account.findOne({ username : req.body.username })
  .then(function (user){
    if(user != null ){
      console.log("exists " + req.body.username)
      return res.render('register', { title: 'Registration', message: 'Existing User', account : req.body.username })
    }
    let newAccount = new Account({ username : req.body.username });
    Account.register(newAccount, req.body.password, function(err, user){
      if (err) {
        console.log("db creation issue "+ err)
        return res.render('register', { title: 'Registration', message: 'access error', account : req.body.username })
      }
      if(!user){
        return res.render('register',{ title: 'Registration', message: 'access error', account : req.body.username })
      }
    })
    console.log('Sucess, redirect');
    res.redirect('/');
  })
  .catch(function (err){
    return res.render('register', { title: 'Registration', message: 'Registration error', account : req.body.username })
  })
})
router.get('/login', function(req, res) {
  res.render('login', { title: 'Dessert App Login', user : req.user })
})
router.post('/login', function(req, res) {
  Account.findOne({ username : req.body.username })
  .then(function (user){
    if(user != null ){
      console.log("login successful " + user)
      return res.render('index', { user: user})
    }
    else {
      console.log('user not found')
      return res.render('register', { title: 'No user found. Create an account here'})
    }
  })
  .catch(function (err){
    return res.render('login', { title: 'Login', message: 'Login error', account : req.body.username })
  })
})
module.exports = router;