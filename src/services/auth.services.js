const bcrypt = require('bcrypt');
const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

exports.login = async (user, role) => {
    try {
        const UserLogin = await UserModel.findOne({
            where: {
                email: user.email
            },
            include: ['role']
        });

        if (UserLogin !== null) {
            const isPasswordMatched = await bcrypt.compareSync(user.password, UserLogin.password);

            if (isPasswordMatched == true) {
                const token = jwt.sign({
                    id: UserLogin.id,
                    roleId: UserLogin.roleId,
                }, process.env.SECRET_KEY, { expiresIn: '7d' });

                if ((role) && UserLogin.role.name != "admin") {
                    throw new Error("User doesn't have authorization to access the page")
                }
                return {
                    name: UserLogin.name,
                    email: UserLogin.email,
                    token: token
                }
            }else {
                throw new Error('The password is wrong')
            }
        } else {
            throw new Error('User is not found');
        }
    } catch (error) {
        throw new Error(error.message)
    }

}


