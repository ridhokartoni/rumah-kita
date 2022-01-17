const CommentServices = require('../services/comment.services');

exports.create = async (req,res) => {
    let result;
    try {
        result = await CommentServices.create(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorMessage : error.errorMessage
        })
    }
}

exports.findAll = async (req,res) => {
    let result;
    try {
        result = await CommentServices.findByArticleId(req.params.articleId);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorMessage : error.errorMessage
        })
    }
}