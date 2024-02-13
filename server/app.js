require('dotenv').config();
const express = require('express');
const sequelize  = require('./config/db.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static('../client/public'));

const homePageRouter = require('./routes/homepage.js');
app.use("/", homePageRouter);

const {Cart, Item, User, CartItem, ItemSize, Order} = require("./associations/associations.js");

sequelize.sync({force: true}) // Be cautious with 'force: true' in production
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
