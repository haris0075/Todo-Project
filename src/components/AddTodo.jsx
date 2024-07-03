import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
// import { addTodo } from '.';
import {addTodo} from '../features/TodoSlice'

function AddTodo() {
    const [todo,setTodo] = useState("");
    let dispatch = useDispatch();

    const handleaddtodo = (e)=>{
        e.preventDefault();
        if(todo !==""){
            dispatch(addTodo(todo));
            setTodo('')
        }
    }

  return (
    <form onSubmit={handleaddtodo}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  )
}

export default AddTodo