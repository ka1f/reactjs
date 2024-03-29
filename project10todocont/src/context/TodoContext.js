import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todo: [ {
            id: 1,
            todo: "message",
            completed: false,
            }],
            
            addTodo:(todo)=>{},
            updateTodo: (id,todo)=>{},
            deleteTodo:(id)=>{},
            toggleComplete: (id)=>{},


})


export const Todoprovider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext)
}