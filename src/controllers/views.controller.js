const formatterDate = require('../utilities/formatterDate');
const letterFormatter = require('../utilities/letterFormatter');
const ArticleServices = require('../services/articles.services');

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

exports.home = async (req, res) => {
    navItems.forEach((data) => {
        if (data.name === 'Terkini') {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }

        if(req.query.isLogged){
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}?identify=${req.query.identify}`
        }
    });

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
            seeOther : dataArticles,
 
            newest: newest,

            specials: dataArticles.slice(4,9),

            cases: cases,

            mostPopular: mostPopular,

            mostSaved: dataArticles.slice(1,5)

        },
        isLogged: req.query.isLogged
    };
    res.render('../views/pages/home_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK,
    });
}

exports.saved = async (req, res) => {
    let userAuth = req.query.userAuth ? req.query.userAuth : {};

    navItems.forEach((data) => {
        if (data.name === 'Tersimpan') {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }
    })
    
    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        articles:
        {
            newest: [

            ],

            saved: [

            ],
        },
        isLogged: req.query.isLogged
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
    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        pageName: letterFormatter.letterFormatter(req.query.page),
        articles:
        {
            newest: [

            ],

            othersContent: [

            ],
        },
        isLogged: req.query.isLogged
    };

    res.render('../views/pages/others_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.search = async (req, res) => {
    let userAuth = req.query.userAuth ? req.query.userAuth : {};

    let data = {
        user: userAuth,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        pageName: `Hasil Pencarian Untuk ${req.query.s}`,
        articles:
        {
            newest: [

            ],

            searched: [

            ],
        },
        isLogged: req.query.isLogged
    };

    res.render('../views/pages/others_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.details = async (req, res) => {
    let theArticle = await ArticleServices.getArticleById(req.params.id); 
    let otherArticles = await ArticleServices.getSomeArticle(9);
    let userAuth = {}
    theArticle.isSaved = false
    if(req.query.userAuth){
        userAuth = req.query.userAuth;
        theArticle.isSaved = true;
    }

    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        articles:
        {
            articleDetails : theArticle,

            newest: otherArticles,
        },
        isLogged: req.query.isLogged
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

        if(req.query.isLogged){
            let originalPath = data.url.split('?');
            data.url = `${originalPath[0]}?identify=${req.query.identify}`
        }
    })
    let newest = await ArticleServices.newestOne(req.params.nameCategory);
    let cases = await ArticleServices.articleByCategory('kasus', 3);
    let mostPopular = await ArticleServices.mostPopular(4);
    let dataArticles = await ArticleServices.articleByCategory(req.params.nameCategory, 9);
    let fourDaysAgo = await ArticleServices.articlesBySomeDaysAgo(4, 5);
    let userAuth = req.query.isLogged ? req.query.userAuth : {}

    let data = {
        user: userAuth,
        nameCategory : req.params.nameCategory,
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),

        articles:
        {
            fourDaysAgo : fourDaysAgo,
            newest: newest,

            specials: dataArticles.slice(4,9),

            cases: cases,

            mostPopular: mostPopular,

            mostSaved: dataArticles
        },
        isLogged: req.query.isLogged
    };
    res.render('../views/pages/category_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.default = async (req, res) => {
    const isLogged = req.query.isLogged;
    if (isLogged) {
        res.redirect('/home');
    } else {
        res.redirect('/welcome')
    }
}

exports.profile = async (req, res) => {
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        isLogged: req.query.isLogged
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
    if (req.query.isLogged == true) {
        res.redirect('/home');
    } else {
        res.render('../views/pages/login_page.ejs', { appLink: process.env.APP_LINK });
    }
}

exports.registration = async (req, res) => {
    if (req.query.isLogged == true) {
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





