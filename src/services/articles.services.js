const Article = require('../model/article.model');
const { Op } = require('sequelize');
const Category = require('../model/category.model');
const moment = require('moment');

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
                            [Op.contains]: keyword
                        }
                    },
                    {
                        content: {
                            [Op.contains]: keyword
                        }
                    },

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

exports.articlesFourDaysAgo = async (limit) => {
    let result;
    try {
        result = await Article.findAll({
            where : {
                createdAt : {
                    [Op.gte] : moment().subtract(4, 'days').toDate()
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

exports.articleRandom = async (limit) => {
    
} 
