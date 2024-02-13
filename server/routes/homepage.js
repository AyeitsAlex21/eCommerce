const express = require("express");

const homePageRouter = express.Router()

homePageRouter.get("/", (req, res, next) => {
    res.json()
})

homePageRouter.get("/:pageNumber", (req, res, next) => {
    const pageNum = req.params.pageNumber;
    const low = pageNum * 10;
    const high = low + 11;

    /*
    
    SELECT * 
    FROM Items
    WHERE ItemID BETWEEN ${low} AND ${high}

    */
});

module.exports = homePageRouter;