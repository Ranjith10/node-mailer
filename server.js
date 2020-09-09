const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    },
})

const mailOptions = {
    from: 'smaple@email.com',
    to: 'to@email.com',
    subject: 'Test email',
    html: '<p>Working</p>',
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err)
    else console.log(info)
})
