const articleAdminServices = require('../../services/admin/article.admin.services');

exports.getAllArticle = async function (req,res){
    try {
        if(req.params.page){
            let result = await ArticleAdminServices.getAllArticle(req.params.page);
            res.render('../views/pages/tables.ejs');
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
        let result = await ArticleAdminServices.createArticle(req.body);
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
        let result = await articleAdminServices.updateArticle(req.body);
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
        let result = await articleAdminServices.deleteArticle(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};