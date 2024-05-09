import splashScreen1 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 1.png";
import splashScreen2 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 2.png";
import splashScreen3 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 3.png";
import splashScreen4 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 4.png";
import login from "../../../assets/UIUX-KiddyLearn Adventures/Login.png";
import registrasi1 from "../../../assets/UIUX-KiddyLearn Adventures/Pilih Birthday.png";
import registrasi2 from "../../../assets/UIUX-KiddyLearn Adventures/Pilih Bahasa.png";
import registrasi3 from "../../../assets/UIUX-KiddyLearn Adventures/Pilih Avatar.png";
import beranda from "../../../assets/UIUX-KiddyLearn Adventures/Halaman Utama.png";
import leaderboard from "../../../assets/UIUX-KiddyLearn Adventures/LeaderBoard.png";
import papanPerkembangan from "../../../assets/UIUX-KiddyLearn Adventures/Papan Perkembangan.png";
import shop from "../../../assets/UIUX-KiddyLearn Adventures/Shop.png";
import tebakGambar1 from "../../../assets/UIUX-KiddyLearn Adventures/Tebak Gambar-2.png";
import tebakGambar2 from "../../../assets/UIUX-KiddyLearn Adventures/Tebak Gambar-1.png";
import tebakGambar3 from "../../../assets/UIUX-KiddyLearn Adventures/Tebak Gambar.png";
import puzzle from "../../../assets/UIUX-KiddyLearn Adventures/Puzzle.png";
import memoriMatching from "../../../assets/UIUX-KiddyLearn Adventures/Memory Matching.png";
import labirinPendidikan from "../../../assets/UIUX-KiddyLearn Adventures/Labirin Pendidikan.png";
import tebakKata from "../../../assets/UIUX-KiddyLearn Adventures/Tebak Kata.png";
import mencariPerbedaan from "../../../assets/UIUX-KiddyLearn Adventures/Mencari Perbedaan.png";
import cerdasCermat from "../../../assets/UIUX-KiddyLearn Adventures/Interaktif Ceria.png";
import matematika from "../../../assets/UIUX-KiddyLearn Adventures/Hitung.png";
import setting1 from "../../../assets/UIUX-KiddyLearn Adventures/Settings.png";
import setting2 from "../../../assets/UIUX-KiddyLearn Adventures/Settings-1.png";
import DesignThinking from "./DesignThinking";
import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";

