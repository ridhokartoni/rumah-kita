const formatterDate = require('../utilities/formatterDate');
const letterFormatter = require('../utilities/letterFormatter');
const ArticleServices = require('../services/articles.services');
const SavedAriclesServices = require('../services/saved.articles.services');
const CommentServices = require('../services/comment.services');
const navItems = [
    {
        isActive: '',
        name: 'Terkini',
        url: '/home'
    },
    {
        isActive: '',
        name: 'Mental Issues',
        url: '/category/mental issues'
    },
    {
        isActive: '',
        name: 'Gaya Hidup',
        url: '/category/gaya hidup'
    },
    {
        isActive: '',
        name: 'Kasus',
        url: '/category/kasus'
    },
    {
        isActive: '',
        name: 'Tersimpan',
        url: '/saved'
    },
]

function urlNotChecked(){
    navItems.forEach((data) =>{
        data.isActive = ''
    })
}



exports.home = async (req, res) => {
    navItems.forEach((data) => {
        if (data.name === 'Terkini') {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }

        if(req.query.userAuth){
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}?identify=${req.query.identify}`
        }else{
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}`
        }
    });
    
    let isLogged = req.query.userAuth ? true : false
    let dataArticles = await ArticleServices.getSomeArticle(9);
    let userAuth = req.query.userAuth ? req.query.userAuth : {};
    let newest = await ArticleServices.newestOne('mental issues');
    let cases = await ArticleServices.articleByCategory("kasus", 3);
    let mostPopular = await ArticleServices.mostPopular(9);


    let data = {
        user: userAuth,

        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        articles:
        {
            seeOther: dataArticles,

            newest: newest,

            specials: dataArticles.slice(4, 9),

            cases: cases,

            mostPopular: mostPopular,

            mostSaved: dataArticles.slice(1, 5)

        },
        isLogged: isLogged
    };
    res.render('../views/pages/home_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK,
    });
    
}

exports.saved = async (req, res) => {
    let userAuth = req.query.userAuth ? req.query.userAuth : {};
    let isLogged = req.query.userAuth ? true : false
    navItems.forEach((data) => {
        if (data.name === 'Tersimpan') {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }

        if(req.query.userAuth){
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}?identify=${req.query.identify}`
        }else{
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}`
        }
    })

    let newest = await ArticleServices.newest();
    let savedArticles = await SavedAriclesServices.findAllByUser(userAuth.id)

    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        articles:
        {
            newest: newest,

            saved: savedArticles,
        },
        isLogged: isLogged
    };
    if (data.isLogged == true) {
        res.render('../views/pages/saved_page.ejs', {
            data: data,
            appLink: process.env.APP_LINK
        });
    } else {
        res.redirect('/home');
    }
}

