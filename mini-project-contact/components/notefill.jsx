// notefill.jsx
import React, {useState} from "react" 
import {ToastContainer} from 'react-toastify'

export function Notefill({ tasks, setTasks, setKeyword, sortAsc, setSortAsc }) {
    const [newTask, setNewTask] = useState('')
    function handleInputChange(event) {
        setNewTask(event.target.value)
        setKeyword(event.target.value)   // < thêm dòng này để cập nhật keyword lọc
    }

    function addTask() {
        if(newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }

    return (
    <div id="notefill">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={() => setSortAsc(!sortAsc)}>
        <p>{sortAsc ? "A → Z" : "Z → A"}</p>
      </button>
    </div>
  )
}

export default Notefill
