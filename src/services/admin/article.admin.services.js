const Article = require('../../model/article.model');
const SavedArticles = require('../../model/savedArticles.model');
const Comment = require('../../model/comment.model');

exports.getAllArticle = async (page) => {
    try {
        let result = await Article.findAndCountAll({
            limit : 10,
            offset: (page - 1) * 10,
            include : ['category', 'user'],
            order : [
                ['createdAt', 'DESC']
            ]
        });
        
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
};

exports.createArticle = async function (article, req) {
    try {
        article.userId = req.query.userId;
        let result = await Article.create(article);
        
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
};

exports.updateArticle = async function (articleRequest) {
    try {
        let result = await Article.update(articleRequest, {
            where: {
                id : articleRequest.id
            }
        });
        
        if(result[0] === 0){
            throw new Error('Article tidak ditemukan/Article tidak dapat diupdate')
        }else {
            return {message : "Berhasil mengupdate article", data : result}
        }
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteArticle = async function (articleWrong) {
    try {
        let deleteSavedArticle = await SavedArticles.destroy({
            where : {
                articleId : articleWrong.id
            }
        });

        let deleteCommentArticle = await Comment.destroy({
            where : {
                articleId : articleWrong.id
            }
        })
        
        let result = await Article.destroy({
            where: {
                id : articleWrong.id
            }
        });
        
        if(result === 0){
            throw new Error('Article tidak ditemukan/Article tidak dapat didelete')
        }else {
            return {message : "Berhasil menghapus article", data : result}
        }
    } catch (err) {
        throw new Error(err.message);
    }
};