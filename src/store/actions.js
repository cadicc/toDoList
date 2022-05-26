import {ADD_TODO, SET_TODO_INPUT, DELETE_TODO, EDIT_TODO, UPDATE_TODO} from './constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})
export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})
export const editTodo = payload => ({
    type: EDIT_TODO,
    payload
})
export const updateTodo = (id, payload) => ({
    type: UPDATE_TODO,
    payload,
    id
})