const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authentication = require('../middleware/authenticationToken');

// router.use(authentication);
router.get('/', UserController.getUsers);
router.delete('/delete', UserController.deleteUsers);
router.post('/create', UserController.createUsers);
router.post('/forgotpassword', UserController.forgotPassword);



module.exports = router;