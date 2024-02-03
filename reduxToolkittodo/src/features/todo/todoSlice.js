import {createSlice, nanoid} from "@reduxjs/toolkit";

// for generating unique id's we are using nanoid. it is basically just a method which generates unique id

// store starting m kesa dikhega that's why we have created initialState we have created this initial state as object
const initialState = {
    todos:[{id:1,text:"hello world"}]
}
// slice reducer ka hi bda version hai
// next step we have created slice  by calling the function CreateSlice and passed an object to it with our reducers (addT
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers :{
        // in methods m state and action ka access humesha milega
        // state: initial state ko represent kar rha hai , initialstate ke anadar kya kya values hai un sabka access humko dega 
        // actions : values provide karega jese ki delete karne k liye id lagegi to vo action provide karega
                    //   in short jo bhi data pass ho rha hai 
        addTodo:(state,action)=> {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id ==  action.payload.id ? action.payload : todo )
        }
        }
})

// is tarah se export nhi hota 
// 1st step export individual functionalities
// then store ko bhi awareness rahni chahiye reducers ki so export todoSlice.reducer also

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer