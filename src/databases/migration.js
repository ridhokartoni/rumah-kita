const User = require('../model/user.model');
const Role = require('../model/role.model');
const Category = require('../model/category.model');
const article = require('../model/article.model');
const articlesaved = require('../model/articlesaved.model');
const comment = require('../model/comment.model');


//Run this function to migration about table structure in our databases
async function migration() {
    try {
        const roleSync = await Role.sync({
            force: false,
            alter: true,
        });

        const categorySync = await Category.sync({
            force: false,
            alter: true
        });

        const articleSync = await article.sync({
            force: false,
            alter: true
        });

        const articlesavedSync = await articlesaved.sync({
            force: false,
            alter: true
        });

        const commentSync = await comment.sync({
            force: false,
            alter: true
        });

        const userSync = await User.sync({
            force: false,
            alter: true
        });

        console.log(roleSync);
        console.log(categorySync);
        console.log(articleSync);
        console.log(articlesavedSync);
        console.log(commentSync);
        console.log(userSync);

        const createCategory = await Category.create({
            name: "Mental Issues"
        });

        console.log('Create Category Success')


        const createArticle = await article.create({
                title: "Sepak Bola",
                linkOrigin: "http//askdamsdkasm",
                content: "asdnasasd asda sdas asd asd asd ad",
                thumbnailPicture: "image.ajsdi",
                categoryId: 1
            }).then(function () {
                console.log('Create Article Saved Success');
                return
            })
            .catch(function (err) {
                console.log('Create Article Saved Failed', err)
            });


        const createArticlesaved = await articlesaved.create({
                articleId: 1,
                userId: 1
            }).then(function () {
                console.log('Create Article Saved Success');
                return
            })
            .catch(function (err) {
                console.log('Create Article Saved Failed', err)
            });

        const createComment = await comment.create({
                articleId: 1,
                userId: 1,
                comment: "asdjkasndjkan sdnasd nasdklnaskldn"
            }).then(function () {
                console.log('Create Artcle Saved Success');
                return
            })
            .catch(function (err) {
                console.log('Create Artcle Saved Failed', err)
            });

        const createRole = await Role.bulkCreate([{
                name: "user"
            },
            {
                name: "admin"
            }
        ]);

        console.log('Create Role Success')


        const createUser = await User.create({
            name: "Teguh",
            email: "tripr@gmail.com",
            password: "Teguh121@!",
            gender: "Pria",
            avatar: "/3.svg",
            roleId: 1
        });

        console.log('Create User Success')



    } catch (error) {
        console.log(error);
    }
}


migration();