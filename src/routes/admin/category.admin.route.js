const router =require('express').Router();
const categoryAdminController = require('../../controllers/admin/category.admin.controller');
const authenticationAdmin = require('../../middleware/authenticationToken');

router.get('/:page?', categoryAdminController.getAllCategory);
router.use(authenticationAdmin);
router.post('/create', categoryAdminController.createCategory);
router.put('/update', categoryAdminController.updateCategory);
router.delete('/delete', categoryAdminController.deleteCategory);

module.exports = router;