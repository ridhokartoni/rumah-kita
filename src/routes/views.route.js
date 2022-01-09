const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');

router.get('/', ViewsController.home);
router.get('/mentalissues', ViewsController.mentalissues);
router.get('/lifesytle', ViewsController.lifestyle);
router.get('/case', ViewsController.case);
router.get('/saved', ViewsController.saved);
router.get('/welcome', ViewsController.welcome);
router.get('/forgotpassword/:success?', ViewsController.forgotpassword);
router.get('/login', ViewsController.login);

module.exports = router;
