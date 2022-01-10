const roleAdminServices = require('../../services/admin/role.admin.services')

exports.getAllRole = async function (req,res){
    try {
        if(req.params.page){
            let result = await roleAdminServices.getAllRole(req.params.page);
            res.render('../views/pages/admin/role.ejs', {
                appLink : process.env.appLink,
                data : {
                    roles : result.rows,
                    pagination : {
                        page : req.params.page,
                        beforePage : parseInt(req.params.page) - 1,
                        nextPage : parseInt(req.params.page) + 1,
                        totalPage : Math.ceil(result.count / 10),
                        namePage : 'role'
                    } 
                }
            });
        }else{
            res.redirect('/admin/role/1')
        }
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.createRole = async function (req,res) {
    try {
        let result = await roleAdminServices.createRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.updateRole = async function (req,res) {
    try {
        let result = await roleAdminServices.updateRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};

exports.deleteRole = async function (req,res) {
    try {
        let result = await roleAdminServices.deleteRole(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            statusCode : 500,
            errorMessage : err.message
        })
    }
};