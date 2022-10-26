const ewelink = require('ewelink-api');
const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', async (req, res, next) => {

    (async () => {
        const connection = new ewelink({
            email: 'devcm74@gmail.com',
            password: 'P@ssw0rd',
        });
        const devices = await connection.getDevices();
        // console.log(devices);
        res.send(devices);
    })();

});

app.listen(3020, () =>
    console.log(`ewelink runing port ${3020}!`)

);