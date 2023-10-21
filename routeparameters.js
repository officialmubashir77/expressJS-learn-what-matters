const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Hello (Route Parameter) Home Page')
})

// app.get('/profile/mubashir', function (req, res) {
//   res.send('Hello Mubashir (Your Profile Page)')
// })

// we make dynamic routing .
app.get('/profile/:username', function (req, res) {
    //url me jab bhi apke pas aisa pattern hoo
    // /etc/:username
    console.log(req);
    res.send(`Hello From ${req.params.username} (Your Profile Page)`)
})

app.listen(5000)