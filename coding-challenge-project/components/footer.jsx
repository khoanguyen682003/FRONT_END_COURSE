import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Footer({title, icon, onClick, ...rest}) {
    return (
        <>
        <div id="footer">
            <button onClick={onClick} {...rest}>
                <h1><FontAwesomeIcon icon={icon}/></h1>
                <h1>{title}</h1>
            </button>
        </div>    
        </>
    )
}
export default Footer