const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authentication = require('../middleware/userAuthenticationToken');


router.post('/forgotpassword', UserController.forgotPassword);
router.get('/', UserController.getUsers);

router.use(authentication);
router.post('/create', UserController.createUsers);
router.put('/resetpassword', UserController.resetPassword);



module.exports = router;