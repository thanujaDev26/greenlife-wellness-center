require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);


app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));


app.use((err, req, res, next) => {
  console.error('Unhandled error', err);
  res.status(500).json({ message: 'Internal server error' });
});


async function syncDb() {
  try {
    await sequelize.authenticate();
    console.log('DB connection OK');
    await sequelize.sync();
    console.log('DB synced');
  } catch (err) {
    console.error('Unable to connect to DB:', err);
    process.exit(1);
  }
}

syncDb();

module.exports = app;
