import Head from "next/head";
import Image from "next/image";
import profilepicture from "../../media/hani.jpg";
import AnimatedText from "../components/AnimatedText";
import AnimatedCharacters from "../components/AnimatedCharacters";
import TextSplitter from "../components/TextSplitter";
import Link from "next/link";
import { DEIcon, SEIcon, AutIcon, AIIcon, DSIcon } from "../components/Icons";
import SkillSet from "../components/SkillSet";

export default function Home() {
  const textAreaWidth = 800;
  const sampleText = `Dedicated contemplative coder and astute analyst, fueled by a passion for tackling intricate challenges.
    Passionate about unraveling the intricacies of Data, crafting Complex Adaptive Systems and the world of Cognitive Modeling.
    Thriving on the opportunities to apply solid analytical prowess and coding skills when facing convoluted problems.`;
  const lines = TextSplitter({ text: sampleText, maxWidth: textAreaWidth });
  const Skills = [
    "Linux",
    "Python",
    "Git",
    "Jenkins",
    "Docker",
    "AWS",
    "Apache Airflow",
    "PostgreSQL",
    "Redshift",
    "NumPy",
    "Pandas",
    "Django",
    "SQAlchemy",
    "Pytest",
    "Single Board Computers",
    "Computer nVision",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "C++",
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-auto p-14 bg-light_white text-black">
        <div className="flex items-center justify-between w-full pb-20">
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
        <div className="self-start">
          <Link
            className="border-none py-2.5 px-7 bg-gradient-to-r from-light_purple to-light_cyan hover:shadow-[0_20px_20px_0px_rgba(132,144,255,0.3)] text-white font-medium text-base uppercase"
            href="portfolio"
          >
            My Projects
          </Link>
        </div>
      </main>
      <div className="p-14 bg-white">
        <h1 className="pt-9 text-black font-semibold text-4xl uppercase">
          Personal Details
        </h1>
        <div className="border-l-2 border-light_purple p-7 mb-5 text-base text-text_color font-light">
          <p className="mb-4 box-sizing: border-box">
            A few interesting things about me. I love to read Russian Literature
            (my favorite is Fyodor Dostoevsky's Crime and Punishment). I also
            like to play old strategic video games. Lastly, I love learning.
            Every day, I try to learn or read about something new; whether that
            would be related to my work scope or any other topic that I find
            interesting.
          </p>
          <p className="mb-4 box-sizing: border-box">
            I learned how to code by taking several courses (mainly online),
            StackOverflow and of course Open Source projects. Each project I've
            taken a look at or worked on taught me new skills.
          </p>
          <p className="mb-4 box-sizing: border-box">
            Currently, I am occupying a Data Engineer post at Klarna. My work
            mainly revolves around data modeling, designing and building data
            pipelines and data warehousing. Thus making the data available and
            accessible for the Data Scientists and Business Analysts.
          </p>
        </div>
        <Link
          className="border-none py-2.5 px-7 bg-gradient-to-r from-light_purple to-light_cyan hover:shadow-[0_20px_20px_0px_rgba(132,144,255,0.3)] text-white font-medium text-base uppercase"
          href="about"
        >
          About Me
        </Link>
      </div>
      <div>
        <hr className="mb-20 mx-[10%] border-t-1" />
      </div>
      <div className="text-center">
        <h1 className="mb-2.5 text-4xl font-semibold text-black">
          Areas of Interest
        </h1>
        <p className="mt-0 mb-4 text-text_color text-base font-light">
          Take a look at some of the things I love working on.
        </p>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <div className="text-center">
          <DEIcon />
          <h4>Data Engineering</h4>
          <p>
            I create data models, design & build ETL pipelines to route data
            from multiple sources to a centralized Warehouse/Lakehouse.
          </p>
        </div>
        <div className="text-center">
          <SEIcon />
          <h4>Software Enineering</h4>
          <p>
            I always try to build solid and efficient solutions, so I keep
            learning about SWE concepts and apply them.
          </p>
        </div>
        <div className="text-center">
          <AutIcon />
          <h4>Automation</h4>
          <p>
            I am always eager to build automated systems that minimize the human
            intervention, thus improving the performance and reducing time and
            cost.
          </p>
        </div>
        <div className="text-center">
          <AIIcon />
          <h4>AI</h4>
          <p>
            I am more interested in the math and theory behind Machine Learning
            and Deep Learning.
          </p>
        </div>
        <div className="text-center">
          <DSIcon />
          <h4>Data Science</h4>
          <p>
            I am pationate about Data and what information we could get from it.
            Processing and analyzing datasets is one of my favorite hobbies
          </p>
        </div>
      </div>
      <div>
        <hr className="mb-20 mx-[10%] border-t-1" />
      </div>
      <div className="text-center">
        <h1 className="mb-2.5 text-4xl font-semibold text-black">
          Skills Expertise
        </h1>
        <p className="mt-0 mb-4 text-text_color text-base font-light">
          Some of the skills I acquired.
        </p>
      </div>
      <div className="px-4 text-text_color text-sm font-light">
        <SkillSet
          skillsList={Skills}
          classNameUL="flex flex-wrap"
          classNameLI="text-center bg-light_cyan p-2 flex-auto m-1 text-white text-lg rounded-lg font-normal"
        />
      </div>
    </div>
  );
}
