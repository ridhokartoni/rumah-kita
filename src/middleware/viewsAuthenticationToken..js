const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

const authenticationUser = async (req, res, next) => {
    
    if(req.query.identify) {
        jwt.verify(req.query.identify, process.env.SECRET_KEY, async function (err, decode){
            if(err){
                req.query.isLogged = false;
                next();
            } else {
                const userAuth = await User.findOne({
                    where : {
                        id : decode.id
                    }
                })
                

                if(!userAuth){
                    req.query.isLogged = false;
                    next();
                }else {
                    req.query.isLogged = true;
                    next();
                }
            }

            
        })
    } else {
        req.query.isLogged = false;
        next();
    }
}

module.exports = authenticationUser;
