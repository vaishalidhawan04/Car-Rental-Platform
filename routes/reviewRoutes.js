const express = require('express');
const Car = require('../models/Car');
const Review = require('../models/Review');
const { validateReview } = require('../middleware')
const router = express.Router();

router.post('/cars/:carId/review', validateReview, async (req, res) => {
    try {
        let { carId } = req.params;
        let { rating, comment } = req.body;
        const car = await Car.findById(carId);
        const review = new Review({ rating, comment });
        car.reviews.push(review);
        await review.save();
        await car.save();
        res.redirect(`/cars/${carId}`)
    }
    catch (e) {
        res.status(500).render('error', { err: e.message })
    }
})

module.exports = router;