const userAdminServices = require('../../services/admin/user.admin.services')

exports.gertAllUser = async function (req,res){
    try {
        if(req.params.page){
            let result = await userAdminServices.getAllUser(req.params.page);
            res.render('../../views/pages/tables.ejs');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
}

exports.createUser = async function (req,res) {
    try {
        let result = await userAdminServices.createUser(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
}