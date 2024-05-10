import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            return [...state, action.payload]
        },
        removeTodo: (state, action) => {
            const upDatedState = state.filter((item) => item.id !== action.payload)
            return upDatedState
        },
    },
})

export const { addNewTodo, removeTodo } = todoListSlice.actions

export default todoListSlice.reducer