import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

export default function Cart() {
	const items = useSelector((state) => state.cart);
	console.log(items);
	const cartEmpty = items.length === 0;
	return (
		<>
			<div className="CartContainer">
				<h1>CART</h1>
			</div>
			{cartEmpty && (
				<Alert variant="info" className="d-none d-lg-block">
					Cart is empty, Please add items in the cart{" "}
				</Alert>
			)}
		</>
	);
}
