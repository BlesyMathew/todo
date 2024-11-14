import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import { useForm } from "react-hook-form";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(errors);

	const onSubmit = (data) => console.log(data);
	return (
		<>
			SIGN UP
			<li class="nav-item">
				<a class="nav-link" href="/">
					HOME
				</a>
			</li>
			<div class="signUp">
				<div class="card" style={{ width: "36rem", height: "24rem" }}>
					<div class="card-body">
						<h5 class="card-title">Sign In</h5>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-2 col-form-label">
									Email
								</label>
								<div class="col-sm-10">
									<input
										type="email"
										class="form-control"
										id="inputEmail3"
										placeholder="Email"
										{...register("email", { required: "Email is required" })}
									/>
								</div>
								<p>{errors.email?.message}</p>
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

								<label for="inputPassword2" class="col-sm-2 col-form-label">
									Confirm Password
								</label>
								<div class="col-sm-10">
									<input
										type="password"
										class="form-control"
										id="inputPass2"
										placeholder="Retype Password"
										{...register("repeatpassword", {
											required: "Password is required",
											validate: (val) => {
												if (watch("password") != val) {
													return "Your passwords does'nt match";
												}
											},
										})}
									/>
									<p>{errors.repeatpassword?.message}</p>
								</div>
							</div>

							{errors.exampleRequired && <span>This field is required</span>}
							<div style={{ display: "flex", justifyContent: "center" }}>
								<input type="submit" class="btn btn-primary" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
