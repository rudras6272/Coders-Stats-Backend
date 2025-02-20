const express = require('express') ;
const allRoutes = require('./Routes/allRoutes') ;
const Dbconnection = require('./DB/connection') ;
const cors = require('cors') ;
const app = express() ; 
require('dotenv').config({path : './.env'}) ;
 

const PORT = process.env.PORT || 5000 ;

app.use(express.json()) ;
app.use(cors()) ;

Dbconnection() ;

app.use('/' , allRoutes) ; 

app.listen(PORT , () =>{
    console.log(`server is Running at Port : ${PORT}`) ;
})
