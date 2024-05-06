/* eslint-disable react/no-unescaped-entities */
import profileGifLight from "../../assets/gifLight.gif";
import profileGifDark from "../../assets/gifDark.gif";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div
        id="profile"
        className="items-center justify-center py-24 mx-8 mt-10 lg:py-32 lg:mx-20 xl:mx-12 2xl:mx-32 dark:bg-zinc-800 dark:text-slate-50"
      >
        <div className="flex flex-col-reverse items-center justify-center grid-cols-2 lg:grid">
          <div className="xl:mx-24 lg:items-start lg:px-4 lg:gap-4">
            <div className="flex flex-col items-center gap-2 mt-8 lg:items-start lg:gap-6">
              <h3 className="text-lg md:text-xl lg:text-3xl">Hello, It's Me</h3>
              <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
                Dias Norman
              </h1>
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                I'm a{" "}
                <span className="text-lg font-medium text-green-600 md:text-xl lg:text-2xl xl:text-3xl">
                  Student
                </span>
              </h1>
              <p className="text-center lg:text-lg 2xl:text-xl lg:text-left">
                Undergraduate Student at UPN "Veteran" Jawa Timur, majoring in
                Information System. I'm a passionate person who loves to learn
                new things about technology and always open to new
                opportunities.
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 mt-8 lg:justify-start">
              <Link
                to="https://www.instagram.com/diasnormann?igsh=MXg5b3FiZjVhc2p1cA=="
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo
                  size={44}
                  className="text-green-700 transition-all duration-300 hover:animate-spin hover:shadow-2xl"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/diasnormann?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo
                  size={44}
                  className="text-green-700 transition-all duration-300 hover:animate-spin hover:shadow-2xl"
                />
              </Link>
              <Link
                to="https://github.com/diasoy"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo
                  size={44}
                  className="text-green-700 transition-all duration-300 hover:animate-spin hover:shadow-2xl"
                />
              </Link>
            </div>
            <div className="flex justify-center gap-2 mt-10 lg:justify-start">
              <Link
                to="/curriculum"
                className="flex items-center justify-center gap-4 px-10 py-2 font-semibold text-white transition-all duration-300 bg-green-800 rounded-md hover:bg-green-950 hover:shadow-2xl"
              >
                <ReadCvLogo size={24} />
                Curriculum Vitae
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <img
                src={profileGifLight}
                alt="profileGif"
                className="cursor-default dark:hidden"
              />

              <img
                src={profileGifDark}
                alt="profileGif"
                className="hidden cursor-default dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
