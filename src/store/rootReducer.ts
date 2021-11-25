import { combineReducers } from '@reduxjs/toolkit';
import AppReducer from "./reducers/appSlice/appSlice";
import CommonReducer from './reducers/commonSlice/commonSlice'

const rootReducer = combineReducers({
    app: AppReducer,
    common: CommonReducer,
});

export default rootReducer;