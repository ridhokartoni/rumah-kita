const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');
const authenticationUser = require('../middleware/viewsAuthenticationToken.');


router.get('/admin/login', ViewsController.adminLogin);
router.get('/login', ViewsController.login);
router.get('/register', ViewsController.registration);
router.get('/register/termsandcondition', ViewsController.terms);
router.get('/register/termsandcondition/success', ViewsController.registersuccess);   
router.get('/forgotpassword/:success?', ViewsController.forgotpassword);
router.get('/welcome', ViewsController.welcome);
router.get('/resetpassword/success', ViewsController.resetpasswordSuccess);
router.get('/resetpassword/:token', ViewsController.resetpassword);

router.use(authenticationUser);
router.get('/', ViewsController.default);
router.get('/home', ViewsController.home);
router.get('/saved', ViewsController.saved);
router.get('/article/:id', ViewsController.details);
router.get('/category/:nameCategory', ViewsController.category);
router.get('/see-others', ViewsController.others);
router.get('/search', ViewsController.search);
router.get('/profile', ViewsController.profile);


module.exports = router;
