import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginUser } from "../api/mockapi";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

export default function LoginPage() {
	const [message, setMessage] = useState();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		console.log(data);
		const response = await LoginUser(data);
		console.log("RES", response);
		reset();
		if (response?.message === "Login successful") {
			localStorage.setItem("user", response.username);
			navigate("/Todoapp");
		} else {
			setMessage(response.message);
			return response.message;
		}
	};
	return (
		<>
			Login
			<div class="signUp">
				<div class="card" style={{ width: "36rem", height: "24rem" }}>
					<div class="card-body">
						<h5 class="card-title">Login</h5>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-2 col-form-label">
									User Name
								</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										id="inputEmail3"
										placeholder="Username"
										{...register("username", {
											required: "Username is required",
										})}
									/>
								</div>
								<p>{errors.username?.message}</p>
							</div>
							<div class="form-group row">
								<label for="inputPassword1" class="col-sm-2 col-form-label">
									Password
								</label>
								<div class="col-sm-10">
									<input
										type="password"
										class="form-control"
										id="inputPass1"
										placeholder="Password"
										{...register("password", {
											required: "Password is required",
										})}
									/>
								</div>
								<p>{errors.password?.message}</p>
							</div>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<input type="submit" class="btn btn-primary" />
							</div>
						</form>
					</div>
				</div>
			</div>
			{message && (
				<Toast
					onClose={() => setMessage()}
					style={{ position: "fixed", bottom: "17px", right: "14px" }}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto">404</strong>
					</Toast.Header>
					<Toast.Body>{message}</Toast.Body>
				</Toast>
			)}
		</>
	);
}
