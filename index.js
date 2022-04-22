const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/', (req, res) => {
  res.send({status:200, msg:"hello world"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(" url : http://localhost:3000");
})