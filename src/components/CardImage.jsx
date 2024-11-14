import React from "react";
import { Card } from "react-bootstrap";

export default function CardImage() {
	return (
		<>
			<Card style={{ width: "18rem", display: "flex", flexWrap: "nowrap" }}>
				<Card.Img
					variant="left"
					src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
					style={{ width: "10%", objectFit: "cover" }}
				/>
				<Card.Body style={{ flex: "1" }}>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
