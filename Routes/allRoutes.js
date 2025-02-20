const express = require('express') ;
const router = express.Router() ;
const SignUpNewUser = require('../Controllers/SignUpNewUser') ;

router.post('/api/signup' , SignUpNewUser) ;

module.exports = router ; 