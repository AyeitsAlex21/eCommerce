const express = require("express");
const { getItems } = require("../services/itemService.js");
const homePageRouter = express.Router()

homePageRouter.get("/", (req, res, next) => {
    const sellables = await getItems();
    console.log(sellables)
    res.json(sellables);
});

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