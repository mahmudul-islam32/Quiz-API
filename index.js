const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000; // You can use any port you prefer

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Load your JSON data from the file
const jsonData = JSON.parse(fs.readFileSync("questions.json", "utf8"));

// Define a route to get all questions
app.get("/questions", (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
