const router = require('express').Router();
const UserRouter = require('./user.route');
const AuthRouter = require('./auth.route');

router.use('/user', UserRouter);
router.use('/auth', AuthRouter);

module.exports = router;