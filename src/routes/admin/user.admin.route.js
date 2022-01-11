const router =require('express').Router();
const userAdminController = require('../../controllers/admin/user.admin.controller');
const authenticationAdmin = require('../../middleware/authenticationToken');

router.get('/:page?', userAdminController.getAllUser);
router.use(authenticationAdmin);
router.post('/create', userAdminController.createUser);
router.put('/update', userAdminController.updateUser);
router.delete('/delete', userAdminController.deleteUser);

module.exports = router;