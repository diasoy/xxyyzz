const AboutHeader = () => {
  return (
    <>
      <div id="about" className="lg:py-10 dark:bg-zinc-800 dark:text-slate-50">
        <div className="flex flex-col gap-4 mx-12 md:mx-24 lg:mx-32 xl:mx-60">
          <h1 className="text-2xl font-bold text-center lg:text-3xl">
            WHAT I DO
          </h1>

          <ul className="flex flex-col gap-4">
            <li className="mt-10 text-lg font-semibold">UI UX Designer</li>
            <ul>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Merancang antarmuka pengguna yang intuitif dan menarik
                menggunakan alat desain Figma.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Pemahaman yang kuat tentang prinsip desain UI, seperti
                tipografi, warna, layout, dan hierarki visual.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Keahlian dalam pembuatan ikon, tombol, dan elemen grafis lainnya
                yang dapat meningkatkan pengalaman pengguna.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Melakukan riset pengguna dan menerapkan temuan tersebut ke dalam
                desain produk.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Pemahaman yang mendalam tentang alur kerja pengguna dan
                pengalaman pengguna yang optimal.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Keahlian dalam membuat wireframe dan storyboard untuk
                menggambarkan struktur dan alur pengalaman pengguna.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Pengalaman dalam melakukan pengujian pengguna untuk
                mengidentifikasi masalah dan mendapatkan umpan balik yang
                berguna.
              </li>
            </ul>
            <li className="mt-5 text-lg font-semibold">Web Developer</li>
            <ul>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Penguasaan HTML, TailwindCSS dan JavaScript untuk membuat desain
                UI menjadi halaman web yang fungsional.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Kemampuan dalam menggunakan kerangka kerja front-end React.js
                untuk mempercepat pengembangan dan meningkatkan skalabilitas.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Kemampuan untuk memastikan keterjangkauan (accessibility) dan
                responsivitas pada berbagai perangkat dan browser.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Kemampuan dalam menggunakan kerangka kerja back-end seperti
                Express.js untuk mempercepat pengembangan aplikasi.
              </li>
              <li className="text-justify list-disc md:text-start lg:text-lg">
                Keahlian dalam desain basis data dan penggunaan database MongoDB
                dan MySQL.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
