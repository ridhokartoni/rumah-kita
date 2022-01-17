const Article = require('../model/article.model');
const { Op } = require('sequelize');
const Category = require('../model/category.model');
const moment = require('moment');
const SavedArticle = require('../model/savedArticles.model');

exports.getSomeArticle = async (limit) => {
    let result;
    try {
        result = await Article.findAll({
            limit : limit,
            include : ['category'],
            order : [
                ['createdAt', 'DESC']
            ]
        })
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.isArticleSaved = async (id, userId) => {
    try {
        let savedArticle = await SavedArticle.findOne({
            where : {
                articleId : id,
                userId : userId
            }
        })

        if(savedArticle){
            return true
        }else {
            return false
        }
    } catch (error) {
        
    }
}



exports.mostPopular = async (limit) => {
    let result;
    try {
        result = await Article.findAll({
            limit: limit,
            include : ['category'],
            order : [
                ['viewers', 'DESC']
            ]
        });
        console.log(result.length);
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.mostSaved = async (limit) => {
    
}

exports.searchArticle = async (keyword, limit) => {
    let result;
    try {
        result = await Article.findAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.iLike]: `%${keyword}%`
                        }
                    }
                ]
            },
            limit : limit
        })

        return result
    } catch (error) {
        throw new Error(error.message)
    }
}



exports.articleByCategory = async (categoryName, limit) => {
    try {
        let category = await Category.findOne({
            where : {
                name : {
                    [Op.iLike] : categoryName
                }
            }
        })

        result = await Article.findAll({
            where : {
                categoryId : category.id
            },
            order : [
                ['createdAt', 'DESC']
            ],
            include : ['category'],
            limit : limit
        })

        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.newestOne = async (categoryName) => {
    try {
        let category = await Category.findOne({
            where : {
                name : {
                    [Op.iLike] : categoryName
                }
            }
        })

        result = await Article.findOne({
            where : {
                categoryId : category.id
            },
            order : [
                ['createdAt', 'DESC']
            ],
            include : ['category']
        })

        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getArticleById = async (id) => {
    let result;
    try {
        result = await Article.findOne({
            where: {
                id : id
            },
            include : ['category']
        })

        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.articlesBySomeDaysAgo = async (days, limit) => {
    let result;
    try {
        result = await Article.findAll({
            where : {
                createdAt : {
                    [Op.gte] : moment().subtract(days, 'days').toDate()
                }
            },
            include : ['category'],
            limit : limit
        })

        console.log(result.length);


        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.newest = async () => {
    try {
        result = await Article.findAll({
            order : [
                ['createdAt', 'DESC']
            ],
        });

        return result
    } catch (error) {
        throw new Error(error.message)
        
    }
}

exports.updateViewers = async (id) => {
    let result;
    try {
        let findArticle = await Article.findOne({
            where: {
                id : id
            }
        });
        
        result = await Article.update({
            viewers : findArticle.viewers + 1
        }, {
            where :{
                id : id
            }
        })

        return result
    } catch (error) {
        throw new Error(error.message)
        
    }
}
