const express = require('express')
const newsRouter = express.Router()

newsRouter.get('',async(req,res) => {
    res.render('MainPage')

})

newsRouter.get('/user', function (req, res) {
    res.render('user');
    })



module.exports = newsRouter