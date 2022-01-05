const router =require('express').Router();
const articleAdminController = require('../../controllers/admin/article.admin.controller');

router.get('/:page', articleAdminController.gertAllArticle);
router.post('/create', articleAdminController.createArticle);

module.exports = router;