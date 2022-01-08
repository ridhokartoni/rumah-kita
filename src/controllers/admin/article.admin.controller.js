const ArticleAdminServices = require('../../services/admin/article.admin.services');

exports.getAllArticles = async (req,res) =>{
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
}


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
}