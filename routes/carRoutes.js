const express = require("express");
const Car = require('../models/Car')
const router = express.Router();

router.get("/", (req, res) => {
    res.render("cars/initial");
});

router.get("/home", async (req, res) => {
    const { city } = req.query;
    try {
        let cars = await Car.find({});
        res.render('cars/index', { cars, city });
    }
    catch (e) {
        res.status(500).render('error', { err: e.message });
    }
})

router.get('/cars/:id' , async(req,res)=>{
    try{
        
        let {id} = req.params;
        let foundCar = await Car.findById(id).populate('reviews');
        
        res.render('cars/show' , {foundCar});
        
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

router.get('/relations', (req, res)=>{
    res.render('investorRelations');
})

module.exports = router;