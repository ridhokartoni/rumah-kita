const router = require('express').Router();
const ArticleAdminController = require('../../controllers/admin/article.admin.controller');


router.get('/:page', ArticleAdminController.getAllArticles);
router.post('/create', ArticleAdminController.createArticle);

module.exports = router;