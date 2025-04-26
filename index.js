const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./Routes/authRoutes");
const courseRoutes = require("./Routes/courseRoutes"); // No changes here

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
// app.use(cors());
// const cors = require('cors');

app.use(
  cors({
    origin: ["https://academicplanner.netlify.app"], // your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // <-- ADD PATCH HERE
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/courses", courseRoutes); // Correct route setup
app.use("/api", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
