function TodoForm() {
    return (
        <form>
            <input hidden placeholder="Escreva sua tarefa..." type="text" />
            <button hidden type="submit">Add</button>
        </form>
    );
}

export default TodoForm;