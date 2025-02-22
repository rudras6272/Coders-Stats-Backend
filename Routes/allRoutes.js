const express = require('express') ;
const router = express.Router() ;
const SignUpNewUser = require('../Controllers/SignUpNewUser') ;
const LoginUser = require('../Controllers/LoginUser');


router.post('/api/signup' , SignUpNewUser) ;
router.get('/api/login' ,  LoginUser) ; 

module.exports = router ; 