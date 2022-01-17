const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authentication = require('../middleware/userAuthenticationToken');


router.post('/forgotpassword', UserController.forgotPassword);
router.get('/', UserController.getUsers);
router.post('/create', UserController.createUsers);

router.use(authentication);
router.put('/resetpassword', UserController.resetPassword);
router.put('/update', UserController.updateUser)



module.exports = router;