const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getUserProfile, updateUserProfile, getUserReviews } = require('../controllers/userController');

router.get('/me', auth, getUserProfile);
router.put('/me', auth, updateUserProfile);
router.get('/reviews', auth, getUserReviews);

module.exports = router;
