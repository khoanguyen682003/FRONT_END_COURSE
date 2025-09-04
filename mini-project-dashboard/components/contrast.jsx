import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export function Contrast({ contrast, setContrast }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p id="p-contrast"><FontAwesomeIcon icon={faSun} color="red" /></p>
            <label className="switch">
                <input 
                  type="checkbox" 
                  checked={contrast} 
                  onChange={() => setContrast(!contrast)} 
                />
                <span className="slider"></span>
            </label>                                        
            <p><FontAwesomeIcon icon={faMoon} color="red" /></p>
        </div>
    )    
}
export default Contrast;
