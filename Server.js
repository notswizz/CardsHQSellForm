const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://notswizz:Jakal207@cluster0.jeaux62.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Define routes
app.post('/submit-form', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("yourDatabaseName").collection("yourCollectionName");
    await collection.insertOne(req.body);
    res.status(200).send('Data saved to MongoDB');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data');
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
