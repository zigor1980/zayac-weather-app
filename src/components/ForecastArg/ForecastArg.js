import React from 'react';

const forecastTranslates = {
    humidity: 'Влажность',
    temp: 'Температура',
    pressure: 'Давление',
    wind: 'Скорость ветра',
};

export default function ForecastArg(props) {
    let {arg, value} = props;
    console.log(arg, value);

    return (
        <li key={[arg]} className="forecast__item">
            <p className="forecast__title">
                {forecastTranslates[arg]}
            </p>
            <p className="forecast__value">
                {value}
            </p>
        </li>
    )
}
