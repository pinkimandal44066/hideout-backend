const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      rating: req.body.rating,
      comment: req.body.comment,
      profession: req.body.profession || ""
    };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    const review = await Review.create(data);
    res.status(201).json(review);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Add review failed" });
  }
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
};

exports.updateReview = async (req, res) => {
  const data = req.body;
  if (req.file) {
    data.image = `/uploads/${req.file.filename}`;
  }

  const review = await Review.findByIdAndUpdate(req.params.id, data, { new: true });
  res.json(review);
};
