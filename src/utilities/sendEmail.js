const nodemailer = require('nodemailer');


function sendEmail(userForgot, tokenForgotPassword) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'triprasetyat@gmail.com',
            pass: 'qhfksumlovvbpkjg'
        }
    });
    
    const text = `Hi sobat! Kamu kehilangan atau lupa password mu yah ? Jangan khawatir, kunjungi link di bawah ini untuk mengubah password kamu! %0A${process.env.APP_LINK}/resetpassword/${tokenForgotPassword} *Link tersebut berlaku sampai dengan 2 jam ke depan. Pastikan kamu me-reset password mu secepatnya yah !`

    return new Promise(function (resolve, reject) {
        transporter.sendMail({
            to: userForgot.email,
            subject: 'Reset Password Rumah Kita',
            text: decodeURIComponent(text),
        }, function (err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info)
            }
        })
    })
}

module.exports = sendEmail;