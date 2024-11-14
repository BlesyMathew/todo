import React, { useState } from "react";

import "./todo.css";
import ManageTodos from "./ManageTodos";
// import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import TodoList from "../components/TodoList";
import ProductList from "../CartSystem/ProductList";
import Cart from "../CartSystem/Cart";

export default function TodoItem() {
	const [activeContent, setActiveContent] = useState("todos");
	// console.log("editId", editId);

	const renderContent = () => {
		switch (activeContent) {
			case "todo":
				return <TodoList />;
			case "managetodos":
				return <ManageTodos />;
			case "productList":
				return <ProductList />;
			case "Cart":
				return <Cart />;
		}
	};
	return (
		<>
			<NavigationBar setActiveContent={setActiveContent} />
			<div class="todoOuter">
				{/* <form onSubmit={submitHandler}>
					<input
						type="text"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
					<button type="submit" class="btn btn-primary btn-sm">
						ADD ITEM
					</button>
				</form>
				<ul className="outer">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th scope="col">ITEMS</th>
								<th scope="col">ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							{currentPosts?.map((i) => (
								<>
									<tr>
										<td>
											{editId === i.text ? (
												<input
													type="text"
													id={i.id}
													value={editText}
													onChange={(e) => {
														setEditText(e.target.value);
													}}
												/>
											) : (
												<div>{i.text}</div>
											)}
										</td>

										<td>
											<div className="buttonGrp">
												<button
													type="button"
													class="btn btn-outline-danger btn-sm"
													onClick={() => {
														dispatch({ type: "DELETE", payload: i });
													}}
												>
													DELETE
												</button>
												<button
													type="button"
													class="btn btn-outline-warning btn-sm"
													onClick={() => {
														setEditMode(true);
														handleEdit(i);
														setEditId(i.text);
													}}
												>
													UPDATE
												</button>
												{editMode && editId === i.text && (
													<button
														type="button"
														class="btn btn-outline-success btn-sm"
														onClick={() => {
															dispatch({
																type: "UPDATE",
																payload: { id: i.id, text: editText },
															});
															setEditMode(false);
														}}
													>
														SAVE
													</button>
												)}
											</div>
										</td>
									</tr>
								</>
							))}
						</tbody>
					</table>
				</ul> */}

				<div>{renderContent()}</div>
			</div>
		</>
	);
}
