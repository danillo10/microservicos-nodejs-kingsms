require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const smsRouter = require('./routes/sms');

const app = express();

app.use(bodyParser.json());

app.use('/api/sms', smsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
