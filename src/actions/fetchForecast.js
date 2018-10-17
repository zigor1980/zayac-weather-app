import doRequest from "../heplers/doRequest";

export default function fetchForecast(city) {
    return async function (dispatch, getState) {
        try {
            let response = await doRequest({
                q: city,
                appid: 'cff6ebc66d27e6a6eec0da64c3a4e7c5',
            });
            let json = await response.json();
            dispatch({
                type: 'UPDATE_FORECAST',
                payload: {
                    ...json,
                    error: false,
                }
            });
        } catch (error) {
            dispatch({
                type: 'IMAGES_ERROR',
                error,
            });
        }
    };
}
