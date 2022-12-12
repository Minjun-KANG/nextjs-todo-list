import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosApi } from "../lib/api/todo";
import todos from "./api/todos";

interface IProps {
	todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
	return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data } = await getTodosApi();
		console.log(data);
		return { props: {} };
	} catch (e) {
		console.log(e);
		return { props: {} };
	}
};
export default app;
