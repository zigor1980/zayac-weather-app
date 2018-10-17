import React from "react";
import ForecastArg from "../ForecastArg/ForecastArg";

export default function ForecastForm(props) {
    let {data} = props;
    console.log(data);

    return (
        <div className="forecast">
            <ul className="forecast__list">
                {Object.keys(data).map((el) => (
                    <ForecastArg
                        key={el}
                        arg={el}
                        value={data[el]}
                    />
                ))}
            </ul>
        </div>
    )
}
