const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // npm install bcrypt
const validator = require('validator'); // npm install validator


const Schema = mongoose.Schema

const userSchema = new Schema({
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    }
})

//making static signup method (you can say this as user defined)

userSchema.statics.signup = async function (email , password){
    if(!email || !password){
        throw Error("All fields must be filled");
    }
    
    if(!validator.isEmail(email)){
        throw Error("Email is not valid!");
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong!");
    }

    const exists = await this.findOne({email}); // check if there is any email already

    if(exists){
        throw Error("Email already exists!");
    }

    const salt = await bcrypt.genSalt(10) ; // add random string to the password
    const hash = await bcrypt.hash(password , salt); // changes the password to another string (encryption)

    const user = await this.create({email , password : hash});

    return user; // whenever we call this function it will , return us this user with email and hashed password
}

//making static signup method (you can say this as user defined)

userSchema.statics.login = async function (email , password) {
    if(!email || !password){
        throw Error("All fields must be filled");
    }

    const userFound = await this.findOne({email}); // check if there is any email already

    if(!userFound){
        throw Error("Email not exists!");
    }

    const match = await bcrypt.compare(password , userFound.password);

    if(!match){
        throw Error("Incorrect Password!");
    }

    return userFound;
}
module.exports = mongoose.model("User" , userSchema);