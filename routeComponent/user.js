const  route = require('express').Router()
const data = require("../data/dataStore")

// const {bollywood , technology , hollywood, fitness, food, homeLatest, latestArticle, homeTopPost, homeTopPostLatest } = require('../controller/usercontroller')

// route.get('/api/bollywood' , bollywood)

// route.get('/api/technolgy' , technology)

// route.get('/api/hollywood' , hollywood)

// route.get('/api/fitness' , fitness)

// route.get('/api/food' , food)

// route.get('/api/homeLatest' , homeLatest)

// route.get('api/latestArticle' ,latestArticle)

// route.get('api/homeTopPost', homeTopPost)

// route.get('api/homeTopPostLatest' ,homeTopPostLatest)

route.get("/api",(req,res)=>{
    res.send(data)
})

module.exports = route


