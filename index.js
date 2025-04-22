// index.js - Basic Express server with Nodemon setup

// 1. Import required modules
const express = require("express");
const path = require("path");

// 2. Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 4. Serve static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// 5. Basic route
app.get("/", (req, res) => {
  res.send("Hello World! Server is running with Nodemon 🚀");
});

// 6. Another example route
app.get("/api/greet", (req, res) => {
  res.json({ message: "Welcome to our API!", timestamp: new Date() });
});

// 7. Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Nodemon is watching for changes...");
});

// 8. Export app for testing purposes (optional)
module.exports = app;
