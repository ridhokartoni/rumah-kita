const SavedArticles = require('../model/savedArticles.model');


exports.create = async (saved) => {
    let result;
    try {
        result = await SavedArticles.create(saved);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.findAllByUser = async (userId) => {
    let result;
    try {
        result = await SavedArticles.findAll({
            where : {
                userId : userId
            },
            include : ['article']
        })
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.delete = async (id) => {
    let result;
    try {
        result = await SavedArticles.destroy({
            where : {
                id : id
            }
        })
    } catch (error) {
        throw new Error(error.message)        
    }
}
