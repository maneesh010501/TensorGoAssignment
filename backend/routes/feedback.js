const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/submit', feedbackController.submitFeedback);
router.get('/category/:category', feedbackController.getFeedbackByCategory);

module.exports = router;

