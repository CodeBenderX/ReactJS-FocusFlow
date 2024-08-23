import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodos, handleEditTodos, index} = props
  return (
    <div>
      <li className='todoItem'>
            {children}
            <div className='actionsContainer'></div>
            <button onClick={()=>{
              handleEditTodos(index)
            }}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
              handleDeleteTodos(index)
            }}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
        </li>
    </div>
  )
}
