require('dotenv').config();
const express = require('express');
const sequelize  = require('./config/db.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static('../public'));

const homePageRouter = require('./routes/homepage.js');
app.use("/", homePageRouter);

const {Cart, Item, User, CartItem, ItemSize} = require("./associations/associations.js");

sequelize.sync({force: true}) // Be cautious with 'force: true' in production
  .then(() => {
    app.listen(PORT, () => {
      console.log("NICE localhost:");
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
