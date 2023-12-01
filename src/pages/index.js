import Head from "next/head";
import Image from "next/image";
import profilepicture from "../../media/hani.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen flex bg-light_white text-black">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <h3>I am Hani Yousfi</h3>
            <p>
              Contemplative coder and analyst, inspired by tough problems.
              Interested in Data, Complex Adaptive Systems and Cognitive
              Modeling.
            </p>
          </div>
          <div>
            <Image
              src={profilepicture}
              alt="Hani"
              className="place-items-end w-80 h-80 border-hidden rounded-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
