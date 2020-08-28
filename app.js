const express = require('express')
const mongoose = require('mongoose')
const shopRoutes = require('./routes/shopRoutes')

const port = 3000 

const app = express()

mongoose.connect('mongodb://localhost/order', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/shop', shopRoutes)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db')
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})