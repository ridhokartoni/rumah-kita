const router = require('express').Router();
const UserRouter = require('./user.route');
const AuthRouter = require('./auth.route');
const ViewsRouter = require('./views.route');

router.use(ViewsRouter)
router.use('/user', UserRouter);
router.use('/auth', AuthRouter);
router.use((req,res) => {
    res.status(404).send({
        message: `There is no route for ${req.url}`
    })
})
//user akses {host}/auth/
module.exports = router;