import { HYDRATE, createWrapper } from "next-redux-wrapper";
import todo from "./todo";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//리듀서를 모듈별로 관리하고, combineReducers를 사용하여 하나로 모음
const rootReducer = combineReducers({
	todo: todo.reducer,
});

// 합쳐진 리듀서 타입이 HYDRATE(__NEXT_REDUX_WRAPPER_HYDRATE__)인
// 리듀서를 추가하고, hydrate는 서버에서 생성된
// 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해줌.
const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, //previous state
			...action.payload, // aply delta from hydration
		};
		if (state.count) {
			nextState.count = state.count;
		}
		return nextState;
	}
	return rootReducer(state, action);
};

//스토어 타입을 루트 리듀서로 부터 가져옴
export type RootState = ReturnType<typeof rootReducer>;

//미들웨어 적용을 위한 스토어 enhancer
//리덕스 미들웨어 : 액션이 디스패치 되고, 리듀서에서 처리하기 전에 사전에 지정된 작업을 의미
//production이 아닌 경우에 chrome 리덕스 데브툴 확장 프로그램 사용
// const bindMiddleware = (middleware: any) => {
// 	if (process.env.NODE_ENV !== "production") {
// 		const { composeWithDevTools } = require("redux-devtools-extension");
// 		return composeWithDevTools(applyMiddleware(...middleware));
// 	}
// 	return applyMiddleware(...middleware);
// };

//책은 아래 코드를 가짐 -> version issue로 RTK에 confiureStore로 변경
// const initStore = () => {
// 	return createStore(reducer, bindMiddleware([]));
// };
const initStore = () => {
	return configureStore({
		reducer,
		devTools: true,
	});
};

import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from "react-redux";
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

declare module "react-redux" {
	interface DefaultRootState extends RootState {}
}
export const wrapper = createWrapper(initStore);
