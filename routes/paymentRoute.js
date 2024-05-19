const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.renderProductPage);
router.post('/createOrder', paymentController.createOrder);

module.exports = router;