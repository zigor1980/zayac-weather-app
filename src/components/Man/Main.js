import React from "react";
import "./Main.css"
import Map from "../Map/Map"
import Form from "../Form/Form";

export default function Main(props) {
    return (
        <React.Fragment>
            <Map size={props.size}/>
            <Form />
        </React.Fragment>
    )
}
