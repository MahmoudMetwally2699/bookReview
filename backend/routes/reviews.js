const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {
    addReview,
    getReviews,
    getReviewById,
    updateReview,
    deleteReview,
    getUserReviews
} = require('../controllers/reviewController');

// Define routes and link them to controller functions
router.post('/', auth, addReview);
router.get('/', getReviews);
router.get('/:id', getReviewById);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);
router.get('/user/me', auth, getUserReviews);

module.exports = router;
