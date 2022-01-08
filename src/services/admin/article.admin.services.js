const Article = require('../../model/article.model');


exports.getAllArticle = async (page) => {
    try {
        let result = await Article.findAll({
            limit : 10,
            offset: (page - 1) * 10,
        });
        
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.createArticle = async (article) => {
    try {
        let result = await Article.create(article);
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}