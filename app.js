const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
  res.send('<h1>I am an Enneagram Type 6: The Loyalist</h1> <p>The pros to working with a type 6 is that they are devoted to the project</p><p>The cons of working with a type 6 is that they are risk averse which can stunt a project. </p>')
})





app.listen(port, () => {
  console.log(`Mike app listening on port ${port}`)
})
