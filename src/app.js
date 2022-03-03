const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'blztflwhejiamhz7cw8a-mysql.services.clever-cloud.com',
    user: 'ubtg9n8oemgccbjc',
    password: 'Y0CJ2Oc7VvKyAgDp4exE',
    port: 3306,
    database: 'blztflwhejiamhz7cw8a'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});