const express = require("express");
const { getItem } = require("../services/itemService.js");
const buyItemRouter = express.Router()


buyItemRouter.get("/getItem/:itemID", async (req, res, next) => {

  const fetchItem = await getItem(req.params.itemID);
  console.log(fetchItem)

  res.json(fetchItem);
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