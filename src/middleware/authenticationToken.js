const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

const authenticationAdmin =  (req, res, next) => {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, process.env.SECRET_KEY, async (err, decode) => {
            if (err) {
                if (err.name == 'TokenExpiredError') {
                    res.status(403).send({statusCode: 403, errorMessage: 'JWT that you provide is expired'})
                } else {
                    res.status(500).send({statusCode: 500, errorMessage: err})
                }
            } else {
                const userAuth = await User.findOne({
                    where: {
                        id: decode.id,
                    },
                    include : ['role']
                })
                if (!userAuth) {
                    res.status(403).send({statusCode: 403, errorMessage: 'The token that you defined is incorrect format'})
                } else {
                    if(userAuth.role.name !== 'admin'){
                        res.status(403).send({
                            statusCode : 403,
                            errorMessage : 'The token that you provide is unauthorization to access the API'
                        })
                    }else {
                        req.query.userId = decode.id
                        next();
                    }
                }
            }
        });
    } else {
        res.status(403).send({statusCode: 403, errorMessage: 'Please provide the token, this API need token to access'})
    }
}

module.exports = authenticationAdmin;
