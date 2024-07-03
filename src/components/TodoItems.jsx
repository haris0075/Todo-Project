import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {updateTodo,deleteTodo,completedTodo} from '../features/TodoSlice'

function TodoItems({todo}) {
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    // console.log(isTodoEditable);
    // console.log(todo);
    let dispatch = useDispatch()
    const handleUpdate = (id, title) => {
        dispatch(updateTodo({
          id,
          title,
        }))}
    const handleComplete = (id ) => {
        dispatch(completedTodo({
          id,
        }))}

    return (
        <>
            <div
            key={todo.id} className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                    todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`} 
                
            >
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.completed}
                    onChange={()=>{
                        handleComplete(todo.id)
                    }}
                />
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                        isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""} `} 
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                {/* Edit, Save Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return;
    
                        if (isTodoEditable) {
                            handleUpdate(todo.id,todoMsg);
                            setIsTodoEditable((prev) => !prev);
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                {/* Delete Todo Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    ❌
                </button>
            </div>
        </>
    );
}

export default TodoItems