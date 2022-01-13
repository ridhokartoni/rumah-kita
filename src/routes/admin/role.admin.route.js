const router =require('express').Router();
const roleAdminController = require('../../controllers/admin/role.admin.controller');
const authenticationAdmin = require('../../middleware/authenticationToken');

router.get('/:page', roleAdminController.getAllRole);
router.use(authenticationAdmin);
router.post('/create', roleAdminController.createRole);
router.put('/update', roleAdminController.updateRole);
router.delete('/delete', roleAdminController.deleteRole);

module.exports = router;