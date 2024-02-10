import { Link } from "react-router-dom";
import kiddyLearn from "../../assets/UIUX-KiddyLearn Adventures/33759325_8083644.jpg";

const ProjectHeader = () => {
  return (
    <>
      <div className="w-full mt-16 dark:bg-zinc-800 dark:text-white">
        <div className="flex justify-center font-bold text-xl ">
          <h1>My Project & Experience</h1>
        </div>
        <div className="flex flex-col justify-center items-start mx-12 mt-12">
          <div>
            <h1 className="font-semibold text-lg">UI - UX Project</h1>
            <ul>
              <li>
                <div className="border rounded-xl pb-3">
                  <img
                    src={kiddyLearn}
                    alt={kiddyLearn}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  <div className="flex flex-col py-3 px-3 mx-3 gap-4">
                    <h1 className="font-semibold">KiddyLearn Adventures</h1>
                    <p>
                      Aplikasi Permainan dan Pembelajaran Anak yang Menyenangkan
                    </p>
                  </div>
                  <Link
                    to={"/project-experience/kiddy-learn-adventures"}
                    className="bg-green-600 hover:bg-green-800 px-3 py-1 text-white ml-6 rounded-md"
                  >
                    See for details
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h1>2021 - 2022</h1>
            <ul>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
            </ul>
          </div>
          <div>
            <h1>2022 - 2023</h1>
            <ul>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
            </ul>
          </div>
          <div>
            <h1>2024 - 2025</h1>
            <ul>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
              <li>Mengerjakan PR</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
