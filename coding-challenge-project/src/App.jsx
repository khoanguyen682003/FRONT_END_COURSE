import { useState, useEffect } from 'react'
import { Footer } from '../components/footer.jsx'
import { footerTitles } from '../components/footerTitles.js'
import { Profile } from "../components/profile.jsx";
import { SignIn } from "../components/signIn.jsx";
import { SignUp } from "../components/signUp.jsx";
import { Transactions } from "../components/transactions.jsx";
import { Setting } from "../components/setting.jsx";
import { addTransaction as AddTransaction } from "../components/addTransaction.jsx";
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const obj = JSON.parse(localStorage.getItem('tasks'));
    return obj || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Start on Transactions by default
  const [filter, setFilter] = useState('Transactions');

  // --- Lightweight placeholders for Dashboard & Settings ---
  // Keep these only if you don't have actual files to import yet.
  const DashboardPlaceholder = () => (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Coming soon — replace this placeholder by importing your real Dashboard component.</p>
    </div>
  );

  const SettingsPlaceholder = () => (
    <div className="container">
      <h1>Settings</h1>
      <p>Coming soon — replace this placeholder by importing your real Settings component.</p>
    </div>
  );

  // Render component tương ứng với filter
  const renderMainComponent = () => {
    switch (filter) {
      case 'Transactions':
        return <Transactions tasks={tasks} setTasks={setTasks} />;
      case 'Dashboard':
        return <Dashboard/>;
      case 'Settings':
        return <Setting/>;
      case 'Profile':
        // Use the real Profile component you imported
        return <Profile />;
      case 'AddTransaction':
        return <AddTransaction />;
      default:
        return <Transactions tasks={tasks} setTasks={setTasks} />;
    }
  };

  return (
    <>
      <div id="main">
        {renderMainComponent()}
      </div>

      <div id="footerList" role="navigation" aria-label="App footer">
        <Footer {...footerTitles[0]} className={filter === 'Transactions' ? 'activeFooter' : ''} onClick={() => setFilter('Transactions')} />
        <Footer {...footerTitles[1]} className={filter === 'Dashboard' ? 'activeFooter' : ''} onClick={() => setFilter('Dashboard')} />
        <Footer {...footerTitles[2]} className={filter === 'Settings' ? 'activeFooter' : ''} onClick={() => setFilter('Settings')} />
        <Footer {...footerTitles[3]} className={filter === 'Profile' ? 'activeFooter' : ''} onClick={() => setFilter('Profile')} />
      </div>
    </>
  )
}

export default App
