
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const Order = require('../models/Order')

//create order
const createOrder = async(req, res) => {
    try{
        const response = await axios.post(`https://${process.env.API_KEY}:${process.env.PASSWORD}@hybrid-legend.myshopify.com/admin/api/2020-07/orders.json`,
            req.body
        )
        const order = await Order.create(req.body)
        const result = response.data.order
        res.send(result)
    } catch(e){
        console.log(e)
    }
    
}

module.exports = createOrder