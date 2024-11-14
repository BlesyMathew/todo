const initialState = [];
export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return state.push(action.payload);

		default:
			return state;
	}
}
