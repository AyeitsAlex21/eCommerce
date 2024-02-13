const express = require("express");

const homePageRouter = express.Router()

homePageRouter.get("/", (req, res, next) => {
    res.send("HEY")
})

module.exports = homePageRouter;