const router = require('express').Router();
const ViewsController = require('../controllers/views.controller');

router.get('/', ViewsController.home);
router.get('/welcome', ViewsController.welcome);
router.get('/forgotpassword', ViewsController.forgotpassword)

module.exports = router;

const data = {
    user : {
        name : 'Taguh'
    },

    category : [
        {
            isActive: ' ',
            name : 'Mental Issue'
        }
    ],

    dateNow : '',
    articles : 
        {
            newest : [
                
            ],

            specials : [

            ],

            cases : [

            ],

            mostPopular : [

            ],

            mostSaved : [

            ]
            
        }
    
}