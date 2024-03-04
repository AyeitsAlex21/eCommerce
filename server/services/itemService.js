
const { Item } = require("./associations/associations.js");
const { Op } = require("sequelize");

async function getItems( pageNumber = 0) {
    const startItem = (pageNumber * 10) + 1;

    try {
        const fetchedItems = await Item.findAll(
            {
                where: { 
                    itemID: {
                        [Op.between] : [ startItem, startItem + 9]
                    } 
                }
            }
        );

        return fetchedItems;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { getItems };