const express = require("express");
const {loginUser , signUpUser} = require ("../Controller/userController"); 
const userRoutes = express.Router(); // making the instance of express router

// know we will attach different routes wirth - routes variable - (the instance made above)

// 1- Login Route

userRoutes.post('/login' , loginUser)

// 2- SignUp Route
userRoutes.post('/signup' , signUpUser);

module.exports = userRoutes