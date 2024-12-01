const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodapp', { useNewUrlParser: true, useUnifiedTopology: true });

const MenuItem = mongoose.model('MenuItem', new mongoose.Schema({
  name: String,
  price: Number,
}));

app.post('/api/login', (req, res) => {
  // Add authentication logic
});

app.get('/api/menu', async (req, res) => {
  const items = await MenuItem.find();
  res.json({ items });
});

app.post('/api/menu', async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.sendStatus(201);
});

app.listen(3000, () => console.log('Server running on port 3000'));
