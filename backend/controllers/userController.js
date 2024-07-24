const mongoose = require('mongoose');
const User = require('../models/User');
const Review = require('../models/Review');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateUserProfile = async (req, res) => {
  const { username, email } = req.body;
  try {
    let user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.username = username;
    user.email = email;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
