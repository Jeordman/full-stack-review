require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authController');
const mainCtrl = require('./controllers/mainController');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB connected')
})

// Cookie session for how long they can stay logged in //

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))


// Auth End Points Below //
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.post('/auth/user', authCtrl.getUser);

// Endpoints Main Controller //
app.put('/api/balance', mainCtrl.updateBalance);



const port = SERVER_PORT;
app.listen(port, () => console.log(`Magic on port: ${port}`));