// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path");

// const app = express();

// // CORS
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));

// app.use(express.json());

// // static folder for images
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // routes
// const reviewRoutes = require("./routes/reviewRoutes");
// app.use("/api/reviews", reviewRoutes);

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/reviewsDB")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB error:", err));

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// static images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
const reviewRoutes = require("./routes/reviewRoutes");
app.use("/api/reviews", reviewRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
