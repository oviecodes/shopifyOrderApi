
const express = require('express')
const router = express.Router()
const shopController = require('../controller/shopController')

router.route('/createOrder')
    .post(shopController)

module.exports = router