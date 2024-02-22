import { Link } from "react-router-dom";
import kiddyLearn from "../../assets/UIUX-KiddyLearn Adventures/logo.png";
import qris from "../../assets/UIUX-QRIS/Logo.png";
import shopKuy from "../../assets/Web/ShopKuy.png";

const ProjectHeader = () => {
  return (
    <>
      <div className="w-full mt-32">
        <div className="flex justify-center font-bold text-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            My Project & Experience
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mx-12 md:mx-24 xl:mx-32 mt-8">
          <div className="flex flex-col mx-2 md:mx-4 lg:mx-6 xl:mx-10 2xl:mx-20">
            <h1 className="font-semibold text-lg mb-4 underline underline-offset-8">
              UI - UX Project
            </h1>
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:items-center 2xl:grid-cols-4">
              <li className="">
                <Link
                  to={"/project-experience/kiddy-learn-adventures"}
                  className=""
                >
                  <div className="border-[3px] rounded-xl hover:border-[4px] hover:border-green-700 dark:hover:border-[4px] dark:hover:border-white bg-green-700 text-white transition-all duration-500">
                    <img
                      src={kiddyLearn}
                      alt="kiddylearn"
                      className="w-full h-64 rounded-t-lg object-cover"
                    />
                    <div className="flex flex-col justify-center items-center py-6 px-3 mx-3 gap-4">
                      <h1 className="font-semibold 2xl:text-lg text-center">
                        KiddyLearn
                      </h1>
                      <p className="text-center">
                        Aplikasi Permainan dan Belajar Anak Menyenangkan
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/project-experience/qris"} className="">
                  <div className="border-[3px] rounded-xl hover:border-[4px] hover:border-green-700 dark:hover:border-[4px] dark:hover:border-white bg-green-700 text-white transition-all duration-500">
                    <img
                      src={qris}
                      alt="qris"
                      className="w-full h-64 rounded-t-lg object-cover"
                    />
                    <div className="flex flex-col justify-center items-center py-6 px-3 mx-3 gap-4">
                      <h1 className="font-semibold 2xl:text-lg text-center">
                        Qris
                      </h1>
                      <p className="text-center">
                        Aplikasi Pembayaran dan Penyimpanan Uang Digital
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-12 md:mx-24 xl:mx-32 mt-8">
          <div className="flex flex-col mx-2 md:mx-4 lg:mx-6 xl:mx-10 2xl:mx-20">
            <h1 className="font-semibold text-lg mb-4 underline underline-offset-8">
              Front End
            </h1>
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:items-center 2xl:grid-cols-4">
              <li className="">
                <Link
                  to="https://dias-shopkuy-site.vercel.app/"
                  target="_blank"
                  className=""
                >
                  <div className="border-[3px] rounded-xl hover:border-[4px] hover:border-green-700 dark:hover:border-[4px] dark:hover:border-white bg-green-700 text-white transition-all duration-500">
                    <img
                      src={shopKuy}
                      alt="shopKuy"
                      className="w-full h-64 rounded-t-lg object-cover"
                    />
                    <div className="flex flex-col justify-center items-center py-6 px-3 mx-3 gap-4">
                      <h1 className="font-semibold 2xl:text-lg text-center">
                        ShopKuy
                      </h1>
                      <p className="text-center">
                        Landing Page Toko Online Platzi Fake Api Store
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
