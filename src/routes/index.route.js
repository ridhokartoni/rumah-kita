const router = require('express').Router();
const UserRouter = require('./user.route');
const AuthRouter = require('./auth.route');

const articleAdminRouter = require('./admin/article.admin.route');
const categoryAdminRouter = require('./admin/category.admin.route');
const userAdminRouter = require('./admin/user.admin.route');
const roleAdminRouter = require('./admin/role.admin.route');
const ViewsRouter = require('./views.route');
const SavedRouter = require('./savedArticles.route');
const CommentRouter = require('./comment.route');


router.use(ViewsRouter)
router.use('/comment', CommentRouter);
router.use('/saved-articles', SavedRouter);
router.use('/user', UserRouter);
router.use('/auth', AuthRouter);
router.use('/admin/article', articleAdminRouter);
router.use('/admin/category', categoryAdminRouter);
router.use('/admin/user', userAdminRouter);
router.use('/admin/role', roleAdminRouter);
router.use((req,res) => {
    res.status(404).send({
        message: `There is no route for ${req.url}`
    })
})
//user akses {host}/auth/
module.exports = router;