import Head from "next/head";
import Image from "next/image";
import profilepicture from "../../media/hani.jpg";
import AnimatedText from "../components/AnimatedText";
import AnimatedCharacters from "../components/AnimatedCharacters";
import TextSplitter from "../components/TextSplitter";

export default function Home() {
  const textAreaWidth = 800;
  const sampleText = `Dedicated contemplative coder and astute analyst, fueled by a passion for tackling intricate challenges.
    Passionate about unraveling the intricacies of Data, crafting Complex Adaptive Systems and the world of Cognitive Modeling.
    Thriving on the opportunities to apply solid analytical prowess and coding skills when facing convoluted problems.`;
  const lines = TextSplitter({ text: sampleText, maxWidth: textAreaWidth });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-auto pl-14 pr-14 flex bg-light_white text-black">
        <div className="flex items-center justify-between w-full pt-20 pb-20">
          <div className="flex-1 pr-14">
            <h5 className="text-xl font-semibold">I am</h5>
            <AnimatedText
              text="Hani Yousfi"
              className="flex mb-5 mt-3 text-5xl font-semibold space-x-1"
            />

            {lines.map((line, index) => (
              <AnimatedCharacters
                key={index}
                text={line}
                reverse={index % 2 === 1} // Reverse every other line
                className="text-text_color mb-2 overflow-hidden flex"
              />
            ))}
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
