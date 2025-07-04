const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const dishes = require('./data/dishes');
const orders = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/api/menu', (req, res) => {
  res.json(dishes);
});

app.post('/api/order', (req, res) => {
  const { name, phone, orderDetails } = req.body;
  if (!name || !phone || !orderDetails) return res.status(400).send("Missing fields");
  orders.push({ name, phone, orderDetails });
  res.send("Order received successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});