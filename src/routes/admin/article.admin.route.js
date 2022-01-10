const router = require('express').Router();
const articleAdminController = require('../../controllers/admin/article.admin.controller');

router.get('/:page?', articleAdminController.getAllArticle);
router.post('/create', articleAdminController.createArticle);
router.put('/update', articleAdminController.updateArticle);
router.delete('/delete', articleAdminController.deleteArticle);

module.exports = router;