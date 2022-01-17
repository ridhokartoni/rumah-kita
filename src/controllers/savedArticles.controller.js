const SavedArticlesServices = require('../services/saved.articles.services');


exports.create = async (req,res) => {
    let result;
    try {
        result = await SavedArticlesServices.create(req.body);
        res.send(result)
    } catch (error) {
        res.status(500).send({
            errorMessage : error.message,
        })
    }
}

exports.delete = async (req,res) => {
    let result;
    try {
        result = await SavedArticlesServices.delete(req.query.id);
        res.send(result)
    } catch (error) {
        res.status(500).send({
            errorMessage : error.message,
        })
    }
}

exports.findAll = async (req,res) => {
    let result;
    try {
        result = await SavedArticlesServices.findAllByUser(req.params.userId)
        res.send(result)
    } catch (error) {
        res.status(500).send({
            errorMessage : error.message,
        })
    }
}