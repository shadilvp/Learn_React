import React,{useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast","Take A Shower","Walk The Dog"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {

        if(newTask.trim() !== ""){
            setTasks(t =>[...t,newTask]);
            setNewTask("")
        }

    } 

    const removeTask = (index) => {
       const deletetask = tasks.filter((_,i)=> i !== index)
       setTasks(deletetask)
    }

     const moveTaskUp = (index) => {
        if(index > 0){
            const moveup = [...tasks];
            [moveup[index],moveup[index - 1]] = [moveup[index-1] , moveup[index]]
            setTasks(moveup)
        }
     } 

     const moveTaskDown = (index) => {
        if(index < tasks.length -1){
            const movedown = [...tasks];
            [movedown[index],movedown[index + 1]]=[movedown[index + 1],movedown[index]];
            setTasks(movedown)
        }

        
     }

     return(
        <div className="To-Do-List">
            <h1>To Do List</h1>
            <div>
                <input type="text" onChange={handleInputChange} placeholder="Enter A Task ..." value={newTask} />
                <button onClick={addTask} className="add-button">Add</button>
            </div> 

            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>up</button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>down</button>
                </li>)}
            </ol> 

        </div>
     )
}

export default ToDoList