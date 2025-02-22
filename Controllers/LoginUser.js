const User = require('../Models/UserSchema') ;

const LoginUser = async(req , res) => {
    const{email} = req.body ; 
    try {
        const user = await User.findOne({email}) ;
        if((!user)){
            return res.status(400).json({message : "User Not Found"}) ; 
        }
        res.status(200).json({gfgUsername: user.gfgUsername, codeChefUsername: user.codeChefUsername, leetCodeUsername: user.leetCodeUsername}) ;
    } catch (error) {
        console.log(error) ; 
        res.status(500).json({message : "Error Occured In Login Api"})
    }
}

module.exports = LoginUser