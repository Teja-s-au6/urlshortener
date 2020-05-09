const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const methodOverride = require('method-override');
dotenv.config()
const hbs  = require("hbs");
const path = require("path");
require('./db');

const PORT = process.env.PORT || 1234

const userApiRoutes = require('./routes/apiRoutes/userApiRoutes');
const userNormalRoutes = require('./routes/normalRoutes/userNormalRoutes');
const urlApiRoutes = require('./routes/apiRoutes/urlApiRoutes');
const urlNormalRoutes = require('./routes/normalRoutes/urlnormalroute');

const app = express()

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.set('view options', { layout: 'main' });

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


app.use(
    session({
        name: 'Session1',
        resave: false,
        saveUninitialized: false,
        secret: 'Tejas',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60,
            sameSite: 'strict'
        }
    })
);

app.use(userApiRoutes);
app.use(userNormalRoutes);
app.use(urlApiRoutes);
app.use(urlNormalRoutes);

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home page",
        userId: req.session.userId
    })
})

app.listen(PORT)