const express = require('express');
const db = require('./config/mongoose');
const jwt = require('./config/passportJWT');
const passport= require('passport');
// const expressLayouts =  require('express-ejs-layouts');
// const cookieParser = require('cookie-parser');
// const sassMiddleware = require('node-sass-middleware');

const app = express();
const port = 8000;

// used to extarct jason data from req
app.use(express.json());
app.use(express.urlencoded());


//node sass middleware configuration
// app.use(sassMiddleware({
//     src:'./assets/scss',
//     dest:'./assets/css',
//     debug:true,
//     outputStyle:'extended',
//     prefix:'./css'
// }));

// for parsing cookies 
//app.use(cookieParser());
//path to static content for express
//app.use(express.static('./assets')); 
// for extracting syle and script of subpages into the layout
//app.use(expressLayouts);

// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);

// app.set('view engine','ejs');
// app.set('views','./views');

//use express router
app.use('/', require('./routes'));

//start server
app.listen(port,(err)=>{
    if(err) {console.log(`error in running server${err}`);}

    console.log(`Server is running at port: ${port}`);
})