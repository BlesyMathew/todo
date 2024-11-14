import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavigationBar({ setActiveContent }) {
	const navigate = useNavigate();
	return (
		<>
			<nav class="navbar navbar-light bg-light">
				<a class="navbar-brand">TODO APP</a>
				<form class="form-inline">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
				</form>
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link" onClick={() => setActiveContent("todo")}>
							Todo List
						</a>
					</li>
				</ul>
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link" onClick={() => setActiveContent("productList")}>
							Product List
						</a>
					</li>
				</ul>
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link" onClick={() => setActiveContent("managetodos")}>
							Add todos
						</a>
					</li>
				</ul>
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link" href="/">
							Login
						</a>
					</li>
				</ul>
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link" href="signUp">
							Sign Up
						</a>
					</li>
				</ul>
				<Button variant="warning" onClick={() => setActiveContent("Cart")}>
					Cart
				</Button>
				<button
					type="button"
					class="btn btn-primary"
					onClick={() => {
						localStorage.removeItem("user");
						navigate("/");
					}}
				>
					Log Out
				</button>
			</nav>
			<footer>
				<p>Copyright 2024 All rights reserved</p>
			</footer>
		</>
	);
}
