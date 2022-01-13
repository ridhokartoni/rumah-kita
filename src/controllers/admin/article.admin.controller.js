const ArticleAdminServices = require('../../services/admin/article.admin.services');
const { getAllCategory } = require('../../services/admin/category.admin.services');

exports.getAllArticle = async function (req,res){
    try {
        if(req.params.page){
            let categories = await getAllCategory();
            let result = await ArticleAdminServices.getAllArticle(req.params.page);
            res.render('../views/pages/admin/articles.ejs', {
                appLink : process.env.appLink,
                data : {
                    articles : result.rows,
                    pagination : {
                        page : req.params.page,
                        beforePage : parseInt(req.params.page) - 1,
                        nextPage : parseInt(req.params.page) + 1,
                        totalPage : Math.ceil(result.count / 10),
                        namePage : 'article'
                    } 
                },
                category : categories.rows
            });
        }else{
            res.redirect('/admin/article/1')
        }
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : error.message,
        })
    }
};


exports.createArticle = async (req, res) =>{
    try {
        let result = await ArticleAdminServices.createArticle(req.body, req);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : error.message,
        })
    }
};

exports.updateArticle = async function (req,res) {
    try {
        let result = await ArticleAdminServices.updateArticle(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.deleteArticle = async function (req,res) {
    try {
        let result = await ArticleAdminServices.deleteArticle(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};