const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  addReview,
  getReviews,
  deleteReview,
  updateReview
} = require("../controllers/reviewController");

router.post("/", upload.single("image"), addReview);
router.get("/", getReviews);
router.delete("/:id", deleteReview);
router.put("/:id", upload.single("image"), updateReview);

module.exports = router;
