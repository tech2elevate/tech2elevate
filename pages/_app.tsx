import { type AppProps } from "next/app";

// needed because of https://github.com/shuding/nextra/issues/3357#issuecomment-2419750310
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
