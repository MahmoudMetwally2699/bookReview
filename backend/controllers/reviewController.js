const mongoose = require('mongoose');
const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const { title, author, reviewText, rating, image } = req.body;
    try {
        const newReview = new Review({
            title,
            author,
            reviewText,
            rating,
            image,
            user: req.user.id,
        });
        const review = await newReview.save();
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getReviews = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    try {
        const query = {
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ]
        };

        const reviews = await Review.find(query)
            .populate('user', ['username'])
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Review.countDocuments(query);
        res.json({
            reviews,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ msg: 'Review not found' });
        }
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateReview = async (req, res) => {
    const { title, author, reviewText, rating, image } = req.body;
    try {
        let review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ msg: 'Review not found' });
        }
        if (review.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        review = await Review.findByIdAndUpdate(
            req.params.id,
            { $set: { title, author, reviewText, rating, image } },
            { new: true }
        );
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteReview = async (req, res) => {
    try {
        let review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ msg: 'Review not found' });
        if (review.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        await Review.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Review removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUserReviews = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    try {
        const query = {
            user: new mongoose.Types.ObjectId(req.user.id),
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ]
        };

        const reviews = await Review.find(query)
            .populate('user', ['username'])
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Review.countDocuments(query);
        res.json({
            reviews,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
