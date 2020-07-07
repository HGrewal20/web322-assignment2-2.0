const nodemailer = require("nodemailer");
const secDotEnv = require('dotenv');
secDotEnv.config({ path: 'config/nodemailer.env' });

var transporter = nodemailer.createTransport({
    service: process.env.TRANSPORTER_SERVICE,
    auth:{
        user: process.env.TRANSPORTER_AUTH_USER,
        pass: process.env.TRANSPORTER_AUTH_PASS
    }
})

module.exports = transporter;