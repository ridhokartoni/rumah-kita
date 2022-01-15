const Article = require('../model/article.model');
const { Op } = require('sequelize')

exports.getSomeArticle = async (limit) => {
    let result;
    try {
        result = await Article.findAll({
            limit: limit
        });

        return result
    } catch (error) {
        throw new Error(error.message)
    }
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


exports.articleByCategory = async (categoryId, limit) => {
    let result;
    try {
        result = await Article.findAll({
            where : {
                categoryId : categoryId
            },
            limit : limit
        })
    } catch (error) {
        throw new Error(error.message)
    }
}


// exports.mostSavedArticles = async (limit) => {
//     let result;
//     try {
//         result = await Article.findAll({

//         })
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }