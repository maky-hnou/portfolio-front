import Head from "next/head";
import Image from "next/image";
import profilepicture from "../../media/hani.jpg";
import Experience from "../components/Experience";

export default function About() {
  return (
    <div>
      <Head>
        <title>H. YOUSFI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-auto p-14 bg-white text-black pt-32 md:px-10">
        <div>
          <div className="py-12">
            <div className="flex items-center justify-between w-full md:block">
              <div className="w-80 h-80">
                <Image
                  src={profilepicture}
                  alt="Hani"
                  className="place-items-end float-right w-full h-full object-cover border-hidden rounded-full"
                />
              </div>
              <div className="grow-0 shrink-0 basis-5/12 px-4 box-border lg:basis-1/2 md:pt-16">
                <h1 className="mb-10 uppercase text-4xl text-black font-semibold md:mb-2">
                  PERSONAL DETAILS
                </h1>
                <p className="mb-8 max-w-[445px] mt-0 text-text_color text-base text-left font-light">
                  Here's some more info about me.
                </p>
              </div>
            </div>
            <div className="pt-16 w-full relative px-4 box-border text-text_color text-base font-light md:pt-0">
              <p className="mt-0 mb-4 block">
                I started as a Network Engineering Student. However, I was more
                curious and eager to learn about Artificial Intelligence. So, I
                ended up doing my graduation internship in Novel-Ti (a Tunisian
                startup) and discovering more about AI and Computer Vision.
              </p>
              <p className="mt-0 mb-4 block">
                In September 2018, I started working full-time at Novel-Ti as an
                R&D Engineer where I helped building AI and Computer Vision
                solutions that solve real world problems.
              </p>
              <p className="mt-0 mb-4 block">
                In August 2021, I decided to start my first experience abroad.
                My first role was a Machine Learning and IT consultant at
                Aigometri AB. I assisted my colleagues with working on an
                internal project where I took care of the AI & Computer Vision
                part and helped in building a test platform for the project. I
                also worked as a Software Engineer Consultant for one of the
                biggest fintech companies in Europe. My role as consultant was
                about maintaining integrations with third party systems and
                building automations to improve the efficiency and performance
                of the different teams.
              </p>
              <p className="mt-0 mb-4 block">
                May 2022 was the beginning of my third work experience. I was
                offered a Data Engineer role at Klarna. Since then, I discovered
                my passion about Data; my role there covers data-modeling,
                designing and building ETL pipelines and data-warehousing.
              </p>
            </div>
          </div>
          <div>
            <hr className="mb-20 mx-[10%] border-t-1" />
          </div>
          <div className="py-20 block box-border text-text_color font-light text-base">
            <div className="text-center pb-10 ">
              <h1 className="mb-2.5 text-4xl font-semibold mt-0 text-black">
                My Experience
              </h1>
            </div>
            <div>
              <Experience />
            </div>
          </div>
          <div>
            <hr className="mb-20 mx-[10%] border-t-1" />
          </div>
          // Put the next sections here
        </div>
      </main>
    </div>
  );
}