const KiddyLearn = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      <div className="dark:bg-zinc-800 dark:text-white">
        <div className="flex flex-col gap-4 pt-12 mx-10 md:mx-32 lg:mx-64 2xl:mx-96">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-xl font-bold 2xl:text-2xl">
              KiddyLearn Adventures
            </h1>
            <p className="text-sm text-justify 2xl:text-base">
              “KiddyLearn Adventures” adalah sebuah aplikasi pembelajaran yang
              dihadirkan dengan konsep user interface yang menarik dan
              interaktif, dirancang khusus untuk anak-anak. “KiddyLearn
              Adventures” adalah aplikasi pembelajaran yang dirancang khusus
              untuk anak-anak usia dini hingga pra-sekolah. Aplikasi ini akan
              menawarkan beragam pembelajaran yang menggabungkan permainan,
              cerita, gambar, dan aktivitas yang menarik. Tujuan utama aplikasi
              ini adalah untuk membuat pembelajaran menjadi pengalaman yang
              menyenangkan bagi anak-anak, sehingga mereka lebih termotivasi
              untuk belajar.
            </p>
            <div className="flex flex-col items-start justify-start">
              <h1>Role :</h1>
              <h1 className="font-bold">UI Designer, UX Researcher</h1>
            </div>
          </div>
          <DesignThinking />

          <a
            href="https://www.figma.com/proto/b70xTQr2TgCNRDFvHm2kyG/KiddyLearn-Adventures?page-id=0%3A1&type=design&node-id=176-582&viewport=302%2C391%2C0.14&t=0NffNxKZvzhRHrd7-1&scaling=scale-down&starting-point-node-id=176%3A582&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm lg:text-md px-3 py-1 text-white bg-green-700 rounded hover:bg-green-800">
              See Prototype
            </button>
          </a>

          {/* Splash Screen */}
          <div className="mt-10">
            <h1 className="font-semibold text-left 2xl:text-lg">
              Halaman Splash Screen
            </h1>
            <div className="grid grid-cols-2 gap-2 mx-1 my-2">
              <div>
                <img src={splashScreen1} alt="" />
                <p className="mt-1 text-sm text-center ">Splash Screen - 1</p>
              </div>
              <div>
                <img src={splashScreen2} alt="" />
                <p className="mt-1 text-sm text-center">Splash Screen - 2</p>
              </div>
              <div>
                <img src={splashScreen3} alt="" />
                <p className="mt-1 text-sm text-center">Splash Screen - 3</p>
              </div>
              <div>
                <img src={splashScreen4} alt="" />
                <p className="mt-1 text-sm text-center">Splash Screen - 4</p>
              </div>
            </div>
          </div>

          {/* Registrasi */}
          <div>
            <h1 className="font-semibold text-left 2xl:text-lg">
              Halaman Registrasi
            </h1>
            <div className="grid grid-cols-2 gap-2 mx-1 my-4">
              <div>
                <img src={login} alt="" />
                <p className="mt-1 text-sm text-center">Login</p>
              </div>
              <div>
                <img src={registrasi1} alt="" />
                <p className="mt-1 text-sm text-center">Pilih Birthday</p>
              </div>
              <div>
                <img src={registrasi2} alt="" />
                <p className="mt-1 text-sm text-center">Pilih Bahasa</p>
              </div>
              <div>
                <img src={registrasi3} alt="" />
                <p className="mt-1 text-sm text-center">Pilih Avatar</p>
              </div>
            </div>
          </div>

          {/* Beranda */}
          <div>
            <h1 className="font-semibold text-left 2xl:text-lg">
              Halaman Utama
            </h1>
            <div className="grid grid-cols-2 gap-2 mx-1 my-4">
              <div>
                <img src={beranda} alt="" />
                <p className="mt-1 text-sm text-center">Halaman Utama</p>
              </div>
              <div>
                <img src={leaderboard} alt="" />
                <p className="mt-1 text-sm text-center">Leaderboard</p>
              </div>
              <div>
                <img src={papanPerkembangan} alt="" />
                <p className="mt-1 text-sm text-center">Papan Perkembangan</p>
              </div>
              <div>
                <img src={shop} alt="" />
                <p className="mt-1 text-sm text-center">Toko</p>
              </div>
            </div>
          </div>

          {/* Permainan */}
          <div>
            <h1 className="font-semibold text-left 2xl:text-lg">Permainan</h1>
            <div className="grid grid-cols-2 gap-2 mx-1 my-4">
              <div>
                <img src={tebakGambar1} alt="" />
                <p className="mt-1 text-sm text-center">Tebak Gambar - 1</p>
              </div>
              <div>
                <img src={tebakGambar2} alt="" />
                <p className="mt-1 text-sm text-center">Tebak Gambar - 2</p>
              </div>
              <div>
                <img src={tebakGambar3} alt="" />
                <p className="mt-1 text-sm text-center">Tebak Gambar - 3</p>
              </div>
              <div>
                <img src={puzzle} alt="" />
                <p className="mt-1 text-sm text-center">Puzzle</p>
              </div>
              <div>
                <img src={memoriMatching} alt="" />
                <p className="mt-1 text-sm text-center">Memori Matching</p>
              </div>
              <div>
                <img src={labirinPendidikan} alt="" />
                <p className="mt-1 text-sm text-center">Labirin Pendidikan</p>
              </div>
              <div>
                <img src={tebakKata} alt="" />
                <p className="mt-1 text-sm text-center">Tebak Kata</p>
              </div>
              <div>
                <img src={mencariPerbedaan} alt="" />
                <p className="mt-1 text-sm text-center">Mencari Perbedaan</p>
              </div>
              <div>
                <img src={cerdasCermat} alt="" />
                <p className="mt-1 text-sm text-center">Cerdas Cermat</p>
              </div>
              <div>
                <img src={matematika} alt="" />
                <p className="mt-1 text-sm text-center">Hitung</p>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div>
            <h1 className="font-semibold text-left">Pengaturan</h1>
            <div className="grid grid-cols-2 gap-2 mx-1 my-4">
              <div>
                <img src={setting1} alt="" />
                <p className="mt-1 text-sm text-center">Pengaturan</p>
              </div>
              <div>
                <img src={setting2} alt="" />
                <p className="mt-1 text-sm text-center">Pengaturan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiddyLearn;
