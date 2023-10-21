// ejs setup karny ke liye 

// 1) ejs install --- npm i ejs
// 2) configure ejs --- app.set("view engine" , "ejs")
// 3) ek views name sy folder banaoo
// 4) usme ejs files banaoo 
// 5) send ki jagah render karoo

const express = require('express')
const app = express()

app.set("view engine" , "ejs");
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render('index' , {age : 21 , myName : "Mubashir M.Ibrahim" })
})
app.get('/profile', function (req, res) {
  res.send('Hello Mubashir EJS Setup Page')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})


app.get('/error', function (req, res) {
  // throw new Error()
  throw Error("Something Went Wrong. from throw new Error")
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


app.listen(5000)