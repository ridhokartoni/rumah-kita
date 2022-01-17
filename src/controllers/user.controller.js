const UserServices = require('../services/user.services');

exports.getUsers = async (req,res) => {
    try {
        let result = await UserServices.getAllUser();
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}


exports.resetPassword = async (req,res) =>{
    try {
        let result = await UserServices.resetPassword(req.body.password, req.query.userId);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}

exports.createUsers = async (req,res) =>{
    try {
        console.log(req.body);
        let result = await UserServices.createUser(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}

exports.updateUser = async (req,res) => {
    try {
        let result = await UserServices.updateUser(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}

exports.deleteUsers = async (req,res) => {
    try {
        if(req.query.userId){
            console.log(req.query)
           let result = await UserServices.deleteUser(req.query);
           res.status(200).json({
               data : result
           });
        }else {
            res.status(400).send({
                errorStatus : 400,
                errorMessage : 'Please provide the id'
            })
        }
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}

exports.forgotPassword = async (req,res) => {
    try {
        if(req.query.email){
            let result = await UserServices.forgotPassword(req.query.email);
            res.send(result);
            return
        }else{
            throw new Error('Please provide the email')
        }
    } catch (error) {
        res.status(500).send({
            errorStatus : 500,
            errorMessage : error.message
        })
    }
}