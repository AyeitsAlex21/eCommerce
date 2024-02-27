const express = require('express');
const passport = require('passport');
const pool = require('../config/db.js');
const bcrypt = require("bcrypt");
const passport = require("../app.js");

const { User } = require("./associations/associations.js");

const {createUser, findUserByEmail} = require("../services/userService.js")
const accountRouter = express.Router();

accountRouter.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

accountRouter.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/login',
        failureRedirect: '/login',
        failureFlash: true
    })
);

accountRouter.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    //const id = { id: helper.getNewId(User) };
    try {
        const user = await findUserByEmail(email);

        if (user) {
            console.log("User already exists!");
            return res.redirect("login");
        }

        const salt = await bcrypt.genSalt(3);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            passwordHash: hashedPassword,
        };
        
        //TODO
        // put USER IN user table
        createUser(newUser);

        res.redirect("login");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = accountRouter