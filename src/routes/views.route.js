const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');
const authenticationUser = require('../middleware/userAuthenticationToken.');

router.get('/', (req,res) => {
    res.redirect('/home');
})

router.get('/admin/login', ViewsController.adminLogin);
router.get('/login', ViewsController.login);
router.get('/forgotpassword/:success?', ViewsController.forgotpassword);
router.get('/welcome', ViewsController.welcome);

router.use(authenticationUser);
router.get('/home', ViewsController.home);
router.get('/saved', ViewsController.saved);
router.get('/article/:id', ViewsController.details);
router.get('/category/:nameCategory', ViewsController.category)


module.exports = router;
