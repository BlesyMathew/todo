import React, { useEffect, useState } from "react";
import { fetchTodoList } from "../api/mockapi";

export default function TodoList() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const todos = await fetchTodoList();
				setData(todos);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false); // Set loading to false after data is fetched
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div>Todo</div>
			{loading && (
				<div
					class="spinner-border text-primary"
					style={{ width: "3rem", height: "3rem" }}
					role="status"
				>
					<span class="sr-only">Loading...</span>
				</div>
			)}
			<div>
				{data?.map((item) => (
					<li>{item.title}</li>
				))}
			</div>
		</>
	);
}
