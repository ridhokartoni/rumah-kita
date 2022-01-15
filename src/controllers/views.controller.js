const article = require('../model/article.model');
const formatterDate = require('../utilities/formatterDate');

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
    })

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
            newest: [

            ],

            specials: [

            ],

            cases: [

            ],

            mostPopular: [

            ],

            mostSaved: [

            ]

        },
        isLogged: req.query.isLogged
    };
    res.render('../views/pages/home_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK,
    });
}



exports.saved = async (req, res) => {
    navItems.forEach((data) => {
        if (data.name === 'Tersimpan') {
            data.isActive = 'active'
        } else {
            data.isActive = ' '
        }
    })
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
            newest: [

            ],

            saved: [

            ],
        },
        isLogged: true
    };
    res.render('../views/pages/saved_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.details = async (req, res) => {
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
            articleDetails: {
                img: '',
                title: '',
                createdAt: '',
                place: '',
                source: ''
            },

            newest: [

            ],
        },
        isLogged: true
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
    })

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
            specials: [

            ],

            cases: [

            ],

            mostPopular: [

            ],
        },
        isLogged: req.query.isLogged
    };
    res.render('../views/pages/categories/kasus.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.default = async (req,res) => {
    const isLogged = req.query.isLogged;
    if(isLogged){
        res.redirect('/home');
    }else{
        res.redirect('/welcome')
    }
}

exports.welcome = async (req, res) => {
    res.render('../views/pages/welcome_page.ejs', { appLink: process.env.APP_LINK });
}

exports.login = async (req, res) => {
    res.render('../views/pages/login_page.ejs', { appLink: process.env.appLink });
}

exports.registrasion = async (req, res) => {
    res.render('../views/pages/register_berhasil.ejs', { appLink: process.env.appLink });
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

exports.seeOthers = async (req,res) => {
    const dataArticle = await article.findAll({
        where : {
            [Op.or] : [
                {
                    title : req.query.find
                },
                {
                    content : req.query.find
                }
            ]
        }
    });

    
}


exports.adminLogin = async (req, res) => {
    res.render('../views/pages/admin/login.ejs', { appLink: process.env.APP_LINK });
}





