/* eslint-disable react/no-unescaped-entities */
// import instagram from "../../assets/images/ig.png";
// import linkedin from "../../assets/images/linkedin.png";

const Profile = () => {
  return (
    <>
      <div className="mx-8 pt-24 lg:mx-20 xl:mx-12 2xl:mx-32 mt-10 items-center justify-center dark:bg-zinc-800 dark:text-white">
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
              <p className="text-center md:text-lg lg:text-left lg:text-xl 2xl:text-2xl">
                Undergraduate Student at UPN "Veteran" Jawa Timur, majoring in
                Information System. I'm a passionate person who loves to learn
                new things about technology and always open to new
                opportunities.
              </p>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <img src="" alt="" />
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
                className="border border-black px-4 py-2 rounded-md hover:bg-green-900 hover:text-white dark:border-white" target="_blank" rel="noreferrer"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img
                src="https://media.giphy.com/media/qbmjPU9cdaKkM/giphy.gif?cid=ecf05e47nth198giywz7q5p46660yqs1wxcwczq4wg5wwlr7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt=""
                className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
