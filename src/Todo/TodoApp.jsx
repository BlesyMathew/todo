import React from "react";
import { Provider } from "react-redux";
// import { todoReducer } from "../reducers/todoReducer";
import Todo from "./Todo";
import { legacy_createStore as createStore } from "redux";
import allReducers from "../reducers";

export default function TodoApp() {
	const store = createStore(allReducers);
	const user = localStorage.getItem("user");
	return (
		<>
			{user && (
				<div className="App">
					<Provider store={store}>
						<Todo />
					</Provider>
				</div>
			)}
		</>
	);
}
