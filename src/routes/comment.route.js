const router = require('express').Router();
const CommentController = require('../controllers/comment.controller');
const userAuthentication = require('../middleware/userAuthenticationToken');

router.use(userAuthentication);
router.get('/:articleId', CommentController.findAll);
router.post('/create', CommentController.create);

module.exports = router