import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosApi } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

const app: NextPage = () => {
	return <TodoList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		console.log(store);
		try {
			const { data } = await getTodosApi();
			store.dispatch(todoActions.setTodo(data));
			return { props: {} };
		} catch (e) {
			console.log(e);
			return { props: {} };
		}
	}
);
export default app;
