import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                completed:false,
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            // console.log(action.payload);
            state.todos = state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        updateTodo:(state,action)=>{
            const { id, title,  } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = title;
            }
        },
        completedTodo:(state,action)=>{
            const { id } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.completed = !existingTodo.completed;
            }
        },

    }
})

export const {addTodo,deleteTodo,updateTodo,completedTodo} = todoSlice.actions

export default todoSlice.reducer