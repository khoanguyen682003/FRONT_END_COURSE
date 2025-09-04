import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Dashboard({ title, quantity, icon, extra }) {
  return (
    <fieldset id="dashboard">
      <div id="quantity">
        <p>{title}</p>
        <p id="quantity-p">{quantity}</p>

        {/* 👇 thêm dòng này để hiện extra nếu có */}
        {extra && <div className="dashboard-extra">{extra}</div>}
      </div>
      <div id="icon">        
        <p><FontAwesomeIcon icon={icon} color="red" /></p>
      </div>
    </fieldset>
  )
}
