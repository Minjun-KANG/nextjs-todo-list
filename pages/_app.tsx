import { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";

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

export default app;
