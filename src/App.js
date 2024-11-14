import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./Todo/TodoApp";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import ProductList from "./CartSystem/ProductList";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/TodoApp" element={<TodoApp />} />
				<Route path="signUp" element={<SignUp />} />
				<Route path="/" element={<LoginPage />} />
				<Route path="/productList" element={<ProductList />} />
				<Route path="*" element={<div>Not authorized</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
