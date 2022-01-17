const Comment = require('../model/comment.model');

exports.create = async (comment) => {
    let result;
    try {
        result = await Comment.create(comment);
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}


exports.findByArticleId = async (articleId) => {
    let result;
    try {
        result = await Comment.findAll({
            where : {
                articleId : articleId
            },
            include : ['user'],
            order : [
                ['createdAt', 'desc']
            ],
        });
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}