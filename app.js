const express = require('express');
const app=express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride  = require('method-override');
const authRoutes = require("./routes/authRoutes");
const carRoutes = require('./routes/carRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const ejsMate = require('ejs-mate');
const seedDB = require('./seed');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/car_db')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})

app.engine('ejs' , ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));


let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.use(session(configSession));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static("public"));



app.use(authRoutes);
app.use(carRoutes);
app.use(reviewRoutes);
//seedDB();
app.listen(8080, ()=>{
    console.log("Server connected to port 8080");
})