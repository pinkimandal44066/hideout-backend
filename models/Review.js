// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true },
//     profession: { type: String },
//     image: { type: String }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Review", reviewSchema);



const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  profession: { type: String, default: "" },
  image: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
