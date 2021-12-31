const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authentication = require('../middleware/authenticationToken');

// router.use(authentication);
router.get('/', UserController.getUsers);
router.delete('/', UserController.deleteUsers);
router.post('/', UserController.createUsers);



module.exports = router;