const articleAdminServices = require('../../services/admin/article.admin.services');

exports.getAllArticle = async function (req,res){
    try {
        if(req.params.page){
            let result = await articleAdminServices.getAllArticle(req.params.page);
            // res.render('../../views/pages/tables.ejs');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.createArticle = async function (req,res) {
    try {
        let result = await articleAdminServices.createArticle(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
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