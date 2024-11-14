import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";

export default function ManageTodos() {
	const [text, setText] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [editId, setEditId] = useState("");
	const [editText, setEditText] = useState("");
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD", payload: { id: Date.now(), text: text } });
		setText("");
	};
	const indexOfLastPost = currentPage * 5;
	const indexOfFirstPost = indexOfLastPost - 5;
	const textValues = useSelector((state) => state.todo);
	console.log("textValues", textValues);
	const currentPosts = textValues?.slice(indexOfFirstPost, indexOfLastPost);

	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleEdit = (editedValue) => {
		setEditText(editedValue.text);
	};
	return (
		<>
			<form onSubmit={submitHandler}>
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
			</ul>
			<Pagination
				length={textValues?.length}
				postsPerPage={5}
				handlePagination={handlePagination}
				currentPage={currentPage}
			/>
		</>
	);
}
