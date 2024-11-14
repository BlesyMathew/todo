import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import CardImage from "../components/CardImage";

export default function ProductList() {
	const [data, setData] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://dummyjson.com/products");
				if (!response.ok) {
					console.log("error");
				}
				const resJson = await response.json();
				setData(resJson.products);
			} catch (e) {
				console.log(e);
			}
		};
		fetchProducts();
	}, []);
	const addItem = (item) => {
		console.log(item);
		dispatch({ type: "ADD_ITEM", payload: { items: item } });
	};

	console.log("eachitem", data);

	return (
		<>
			<div className="cardContainer">
				{/* Todoo */}
				{data?.map((item) => (
					<Card style={{ width: "18rem" }} className="cardItem" key={item.id}>
						<Card.Img
							variant="top"
							style={{ height: "286px" }}
							src={item.images[0]}
						/>
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
							<Card.Text>$ {item.price}</Card.Text>
							<Button
								variant="primary"
								onClick={() => {
									addItem(item);
								}}
							>
								Add to cart
							</Button>
						</Card.Body>
					</Card>
				))}
				<CardImage />
			</div>
		</>
	);
}
