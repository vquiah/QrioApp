const express = require('express');
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const MongoStore = require("connect-mongo");
const connectDB = require("./config/database");
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const subjectsRoutes = require('./routes/subjects');
const subjectPageRoutes = require('./routes/subject');
// const todosRoutes = require('./routes/todos');

//Use .env file in config folder
require('dotenv').config({path: './config/.env'})
// Passport
require('./config/passport')(passport)
//Connect To Database
connectDB(); 
 
//Using EJS for views
app.set("view engine", "ejs")
//Static Folder
app.use(express.static("public"));
// Setup Sessions - stored in MongoDB //!session above passport
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //!Change: MongoStore syntax has changed
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING
    })
  })
)
 
//passport middleware
app.use(passport.initialize());
app.use(passport.session()); 
//Logging
app.use(logger("dev"))

//*Routes
app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/subjects', subjectsRoutes)
app.use('/subject', subjectPageRoutes)
// app.use('/todos', todosRoutes) 






//listen to port
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port 2022, you better catch it!`)
})  