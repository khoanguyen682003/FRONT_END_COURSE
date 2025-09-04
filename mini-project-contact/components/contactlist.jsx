// components/contactlist.jsx
import React from "react"
import { Contact } from './contacts.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

// Component hiển thị từng contact
function ShowContact({ name, phone, group }) {
  return (
    <fieldset>
      <p><FontAwesomeIcon icon={faUser} color="red" /> {name}</p>
      <p><FontAwesomeIcon icon={faPhone} color="red" /> {phone}</p>
      <p id="group">{group}</p>
    </fieldset>
  )
}

// hàm filter() để lọc theo group + keyword
function filter(group, keyword) {
  let result = group === 'all' ? Contact : Contact.filter(c => c.group === group)
  if (keyword && keyword.trim() !== '') {
    const kw = keyword.toLowerCase()
    result = result.filter(c => c.name.toLowerCase().includes(kw))
  }
  return result
}

// Component hiển thị toàn bộ danh bạ (nhận thêm prop keyword)
export function ContactList({ filter: groupFilter = 'all', keyword = '', sortAsc = true }) {
  let filtered = filter(groupFilter, keyword);

  // sắp xếp theo tên
  filtered = filtered.slice().sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div id="contactlist">
      {filtered.map((item, index) => (
        <ShowContact key={index} {...item} />
      ))}
    </div>
  )
}


export default ContactList
