export async function LoginUser(data) {
	console.log("enterd api");
	try {
		const response = await fetch(`http://localhost:3000/api/mock`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responsedata = await response.json();
		// if (response.ok) {

		return responsedata;
		// }
		console.log("ppppp", response);
	} catch (e) {
		console.log("errorrr", e);
		return e;
	}
}

export async function fetchTodoList() {
	try {
		const response = await fetch("https://dummy-json.mock.beeceptor.com/todos");

		if (!response.ok) {
			console.log("errroee");
		}
		const todos = await response.json();
		return todos;
		// setData(todos);
	} catch (e) {
		console.log(e);
	}
}
