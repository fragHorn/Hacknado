const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('./util/twilio');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const { mongoConnect } = require('./database/mongoDB');

const siteRoutes = require('./routes/site');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');
require('dotenv').config();

const app = express();

const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions'
});

// setting up the public folder for css files
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(siteRoutes);
app.use('/auth', authRoutes);

app.use(errorController.error);

mongoConnect(() => {
    app.listen(8080);
});