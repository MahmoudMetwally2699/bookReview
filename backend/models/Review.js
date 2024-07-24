const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String }, // Add this line to include the image field
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Review', ReviewSchema);
