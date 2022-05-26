import { useRef, useState } from "react"
import { useStore, actions } from './store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './App.css'

const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
const editIcon = <FontAwesomeIcon icon={faPenToSquare} />

function ToDoList() {

    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    
    const [changeTodo, setChangeTodo] = useState(false)
    const [idTodo, setIdTodo] = useState('')

    const inputRef = useRef()

    const handleSubmit = (todo) => {
        dispatch(actions.addTodo(todoInput)) 
        dispatch(actions.setTodoInput(''))
        inputRef.current.focus()
    }
    // const handleEnter = (e) => {
    //     if (e.key === 'Enter') {
    //         changeTodo === false ? dispatch(actions.addTodo(todoInput)) : dispatch(actions.updateTodo(idTodo, todoInput))
    //         dispatch(actions.setTodoInput(''))
    //         inputRef.current.focus()
    //     }
    // }
    const handleEdit = (todo, index) => {
        setChangeTodo(!changeTodo)
        dispatch(actions.editTodo(todo))
        setIdTodo(index)
        inputRef.current.focus()
    }
    const handleUpdate = (todo) => {
        dispatch(actions.updateTodo(idTodo, todoInput))
        dispatch(actions.setTodoInput(''))
        inputRef.current.focus()
        setIdTodo('')
        setChangeTodo(!changeTodo)
    }

    return (
        <div className="fiel">
            <input
                placeholder="Thêm công việc"
                ref={inputRef}
                value={todoInput}
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
                // onKeyDown={handleEnter}
            ></input>
            <button
             onClick={changeTodo === false  ? handleSubmit : handleUpdate}>
            {changeTodo === false ? 'Thêm công việc' : 'Cập nhật công việc'}
            </button>
            <ul>
                {todos.map((todo,index) => 
                    <li key={index}>
                        <span>{todo}</span>
                        <div className="button-action">
                            <span onClick={() => handleEdit(todo, index)} title='Chỉnh sửa'>{editIcon}</span>
                            <span onClick={() => (dispatch(actions.deleteTodo(index)))} title='Xóa công việc'>{trashIcon}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default ToDoList;