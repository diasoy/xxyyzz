/* eslint-disable react/no-unescaped-entities */
// import instagram from "../../assets/images/ig.png";
// import linkedin from "../../assets/images/linkedin.png";
import profile from "../../assets/images/profile.png";

const Profile = () => {
  return (
    <>
      <div className="text-white mx-8 py-24 lg:mx-20 xl:mx-32 mt-10 items-center justify-center">
        <div className="flex flex-col-reverse lg:grid grid-cols-2 justify-center items-center">
          <div className="md:mx-24 lg:items-start lg:px-4 lg:gap-4">
            <div className="flex items-center flex-col gap-2 mt-8 lg:items-start lg:gap-6">
              <h3 className="text-lg lg:text-3xl">Hello, It's Me</h3>
              <h1 className="text-2xl font-bold lg:text-3xl">Dias Norman</h1>
              <h1 className="text-lg lg:text-2xl">
                I'm a <span className="text-green-600">Software Developer</span>
              </h1>
              <p className="text-center text-sm lg:text-base lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit tenetur aut doloremque doloribus beatae corrupti
                unde facilis voluptatum dignissimos porro.
              </p>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="flex gap-2 mt-10 justify-center lg:justify-start ">
              <a
                href=""
                className="bg-green-800 px-4 py-2 rounded-md hover:bg-green-950"
              >
                Download CV
              </a>
              <a
                href=""
                className="border border-zinc-100 px-4 py-2 rounded-md hover:bg-green-900"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={profile}
              alt=""
              className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
