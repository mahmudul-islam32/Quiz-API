const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000; // You can use any port you prefer

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Define a route to get all questions
app.get("/questions", (req, res) => {
  fs.readFile('questions.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the JSON file:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const extractedQuestions = jsonData.questions;
      res.json(extractedQuestions);
    } catch (parseError) {
      console.error('Error parsing JSON data:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
