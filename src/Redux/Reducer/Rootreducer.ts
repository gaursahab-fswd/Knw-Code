import userReducer from "./userReducer";
import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";



const rootReducer =  combineReducers({ user: userReducer});

 
export default rootReducer;
