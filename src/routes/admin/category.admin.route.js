const router =require('express').Router();
const categoryAdminController = require('../../controllers/admin/category.admin.controller');

router.get('/:page', categoryAdminController.gertAllCategory);
router.post('/create', categoryAdminController.createCategory);

module.exports = router;