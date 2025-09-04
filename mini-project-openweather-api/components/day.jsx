// src/components/day.jsx
import React from 'react';

export function Day({ item }) {
  // Nếu không có item, giữ giao diện mẫu
  if (!item) {
    return (
      <>
        <div id="day">
          <div id="weather-day">
            <p>3 PM</p>
            <h1>28&deg;C</h1>
            <p>Cảm nhận như 30&deg;C</p>
          </div>
        </div>
      </>
    );
  }

  // item.dt (unix), item.main.temp, item.main.feels_like, item.weather[0].description
  const timeLabel = new Date(item.dt * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const temp = Math.round(item.main.temp);
  const feels = Math.round(item.main.feels_like);
  const desc = item.weather?.[0]?.description || '';

  return (
    <>
      <div id="day">
        <div id="weather-day">
          <p>{timeLabel}</p>
          <h1>{temp}&deg;C</h1>
          <p>Cảm nhận như {feels}&deg;C — {desc}</p>
        </div>
      </div>
    </>
  );
}
