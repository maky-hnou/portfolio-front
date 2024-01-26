import Head from "next/head";
import "../styles/global.css";
import { Poppins, Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "400", "300", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "400", "300", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.variable} font-poppins ${montserrat.variable} font-montserrat`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
