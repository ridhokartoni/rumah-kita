const Article = require('../../model/article.model');

exports.getAllArticle = async function (page) {
    try {
        let result = await Article.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.createArticle = async function (article) {
    try {
        let result = await Article.create(article);
        return result;
    } catch (err) {
        throw new Error(err.message)
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
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteArticle = async function (articleWrong) {
    try {
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
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};