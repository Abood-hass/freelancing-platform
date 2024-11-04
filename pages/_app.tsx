import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { LoadingContextProvider } from "@/context/LoadingContext";
import UserDataProvider from "@/context/UserData";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <LoadingContextProvider>
      <UserDataProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserDataProvider>
    </LoadingContextProvider>
  </>;
}
