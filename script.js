// express use 

const express = require('express')
const app = express()

// Middleware 1 esa function hota hy jo har route sy pehly chalta hy , iska matlab ke sary routes me sy koi bhi chaly usse pehly middelware chlta hy and usmen likha code pehly execute hota hy . Code lines by line chalta hy is wjha sy route sy pehly hamen middleware ka code likhna hota hy .
// req me request karny waly ka data milyga ooor res me server sy us request ka response bhejengy .
// node ke sath 1 masla hy oor wo ye ke agar control 1 baar bhi kisi middleware par gya to control khud sy agly route ya middleware par nhi jayega ussy agly par le jany ke liye aapko push karna parega aur ye push kehlayega next ko chalana

app.use(function(req , res , next) {
    console.log("Middleware Chal gya ...");
    next();
})
app.use(function(req , res , next) {
    console.log("2sra Middleware Chal gya ...");
    next();
})


app.get('/', function (req, res) {
  res.send('Hello Home Page')
})
app.get('/profile', function (req, res) {
  res.send('Hello Mubashir (Your Profile Page)')
})

app.listen(5000)