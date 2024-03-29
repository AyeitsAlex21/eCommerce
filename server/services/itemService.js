
const { Item } = require("../associations/associations.js");
const { Op } = require("sequelize");


async function getItems( pageNumber = 0) {
    const startItem = (pageNumber * 10) + 1;

    try {
        const fetchedItems = await Item.findAll(
            /*
            {
                where: { 
                    itemID: {
                        [Op.between] : [ startItem, startItem + 9]
                    } 
                }
            }
            */
        );
        console.log(fetchedItems);
        return fetchedItems;
    }
    catch (error) {
        throw error;
    }
};

async function getItem(itemID) {
    try {
        const fetchItem = await Item.findOne(
            {
                where: {
                    itemID: itemID
                }
            }
        )

        console.log(fetchItem);

        return fetchItem;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { getItems, getItem };