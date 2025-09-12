// src/App.jsx
import React, { useState, useEffect } from 'react'
import { City } from "../components/city.jsx";
import { Information } from "../components/information.jsx";
import { Day } from "../components/day.jsx";
import { Search } from "../components/search.jsx";

import './App.css'

const API_KEY = 'f5208fb2ab5130db04e7fb599b3fe872';

export const APIWeatherCall = async (cityName = 'Ho Chi Minh') => {
  try {
    const qRaw = (cityName || 'Ho Chi Minh').trim();
    const q = encodeURIComponent(qRaw);
    const base = 'https://api.openweathermap.org/data/2.5/forecast';
    const commonParams = `appid=${API_KEY}&units=metric&lang=vi`;

    const url = `${base}?q=${q}&${commonParams}`;
    let resp = await fetch(url);

    if (resp.ok) {
      const data = await resp.json();
      return data;
    }

    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=1&appid=${API_KEY}`;
    const geoResp = await fetch(geoUrl);
    if (!geoResp.ok) {
      const text = await resp.text();
      throw new Error(`OpenWeather API error ${resp.status}: ${text}`);
    }

    const geo = await geoResp.json();
    if (!Array.isArray(geo) || geo.length === 0) {
      const txt = await resp.text();
      throw new Error(`Location not found and geocoding empty. (${resp.status}) ${txt}`);
    }

    const { lat, lon, name, country } = geo[0];
    const url2 = `${base}?lat=${lat}&lon=${lon}&${commonParams}`;
    const resp2 = await fetch(url2);
    if (!resp2.ok) {
      const txt = await resp2.text();
      throw new Error(`OpenWeather API by lat/lon error ${resp2.status}: ${txt}`);
    }
    const data2 = await resp2.json();
    if (!data2.city) data2.city = { name: `${name}${country ? ',' + country : ''}` };
    return data2;

  } catch (err) {
    throw err;
  }
};

function App() {
  // 👉 thêm vào: danh sách thành phố
  const cityList = ['Ho Chi Minh,VN', 'Ha Noi,VN', 'Hue,VN'];

  // 👉 thêm vào: quản lý state cho nhiều thành phố
  const [cityStates, setCityStates] = useState(
    cityList.map(() => ({
      weatherData: null,
      loading: false,
      error: null,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 320) {
        setVisibleCount(0);
      } else if (window.innerWidth >= 321 && window.innerWidth <= 575) {
        setVisibleCount(0);
      } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
        setVisibleCount(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        setVisibleCount(2);
      } else if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
        setVisibleCount(3);
      } else {
        setVisibleCount(3);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  // 👉 thêm vào: fetch dữ liệu cho tất cả thành phố
  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      for (let i = 0; i < cityList.length; i++) {
        setCityStates(prev => {
          const copy = [...prev];
          copy[i] = { ...copy[i], loading: true, error: null };
          return copy;
        });

        try {
          const data = await APIWeatherCall(cityList[i]);
          if (mounted) {
            setCityStates(prev => {
              const copy = [...prev];
              copy[i] = { ...copy[i], weatherData: data, loading: false };
              return copy;
            });
          }
        } catch (err) {
          if (mounted) {
            setCityStates(prev => {
              const copy = [...prev];
              copy[i] = { ...copy[i], error: err.message || String(err), loading: false };
              return copy;
            });
          }
        }
      }
    };

    fetchAll();
    return () => { mounted = false; };
  }, []);

  // 👉 giữ nguyên logic cũ nhưng chỉ lấy dữ liệu từ thành phố đầu tiên (HCM)
  const weatherData = cityStates[0]?.weatherData;
  const loading = cityStates[0]?.loading;
  const error = cityStates[0]?.error;

  const allList = weatherData?.list ?? [];
  const maxStart = Math.max(0, allList.length - visibleCount);
  const start = Math.min(currentIndex, maxStart);
  const dayItems = allList.length ? allList.slice(start, start + visibleCount) : [];

  const tzOffset = weatherData?.city?.timezone ?? 0;

  let displayLabel = '';
  if (dayItems.length > 0) {
    let first = new Date((dayItems[0].dt + tzOffset) * 1000);
    let last = new Date((dayItems[dayItems.length - 1].dt + tzOffset) * 1000);

    let item = dayItems[0];
    const firstHour = first.getHours();
    const lastHour = last.getHours();

    if (firstHour === 22 && lastHour === 1) {
      item = dayItems[1];
    }

    const localDate = new Date((item.dt + tzOffset) * 1000);
    displayLabel = localDate.toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else {
    displayLabel = new Date().toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  const handlePrev = () => {
    setCurrentIndex(i => Math.max(0, i - 1));
  };
  const handleNext = () => {
    setCurrentIndex(i => Math.min(maxStart, i + 1));
  };

  return (
    <>
      <Search setCity={(val) => {
        setCurrentIndex(0);
        // 👉 tạm thời chỉ thay đổi city đầu tiên (HCM)
        setCityStates(prev => {
          const copy = [...prev];
          copy[0] = { ...copy[0], weatherData: null };
          return copy;
        });
        cityList[0] = val; // thay đổi trực tiếp tên thành phố đầu tiên
      }} placeholder="Nhập tên thành phố, ví dụ: Ho Chi Minh,VN" />

      {/* 👉 render 3 thành phố trong 1 hàng */}
      <div id="header" style={{ display: "flex", gap: "1rem" }}>
        {cityStates.map((c, idx) => (
          <div key={idx}>
            <City weatherData={c.weatherData} loading={c.loading}>
              <p id="p-day">{displayLabel}</p>
            </City>
            <Information weatherData={c.weatherData} />
          </div>
        ))}
      </div>

      <div id="day-list">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'salmon' }}>Lỗi: {error}</p>}
        {!loading && !error && dayItems.length === 0 && <Day />}
        {!loading && !error && dayItems.length > 0 && dayItems.map((item, idx) => (
          <Day key={item.dt || idx} item={item} />
        ))}

        {/* 👉 giữ nguyên 2 nút chuyển */}
        <button id="left" onClick={handlePrev}><h1>&lt;</h1></button>
        <button id="right" onClick={handleNext}><h1>&gt;</h1></button>
      </div>
    </>
  )
}

export default App;
