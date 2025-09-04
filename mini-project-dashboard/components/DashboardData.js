// dashboardData.js
import { faUser, faPhone, faCartShopping, faPlay } from '@fortawesome/free-solid-svg-icons'

export const dashboardData = [
  {
    title: 'Tổng người dùng',
    quantity: '1234',
    icon: faUser,   // chỉ để "icon data"
  },
  {
    title: 'Doanh thu',
    quantity: '56789',
    icon: faPhone,
  },
  {
    title: 'Đơn hàng',
    quantity: '432',
    icon: faCartShopping,
  },
  {
    title: 'Bộ đếm tự động',
    quantity: '',
    icon: faPlay,
  },
]

export default dashboardData
