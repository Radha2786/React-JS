import {useContext, createContext} from 'react'
export const TodoContext = createContext({
    todos : [
        {id: 1 , todo:"Buy groceries", completed: false}
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    ToggleCompleted:(id)=>{}

})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext);
} 