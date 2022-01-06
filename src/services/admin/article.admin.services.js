const article = require('../../model/article.model');

exports.getAllArticle = async function (page) {
    try {
        let result = await article.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createArticle = async function (articlee) {
    try {
        let result = await article.create(articlee);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}