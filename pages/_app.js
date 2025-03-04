import "../public/assets/scss/app.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TapToTop from "../layout/TapToTop";
import { store } from "../redux-toolkit/store";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";
import StoreOldData from "../utils/StoreOldData";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDB } from "../config/themeCustomizerConfig";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {}, [router.events]);
  });
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
        <meta name="description" content="Muka" />
        <meta name="keywords" content="Muka" />
        <meta name="author" content="Muka" />
    
        <meta property="og:title" content="Muka" />
        <meta property="og:description" content="Connect with minority realtors, home service providers, and real estate professionals!" />
        <meta property="og:url" content="https://mukaishome.com" />
        <meta property="og:image" content="https://mukaishome.com/assets/images/logo/card.png" />
        <title>Muka</title>
      </Head>
      <Provider store={store}>
        <>
          <Component {...pageProps} />
          <TapToTop />
          <StoreOldData />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={"light"}
          />
        </>
      </Provider>
    </>
  );
}

export default MyApp;
