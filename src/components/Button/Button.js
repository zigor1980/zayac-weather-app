import React from "react";
import classNameHash from "../../heplers/classsNameHash";
import './Button.css';

export default function Button(props) {
    return (
        <button
            onClick={() => props.onClick()}
            className={classNameHash('button', {}, props.className)}
        >
            {props.text || ``}
        </button>
    )
}
