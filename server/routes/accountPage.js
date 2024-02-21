const express = require('express');
const passport = require('passport');
const pool = require('../config/db.js');
const bcrypt = require("bcrypt");

const { User } = require("../app.js")

const {createUser, findUserByEmail} = require("../services/userService.js")
const accountRouter = express.Router();

accountRouter.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

accountRouter.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/profile', // Adjust as necessary
        failureRedirect: '/login',
        failureFlash: true // Optional: Requires flash middleware
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

        const salt = await bcrypt.genSalt(10);

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