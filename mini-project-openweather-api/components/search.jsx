// src/components/search.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Search({ setCity, placeholder = "Enter city" }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    setCity(trimmed);
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
