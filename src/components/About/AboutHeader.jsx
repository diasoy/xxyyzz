/* eslint-disable react/no-unescaped-entities */
const AboutHeader = () => {
  return (
    <>
      <div className="lg:py-10 dark:bg-zinc-800 dark:text-white">
        <div className="mx-8 flex flex-col gap-4 md:mx-24 lg:mx-32 xl:mx-60">
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            WHAT I DO
          </h1>

          <ul className="flex flex-col gap-4">
            <li className="font-semibold mt-10">UI UX Designer</li>
            <ul>
              <li className="list-disc">
                Merancang antarmuka pengguna yang intuitif dan menarik
                menggunakan alat desain seperti Adobe XD, Sketch, atau Figma.
              </li>
              <li className="list-disc">
                Pemahaman yang kuat tentang prinsip desain UI, seperti
                tipografi, warna, layout, dan hierarki visual.
              </li>
              <li className="list-disc">
                Keahlian dalam pembuatan ikon, tombol, dan elemen grafis lainnya
                yang dapat meningkatkan pengalaman pengguna.
              </li>
              <li className="list-disc">
                Melakukan riset pengguna dan menerapkan temuan tersebut ke dalam
                desain produk.
              </li>
              <li className="list-disc">
                Pemahaman yang mendalam tentang alur kerja pengguna dan
                pengalaman pengguna yang optimal.
              </li>
              <li className="list-disc">
                Keahlian dalam membuat wireframe dan storyboard untuk
                menggambarkan struktur dan alur pengalaman pengguna.
              </li>
              <li className="list-disc">
                Pengalaman dalam melakukan pengujian pengguna untuk
                mengidentifikasi masalah dan mendapatkan umpan balik yang
                berguna.
              </li>
            </ul>
            <li className="font-semibold mt-5">Web Developer</li>
            <ul>
              <li className="list-disc">
                Penguasaan HTML, TailwindCSS dan JavaScript untuk membuat desain
                UI menjadi halaman web yang fungsional.
              </li>
              <li className="list-disc">
                Kemampuan dalam menggunakan kerangka kerja front-end React.js
                untuk mempercepat pengembangan dan meningkatkan skalabilitas.
              </li>
              <li className="list-disc">
                Kemampuan untuk memastikan keterjangkauan (accessibility) dan
                responsivitas pada berbagai perangkat dan browser.
              </li>
              <li className="list-disc">
                Pengetahuan tentang teknik animasi CSS dan JavaScript untuk
                meningkatkan interaktivitas dan keindahan antarmuka pengguna.
              </li>
              <li className="list-disc">
                Kemampuan dalam menggunakan kerangka kerja back-end seperti
                Express.js untuk mempercepat pengembangan aplikasi.
              </li>
              <li className="list-disc">
                Keahlian dalam desain basis data dan penggunaan database MongoDB
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
