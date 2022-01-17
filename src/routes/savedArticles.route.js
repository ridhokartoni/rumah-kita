const router = require('express').Router();
const SavedArticleController = require('../controllers/savedArticles.controller');
const userAuthentication = require('../middleware/userAuthenticationToken');

router.use(userAuthentication)
router.get('/:userId', SavedArticleController.findAll);
router.delete('/delete', SavedArticleController.delete);
router.post('/create', SavedArticleController.create);

module.exports = router;