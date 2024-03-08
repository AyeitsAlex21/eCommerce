const express = require("express");

const buyItemRouter = express.Router()


buyItemRouter.get("/getItem", (req, res, next) => {
  
});

buyItemRouter.put("/address", (req, res, next) => {

    // find userID 
        // put
    // if cant return 404 user not found
});

/*
if (req.session.authorized) {
    // next middleware function is invoked
    res.next();
  else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
};

USE TO AUTHENTICATE USER WHEN TRYING TO BUY ITEM
*/

module.exports = buyItemRouter;