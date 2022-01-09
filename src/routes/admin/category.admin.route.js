const router =require('express').Router();
const categoryAdminController = require('../../controllers/admin/category.admin.controller');

router.get('/:page', categoryAdminController.getAllCategory);
router.post('/create', categoryAdminController.createCategory);
router.put('/update', categoryAdminController.updateCategory);
router.delete('/delete', categoryAdminController.deleteCategory);

module.exports = router;