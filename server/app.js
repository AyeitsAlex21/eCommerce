require('dotenv').config();
const express = require('express');
const { sequelize } = require('./config/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Define routes here
app.get('/', (req, res) => {
  res.send('Hello from Express and Sequelize with PostgreSQL!');
});

sequelize.sync({ force: true }) // Be cautious with 'force: true' in production
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
