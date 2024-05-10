import React from "react"
import "../css/Main.css"
import { useSelector, useDispatch } from 'react-redux'
import { addNewTodo, removeTodo } from '../redux/todoListSlice'
import { v4 } from 'uuid'

export default function Main() {

    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todoList)

    const todoListToRender = todos.map(todo =>
    (<div className="todoElement">
        <input type="checkbox" className="todoCheckbox"/>
        <li className="todoName">
            {todo.todoName}
        </li> 
        <button className="todoDeleteButton" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>))

    const [newTodo, setNewTodo] = React.useState({
        id: "",
        todoName: "",
    })
    function handleChange(event) {
        setNewTodo(
            {
                id: v4(),
                todoName: event.target.value
            }
        )
    }
    function handleClick() {
        dispatch(addNewTodo(newTodo))
    }

    function deleteTodo(id) {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            <div className="newTodoContainer">
                <input className="newTodoInput" placeholder="type new todo here..." onChange={handleChange} />
                <button className="newTodoButton" onClick={handleClick}>Create</button>
            </div>
            <div className="todoListContainer">
                <ul>
                    {todoListToRender}
                </ul>
            </div>          
        </div>
    )
}