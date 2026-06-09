const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); //S  end JSON format data from frontend to backend
app.use(express.urlencoded({ extended: true })); //Send URL-encoded data from frontend to backend

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Vendor Portal API is running" });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
