import React, { useEffect, useState } from "react";

export function Setting() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Áp class dark lên body giống script gốc
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleReset = () => {
    if (window.confirm("Reset all data?")) {
      window.alert("Data reset (demo)");
    }
  };

  const handleExport = () => {
    window.alert("Export (demo)");
  };

  return (
    <>
      <div className="screen">
        <div className="container">
          <div className="header">
            <span className="back">‹</span>
            <h2 className="title">Settings</h2>
            <span className="placeholder"></span>
          </div>

          {/* Appearance */}
          <div className="section">
            <p className="section-title">Appearance</p>
            <div className="row">
              <div>
                <p className="label">Dark Mode</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  id="darkmode"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Currency */}
          <div className="row">
            <p className="section-title">Currency</p>
            <div className="row">
              <select id="currency" defaultValue="USD">
                <option>USD</option>
                <option>EUR</option>
                <option>VND</option>
                <option>JPY</option>
              </select>
            </div>
          </div>

          {/* Data Management */}
          <div className="section">
            <p className="section-title">Data Management</p>

            <button
              className="row"
              id="resetBtn"
              type="button"
              onClick={handleReset}
            >
              <span>Reset All Data</span>
            </button>

            
          </div>
            <button
              className="row"
              id="exportBtn"
              type="button"
              onClick={handleExport}
            >
              <span>Export Data</span>
            </button>
          {/* About */}
          <div className="section">
            <p className="section-title">About</p>
            <div className="row">
              <div className="label">Version</div>
              <div className="muted">1.0.0</div>
            </div>

            <a href="#" className="row">
              Privacy Policy
            </a>
            <a href="#" className="row">
              Terms of Service
            </a>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Setting;
