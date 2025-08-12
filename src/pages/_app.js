import Head from "next/head";
import "../styles/global.css";
import { Poppins, Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

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
  const router = useRouter();
  const isBirthdayPage = router.pathname === "/birthday";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${poppins.variable} font-poppins ${montserrat.variable} font-montserrat`}
      >
        {!isBirthdayPage && <NavBar />}
        <Component {...pageProps} />
        {!isBirthdayPage && <Footer />}
        {!isBirthdayPage && <ChatBot />}
      </main>
    </>
  );
}
