/* eslint-disable react/no-unescaped-entities */

const AboutHeader = () => {
  return (
    <>
      <div className="dark:bg-zinc-800 dark:text-white mt-16">
        <div className="mx-8 flex flex-col gap-4 md:mx-24">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            About Me
          </h1>
          <p className="text-justify md:text-lg lg:text-xl 2xl:text-2xl">
            Saya merupakan mahasiswa aktif di salah satu perguruan tinggi di
            Indonesia yaitu Universitas Pembangunan Nasional "Veteran" Jawa
            Timur. Saya memiliki ketertarikan di bidang IT, khususnya di bidang
            pengembangan aplikasi berbasis web. Saya memiliki kemampuan di
            bidang frontend dan backend. Saya juga memiliki kemampuan di bidang
            desain grafis, seperti membuat poster, logo, dan lain-lain.
          </p>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/about"
            className="bg-green-600 px-4 py-2 rounded-md ml-8 text-white font-semibold hover:bg-green-800"
          >
            See Another Journey 🚀
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
