import React from "react"
// import thư viện toastify để hiển thị thông báo popup nhỏ
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/*
  Component ToDoList
  ------------------
  - Nhận props từ component cha (App.jsx hoặc Notefill.jsx):
    + tasks: mảng chứa danh sách công việc
    + setTasks: hàm cập nhật lại mảng tasks (dùng để thêm/xóa/sửa)
    + filter: trạng thái lọc ("all", "active", "completed")
  - Giữ nguyên className/id để CSS ngoài file App.css hoạt động
*/
export function ToDoList({ tasks, setTasks, filter }) {
  // Lấy thời gian hiện tại để hiển thị dưới mỗi task
  const todayText = new Date().toLocaleString()

  /*
    Hàm isCompleted(task)
    ----------------------
    - Dùng để kiểm tra task đã hoàn thành chưa
    - Có thể gặp 2 dạng task:
      + string: chỉ là "Đi chợ" → mặc định chưa hoàn thành
      + object: { text: "Đi chợ", completed: true }
    - Một số key phổ biến cần kiểm tra: completed / checked / done
  */
  const isCompleted = (task) => {
    if (!task) return false
    if (typeof task === "string") return false
    return !!(task.completed || task.checked || task.done)
  }

  /*
    Biến visible
    -------------
    - Chứa danh sách task sau khi lọc theo filter
    - map() để gói mỗi task thêm index gốc → { task, idx }
      (quan trọng để khi xóa/di chuyển thì trỏ đúng task trong mảng gốc)
    - filter() để lọc:
      + "active": chưa hoàn thành
      + "completed": đã hoàn thành
      + "all": giữ nguyên
  */
  const visible = tasks
    .map((task, idx) => ({ task, idx }))
    .filter(({ task }) => {
      if (filter === "active") return !isCompleted(task)
      if (filter === "completed") return isCompleted(task)
      return true
    })

  /*
    Hàm deleteTask(index)
    ----------------------
    - Xóa task theo vị trí index trong mảng
    - Cách làm:
      1. copy mảng cũ bằng slice()
      2. dùng splice(index, 1) để bỏ 1 phần tử
      3. return copy để setTasks cập nhật state mới
    - Liên hệ với Notefill.jsx:
      + Khi bấm nút "Xoá" → gọi deleteTask → danh sách mới hiển thị
  */
  function deleteTask(index) {
    setTasks((prev) => {
      const copy = prev.slice()
      copy.splice(index, 1)
      return copy
    })
  }

  /*
    Hàm moveUp(index)
    ------------------
    - Đẩy task lên 1 bậc trong mảng
    - Chỉ làm nếu index > 0 (không được vượt biên)
    - Cách làm:
      1. copy mảng
      2. hoán vị copy[index] và copy[index-1]
      3. return copy
  */
  function moveUp(index) {
    if (index <= 0) return
    setTasks((prev) => {
      const copy = prev.slice()
      const temp = copy[index - 1]
      copy[index - 1] = copy[index]
      copy[index] = temp
      return copy
    })
  }

  /*
    Hàm moveDown(index)
    --------------------
    - Đẩy task xuống 1 bậc trong mảng
    - Chỉ làm nếu index < length - 1
    - Tương tự moveUp, chỉ khác chiều hoán vị
  */
  function moveDown(index) {
    setTasks((prev) => {
      if (index >= prev.length - 1) return prev
      const copy = prev.slice()
      const temp = copy[index + 1]
      copy[index + 1] = copy[index]
      copy[index] = temp
      return copy
    })
  }

  /*
    Hàm toggleCompleted(index)
    ---------------------------
    - Dùng để tick/untick trạng thái hoàn thành của 1 task
    - Nếu task hiện tại là string → biến thành object { text, completed: true }
    - Nếu task là object → đảo ngược trạng thái completed/checked/done
    - Liên hệ:
      + Khi bấm checkbox trong ToDoList.jsx → gọi toggleCompleted
      + App.jsx giữ state tasks sẽ cập nhật lại ngay
  */
  function toggleCompleted(index) {
    setTasks((prev) =>
      prev.map((t, i) => {
        if (i !== index) return t
        if (typeof t === "string") return { text: t, completed: true }
        const current = !!(t.completed || t.checked || t.done)
        return { ...t, completed: !current, checked: !current, done: !current }
      })
    )
  }

  /*
    JSX trả về:
    ------------
    - Duyệt visible.map() để render từng task ra <li>
    - Các className/id như cũ để CSS hoạt động
    - Mỗi task có:
      + span.text: nội dung
      + 3 nút: Xoá / Xếp trên / Xếp dưới
      + <p>: ngày giờ
      + checkbox: toggleCompleted
      + <p>: chữ "Đã hoàn thành"
    - ToastContainer: phần hiển thị thông báo
  */
  return (
    <>
      <div id="todolist">
        {visible.map(({ task, idx }) => (
          <li key={idx}>
            {/* Nội dung task: nếu object thì lấy task.text, nếu string thì hiển thị trực tiếp */}
            <span className="text">{typeof task === "object" ? task.text : task}</span>

            {/* Nút xoá */}
            <button
              className="delete-button"
              onClick={() => {
                deleteTask(idx)
                toast.success("Đã xoá task thành công")
              }}
            >
              Xoá
            </button>

            {/* Nút đẩy lên */}
            <button
              className="move-button"
              onClick={() => {
                moveUp(idx)
                toast.success("Đã đẩy task lên")
              }}
            >
              Xếp trên
            </button>

            {/* Nút đẩy xuống */}
            <button
              className="move-button"
              onClick={() => {
                moveDown(idx)
                toast.success("Đã đẩy task xuống")
              }}
            >
              Xếp dưới
            </button>

            {/* Ngày giờ hiện tại */}
            <p>{todayText}</p>

            {/* Checkbox toggle */}
            <input
              type="checkbox"
              checked={isCompleted(task)}
              onChange={() => toggleCompleted(idx)}
            />
            <p>Đã hoàn thành</p>
          </li>
        ))}
      </div>
      <ToastContainer />
    </>
  )
}

export default ToDoList
