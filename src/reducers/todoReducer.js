const initialState = [
	// {
	// 	// text: "",
	// },
];

export const todoReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD":
			return [...state, { text: payload.text, id: payload.id }];

		case "DELETE":
			const del = state.filter((i) => {
				// console.log("=====?>", i.text, payload);
				return i.id != payload.id;
			});
			return [...del];

		case "UPDATE":
			console.log("payload", payload);
			const itemToUpdate = state.find((item) => item.id === payload.id);
			if (itemToUpdate) {
				itemToUpdate.text = payload.text;
			}
			// console.log("hello", state);
			// const afterUpdate = state.reduce((acc, curr) => {
			// 	if (curr.id === payload.id) {
			// 		acc.push({ ...curr, text: payload.text });
			// 	} else {
			// 		acc.push(curr);
			// 	}
			// 	return acc;
			// }, []);
			// console.log("afterUpdate", afterUpdate);
			return [...state];

		default:
			return state;
	}
};
