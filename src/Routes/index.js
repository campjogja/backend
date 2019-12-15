const express = require ('express');
const user = require ('./user');
const welcome = require ('./welcome');

const Router = express.Router ();

Router.use ('/user', user); // localhost:8000/user
Router.use ('/welcome', welcome); // localhost:8000/welcome

module.exports = Router;
