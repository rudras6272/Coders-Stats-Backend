const mongoose = require('mongoose') ;

const Dbconnection = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)  ;
        console.log(`DB connected Successfully : ${connectionInstance.connection.host}`) ;
    } catch (error) {
        console.log(`Error Occured While Connecting to DB : ${error}`) ;
        process.exit(1) ;
    }
}

module.exports =  Dbconnection ;