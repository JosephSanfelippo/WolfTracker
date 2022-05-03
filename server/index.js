require('dotenv').config()
const axios = require('axios');
const cron = require('node-cron');

const uri = 'https://et.splatterladder.com/api/squery.php?format=json&svid[]=755659&svadd[]=68.232.172.16:27960';
const express = require('express');
const db = require('../db/db.js');
const app = express();
app.use(express.static(__dirname + '../client/dist'));
app.use(express.json());

cron.schedule('*/1 * * * * *', () => {
  axios.get(uri)
  .then((response) => {
    console.log('res', response);
  })
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening on port ${process.env.PORT || 3000}`);
})