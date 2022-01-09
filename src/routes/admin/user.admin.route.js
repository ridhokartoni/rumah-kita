const router =require('express').Router();
const userAdminController = require('../../controllers/admin/user.admin.controller');

router.get('/:page', userAdminController.gertAllUser);
router.post('/create', userAdminController.createUser);
router.put('/update', userAdminController.updateUser);

module.exports = router;