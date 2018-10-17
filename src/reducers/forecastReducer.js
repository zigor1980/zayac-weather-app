import forecastActionsType from "../actionTypes/forecastActionsType";

const initState = {};

export default function forecastReducer() {
    return function (state = initState, action) {
        switch(action.type) {
            case forecastActionsType.addForecast: {
                return {
                    ...state,
                    ...action.payload,
                };
            }
            default: {
                return state;
            }
        }
    }
}
