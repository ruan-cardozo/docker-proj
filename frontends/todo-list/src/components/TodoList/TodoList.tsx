const tasks = [
    { id: 1, name: "Levar o cachorro para passear", isDone: true },
    { id: 4, name: "Ir ao mercado e comprar XYZ", isDone: true},
    { id: 2, name: "Levar o lixo para fora", isDone: true },
    { id: 3, name: "Lavar louça", isDone: true }
];

function TodoList() {    
    return (     
        <ul style={{ listStyleType: "counter-style"}}>
            {tasks.map(task => (
                <li key={task.id} style={{textAlign: "left"}}>
                    <input type="checkbox" checked={task.isDone} ></input>
                    {task.name}
                </li>
            ))}
        </ul>
    );    
}

export default TodoList;