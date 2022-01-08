const router =require('express').Router();
const roleAdminController = require('../../controllers/admin/role.admin.controller');

router.get('/:page', roleAdminController.gertAllRole);
router.post('/create', roleAdminController.createRole);

module.exports = router;