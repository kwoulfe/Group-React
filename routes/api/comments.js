const router = require('express').Router();
const userController = require('../../controllers/commentController');

// Matches with "/api/comment"
router
    .route('/')
    .get(userController.findAll)
    .post(userController.create);

module.exports = router;