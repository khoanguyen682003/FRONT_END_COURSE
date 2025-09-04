import React from "react";
export function Button({title, onClick, ...rest}) {
    
    return (
        <>
            <button onClick={onClick} {...rest}>
                {title}
            </button>
        </>
    )
}
export default Button