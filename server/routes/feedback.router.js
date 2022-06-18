const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
  console.log('in /feedback GET');
  let queryString = `SELECT * FROM feedback ORDER BY id DESC;`; // new feedback at top. order by descending
  pool.query(queryString).then((results) => {
    res.send(results.rows);
  }).catch((err) => {
    console.log(err)
    res.sendStatus(500);
  })
})

router.post('/', (req, res) => {
  console.log(req.body);
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
  let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
  pool.query(queryString, values).then((results) => {
    res.sendStatus(201);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = router;