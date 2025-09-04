import { useState } from 'react' // import useState
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('') // gọi hàm useState và truyền vào giá trị khởi tạo
  // hàm useState trả về giá trị gồm 2 phần tử theo thứ tự
  // phần tử I đại diện cho state, chứa giá trị khởi tạo ban đầu ở vế phải (useState(''))
  // phần tử II đại diện cho function ở dưới để thay đổi giá trị sau khi click vào button sự kiện theo yêu cầu
  function updateGreeting() {
    setGreeting('Chào bạn !')
  }
  return (
    <>
      <p>{greeting}</p>
      <button onClick={updateGreeting}>Cập nhật lời chào</button>
    </>
  )
}

export default App
