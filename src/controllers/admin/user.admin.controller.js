const userAdminServices = require('../../services/admin/user.admin.services');
const roleAdminServices = require('../../services/admin/role.admin.services');

exports.getAllUser = async function (req,res){
    try {
        if(req.params.page){
            let roles = await roleAdminServices.getAllRole();
            let result = await userAdminServices.getAllUser(req.params.page);
            res.render('../views/pages/admin/user.ejs', {
                appLink : process.env.APP_LINK,
                data : {
                    users: result.rows,
                    pagination : {
                        page : req.params.page,
                        beforePage : parseInt(req.params.page) - 1,
                        nextPage : parseInt(req.params.page) + 1,
                        totalPage : Math.ceil(result.count / 10),
                        namePage : 'user',
                    } 
                },
                role : roles.rows
            });
        }else {
            res.redirect('/admin/user/1');
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

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
};

exports.updateUser = async function (req,res) {
    try {
        let result = await userAdminServices.updateUser(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.deleteUser = async function (req,res) {
    try {
        let result = await userAdminServices.deleteUser(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};
