import './App.css'
import CreateTaskButton from './components/TodoList/CreateTaskButton'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import TodoForm from './components/TodoList/TodoForm'
import { useState } from 'react'


function App() {
  const name = useState("Ruan Cardozo");
  console.log(name);
  
  return (
    <>
    <header>
      <HeaderTitle />
    </header>
    <body>
      <CreateTaskButton/>
      <TodoForm/>
    </body>
    </>
  )
}

export default App
