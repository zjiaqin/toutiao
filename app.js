const express = require('express')
const app = express()
const compression = require('express-compression')
app.use(compression())

app.use(express.static('./dist'))
app.listen(3001, function () {
  console.log('Express server running at http://127.0.0.1:3001')
})
