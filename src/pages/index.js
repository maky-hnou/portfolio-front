import Head from "next/head";
import Image from "next/image";
import profilepicture from "../../media/hani.jpg";
import AnimatedText from "../components/AnimatedText";
import TypeWriterAnimatedText from "../components/TypeWriterAnimation";
import {
  DEIcon,
  SEIcon,
  AutIcon,
  CVIcon,
  AIIcon,
  DSIcon,
  GENAIIcon,
  NLPIcon,
} from "../components/Icons";
import SkillSet from "../components/SkillSet";
import IconCard from "../components/IconCard";

export default function Home() {
  const sampleText = `Dedicated contemplative coder and astute analyst, fueled by a passion for tackling intricate challenges.
    Passionate about unraveling the intricacies of Data, crafting Complex Adaptive Systems and the world of Cognitive Modeling.
    Thriving on the opportunities to apply solid analytical prowess and coding skills when facing convoluted problems.`;
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
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Genrative AI",
    "LLMs",
    "Pytorch",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "C++",
  ];
  return (
    <div>
      <Head>
        <title>H. YOUSFI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hani Yousfi's personal website." />
      </Head>
      <main className="w-full h-auto text-black pt-32">
        <div className="bg-light_white">
          <div className="flex p-14 items-center justify-between w-full md:block md:px-10">
            <div className="flex-1 pr-14 md:pr-0">
              <h5 className="text-xl font-semibold">I am</h5>
              <AnimatedText
                text="Hani Yousfi"
                className="flex mb-5 mt-3 text-5xl font-semibold space-x-1"
              />
              <TypeWriterAnimatedText
                text={sampleText}
                className="text-text_color mb-2 overflow-hidden flex"
                once={true}
              />
            </div>
            <div className="w-80 h-80 md:mx-auto">
              <Image
                src={profilepicture}
                alt="Profile picture of Hani Yousfi"
                className="place-items-end float-right w-full h-full object-cover border-hidden rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="p-14 bg-white md:px-10">
          <h1 className="pt-9 text-black font-semibold text-4xl uppercase">
            Personal Details
          </h1>
          <div className="border-l-2 border-light_purple px-7 pt-7 mb-5 text-base text-text_color font-light">
            <p className="mb-4 box-sizing: border-box">
              A few interesting things about me. I love to read Russian
              Literature (my favorite is Fyodor Dostoevsky's Crime and
              Punishment). I also like to play old strategic video games.
              Lastly, I love learning. Every day, I try to learn or read about
              something new; whether that would be related to my work scope or
              any other topic that I find interesting.
            </p>
            <p className="mb-4 box-sizing: border-box">
              I learned how to code by taking several courses (mainly online),
              StackOverflow and of course Open Source projects. Each project
              I've taken a look at or worked on taught me new skills.
            </p>
            <p className="mb-4 box-sizing: border-box">
              Currently, I am occupying a Data Engineer post at Klarna. My work
              mainly revolves around data modeling, designing and building data
              pipelines and data warehousing. Thus making the data available and
              accessible for the Data Scientists and Business Analysts.
            </p>
          </div>
        </div>
        <div className="p-14 bg-white md:px-10">
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
          <div className="flex flex-wrap border-box mx-4 text-center my-14">
            <IconCard
              Icon={DEIcon}
              description="I create data models, design & build ETL pipelines to route datafrom multiple sources to a centralized Warehouse/Lakehouse."
            />

            <IconCard
              Icon={SEIcon}
              description="I always try to build solid and efficient solutions, so I keep learning about SWE concepts and apply them."
            />

            <IconCard
              Icon={AutIcon}
              description="I am always eager to build automated systems that minimize the human intervention, thus improving the performance and reducing time and cost."
            />
            <IconCard
              Icon={CVIcon}
              description="I design and develop computer vision modules and integrate them into the different projects I contribute to."
            />
            <IconCard
              Icon={AIIcon}
              description="I am more interested in the math and theory behind Machine Learning and Deep Learning."
            />
            <IconCard
              Icon={DSIcon}
              description="I am passionate about Data and what information we could get from it. Processing and analyzing datasets is one of my favorite hobbies."
            />
            <IconCard
              Icon={GENAIIcon}
              description="I design and develop computer vision modules and integrate them into the different projects I contribute to."
            />
            <IconCard
              Icon={NLPIcon}
              description="I design and develop computer vision modules and integrate them into the different projects I contribute to."
            />
          </div>
        </div>
        <div className="p-14 bg-white md:px-10">
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
          <div className="px-4 mb-10 mx-auto">
            <SkillSet
              skillsList={Skills}
              classNameUL="flex flex-wrap list-none	p-0 m-0 text-lg font-normal"
              classNameLI="text-center bg-light_purple p-2 flex-auto m-1 text-white text-xl rounded-lg font-medium font-montserrat"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
