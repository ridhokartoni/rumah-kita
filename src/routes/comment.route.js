const router = require('express').Router();
const CommentController = require('../controllers/comment.controller');


router.get('/:articleId', CommentController.findAll);
router.post('/create', CommentController.create);

module.exports = router