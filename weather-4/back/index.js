// require('dotenv').config()

const initOptions = {
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

const express = require('express');
const fetch = require('node-fetch');
const pgp = require('pg-promise')(initOptions);
const cors = require('cors');


var db = pgp("postgres://postgres:00000@127.0.0.1:6789/cities");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

const API_KEY = '2cfb2504ef1d0b5ecfc979c8e3be0c8b';

String.prototype.alphaNumeric = function() {
    return this.replace(/[^a-z0-9A-ZА-Яа-я\-\ ]/gi,'');
};

// const conn = createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD
// }).promise();

app.get('/', (req, res) => {
    res.send('alive');
});

app.get('/weather', (req, res) => {
    console.log(req.query.city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(req.query.city)}&appid=${API_KEY}&units=metric&lang=ru`)
        .then((response => response.json()))
        .then((text) => res.status(text.cod).send(text))
        .catch((e) => res.send(`Получена ошибка ${e.toString()}`));

});

app.get('/weather/coordinates', (req, res) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${API_KEY}&units=metric&lang=ru`)
        .then((response => response.json()))
        .then((text) => res.status(text.cod).send(text))
        .catch((e) => res.send(`Получена ошибка ${e.toString()}`));
});

app.get('/favourites', (req, res) => {
    console.log('get all');
    db.any("SELECT * FROM public.cities2")
        .then(result => {
            console.log('result:')
            console.log(result)
            res.send(result);
        })
        .catch((e) => {
            console.log('get all fail')
            res.status(500).send(e)
        });
});

app.post('/favourites', (req, res) => {
    console.log('hello')
    db.connect()
    .then(obj => {
        // Can check the server version here (pg-promise v10.1.0+):
        const serverVersion = obj.client.serverVersion;
        console.log(serverVersion);

        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
    console.log();
    db.none('insert into public.cities2 (city) VALUES ($1)', [req.body.city.alphaNumeric()])
        .then(() => {
            console.log('yay');
            res.send("200 OK POSTED");})
        .catch((e) => {
            console.log(e);
            res.status(500).send({"error":e});}
            );
});

app.delete('/favourites', (req, res) => {
    console.log();
    db.none('delete from public.cities2 WHERE city = $1', [req.body.city.alphaNumeric()])
        .then(() => res.send("200 OK DELETED"))
        .catch((e) => res.status(500).send({"error":e}))
});

app.listen(port, () => console.log('Слушаю порт ', port));