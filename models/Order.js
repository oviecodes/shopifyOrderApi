const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order: Object
})

const Order = mongoose.model('order', orderSchema)
module.exports = Order