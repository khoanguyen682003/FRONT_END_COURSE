import React, {useState} from "react"
import {ToastContainer, toast} from 'react-toastify'

export function Notefill({ tasks, setTasks }) {
    // - tasks: mảng hiện tại của App (mảng công việc)
    // - setTasks: hàm do App cung cấp để cập nhật mảng tasks
    //
    // Component này chịu trách nhiệm:
    // - hiển thị input để nhập task mới
    // - khi bấm nút "+", thêm task mới vào mảng tasks bằng setTasks

    const [newTask, setNewTask] = useState('')
    // state local của Notefill để chứa văn bản đang nhập.
    // newTask: chuỗi user gõ vào input.
    // setNewTask: hàm cập nhật newTask.

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    // Hàm xử lý khi người dùng gõ vào input:
    // - Lấy giá trị đang nhập (event.target.value).
    // - Cập nhật state newTask để input luôn hiển thị đúng (controlled input).

    function addTask() {
        if(newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }
    // Hàm addTask được gọi khi người dùng bấm nút thêm:
    // - Kiểm tra newTask.trim() !== '' để tránh thêm chuỗi rỗng.
    // - setTasks([...tasks, newTask]) tạo mảng mới chứa tất cả phần tử cũ + task mới.
    //   Lưu ý: task được thêm ở đây là **string** (không phải object {text, completed}).
    //   Điều này hợp lệ nhưng trong ToDoList ta phải xử lý trường hợp task là string (đã làm).
    // - Sau khi thêm, setNewTask('') để dọn ô input.

    return (
        <>
        <div id="notefill">
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}                /* controlled input: value liên tục từ state newTask */
                onChange={handleInputChange}   /* thay đổi value gọi handleInputChange */
            />
            <button
                type="submit"
                className="add-button"
                onClick={() => {addTask(); toast.success('Đã thêm task thành công')}}
                /* bấm -> gọi addTask -> setTasks ở App */
            >
                <p>+</p>
            </button>
        </div>
        <ToastContainer />
        </>
    )
}

export default Notefill
