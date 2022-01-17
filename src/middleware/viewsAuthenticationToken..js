const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

const authenticationUser = async (req, res, next) => {
    
    if(req.query.identify) {
        jwt.verify(req.query.identify, process.env.SECRET_KEY, async function (err, decode){
            if(err){
                next();
            } else {
                const userAuth = await User.findOne({
                    where : {
                        id : decode.id
                    }
                })   

                if(!userAuth){
                    next();
                }else {
                    req.query.userAuth = userAuth
                    next();
                }
            }
        })
    } else {
        next();
    }
}

module.exports = authenticationUser;
