const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { mongoConnect } = require('./database/mongoDB');

const siteRoutes = require('./routes/site');
const errorController = require('./controllers/error');

const app = express();

// setting up the public folder for css files
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(siteRoutes);

app.use(errorController.error);

mongoConnect(() => {
    app.listen(8080);
});