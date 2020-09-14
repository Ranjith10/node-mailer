const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.CLIENT_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
    },
})

const mailOptions = {
    from: 'smaple@email.com',
    to: 'to@email.com',
    subject: 'Test email',
    text: 'Working',
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err)
    else console.log(info)
})
