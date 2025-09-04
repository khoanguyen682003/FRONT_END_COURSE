// src/App.jsx
import React, { useState, useEffect } from 'react'
import { City } from "../components/city.jsx";
import { Information } from "../components/information.jsx";
import { Day } from "../components/day.jsx";
import { Search } from "../components/search.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './App.css'

// API key as provided (consider moving to env var for production)
const API_KEY = 'f5208fb2ab5130db04e7fb599b3fe872';

// Hàm chính gọi API (bọc để dễ dùng lại)
export const APIWeatherCall = async (cityName = 'Ho Chi Minh') => {
  try {
    // Nếu người dùng nhập "Hanoi" hay "Hanoi,VN", ta xử lý phù hợp
    const q = encodeURIComponent(cityName);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${API_KEY}&units=metric&lang=vi`;
    const resp = await fetch(url);
    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`OpenWeather API error ${resp.status}: ${text}`);
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
};

function App() {
  // Mặc định show TPHCM; search sẽ setCity
  const [city, setCity] = useState('Ho Chi Minh, VN');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // gọi API khi city thay đổi
  useEffect(() => {
    let mounted = true;
    const doFetch = async () => {
      if (!city) return;
      setLoading(true);
      setError(null);
      try {
        const data = await APIWeatherCall(city);
        if (mounted) setWeatherData(data);
      } catch (err) {
        if (mounted) setError(err.message || String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    };
    doFetch();
    return () => { mounted = false; };
  }, [city]);

  // Lấy 5 mục đầu để hiển thị Day (giữ giao diện giống trước)
  const dayItems = weatherData?.list ? weatherData.list.slice(0, 5) : [];

  return (
    <>
      {/* Search nhận setCity để thay đổi */}
      <Search setCity={setCity} placeholder="Nhập tên thành phố, ví dụ: Ho Chi Minh,VN" />

      <div id="header">
        <City weatherData={weatherData} loading={loading} />
        <Information weatherData={weatherData} />
      </div>

      <p id="p-day">
        <FontAwesomeIcon icon={faArrowLeft} color="white" />
        {/* hiển thị ngày/tên nếu có data */}
        {weatherData?.city ? (
          new Date().toLocaleDateString('en-GB', { weekday: 'long' })
        ) : 'Thursday'}
      </p>

      <div id="day-list">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'salmon' }}>Lỗi: {error}</p>}
        {!loading && !error && dayItems.length === 0 && <Day />}
        {!loading && !error && dayItems.length > 0 && dayItems.map((item, idx) => (
          <Day key={idx} item={item} />
        ))}

        {/* giữ các button < và > */}
        <button><h1>&lt;</h1></button>
        <button id="right"><h1>&gt;</h1></button>
      </div>
    </>
  )
}

export default App;
