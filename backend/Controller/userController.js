const userSchema = require('../models/userModel');

const loginUser= async (req , res) => {
    res.json({mssg : 'login user'})
}


const signUpUser = async (req , res) => {
    const {email , password} = req.body;

    try {
        const final_user_data = await userSchema.signup(email , password);

        res.status(200).json({email , final_user_data});
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = { loginUser, signUpUser};