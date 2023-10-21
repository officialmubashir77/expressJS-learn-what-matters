-- node vs express, node is the main thing express ke code sy ham server ka code likh paty hyn 
and server kaisa react kary ga wo bhi express ki help sy likhty hyn.

-- what is express js ? - npm-package , routing , server side management 

-- why express js ? - http is difficult to use , express makes it easier

-- Routing - routing banane ke process ko ham kehty hyn routing.
    /profile
    /home
    /contact
    /profile/mubashir/dgvdfddgdfgdfgdfgdsf/gfddgdfdfgfdgdfgdfgsggd


-- Middleware 


-- Request and Response , Next
-- Request me sara Data hota hy any waly user ki Request ki taraf ka , jaisy ki uski location , device Info and other things.Response me controls hoty hyn jin ke basis py ham server sy Response bhej paaty hyn .
-- next() is just a push so that our request moves to the next thing which should be executed.


-- Route Parameters
facebook.com/profile/mubashir
facebook.com/profile/ali
facebook.com/profile/wajahat
facebook.com/profile/safdar
____________esa koi bhi route jiska koi hissa bar bar same rehta hy and kuch hissa bar bar change hota hy toh isky liye aap dynamic route bana skty hyn.____________
facebook.com/profile/:username

To make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req.params.keyName


-- Templates Engines  ==> ye 1 style of markup se convert kar ke apko html dety hyn. 
-- Templates Engines Or bhi hoty hyn jesy ke ,,, pug , handlebars , ejs , jade , par ham jo use karengy or kar rhy hyn wo hy Ejs kiunky it is very very easy and like 99% html. 

=> ejs 
--> html ke pas superpowers nhi hyn calculation karny ki html me me agar 1+2 likh doon toh asitiz print karwa dega calculation nhi karyga . EJS me agar 1+2 likhon toh ejs me calculation karny ki possibility hoti hy.EJS html hi hy bs smjhoo name ho gya html ka ejs . like html with superpowers is called EJS.
--> ejsSetup.js --- View 

// ejs setup karny ke liye 
// 1) ejs install --- npm i ejs
// 2) configure ejs --- app.set("view engine" , "ejs")
// 3) ek views name sy folder banaoo
// 4) usme ejs files banaoo 
// 5) send ki jagah render karoo ==> render karty waqt make sure aap views folder ke andar wali hi koi file ka name liken , oor render function me ejs mention na karen  



Static Files
==> images , stylesheets , frontend js setup karna
Static files ko setup karny ke liye 
1) create a folder called public
2) create three folders inside it , images , stylesheets , and Javascripts
3) configure the express Static in index.js | script.js file 
4) understand the path


HTTP Methods - get and post 
last nodejs video already explain it.



Error Handling
https://expressjs.com/en/guide/error-handling.html

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
