require('dotenv').config();
const express = require('express');
const sequelize  = require('./config/db.js');
const session = require('express-session');
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const store = new session.MemoryStore();

const app = express();
const PORT = process.env.PORT;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: true, 
        maxAge: 1000 * 60 * 60 * 24, 
        secure: true, 
        sameSite: "none" 
    },
    store
  })
);

app.use(passport.initialize());  //initialize passport
app.use(passport.session()); // to enable have to say app.use

const { findUserByEmail, findUserById } = require('./services/userService.js');

passport.use(new LocalStrategy(
  {
      usernameField: 'email',
  },
  async (email, password, done) => {
      try {
          const user = await findUserByEmail(email); // Adjust based on how you fetch users
          if (!user) {
              return done(null, false, { message: 'No user with that email' });
          }

          // Compare password with the hashed password

          const match = await bcrypt.compare(password, user.passwordHash);
          if (match) {
              return done(null, user);
          } else {
              return done(null, false, { message: 'Password incorrect' });
          }
      } catch (error) {
          return done(error);
      }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.userID); // Assuming your user object has an 'id' field
});

passport.deserializeUser(async (userID, done) => {
  try {
    const user = await findUserById(userID); // Use your existing method to find a user by ID
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport

app.use(express.json());
app.use(express.static('../public'));
app.use('/itemImages', express.static('../itemImages'));


const homePageRouter = require('./routes/homepage.js');
app.use("/items", homePageRouter);

const accountRouter = require('./routes/accountPage.js');
app.use("/account", accountRouter);

app.get("/", (req, res, next) => {
  res.render("index.html")
});

const {Cart, Item, User, CartItem, ItemSize, Order} = require("./associations/associations.js");


// TESTING TO GET MVP
// REMOVE WHEN HAVE AN ADD METHOD

const testItems = [
  {
    name: "Royal Blue NIKE Dunks",
    description: "cool shoes",
    price: 99,
    imagePath: "/itemImages/1/1.jfif"
  },
  {
    name: "NIKE Limited edition pants",
    description: "cool pants",
    price: 350,
    imagePath: "/itemImages/2/1.png"
  },
  {
    name: "Special Shirt",
    description: "cool shirt",
    price: 30,
    imagePath: "/itemImages/3/1.jfif"
  }
]

/*
Item.bulkCreate(testItems, { validate: true })
  .then(createdItems => {
    console.log(`${createdItems.length} items have been created.`);
    // Optionally, log each item name
    createdItems.forEach(item => console.log(item.name));
  })
  .catch(err => {
    console.error('Error during bulk creation:', err);
  });
*/

// END

sequelize.sync(
              //{force: true}
              ) // Be cautious with 'force: true' in production
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
