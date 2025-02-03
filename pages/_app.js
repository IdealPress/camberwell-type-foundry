import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../components/Layout";
import SplashPage from "../components/Splash";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SplashPage />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
