import { useState, useEffect } from "react"
import Footer from './components/Footer';
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import MyCalendar from "./components/Calendar";
import RandomQuote from "./components/RandomQuote";
import PomodoroTimers from "./components/PomodoroApp";

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
  <div className="app-container">
      <main className="main-content">
        <div className="todo-section">
          <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
          <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
        </div>
        <div className="calendar-section">
          <MyCalendar />
        </div>
        <div className="quote-section">
          <RandomQuote />
        </div>
        <div className="pomodoro-section">
          <PomodoroTimers/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
