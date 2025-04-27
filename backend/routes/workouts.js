const express = require('express');
const Workout = require('../models/workoutModels')
const {getAllWorkouts , getOneWorkouts , createWorkout , deleteWorkout,updateWorkout} = require('../Controller/workoutController')

const router = express.Router();

//To GET all the workouts

router.get('/', getAllWorkouts);
//To GET single workouts
router.get('/:id',getOneWorkouts)

// POST new workout
router.post('/' ,createWorkout);


// POST new workout
// router.post('/' ,async (req , res)=>{
//     const {title , reps , load } = req.body
//     try{
//         const new_workout = await Workout.create({title , reps , load});//passing values to schema constructor
//         res.status(200).json(new_workout);      //status(200) to check everything is OK
//     }
//     catch(error){
//         res.status(400).json({error : error.message});
//     }
//     // res.json({mssg : 'POST a new workout'})
// })

// DELETE single workout
router.delete('/:id' ,deleteWorkout)

// UPDATE single workout
router.patch('/:id' , updateWorkout);


module.exports = router;