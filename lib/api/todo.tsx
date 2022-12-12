import axios from ".";
import { TodoType } from "../../types/todo";

//Get TodoList API
export const getTodosApi = () => axios.get<TodoType[]>("api/todos");
