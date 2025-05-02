require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/userRoutes');
//express app
const app = express();

//middleware

app.use(express.json());

//registering middleware
app.use((req , res , next)=>{
    console.log(req.path , req.method);
    next();
})

// routes

app.use('/api/workouts',workoutRoutes); 
app.use('/api/user',userRoutes);

// //getting the request
// app.get('/' , (req , res)=>{
//     res.json({mssg:'Welcome to the App!'});
// })

//connect to the database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        //listening to the request
        app.listen(process.env.PORT , ()=>{
            console.log("connceted to the DB & Listening on port " , process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
