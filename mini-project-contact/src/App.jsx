import { useState, useEffect } from 'react'
import './index.css'
import { Title } from "../components/title.jsx";
import { Notefill } from "../components/notefill.jsx";
import { Button } from '../components/button.jsx'
import {ContactList} from '../components/contactlist.jsx'
import { buttonTitle } from '../components/buttonTitle.jsx'

function TitlePart(props) {
  return <h2>{props.title}</h2>
}

function App() {
  const [filter, setFilter] = useState('all')
  const [keyword, setKeyword] = useState('')
  const [sortAsc, setSortAsc] = useState(true) 
  const [tasks, setTasks] = useState(() => {
    const obj = JSON.parse(localStorage.getItem('tasks'));
    return obj || [];
  });

  useEffect(() => {
    const setjson = JSON.stringify(tasks);
    localStorage.setItem('tasks', setjson);
  }, [tasks]);

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Danh bạ liên hệ</h1>
      <h3>Mức trung cấp - Tìm kiếm và lọc danh bạ</h3>
      <fieldset>
        <TitlePart {...Title[0]}/>
        <Notefill
          tasks={tasks}
          setTasks={setTasks}
          setKeyword={setKeyword}
          sortAsc={sortAsc}
          setSortAsc={setSortAsc}
        />

        <div id="button">
          <Button {...buttonTitle[0]} onClick={() => setFilter('all')} />
          <Button {...buttonTitle[1]} onClick={() => setFilter('Gia đình')} />
          <Button {...buttonTitle[2]} onClick={() => setFilter('Công việc')} />
          <Button {...buttonTitle[3]} onClick={() => setFilter('Bạn bè')} />
        </div>
      </fieldset>
      <TitlePart {...Title[1]}/>
      <ContactList filter={filter} keyword={keyword} sortAsc={sortAsc} />
    </>
  )
}

export default App
