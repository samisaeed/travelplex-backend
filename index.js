const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const db = require('./db');
const categoriesRoutes = require('./routes/categories-route');


const app = express();

db.connect();

// Middleware
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

const requestLimit = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again after sometime'
});

app.use('/api', requestLimit);
app.use('/api/v1/categories', categoriesRoutes);
app.get('', (req, res) => {
  res.send('Hello World sdfsadfsd');
});

app.listen(3000, () => {
  console.log(`Server started on: http://localhost:3000`);
});
