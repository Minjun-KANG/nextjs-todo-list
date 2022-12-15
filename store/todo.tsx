import { TodoType } from "../types/todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoReduxState {
	todos: TodoType[];
}

const initialState: TodoReduxState = {
	todos: [],
};

const todo = createSlice({
	name: "todo",
	initialState,
	reducers: {
		setTodo(state, action: PayloadAction<TodoType[]>) {
			state.todos = action.payload;
		},
	},
});

export const todoActions = { ...todo.actions };

export default todo;

// //rule 3 - defined action type
// export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

// //rule 2 - defined action constructor
// export const setTodo = (payload: TodoType[]) => {
// 	return {
// 		type: INIT_TODO_LIST,
// 		payload,
// 	};
// };

// export const todoActions = { setTodo };

// interface TodoReduxState {
// 	todos: TodoType[];
// }

// //init state
// const initialState: TodoReduxState = {
// 	todos: [],
// };

// //rule 1 - reducer
// export default function reducer(state = initialState, action: any) {
// 	switch (action.type) {
// 		case SET_TODO_LIST:
// 			const newState = { ...state, todos: action.payload };
// 			return newState;
// 		default:
// 			return state;
// 	}
// }
