const userSchema = require('../models/userModel');
const jwt = require('jsonwebtoken');

const creatToken = (_id)=>{
    return jwt.sign({_id} , process.env.SECRET , {expiresIn : '3d'});
}
const loginUser= async (req , res) => {
    const {email , password} = req.body;

    try {
        const userFoundforLogin = await userSchema.login(email , password);

        // creating a token
        const token = creatToken(userFoundforLogin._id);
        res.status(200).json({email , token});
    } catch (error) // if there is any error in login function , we throw that and catch here
    {
        res.status(404).json({error:error.message})
    }
}


const signUpUser = async (req , res) => {
    const {email , password} = req.body;

    try {
        const final_user_data = await userSchema.signup(email , password);

        // creating a token
        const token = creatToken(final_user_data._id);
        res.status(200).json({email , token});
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = { loginUser, signUpUser};