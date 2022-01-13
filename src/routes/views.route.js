const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');
const authenticationUser = require('../middleware/userAuthenticationToken.');

router.get('/admin/login', ViewsController.adminLogin);
router.get('/login', ViewsController.login);
router.get('/forgotpassword/:success?', ViewsController.forgotpassword);
router.get('/welcome', ViewsController.welcome);

router.use(authenticationUser);
router.get('/home', ViewsController.home);
router.get('/mentalissues', ViewsController.mentalissues);
router.get('/lifestyle', ViewsController.lifestyle);
router.get('/case', ViewsController.case);
router.get('/saved', ViewsController.saved);
router.get('/article/:id', ViewsController.details)


module.exports = router;
