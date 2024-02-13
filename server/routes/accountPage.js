const express = require('express');

const accountRouter = express.Router();

accountRouter.get("/login", (req, res, next) => {

    // check if email and hased password in user table OAUTH
        // 
    // ERROR send 401
});

accountRouter.post("/createAccount", (req, res, next) => {
    // user password has to be 8 chars

    // check if email exists return error
    
    // check if address invalid return error
})