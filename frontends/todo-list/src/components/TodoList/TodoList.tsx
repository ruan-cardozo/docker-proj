import { useState } from "react";

type TaskListItem = {
    id: number,
    name: string,
    isDone: boolean
}

type TaskList = TaskListItem[];

const initialTasks: TaskList = [
    { id: 1, name: "Levar o cachorro para passear", isDone: true },
    { id: 4, name: "Ir ao mercado e comprar XYZ", isDone: true},
    { id: 2, name: "Levar o lixo para fora", isDone: true },
    { id: 3, name: "Lavar louça", isDone: true}
];

function TodoList() {   
    const [tasks, setTasks] = useState<TaskList>(initialTasks); 
    return (
    <div>
        <button type="button" onClick={() => {
            const newItem: TaskListItem = {
                id: tasks.length + 1,
                name: "New Task",
                isDone: false
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
                    <input type="text" onChange={(e) => {
                        console.log(e);
                        task.name = e.target.value
                        setTasks([...tasks]);
                    }} value={task.name}/>
                    <button type="button" onClick={() => {  
                        tasks.splice(index,1); 
                        setTasks([...tasks]); 
                    }}>Del</button> 
                </li>
            ))}
        </ul>
    </div>    
    );    
}

export default TodoList;