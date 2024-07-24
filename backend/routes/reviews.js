const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { addReview, getReviews, getReviewById, updateReview, deleteReview, getUserReviews } = require('../controllers/reviewController');

router.post('/', auth, addReview);
router.get('/', getReviews);
router.get('/user', auth, getUserReviews); // New route for fetching user reviews
router.get('/:id', getReviewById);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;
