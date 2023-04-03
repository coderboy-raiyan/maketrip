/* eslint-disable react/jsx-props-no-spreading */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
