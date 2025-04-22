const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./controllers/dbDriver");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// API routes
const userRoutes = require("./routes/userRoute");

app.use("/api/user", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
