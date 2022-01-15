const formatterDate = require('../utilities/formatterDate');
const letterFormatter = require('../utilities/letterFormatter');

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

// const pageNames = [
//     'Paling Disukai',
//     'Spesial',
//     'Kasus',
//     'Terbaru'
// ]

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
        pageName: 'Daftar Tersimpan',
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
    // let pageName = '';
    // for (let i = 0; i < pageNames.length; i++) {
    //     if (req.query.page === pageNames[i].toLowerCase()) {
    //         pageName = pageNames[i]
    //     }
    // }

    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: navItems,
        dateNow: formatterDate.currentDate(),
        timeNow: formatterDate.formatterTime(),
        pageName: letterFormatter.letterFormatter(req.query.page),
        articles:
        {
            newest: [

            ],

            saved: [

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
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
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
    res.render('../views/pages/category_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
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
        res.render('../views/pages/register_berhasil.ejs', { appLink: process.env.APP_LINK });
    }
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





