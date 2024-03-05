import splashScreen from "../../../assets/UIUX-QRIS/Splash Screen.png";
import login from "../../../assets/UIUX-QRIS/Login.png";
import registrasi from "../../../assets/UIUX-QRIS/Register.png";
import beranda from "../../../assets/UIUX-QRIS/Dashboard.png";
import riwayatSelesai from "../../../assets/UIUX-QRIS/Riwayat Selesai.png";
import riwayatBerlangsung from "../../../assets/UIUX-QRIS/Riwayat Berlangsung.png";
import event from "../../../assets/UIUX-QRIS/Event.png";
import profile from "../../../assets/UIUX-QRIS/Profile.png";
import merch from "../../../assets/UIUX-QRIS/QRIS Merch.png";
import scan from "../../../assets/UIUX-QRIS/Scan Qris.png";
import popupBerhasil1 from "../../../assets/UIUX-QRIS/Popup berhasil.png";
import popupBerhasil2 from "../../../assets/UIUX-QRIS/Popup berhasil-1.png";
import { useEffect } from "react";

const Qris = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <div className=" dark:bg-zinc-800 dark:text-white">
        <div className="flex flex-col pt-12 mx-10 gap-4 md:mx-32 lg:mx-64 2xl:mx-96">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="font-bold text-xl 2xl:text-2xl">QRIS</h1>
            <p className="text-justify text-sm 2xl:text-base">
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
            <div className="flex flex-col justify-start items-start">
              <h1>Role :</h1>
              <h1 className="font-bold">UI Designer, UX Researcher</h1>
            </div>
          </div>

          {/* Halaman Splash Screen */}
          <div className="mt-10">
            <h1 className="text-left font-semibold 2xl:text-lg">
              Splash Screen, Login & Register
            </h1>
            <div className="grid mx-1 my-2 gap-2 grid-cols-3 items-center">
              <div>
                <img src={splashScreen} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Splash Screen</p>
              </div>
              <div>
                <img src={login} alt="" className="" />
                <p className="text-center mx-auto text-sm mt-1 ">Login</p>
              </div>
              <div>
                <img src={registrasi} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Register</p>
              </div>
            </div>
          </div>

          {/* Halaman Beranda */}
          <div className="mt-10">
            <h1 className="text-left font-semibold 2xl:text-lg">
              Halaman Utama
            </h1>
            <div className="grid mx-1 my-2 gap-2 grid-cols-3 items-center">
              <div>
                <img src={beranda} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Halaman Utama</p>
              </div>
              <div>
                <img src={riwayatSelesai} alt="" className="" />
                <p className="text-center mx-auto text-sm mt-1 ">
                  Riwayat Selesai
                </p>
              </div>
              <div>
                <img src={riwayatBerlangsung} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Berlangsung</p>
              </div>
            </div>
          </div>

          {/* Halaman Event */}
          <div className="mt-10">
            <h1 className="text-left font-semibold 2xl:text-lg">
              Halaman Event, Profile & Qris Merch
            </h1>
            <div className="grid mx-1 my-2 gap-2 grid-cols-3 items-center">
              <div>
                <img src={profile} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Profile</p>
              </div>
              <div>
                <img src={event} alt="" className="" />
                <p className="text-center mx-auto text-sm mt-1 ">Event</p>
              </div>
              <div>
                <img src={merch} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Qris Merch</p>
              </div>
            </div>
          </div>

          {/* Halaman Pembayaran */}
          <div className="mt-10">
            <h1 className="text-left font-semibold 2xl:text-lg">
              Halaman Pembayaran
            </h1>
            <div className="grid mx-1 my-2 gap-2 grid-cols-3 items-center">
              <div>
                <img src={scan} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Scan Pembayaran</p>
              </div>
              <div>
                <img src={popupBerhasil1} alt="" className="" />
                <p className="text-center mx-auto text-sm mt-1 ">
                  Popup Loading Pembayaran
                </p>
              </div>
              <div>
                <img src={popupBerhasil2} alt="" className="" />
                <p className="text-center text-sm mt-1 ">Pembayaran Berhasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qris;
