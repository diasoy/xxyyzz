import { Link } from "react-router-dom";
import kiddyLearn from "../../assets/UIUX-KiddyLearn Adventures/logo.png";
import qris from "../../assets/UIUX-QRIS/Logo.png";
import shopKuy from "../../assets/Web/ShopKuy.png";
import racingGame from "../../assets/Web/RacingGame.png";
import shoppingList from "../../assets/Web/shoppinglist.png";
import bookshelf from "../../assets/Web/bookshelf.png";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const ProjectHeader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div id="project" className="w-full mt-32">
        <div className="flex justify-center text-xl font-bold">
          <h1 className="text-2xl font-bold text-center md:text-3xl">
            My Project & Experience
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-12 mt-8 md:mx-24 xl:mx-32">
          <div className="flex flex-col mx-2 md:mx-4 lg:mx-6 xl:mx-10 2xl:mx-20">
            <h1 className="mb-4 text-lg font-semibold underline underline-offset-8">
              UI - UX Project
            </h1>
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:items-start 2xl:grid-cols-4">
              <li className="">
                <Link
                  to={"/project-experience/kiddy-learn-adventures"}
                  className=""
                >
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={kiddyLearn}
                      alt="kiddylearn"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex flex-col items-center justify-center gap-4 px-3 py-6 mx-3">
                      <h1 className="font-semibold text-center 2xl:text-lg">
                        KiddyLearn
                      </h1>
                      <p className="text-center">
                        Aplikasi Permainan Belajar Anak Menyenangkan
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/project-experience/qris"} className="">
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={qris}
                      alt="qris"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex flex-col items-center justify-center gap-4 px-3 py-6 mx-3">
                      <h1 className="font-semibold text-center 2xl:text-lg">
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
        <div className="flex flex-col items-center justify-center mx-12 mt-8 md:mx-24 xl:mx-32">
          <div className="flex flex-col mx-2 md:mx-4 lg:mx-6 xl:mx-10 2xl:mx-20">
            <h1 className="mb-4 text-lg font-semibold underline underline-offset-8">
              Web
            </h1>
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:items-start 2xl:grid-cols-4">
              <li className="">
                <Link
                  to="https://dias-shopkuy-site.vercel.app/"
                  target="_blank"
                  className=""
                >
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={shopKuy}
                      alt="shopKuy"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex gap-2 px-4 py-3">
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        React
                      </p>
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        Tailwind CSS
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 px-3 pb-6 pt-2 mx-3">
                      <h1 className="font-semibold 2xl:text-lg">ShopKuy</h1>
                      <p className="">
                        Landing page toko online platzi fake api store
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  to="https://racing-game-site6.vercel.app/"
                  target="_blank"
                  className=""
                >
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={racingGame}
                      alt="racingGame"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex gap-2 px-4 py-3">
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        HTML
                      </p>
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        CSS
                      </p>
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        Javascript
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 px-3 pb-6 pt-2 mx-3">
                      <h1 className="font-semibold 2xl:text-lg">Racing Game</h1>
                      <p className="">Game mobil sederhana melewati obstacle</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  to="https://wegodev-counter-starter.vercel.app/"
                  target="_blank"
                  className=""
                >
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={shoppingList}
                      alt="shoppingList"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex gap-2 px-4 py-3">
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        React
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 px-3 pb-6 pt-2 mx-3">
                      <h1 className="font-semibold 2xl:text-lg">
                        Counter Starter
                      </h1>
                      <p className="">
                        Pencatatan list yang digunakan untuk belanja
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  to="https://bookshelf-app-xi.vercel.app/"
                  target="_blank"
                  className=""
                >
                  <div className="transition-all duration-500 border ease-in-out hover:shadow-2xl max-w-96 shadow rounded-xl bg-green-700 text-white">
                    <img
                      src={bookshelf}
                      alt="bookshelf"
                      className="object-cover w-full h-64 rounded-t-lg"
                    />
                    <div className="flex gap-2 px-4 py-3">
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        HTML
                      </p>
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        CSS
                      </p>
                      <p className="bg-white rounded text-green-800 px-2 py-1">
                        Javascript
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 px-3 pb-6 pt-2 mx-3">
                      <h1 className="font-semibold 2xl:text-lg">
                        Bookshelf App
                      </h1>
                      <p className="">
                        Mencatat buku yang sudah dibaca dan belum dibaca
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
