import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const AboutHeader = () => {
  return (
    <>
      <div className="lg:py-10 dark:bg-zinc-800 dark:text-white">
        <div className="mx-12 flex flex-col gap-4 md:mx-24 lg:mx-32 xl:mx-60">
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            WHAT I DO
          </h1>

          <ul className="flex flex-col gap-4">
            <li className="font-semibold mt-10 text-lg">UI UX Designer</li>
            <ul>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Merancang antarmuka pengguna yang intuitif dan menarik
                menggunakan alat desain Figma.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Pemahaman yang kuat tentang prinsip desain UI, seperti
                tipografi, warna, layout, dan hierarki visual.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Keahlian dalam pembuatan ikon, tombol, dan elemen grafis lainnya
                yang dapat meningkatkan pengalaman pengguna.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Melakukan riset pengguna dan menerapkan temuan tersebut ke dalam
                desain produk.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Pemahaman yang mendalam tentang alur kerja pengguna dan
                pengalaman pengguna yang optimal.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Keahlian dalam membuat wireframe dan storyboard untuk
                menggambarkan struktur dan alur pengalaman pengguna.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Pengalaman dalam melakukan pengujian pengguna untuk
                mengidentifikasi masalah dan mendapatkan umpan balik yang
                berguna.
              </li>
            </ul>
            <li className="font-semibold mt-5 text-lg">Web Developer</li>
            <ul>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Penguasaan HTML, TailwindCSS dan JavaScript untuk membuat desain
                UI menjadi halaman web yang fungsional.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Kemampuan dalam menggunakan kerangka kerja front-end React.js
                untuk mempercepat pengembangan dan meningkatkan skalabilitas.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Kemampuan untuk memastikan keterjangkauan (accessibility) dan
                responsivitas pada berbagai perangkat dan browser.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Kemampuan dalam menggunakan kerangka kerja back-end seperti
                Express.js untuk mempercepat pengembangan aplikasi.
              </li>
              <li className="list-disc text-justify md:text-start lg:text-lg">
                Keahlian dalam desain basis data dan penggunaan database MongoDB
                dan MySQL.
              </li>
            </ul>
          </ul>
          <Link
            to="/about"
            className="text-green-600 hover:text-green-500 text-xl mt-10"
          >
            Lihat saya lebih jauh
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
