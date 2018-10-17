import React from "react";
import "./Input.css"
import classNameHash from "../../heplers/classsNameHash";

export default function Input({mods, onChange, className, onRef, placeholder}) {
    let attrClassName = classNameHash('input', {
        ...mods,
    }, className);

    return (
        <React.Fragment>
            <input
                className={attrClassName}
                type="text"
                onChange={onChange}
                ref={onRef}
                placeholder={placeholder}
            />
        </React.Fragment>
    )
}
