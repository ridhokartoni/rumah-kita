const formatterDate = require('../utilities/formatterDate');

exports.home = async (req, res) => {
    if (req.query.token) {

        res.render('../views/pages/home_page.ejs', {})
    }
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: [
            {
                isActive: 'active',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: '',
                name: 'Mental Issues',
                url: '/mentalissue'
            },
            {
                isActive: '',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: '',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: '',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
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
        isLogged: true
    };
    res.render('../views/pages/home_page.ejs', {
        data: data,
        appLink: process.env.APP_LINK,
    });
}

exports.mentalissues = async (req, res) => {
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: [
            {
                isActive: '',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: 'active',
                name: 'Mental Issues',
                url: '/mentalissues'
            },
            {
                isActive: '',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: '',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: '',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
        articles:
        {
            specials: [

            ],

            cases: [

            ],

            mostPopular: [

            ],
        },
        isLogged: false
    };
    res.render('../views/pages/categories/mental_issues.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.lifestyle = async (req, res) => {
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: [
            {
                isActive: '',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: '',
                name: 'Mental Issues',
                url: '/mentalissues'
            },
            {
                isActive: 'active',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: '',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: '',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
        articles:
        {
            specials: [

            ],

            cases: [

            ],

            mostPopular: [

            ],
        },
        isLogged: false
    };
    res.render('../views/pages/categories/gaya_hidup.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.case = async (req, res) => {
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: [
            {
                isActive: '',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: '',
                name: 'Mental Issues',
                url: '/mentalissues'
            },
            {
                isActive: '',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: 'active',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: '',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
        articles:
        {
            specials: [

            ],

            cases: [

            ],

            mostPopular: [

            ],
        },
        isLogged: false
    };
    res.render('../views/pages/categories/kasus.ejs', {
        data: data,
        appLink: process.env.APP_LINK
    });
}

exports.saved = async (req, res) => {
    let data = {
        user: {
            name: 'Alma Lawson',
            email: 'alma.lawson@example.com'
        },
        navItem: [
            {
                isActive: '',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: '',
                name: 'Mental Issues',
                url: '/mentalissues'
            },
            {
                isActive: '',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: '',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: 'active',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
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
        navItem: [
            {
                isActive: '',
                name: 'Terkini',
                url: '/'
            },
            {
                isActive: '',
                name: 'Mental Issues',
                url: '/mentalissues'
            },
            {
                isActive: '',
                name: 'Gaya Hidup',
                url: '/lifestyle'
            },
            {
                isActive: '',
                name: 'Kasus',
                url: '/case'
            },
            {
                isActive: '',
                name: 'Tersimpan',
                url: '/saved'
            },
        ],
        dateNow: formatterDate.currentDate(),
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

exports.welcome = async (req,res) => {
    res.render('../views/pages/welcome_page.ejs', {appLink: process.env.APP_LINK});
}

exports.login = async (req, res) => {
    res.render('../views/pages/login_page.ejs', { appLink: process.env.appLink });
}

exports.forgotpassword = async (req, res) => {
    if (req.params.success) {
        res.render('../views/pages/forgotpassword/success_forgot_password.ejs', {
            appLink: process.env.APP_LINK
        })
    } else {
        res.render('../views/pages/forgotpassword/forgot_password.ejs', {
            appLink: process.env.APP_LINK
        })
    }
}


exports.adminLogin = async (req, res) => {
    res.render('../views/pages/admin/login.ejs', {appLink: process.env.APP_LINK});
}





