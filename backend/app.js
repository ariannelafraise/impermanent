const express = require('express')
const multer  = require('multer')
const pgp = require('pg-promise')

const db = pgp('postgres://impermanent-dev:test123@localhost:5432/impermanent-dev')

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })


const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.post('/songs', upload.single('song'), (req, res) => {
  console.log(req.file);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
