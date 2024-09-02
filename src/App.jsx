import { useState, useEffect } from "react"
// import { Container, Box} from '@mui/material';
import ResponsiveAppBar from './components/Header'; // Adjust this import path if needed
import Footer from './components/Footer'; // Import the Footer component
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEditted = todos[index]
    setTodoValue(valueToBeEditted)
    handleDeleteTodos(index)
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
  //   <>
  //     <ResponsiveAppBar />
  //         <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
  //         <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>       
  //     <Footer />
  //  </>
  <div className="app-container">
      <ResponsiveAppBar/>
      <main className="main-content">
        <div className="todo-section">
          <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
          <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
        </div>
        <div className="calendar-section">
          <Calendar />
        </div>
        <div className="quote-section">
          <Quote />
        </div>
        <div className="music-player-section">
          <MusicPlayer />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
