/* Name: Harjap Singh Grewal, ID: 100420173, Date: July 06, 2020 */

/* Heroku Link: https://warm-taiga-32421.herokuapp.com/ */

const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require('dotenv').config({ path: 'config/essentials.env' });

const app = express();
const transporterConf = require("./nodemailer");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

app.get('/meals', (req, res) => {
    res.render('meals', {
        title: 'Meals'
    });
});

app.get("/dashboard", (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard'
    });
    res.send(req.body.Email);
})

app.post('/login', (req, res) => {
    var email = req.body.Email;
    var password = req.body.Password;

    function LoginSuccess() {
        console.log("Test 1");

        var userdata = {
            email: `${req.body.Email}`
        }

        res.cookie("UserInfo", userdata);
        res.json({ email: req.body.Email });
    }

    if(email !== "" || password !== "") { LoginSuccess(); }
    else { console.log('Test 2'); }
});

app.post('/register', (req, res) => {
    var mailInfo = {
        from: transporterConf.options.auth.user,
        to: `${req.body.Email}`,
        subject: "You have registered on the Meat Delivery Website",
        html: `<h2>Hello user. </h2><br>
        <p>This email is just a reminder that you have created your Harjap's Meat Delivery Account.<br>`
    }

    transporterConf.sendMail(mailInfo, (err, info) => {
        if(err) { console.error(err); }
        else {
            let userdata = {
                email: `${req.body.Email}`
            }
            res.cookie("UserInfo", userdata);
            res.send("Email is sent");
        }
    });
});

app.listen(HTTP_PORT, () => {
    console.log('PORT: ' + HTTP_PORT);
});