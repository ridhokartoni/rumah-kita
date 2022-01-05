const article = require('../../model/article.model');

exports.getAllArticlce = async function (page) {
    try {
        let result = await article.findAll({
            limit : 10,
            offside : (page - 1) * 10,
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createArticle = async function (article) {
    try {
        let result = await article.create(article);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}