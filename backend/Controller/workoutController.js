const Workout = require('../models/workoutModels')
const mongoose = require('mongoose');
// get all the workouts
const getAllWorkouts = async (req , res) => {
    const user_id = req.user._id;
    const allWorkouts = await Workout.find({user_id}).sort({createdAt : -1}) // -1 for descending order
    res.status(200).json(allWorkouts);
}

// get single workouts
const getOneWorkouts = async (req , res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout!"});
    }
    const singleWorkout = await Workout.findById(id);
    if(!singleWorkout){
        return res.status(404).json({error : "No such workout!"});
    }
    res.status(200).json(singleWorkout);
}

// Post/Create a new workouts
const createWorkout = async (req , res) => {
        const {title , reps , load } = req.body

        let emptyFields = []

        if(!title){
            emptyFields.push('title')
        }
        if(!reps){
            emptyFields.push('reps')
        }
        if(!load){
            emptyFields.push('load')
        }

        if(emptyFields.length > 0){
            return res.status(404).json({error : "Please Fill all the Fields" , emptyFields});
        }
        // adding doc to the DB
        try{
            const user_id = req.user._id;
            const new_workout = await Workout.create({title , reps , load , user_id});//passing values to schema constructor
            res.status(200).json(new_workout);      //status(200) to check everything is OK
        }
        catch(error){
            res.status(400).json({error : error.message});
        }
}
// delete a workouts
const deleteWorkout = async (req , res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout!"});
    }
    const toDeleteWorkout = await Workout.findOneAndDelete({_id : id});
    if(!toDeleteWorkout){
        return res.status(404).json({error : "No such Workout!"});
    }
    res.status(200).json(toDeleteWorkout)
}

// Update a workouts
const updateWorkout = async (req , res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout!"});
    }
    const toUpdateWorkout = await Workout.findOneAndUpdate({_id : id} , {...req.body});
    if(!toUpdateWorkout){
        return res.status(404).json({error : "No such Workout!"});
    }
    res.status(200).json(toUpdateWorkout);
}


module.exports ={
    getAllWorkouts,
    getOneWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout

}