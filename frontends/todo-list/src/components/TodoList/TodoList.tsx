import { useState } from "react";

type TaskListItem = {
    id: number,
    name: string,
    isDone: boolean,
    isEditing: boolean
}

type TaskList = TaskListItem[];

const initialTasks: TaskList = [
    { id: 1, name: "Levar o cachorro para passear", isDone: true, isEditing: true },
    { id: 4, name: "Ir ao mercado e comprar XYZ", isDone: true, isEditing: true},
    { id: 2, name: "Levar o lixo para fora", isDone: true, isEditing: true },
    { id: 3, name: "Lavar louça", isDone: true, isEditing: true}
];

function TodoList() {   
    const [tasks, setTasks] = useState<TaskList>(initialTasks); 

    return (
    <div>
        <button type="button" onClick={() => {
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
                    <input type="checkbox" checked={task.isDone} onChange={() => {
                        task.isDone = !task.isDone;
                        setTasks([...tasks]);
                    }}></input>
                    {task.isEditing ? (
                        <input type="text" placeholder="Write here..." onChange={(e) => {
                            task.name = e.target.value;
                            setTasks([...tasks]);
                        }} value={task.name}/>
                        ) : (
                        <span style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.name}</span>
                    )}
                        <button type="button" onClick={() => {
                            task.isEditing = true;
                            setTasks([...tasks]);
                    }}>Edit</button>
                    <button type="button" onClick={() => {  
                        tasks.splice(index,1); 
                        setTasks([...tasks]); 
                    }}>Del</button> 
                    <button type="button" onClick={() => {
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