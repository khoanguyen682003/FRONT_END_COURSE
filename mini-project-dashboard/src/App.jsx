import { useState, useEffect } from 'react'
import { Dashboard } from '../components/dashboard.jsx'
import { dashboardData } from '../components/DashboardData.js'
import Button from '../components/button.jsx'
import buttonTitle from '../components/buttonTitle.jsx'
import Contrast from '../components/contrast.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Project from '../components/project.jsx'
import projectList from '../components/projectList.jsx'
import './App.css'

function App() {
  const [reverse, setReverse] = useState(false);
  const [status, setStatus] = useState('Tất cả');
  const [contrast, setContrast] = useState(false);

  // ====== Bộ đếm cho dashboard #4 ======
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setCounter(v => v + 1), 1000);
    return () => clearInterval(id);
  }, [running]);
  // =====================================

  // Tiêm quantity + nút điều khiển vào card #4
  // Tiêm quantity + nút điều khiển vào card #4
const dashboards = dashboardData.map((d, i) => {
  if (i !== 3) return d;
  return {
    ...d,
    quantity: counter,
    extra: (
      <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
        {/* Nút tím Play/Pause */}
        <button
          onClick={() => setRunning(!running)}
          aria-label={running ? 'Tạm ngưng' : 'Chạy'}
          style={{
            width: 36, height: 36, padding: 0, borderRadius: '50%',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: '#8b5cf6', border: 'none', cursor: 'pointer'
          }}
        >
          <FontAwesomeIcon
            icon={running ? faPause : faPlay}
            style={{
              display: 'block', lineHeight: 0, fontSize: 16, color: '#fff',
              // play có hình tam giác nên dịch nhẹ sang phải cho cân mắt
              transform: running ? 'translate(0, 0)' : 'translateX(1px)'
            }}
          />
        </button>

        {/* Nút Reset */}
        <button
          onClick={() => { setCounter(0); setRunning(false); }}
          aria-label="Đặt lại"
          style={{
            width: 36, height: 36, padding: 0, borderRadius: '50%',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: '#8b5cf6', border: 'none', cursor: 'pointer'
          }}
        >
          <FontAwesomeIcon
            icon={faRotateLeft}
            style={{
              display: 'block', lineHeight: 0, fontSize: 16,
              // cân dọc một chút để icon reset nhìn đúng tâm
              transform: 'translateY(0.5px)'
            }}
          />
        </button>
      </div>
    )
  };
});


  return (
    <>
      <div id="root" className={contrast ? "contrast-dark" : "contrast-light"}>
        <div id="header">
          <div id="title">
            <h1>Dashboard Demo</h1>
            <h3>Mức nâng cao - Bảng điều khiển với Widgets</h3>
          </div>
          <div id="contrast">
            <Contrast contrast={contrast} setContrast={setContrast} />
          </div>
        </div>

        <div id="dashboardlist">
          {dashboards.map((d, i) => (
            <Dashboard key={i} {...d} />
          ))}
        </div>

        <fieldset>
          <h2>Danh sách dự án</h2>
          <div id="fieldset">
            {buttonTitle.slice(0, 4).map((btn, index) => (
              <Button key={index} {...btn} onClick={() => setStatus(btn.title)} />
            ))}

            <p>Sắp xếp</p>
            {buttonTitle.slice(4, 6).map((btn, index) => (
              <Button key={index} {...btn} onClick={() => setStatus(btn.title)} />
            ))}

            <button onClick={() => setReverse(!reverse)}>
              <FontAwesomeIcon icon={reverse ? faArrowDown : faArrowUp} color="red" />
            </button>
          </div>

          {projectList
            .filter((p) => {
              if (status === 'Tất cả') return true;
              if (['Đang thực hiện', 'Chờ xử lý', 'Hoàn thành'].includes(status)) {
                return p.progress === status;
              }
              return true;
            })
            .slice()
            .sort((a, b) => {
              if (status === 'Tên') return a.name.localeCompare(b.name);
              if (status === 'Giá trị') {
                const order = { "Thấp": 1, "Trung bình": 2, "Cao": 3 };
                return order[a.risk] - order[b.risk];
              }
              return 0;
            })
            .sort((a, b) => reverse ? -1 : 1)
            .map((p, i) => (<Project key={i} {...p} />))}
        </fieldset>
      </div>
    </>
  )
}

export default App
