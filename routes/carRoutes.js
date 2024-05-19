const express = require("express");
const Car = require('../models/Car')
const router = express.Router();
// const locations = require('../data/cities.json');
const fs= require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), "data", "cities.json");

router.get("/", (req, res) => {
    res.render("cars/initial");
});

router.get("/home", async (req, res) => {
    const { city } = req.query;
    try {
    
        let cars = await Car.find({});
        let a = city;
        a = a.toLowerCase();
        fs.readFile(p, (err,data)=>{
            const cities = JSON.parse(data);
            res.status(200).render('cars/index', { cars, city , locations : cities[a], isLogin : req.user !== undefined});
        })
    }
    catch (e) {
        res.status(500).render('error', { err: e.message });
    }
})

router.get('/cars/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundCar = await Car.findById(id).populate('reviews');
        res.render('cars/show' , {foundCar, isLogin : req.user !== undefined});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.get('/particular', async (req,res)=>{
    try{
        let {loc} = req.query;
        loc = loc.toLowerCase();
        fs.readFile(p, (err,data)=>{
            const cities = JSON.parse(data);
            res.status(200).render('car/index', { locations : cities[loc], isLogin : req.user !== undefined });
        })
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
})

router.get('/rent', (req, res)=>{
    res.render('cars/rent', {isLogin : req.user !== undefined});
})

router.get('/relations', (req, res)=>{
    res.render('investorRelations', {isLogin : req.user !== undefined});
})

router.get('/leadership', (req, res)=>{
    res.render('leadership', {isLogin : req.user !== undefined});
})
router.get('/rent', (req, res)=>{
    res.render('cars/rent');
})

module.exports = router;