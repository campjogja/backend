const express = require ('express');
const controller = require ('../Controllers/user');

const Router = express.Router ();

Router.get ('/', controller.getAllUser); // localhost:8000/user/
Router.post ('/', controller.postUser); // localhost:8000/user/
Router.patch ('/:id', controller.patchUser); // localhost:8000/user/:id

module.exports = Router;
