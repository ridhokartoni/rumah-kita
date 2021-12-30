const AuthServices = require('../services/auth.services');

exports.login = async (req,res) => {
    try {
        let result = await AuthServices.login(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : error.message
        })
    }
}