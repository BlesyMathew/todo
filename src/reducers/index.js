import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { todoReducer } from "./todoReducer";

const allReducers = combineReducers({
	todo: todoReducer,
	cart: cartReducer,
});

export default allReducers;
