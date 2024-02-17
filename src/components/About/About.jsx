import fantastis from "../../assets/sertifikat/fantastis.jpg";
import campex from "../../assets/sertifikat/campex.jpg";
import dimensi from "../../assets/sertifikat/dimensi.png";
import edisi from "../../assets/sertifikat/edisi.jpg";
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
import { useEffect } from "react";

const About = () => {
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
      <div className="font-[Montserrat] bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
        <div className="mx-10 lg:mx-24">
          <h1 className="text-center p-6 font-bold text-lg lg:text-xl">
            About Me
          </h1>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            magnam quaerat id numquam, fugiat accusantium mollitia consequatur
            ullam nisi, et alias soluta, sunt animi. Laboriosam doloremque
            necessitatibus quo porro. Quia debitis necessitatibus quaerat
            impedit exercitationem, aut iure voluptas vero nihil eius? Autem
            iusto, repellat vero ut unde voluptate placeat laborum corporis
            dolorum, aperiam deleniti consequuntur, ea quam eos nihil ipsum quas
            itaque reiciendis animi expedita ullam! Quis fugiat vel ratione! Eum
            eveniet quasi modi praesentium ratione ex, nihil natus a libero
            animi eos veniam quod quisquam deleniti reprehenderit sapiente alias
            delectus excepturi iste. Exercitationem architecto pariatur velit,
            eum suscipit adipisci doloribus consequatur quas molestias deleniti
            dolorem tenetur, magnam a cupiditate voluptatem debitis maxime
            autem! Labore iste facere sed corporis, accusantium reiciendis sunt
            quia error blanditiis. Hic voluptatem earum provident omnis
            accusantium voluptatum quod? Reiciendis, eos odit suscipit
            recusandae neque odio qui eaque ex est maxime a quae sit illum
            velit?
          </p>
          <h1 className="mt-10 text-center text-lg mb-4 font-bold">
            Activities during my college years
          </h1>
          <div>
            <h1 className="underline underline-offset-4 font-bold">
              Volunteer
            </h1>
            <ul className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
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
                <img
                  src={edisi}
                  alt="dimensi"
                  className="rounded-lg shadow-lg"
                />
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h1 className="underline underline-offset-4 font-bold">Course</h1>
            <ul className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
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
