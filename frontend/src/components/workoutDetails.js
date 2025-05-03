import { useAuthContext } from "../hooks/AuthContext";
import { UseworkoutContext } from "../hooks/useWorkoutcontext";


const WorkoutDetails = ({ workout }) => {
    const {user} = useAuthContext();
    const {dispatch} = UseworkoutContext();
    const handleDelete = async ()=>{
        if (!user) {
            return
        }
        const response = await fetch('/api/workouts/'+ workout._id ,{
            method : 'DELETE',
            headers : {
                "Authorization":`Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type:'DELETE_WORKOUT' , payload : json});
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
            <p>{workout.createdAt}</p>
        </div>
    );
};

export default WorkoutDetails;