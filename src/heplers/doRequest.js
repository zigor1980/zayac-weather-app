import buildURL from "./buildURL";

export default function doRequest(options) {
    let url = buildURL('https://api.openweathermap.org/data/2.5/weather', options);
    console.log(url);
    return fetch(url);
}
