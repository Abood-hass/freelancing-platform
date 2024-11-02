import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { LoadingContextProvider } from "@/context/LoadingContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <LoadingContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LoadingContextProvider>
  </>;
}
