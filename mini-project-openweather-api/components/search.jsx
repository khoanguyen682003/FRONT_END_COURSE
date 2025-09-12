// src/components/search.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Search({ setCity, placeholder = "Enter city" }) {
  const [value, setValue] = useState('');

  const normalize = (raw) => {
    if (!raw) return raw;
    let t = raw.trim();

    // chuẩn hoá không dấu / chữ thường
    const low = t.toLowerCase().replace(/\s+/g, ' ').trim();

    // các biến thể phổ biến của TP.HCM
    if (['hochiminh', 'ho chi minh', 'hcm', 'tphcm', 'hồ chí minh', 'hồ chí minh city'].includes(low)) {
      return 'Ho Chi Minh,VN';
    }

    // nếu người dùng nhập tên tiếng việt có dấu 'Hà Nội' => giữ nguyên, thêm VN nếu không có country
    // nếu không có comma và chỉ có chữ, mặc định thêm ,VN (giúp user VN)
    if (!t.includes(',') && /^[A-Za-zÀ-ỹ\s]+$/.test(t)) {
      // giữ nguyên kiểu chữ user nhưng thêm country VN
      return `${t},VN`;
    }

    // nếu user đã nhập 'Hanoi' hoặc 'Hanoi,VN' -> giữ
    return t;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    const normalized = normalize(trimmed);
    setCity(normalized);
    // không clear input để người dùng thấy gì vừa gõ
  };

  return (
    // wrapper có id để style giống giao diện cũ
    <div id="search-box" aria-hidden={false}>
      <form onSubmit={onSubmit} className="search-form">
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <button className="search-btn" type="submit" aria-label="search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
