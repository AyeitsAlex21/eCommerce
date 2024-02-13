const express = require('express');

const itemPage = express.Router();

itemPage.get("/:id", (req, res, next) => {

    // see if item in table and is active
        // fetch extra images if applicable
    // else send 404

    // -----

    // query ItemSizes table and get all relevant info and send back
});

module.exports = itemPage;