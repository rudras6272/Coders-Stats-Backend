const User = require('../Models/UserSchema') ;

const SignUpNewUser = async(req , res) => {
    const {name , email , gfgUsername , codeChefUsername , leetCodeUsername} =req.body ; 
    try {

        const newUser = await User.create({
            name , 
            email , 
            gfgUsername ,
            codeChefUsername , 
            leetCodeUsername,
        });
        res.status(200).json({message : "New User Created Successfully" , newUser}) ; 
        
    } catch (error) {
        res.status(500).json({message : "Error Occured While Creating New User" , error}) ; 
    }
}

module.exports =  SignUpNewUser