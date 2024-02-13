/* eslint-disable react/no-unescaped-entities */
// import instagram from "../../assets/images/ig.png";
// import linkedin from "../../assets/images/linkedin.png";
import profileGifLight from "../../assets/gifLight.gif";
import profileGifDark from "../../assets/gifDark.gif";
import { InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const Profile = () => {
  return (
    <>
      <div className=" mx-8 py-24 lg:py-48 lg:mx-20 xl:mx-12 2xl:mx-32 mt-10 items-center justify-center dark:bg-zinc-800 dark:text-white">
        <div className="flex flex-col-reverse lg:grid grid-cols-2 justify-center items-center">
          <div className="xl:mx-24 lg:items-start lg:px-4 lg:gap-4">
            <div className="flex items-center flex-col gap-2 mt-8 lg:items-start lg:gap-6">
              <h3 className="text-lg md:text-xl lg:text-3xl">Hello, It's Me</h3>
              <h1 className="text-2xl md:text-3xl font-bold xl:text-5xl">
                Dias Norman
              </h1>
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                I'm a{" "}
                <span className="text-green-600 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  Student
                </span>
              </h1>
              <p className="text-center 2xl:text-xl lg:text-left">
                Undergraduate Student at UPN "Veteran" Jawa Timur, majoring in
                Information System. I'm a passionate person who loves to learn
                new things about technology and always open to new
                opportunities.
              </p>
            </div>
            <div className="flex mt-8 gap-5 items-center justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/diasnormann?igsh=MXg5b3FiZjVhc2p1cA=="
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo size={44} className="hover:animate-spin" />
              </a>
              <a
                href="https://www.linkedin.com/in/diasnormann?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={44} className="hover:animate-spin" />
              </a>
              <a
                href="https://github.com/diasoy"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={44} className="hover:animate-spin" />
              </a>
            </div>
            <div className="flex gap-2 mt-10 justify-center lg:justify-start ">
              <a
                href=""
                className="text-white bg-green-800 px-4 py-2 rounded-md font-semibold hover:bg-green-950"
              >
                Download CV
              </a>
              <a
                href="http://wa.me/+6281934760910"
                className="border border-black px-4 py-2 rounded-md hover:bg-green-900 hover:text-white dark:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <a
                href="https://storyset.com/people"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={profileGifLight}
                  alt="profileGif"
                  className="dark:hidden cursor-default"
                />
              </a>
              <a
                href="https://storyset.com/people"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={profileGifDark}
                  alt="profileGif"
                  className="dark:block hidden cursor-default"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
