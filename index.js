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

const connection = new ewelink({
    email: 'devcm74@gmail.com',
    password: 'P@ssw0rd',
});

app.get('/', async (req, res, next) => {

    (async () => {
        const devices = await connection.getDevices();
        // console.log(devices);
        res.send(devices);
    })();

});

app.get('/log/:deviceid', async (req, res, next) => {
    (async () => {
        const deviceid = await req.params.deviceid;
        console.log(deviceid)
        const usage = await connection.getDevicePowerUsage(deviceid);
        res.send(usage);
    })();

});

app.listen(3020, () =>
    console.log(`ewelink runing port ${3020}!`)

);