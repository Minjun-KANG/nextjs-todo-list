import { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import { wrapper } from "../store";

const app = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle></GlobalStyle>
			<Header></Header>
			<Component {...pageProps}></Component>
			<Footer></Footer>
		</>
	);
};

//기존 코드 : export default app
//하위 컴포넌트에게 redux 스토어로 값을 전달하기 위해 래핑
export default wrapper.withRedux(app);
