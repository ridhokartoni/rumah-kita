const AuthServices = require('../services/auth.services');

exports.login = async (req, res) => {
    try {
        let result;
        if (req.query.role) {
            result = await AuthServices.login(req.body, req.query.role);
        }else {
            result = await AuthServices.login(req.body);
        }
        res.send(result);
    } catch (error) {
        console.log("asdasd")
        res.status(500).send({
            statusCode: 500,
            errorMessage: error.message
        })
    }
}


