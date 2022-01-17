const Role = require('../model/role.model');
const User = require('../model/user.model');
const Category = require('../model/category.model');
const Comment = require('../model/comment.model');
const Article = require('../model/article.model');
const savedArticle = require('../model/savedArticles.model');


function dbRelation(){
        Role.hasMany(User);
        User.belongsTo(Role);

        User.hasMany(Article);
        Article.belongsTo(User);
        
        Category.hasMany(Article);
        Article.belongsTo(Category);

        Article.hasMany(savedArticle);
        User.hasMany(savedArticle);

        savedArticle.belongsTo(User);
        savedArticle.belongsTo(Article);

        
        Article.hasMany(Comment);
        User.hasMany(Comment);

        Comment.belongsTo(User);
        Comment.belongsTo(Article);

}

module.exports = dbRelation;