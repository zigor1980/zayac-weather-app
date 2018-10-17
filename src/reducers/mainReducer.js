import UIReducer from './UIReducer'
import {combineReducers} from "redux";
import forecastReducer from "./forecastReducer";

const mainReducer = combineReducers({
    ui: UIReducer(),
    forecast: forecastReducer(),
});

export default mainReducer;
