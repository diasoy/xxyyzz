import fantastis from "../../assets/sertifikat/fantastis.jpg";
import campex from "../../assets/sertifikat/campex.jpg";
import dimensi from "../../assets/sertifikat/dimensi.png";
import edisi from "../../assets/sertifikat/edisi.jpg";
import pensi from "../../assets/sertifikat/pensi.png";
import googleCloud from "../../assets/sertifikat/googlecloud.png";
import dasarProyek from "../../assets/sertifikat/dasar manajemen proyek.png";
import dasarJavascript from "../../assets/sertifikat/dasar javascript.png";
import pengembangSoftware from "../../assets/sertifikat/pengembang software.png";
import sql from "../../assets/sertifikat/sql.png";
import webReact from "../../assets/sertifikat/web react.png";
import html from "../../assets/sertifikat/html.png";
import css from "../../assets/sertifikat/css cp.png";
import cssFramework from "../../assets/sertifikat/css framework.png";
import jscp from "../../assets/sertifikat/js cp.png";
import jsDom from "../../assets/sertifikat/js dom.png";
import jsAsync from "../../assets/sertifikat/jsasynchronous.png";
import ajaxweb from "../../assets/sertifikat/ajaxwebapi.png";
import expressejs from "../../assets/sertifikat/expressejs.png";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
        <div className="mx-10 lg:mx-24">
          <h1 className="p-6 text-xl font-bold text-center lg:text-2xl">
            About Me
          </h1>
          <p className="text-justify">
            I am a student majoring in Information Systems at a university in
            Surabaya, namely University Pembangunan Nasional &quot;Veteran&quot;
            East Java. I am someone who has an interest in the field of
            Information Technology. I have the ability to create UI/UX designs
            using the Figma design tool. I also have the ability to create
            functional web pages using HTML, TailwindCSS, and JavaScript. I also
            have the ability to use the React.js front-end framework to speed up
            development and increase scalability. I also have the ability to
            ensure affordability (accessibility) and responsibility on various
            devices and browsers.
          </p>
          <h1 className="mt-10 mb-4 text-lg font-bold">
            Activities during my college years
          </h1>
          <div>
            <h1 className="font-bold underline underline-offset-4">
              Volunteer
            </h1>
            <ul className="flex flex-col gap-2 mx-10 md:grid md:grid-cols-2 lg:grid-cols-3">
              <li className="list-disc">
                <h1 className="text-sm">FANTASTIS</h1>
                <img
                  src={fantastis}
                  alt="fantastis"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="list-disc">
                <h1 className="text-sm">Smantass Campus Expo 2023</h1>
                <img
                  src={campex}
                  alt="campex"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="list-disc">
                <h1 className="text-sm">
                  Studi Mengenal Sistem Informasi (DIMENSI)
                </h1>
                <img
                  src={dimensi}
                  alt="dimensi"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="list-disc">
                <h1 className="text-sm">
                  Eksplorasi Diri Sistem Informasi (EDISI)
                </h1>
                <img src={edisi} alt="edisi" className="rounded-lg shadow-lg" />
              </li>
              <li className="list-disc">
                <h1 className="text-sm">
                  Puncak Pengaderan Sistem Informasi (PENSI)
                </h1>
                <img src={pensi} alt="pensi" className="rounded-lg shadow-lg" />
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h1 className="font-bold underline underline-offset-4">Course</h1>
            <ul className="flex flex-col gap-10 mt-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              <li className="">
                <img
                  src={dasarProyek}
                  alt="manajemen proyek"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={googleCloud}
                  alt="google cloud"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={dasarJavascript}
                  alt="dasar javascript"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={pengembangSoftware}
                  alt="pengembang software"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img src={sql} alt="sql" className="rounded-lg shadow-lg" />
              </li>
              <li className="">
                <img
                  src={webReact}
                  alt="web react"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img src={html} alt="html" className="rounded-lg shadow-lg" />
              </li>
              <li className="">
                <img src={css} alt="css" className="rounded-lg shadow-lg" />
              </li>
              <li className="">
                <img
                  src={cssFramework}
                  alt="dasar javascript"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={jscp}
                  alt="pengembang software"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={jsDom}
                  alt="js DOM"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={jsAsync}
                  alt="js Async"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={ajaxweb}
                  alt="ajax web"
                  className="rounded-lg shadow-lg"
                />
              </li>
              <li className="">
                <img
                  src={expressejs}
                  alt="express ejs"
                  className="rounded-lg shadow-lg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
