import { useState, useEffect } from 'react'
import './App.css'
import { Title } from "../components/title.jsx";
import { Notefill } from "../components/notefill.jsx";
import { Button } from '../components/button.jsx'
import { buttonTitle } from '../components/buttonTitle.jsx'
import { ToDoList } from '../components/todolist.jsx'

function TitlePart(props) {
  return <h2>{props.title}</h2>
}

function App() {
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  // Khai báo state "tasks" (mảng các công việc) và hàm cập nhật "setTasks"
// useState được khởi tạo bằng một hàm để chỉ chạy 1 lần khi component mount
const [tasks, setTasks] = useState(() => {
    // 3.2 Get data (lấy data từ localStorage khi app vừa mount)
    const obj = JSON.parse(localStorage.getItem('tasks')); 
    // Nếu có dữ liệu thì trả về mảng đã parse, nếu null thì trả về mảng rỗng
    return obj || []; 
  });

// 3.1 Lưu trữ data (mỗi khi tasks thay đổi thì chạy lại useEffect)
useEffect(() => {
    // Chuyển mảng tasks sang chuỗi JSON
    const setjson = JSON.stringify(tasks);
    // Lưu chuỗi JSON vào localStorage với key là 'tasks'
    localStorage.setItem('tasks', setjson);
  }, [tasks]); // dependency [tasks]: chỉ chạy lại khi tasks thay đổi

// Hàm removeTask: xoá một task theo id
const removeTask = (id) => {
  // Lọc ra mảng tasks mới, bỏ đi task có id trùng với tham số
  const newTasks = tasks.filter(task => task.id !== id);
  // Cập nhật state tasks => đồng thời trigger useEffect để sync lại localStorage
  setTasks(newTasks); 
};


  return (
    <>
      <h1>Mini Todo Demo</h1>
      <h3>Mức cơ bản - Ứng dụng ghi chú cơ bản</h3>

      <fieldset>
        {/* 
          TitlePart {...Title[0]} 
          - Hiển thị tiêu đề vùng nhập (Title[0] lấy từ components/title.jsx).
        */}
        <TitlePart {...Title[0]} />

        {/*
          Notefill receives tasks and setTasks
          - Notefill là component chứa ô nhập và nút "+" để thêm task mới.
          - Nó **đọc** tasks (nếu cần) và **gọi setTasks** để cập nhật mảng ở App.
          - Dòng dưới truyền state và hàm cập nhật từ App xuống Notefill:
            <Notefill tasks={tasks} setTasks={setTasks} />
          - Luồng dữ liệu: khi người dùng nhập và nhấn "+", Notefill sẽ dùng setTasks(...) 
            (hàm do App cung cấp) để thêm task vào mảng tasks ở App.
        */}
        <Notefill tasks={tasks} setTasks={setTasks} />

        <div id="buttonTitle">
          {/*

          */}
          <Button {...buttonTitle[0]} onClick={() => setFilter('all')} />
          <Button {...buttonTitle[1]} onClick={() => setFilter('active')} />
          <Button {...buttonTitle[2]} onClick={() => setFilter('completed')} />
        </div>
      </fieldset>

      <fieldset>
        {/*
          TitlePart {...Title[1]}
          - Hiển thị tiêu đề vùng danh sách (Title[1] lấy từ components/title.jsx).
        */}
        <TitlePart {...Title[1]} />

        {/*
          ToDoList receives three props:
          - tasks: mảng dữ liệu do App quản lý (nguồn dữ liệu chính).
          - setTasks: hàm cập nhật mảng tasks (để ToDoList có thể xóa, di chuyển, toggle).
          - filter: trạng thái lọc hiện tại (all | active | completed).
          
          Vai trò:
          - App giữ "nguồn thật" của dữ liệu (tasks).
          - ToDoList chịu trách nhiệm hiển thị (theo filter) và thực hiện các thao tác làm thay đổi mảng gốc
            bằng cách gọi setTasks (ví dụ xóa phần tử gốc, hoán đổi vị trí, toggle completed).
          - Khi ToDoList gọi setTasks, App cập nhật state => render lại cả cây component, truyền tasks mới xuống ToDoList.
          
          Tóm tắt luồng dữ liệu giữa các component trong App:
          - Notefill (child) -> gọi setTasks(...) -> cập nhật tasks ở App (parent)
          - Button (child) -> gọi onClick (setFilter) -> cập nhật filter ở App -> truyền filter xuống ToDoList
          - ToDoList (child) -> hiển thị tasks dựa trên filter; thao tác trên tasks thông qua setTasks
        */}
        <ToDoList tasks={tasks} setTasks={setTasks} filter={filter} />
      </fieldset>
    </>
  )
}

export default App
