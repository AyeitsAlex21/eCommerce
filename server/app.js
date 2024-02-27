require('dotenv').config();
const express = require('express');
const sequelize  = require('./config/db.js');
const session = require('express-session');
const passport = require("passport");
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


passport.use(new LocalStrategy(
  {
      usernameField: 'email',
  },
  async (email, password, done) => {
      try {
          const user = await db.users.findByEmail(email); // Adjust based on how you fetch users
          if (!user) {
              return done(null, false, { message: 'No user with that email' });
          }

          // Compare password with the hashed password
          const match = await bcrypt.compare(password, user.password);
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


app.use(express.json());
app.use(express.static('../public'));

const homePageRouter = require('./routes/homepage.js');
app.use("/", homePageRouter);

const accountRouter = require('./routes/accountPage.js');
app.use("/", accountRouter);

const {Cart, Item, User, CartItem, ItemSize, Order} = require("./associations/associations.js");

app.get("/", (req, res, next) => {
  res.render("index.html")
});

sequelize.sync({force: true}) // Be cautious with 'force: true' in production
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
