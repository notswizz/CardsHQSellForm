require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Your React app's URL in production or localhost for development
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.MONGODB_URI; // MongoDB URI from environment variables
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Database and Collection names
const dbName = "Cards HQ Sell Form";
const collectionName = "Sellers";

app.post('/submit-form', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    await collection.insertOne(req.body);
    res.status(200).send('Data saved to MongoDB');
  } catch (error) {
    console.error('Error in /submit-form route:', error);
    res.status(500).send('Error saving data');
  } finally {
    await client.close();
  }
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
