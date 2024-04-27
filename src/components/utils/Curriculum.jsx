import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Curriculum = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // delay 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center flex-col bg-slate-200 py-8 px-4 text-xs md:text-base md:px-24 lg:px-36 xl:text-xl xl:px-72">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
            Dias Norman
          </h1>
          <p className=" text-center">
            Surabaya, Indonesia | diassnorrman@gmail.com |{" "}
            <a
              href="https://www.linkedin.com/in/diasnormann"
              className="underline text-sky-600"
            >
              https://www.linkedin.com/in/diasnormann
            </a>
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="">
            Hello! you can call me <b>Dias</b>, I am an undergraduate student
            who interest with graphic design, web developer and uiux designer. I
            am a passionate person who loves to learn new things about
            technology and always open to new opportunities. As a skilled web
            developer, I specialize in front-end development mainly in
            Javascript <b>React JS</b> and <b>Tailwind CSS</b>, and use{" "}
            <b>Express</b> and <b>MongoDB</b> in backend development. I am also
            familiar with <b>Figma</b> for UI/UX design and use <b>Canva</b> for
            infographic and posters design. I am a person who likes to explore
            something new, creative and fast learner who is always looking to
            improve my skills.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="font-bold">Education</h1>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="mt-2">
            <div className="flex justify-between ">
              <div>
                <h2 className="font-bold">SMAN 17 Surabaya</h2>
                <p>Science Major</p>
              </div>
              <p>2019 - 2022</p>
            </div>
            <div className="flex justify-between  mt-4">
              <div>
                <h2 className=" font-bold">
                  UPN &quot;Veteran&quot; Jawa Timur
                </h2>
                <p className="">Information Systems</p>
              </div>
              <p className="">2022 - Present</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold">Projects</h1>
          <div className="w-full h-[1px] bg-black"></div>
          <div>Coming Soon..</div>
        </div>
        <div className="mt-20">
          <h1 className="font-bold">SKILLS</h1>
          <div className="w-full h-[1px] bg-black"></div>
          <div>
            <div className=" font-bold">
              Skills Set:
              <span className="font-normal">
                {" "}
                Graphic Design, Web Developer, UI UX Designer
              </span>
            </div>
            <div className=" font-bold">
              Software Skills:
              <span className="font-normal">
                {" "}
                Canva, Figma, Visual Studio Code
              </span>
            </div>
            <div className=" font-bold">
              Soft Skills:
              <span className="font-normal">
                {" "}
                Problem Solving, Collaboration, Leadership
              </span>
            </div>
            <div className=" font-bold">
              Languages:
              <span className="font-normal">
                Bahasa Indonesia (Native), English (Basic)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
