require('dotenv').config()
const path = require('path');
const axios = require('axios');
const cron = require('node-cron');

const uri = 'https://et.splatterladder.com/api/squery.php?format=json&svid[]=755659&svadd[]=68.232.172.16:27960';
const express = require('express');
const db = require('../db/wolfQueries.js');

const app = express();
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

const pool = require('../db/db.js');
// const { postInfo } = require('../db/wolfQueries.js');

// var log = "";
// cron.schedule('*/5 * * * * *', () => {
//   axios.get(uri)
//   .then((response) => {
//     const path = response.data.server['755659'];
//     const values = [
//       path.rawname, path.adress, path.modname, path.playernum, path.maxslots, path.mapname, path.player
//     ];
//     pool.query(
//       'INSERT INTO ServerInfo(name, address, mod, slotsFull, slotsTotal, map, players)',
//       values,
//       (err, results) => {
//         if (err) {
//           console.log('ERROR posting', err)
//         } else {
//           console.log('POST success!');
//         }
//       },
//     );
//   })
//   .catch((err) => {
//     console.log('err', err);
//   })
// });



app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening on port ${process.env.PORT || 3000}`);
})