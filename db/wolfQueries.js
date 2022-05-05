const pool = require('./db.js');


// const postInfo = async (req) => {
//   const path = req.server['755659'];
//   const values = [
//     path.rawname, path.adress, path.modname, path.playernum, path.maxslots, path.mapname, path.player
//   ];
//   await pool.query(
//     'INSERT INTO ServerInfo(name, address, mod, slotsFull, slotsTotal, map, players)',
//     values,
//     (err, results) => {
//       if (err) {
//         console.log('ERROR posting', err)
//       } else {
//         console.log('POST success!');
//       }
//     },
//   );
// };


// const getInfo = async (req, res) => {
//   const { question_id, page, count } = req.query;
//   await pool.query(
//     `
// SELECT json_build_object(
//     'question', id,
//     'page', ${page || 1},
//     'count', ${count || 5},
//     'results',
//     (
//       select json_agg(
//         json_build_object(
//           'answer_id', id,
//           'body', body,
//           'date', to_timestamp(data_written/1000),
//           'answerer_name', answerer_name,
//           'helpfulness', helpful,
//           'photos',
//           (select json_agg(
//             json_build_object(
//               'id', id,
//               'url', url
//             )
//           ) from answers_photos
//           where answer_id = answers.id
//         )
//       )
//     ) as results
//     from answers
//     where question_id = questions.id
//     )
//   ) from questions where id = $1`,
//     [question_id],
//     (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.status(200).send(results.rows[0].json_build_object);
//       }
//     },
//   );
// };


// module.exports = {
//   postInfo,
// };