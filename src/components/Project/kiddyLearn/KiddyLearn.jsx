import splashScreen1 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 1.png"
import splashScreen2 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 2.png";
import splashScreen3 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 3.png";
import splashScreen4 from "../../../assets/UIUX-KiddyLearn Adventures/Splash Screen - 4.png";
import DesignThinking from "./DesignThinking";

const KiddyLearn = () => {
  const kembali = () => {
    window.history.back();
  };

  return (
    <>
      <div className="font-[Montserrat] dark:bg-zinc-800 dark:text-white">
        <button
          onClick={kembali}
          className="fixed bg-green-600 text-white px-5 py-2 rounded-br-xl"
        >
          Kembali
        </button>
        <div className="flex flex-col pt-12 mx-6 gap-4">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="font-bold text-xl">KiddyLearn Adventures</h1>
            <p className="text-justify text-sm">
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
          <DesignThinking />
          <div className="flex flex-col justify-center items-center mx-10 my-12">
            <div>
              <img src={splashScreen1} alt="" />
              <p className="text-center mb-5 text-sm mt-2">Splash Screen - 1</p>
            </div>
            <div>
              <img src={splashScreen2} alt="" />
              <p className="text-center mb-6 text-sm mt-2">Splash Screen - 2</p>
            </div>
            <div>
              <img src={splashScreen3} alt="" />
              <p className="text-center mb-6 text-sm mt-2">Splash Screen - 3</p>
            </div>
            <div>
              <img src={splashScreen4} alt="" />
              <p className="text-center mb-6 text-sm mt-2">Splash Screen - 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiddyLearn;
