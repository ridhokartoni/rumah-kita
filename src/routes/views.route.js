const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');

router.get('/', ViewsController.home);
router.get('/welcome', ViewsController.welcome);
router.get('/forgotpassword/:success?', ViewsController.forgotpassword);
router.get('/login', ViewsController.login);

module.exports = router;
