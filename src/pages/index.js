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
      <main className="w-full h-auto pl-28 pr-28 flex bg-light_white text-black">
        <div className="flex items-center justify-between w-full pt-20 pb-20">
          <div className="flex-1 pr-16">
            <h5 className="text-base font-semibold">I am</h5>
            <h3 className="mb-5 mt-3 text-3xl font-semibold">Hani Yousfi</h3>
            <p className="text-text_color mb-2">
              Dedicated contemplative coder and astute analyst, fueled by a
              passion for tackling intricate challenges.
            </p>
            <p className="text-text_color mb-2">
              Passionate about unraveling the intricacies of Data, crafting
              Complex Adaptive Systems and the world of Cognitive Modeling.
            </p>
            <p className="text-text_color mb-2">
              Thriving on the opportunities to apply solid analytical prowess
              and coding skills when facing convoluted problems.
            </p>
          </div>
          <div className="w-80 h-80">
            <Image
              src={profilepicture}
              alt="Hani"
              className="place-items-end float-right w-full h-full object-cover border-hidden rounded-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