exports.others = async (req, res) => {
    let userAuth = req.query.userAuth ? req.query.userAuth : {};
    let specials = await ArticleServices.getSomeArticle(9);
    let mostLiked = await ArticleServices.mostPopular(9);
    let cases = await ArticleServices.articleByCategory('kasus', 9);
    let newest = await ArticleServices.newest();

    let dataArticles = req.query.page == 'paling disukai' ? mostLiked : req.query.page == 'spesial' ? specials : req.query.page == 'kasus' ? cases : newest;
    let isLogged = req.query.userAuth ? true : false
    
    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        pageName: letterFormatter.letterFormatter(req.query.page),
        articles:
        {
            newest: dataArticles,

            othersContent: dataArticles,
        },
        isLogged: isLogged
    };

    res.render('../views/pages/others_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.search = async (req, res) => {
    let userAuth = req.query.userAuth ? req.query.userAuth : {};
    let newest = await ArticleServices.newest();
    let searchedArticles = await ArticleServices.searchArticle(req.query.find, 20);
    let isLogged = req.query.userAuth ? true : false
    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        pageName: `Hasil Pencarian Untuk ${req.query.find}`,
        articles:
        {
            newest: newest,

            othersContent: searchedArticles,
        },
        isLogged: isLogged
    };

    res.render('../views/pages/others_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.details = async (req, res) => {
    urlNotChecked();
    let isLogged = req.query.userAuth ? true : false
    let theArticle = await ArticleServices.getArticleById(req.params.id); 
    let otherArticles = await ArticleServices.getSomeArticle(9);
    let userAuth = {}
    let comments = await CommentServices.findByArticleId(req.params.id);
    let updateArticle = await ArticleServices.updateViewers(theArticle.id);
    theArticle.isSaved = false
    let isSaved = false;
    if(req.query.userAuth){
        userAuth = req.query.userAuth;
        theArticle.isSaved = true;
        isSaved = await ArticleServices.isArticleSaved(theArticle.id, userAuth.id)

    }

    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        commentArticle : comments,
        isSaved : isSaved,
        articles:
        {
            articleDetails: theArticle,

            newest: otherArticles,
        },
        isLogged: isLogged
    };
    res.render('../views/pages/details_news_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.category = async (req, res) => {
    navItems.forEach((data) => {

        if (data.name.toUpperCase() === req.params.nameCategory.toUpperCase()) {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }

        if(req.query.userAuth){
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}?identify=${req.query.identify}`
        }else{
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}`
        }
    })
    let isLogged = req.query.userAuth ? true : false
    let newest = await ArticleServices.newestOne(req.params.nameCategory);
    let cases = await ArticleServices.articleByCategory('kasus', 3);
    let mostPopular = await ArticleServices.mostPopular(4);
    let dataArticles = await ArticleServices.articleByCategory(req.params.nameCategory, 9);
    let fourDaysAgo = await ArticleServices.articlesBySomeDaysAgo(4, 5);
    let userAuth = req.query.userAuth ? req.query.userAuth : {}

    let data = {
        user: userAuth,
        nameCategory: req.params.nameCategory,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),

        articles:
        {
            fourDaysAgo: fourDaysAgo,
            newest: newest,

            specials: dataArticles.slice(4, 9),

            cases: cases,

            mostPopular: mostPopular,

            mostSaved: dataArticles
        },
        isLogged: isLogged
    };
    res.render('../views/pages/category_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.default = async (req, res) => {
    if (req.query.userAuth) {
        res.redirect('/home');
    } else {
        res.redirect('/welcome')
    }
}

exports.profile = async (req, res) => {
    urlNotChecked();
    const isLogged = req.query.userAuth ? true : false;
    let data = {
        user: req.query.userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        isLogged: isLogged
    };
    if (data.isLogged == true) {
        res.render('../views/pages/settings_page.ejs', {
            data: data,
            appLink: process.env.APP_LINK
        })
    } else {
        res.redirect('/home');
    }
}

exports.welcome = async (req, res) => {
    res.render('../views/pages/welcome_page.ejs', { appLink: process.env.APP_LINK });
}

exports.login = async (req, res) => {
    if (req.query.userAuth) {
        res.redirect('/home');
    } else {
        res.render('../views/pages/login_page.ejs', { appLink: process.env.APP_LINK });
    }
}

exports.registration = async (req, res) => {
    if (req.query.userAuth == true) {
        res.redirect('/home');
    } else {
        res.render('../views/pages/register.ejs', { appLink: process.env.APP_LINK });
    }
}

exports.terms = async (req, res) => {
    res.render('../views/pages/termCondition.ejs', { appLink: process.env.APP_LINK });

}

exports.registersuccess = async (req, res) => {
    res.render('../views/pages/register_berhasil.ejs', { appLink: process.env.APP_LINK });

}



exports.forgotpassword = async (req, res) => {
    if (req.params.success == 'success') {
        res.render('../views/pages/forgotpassword/success_forgot_password.ejs', {
            appLink: process.env.APP_LINK
        })
    } else {
        res.render('../views/pages/forgotpassword/forgot_password.ejs', {
            appLink: process.env.APP_LINK
        })
    }
}

exports.resetpassword = async (req, res) => {
    res.render('../views/pages/forgotpassword/resetpassword.ejs', {
        appLink: process.env.APP_LINK
    })
}

exports.resetpasswordSuccess = async (req, res) => {
    res.render('../views/pages/forgotpassword/berhasilReset.ejs', {
        appLink: process.env.APP_LINK
    })
}



exports.adminLogin = async (req, res) => {
    res.render('../views/pages/admin/login.ejs', { appLink: process.env.APP_LINK });
}





