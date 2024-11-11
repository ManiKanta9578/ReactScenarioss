import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, taskName:'Buy Milk', completed: false}]
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id: nanoid(),
                taskName: action.payload,
                completed: false,
            }
            state.todos.push(todo);
        },
        deleteTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo:(state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id
                ? {...todo, taskName: action.payload.input}
                : todo
            )
        },
        completeTodo:(state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload
                ? {...todo, completed: !todo.completed}
                : todo
            )
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;