import { useState } from "react";
import pt from "../lib/i18n-pt";
import en from "../lib/i18n-en";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const [lang, setLang] = useState("pt");

     const t = lang === "pt" ? pt : en;
    return (
        <>
        <ScrollToTop />
        <Component {...pageProps} t={t} lang={lang} setLang={setLang} />
        </>
    );
}