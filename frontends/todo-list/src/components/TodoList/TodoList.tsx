import { useState } from "react";
import { TaskList, TaskListItem } from "./types";

const initialTasks: TaskList = [
    { id: 1, name: "Levar o cachorro para passear", isDone: true, isEditing: true },
    { id: 2, name: "Levar o lixo para fora", isDone: true, isEditing: true },
    { id: 3, name: "Lavar louça", isDone: true, isEditing: true}
];

function TodoList() {   
    const [tasks, setTasks] = useState<TaskList>(initialTasks); 

    return (

    <div>
        <button style={{cursor: "pointer"}} type="button" onClick={() => {

            const newItem: TaskListItem = {
                id: tasks.length + 1,
                name: "",
                isDone: false,
                isEditing: true
            };

            tasks.push(newItem);
            setTasks([...tasks]);
        }}>Add</button>    
        <ul style={{ listStyleType: "counter-style"}}>
            {tasks.map((task,index) => (
                <li key={task.id} style={{textAlign: "left"}}>
                    <input style={{cursor: "pointer"}} type="checkbox" checked={task.isDone} onChange={() => {
                        task.isDone = !task.isDone;
                        setTasks([...tasks]);
                    }}></input>
                    {task.isEditing ? (
                        <input style={{cursor: "pointer"}} type="text" placeholder="Write here..." onChange={(e) => {
                            task.name = e.target.value;
                            setTasks([...tasks]);
                        }} value={task.name}/>
                        ) : (
                        <span style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.name}</span>
                    )}
                        <button style={{cursor: "pointer", marginLeft: '5px', alignItems: 'center'}} type="button" onClick={() => {
                            task.isEditing = true;  
                            setTasks([...tasks]);
                    }}>Edit</button>
                    <button style={{cursor: "pointer", marginLeft: '5px', alignItems: 'center'}} type="button" onClick={() => {  
                        tasks.splice(index,1); 
                        setTasks([...tasks]); 
                    }}>Del</button> 
                    <button style={{cursor: "pointer", marginLeft: '5px', alignItems: 'center'}} type="button" onClick={() => {
                        task.isEditing = false;
                        setTasks([...tasks]);
                    }}>Save</button>
                </li>
            ))}
        </ul>
    </div>    
    );    
}

export default TodoList;