import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "./constants"

const innitState = {
    todoInput: '',
    todos: JSON.parse(localStorage.getItem('todoList')) ?? []
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
           return {
               ...state,
               todoInput: action.payload
           }
        case ADD_TODO:
            const prevTodo = [...state.todos, action.payload]

            const jsonTodo = JSON.stringify(prevTodo)
            localStorage.setItem('todoList', jsonTodo)

            return {
                ...state,
                todos: prevTodo
            }
        case DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)

            const updateJSONTodo = JSON.stringify(newTodos)
            localStorage.setItem('todoList', updateJSONTodo)

            return {
                ...state,
                todos: newTodos
            }
        case EDIT_TODO: 
            return {
                ...state,
                todoInput: action.payload 
            }
        case UPDATE_TODO:
            let updateTodos = [...state.todos]
            updateTodos[action.id] = action.payload
            return {
                ...state,
                todos: updateTodos
            }
        default:
            throw new Error('Sai cú pháp!')
        }
}

export { innitState }
export default reducer