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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                soluta eos culpa!
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                soluta eos culpa!
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                soluta eos culpa!
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                soluta eos culpa!
              </li>
            </ul>
            <li className="font-semibold mt-5">Web Developer</li>
            <ul>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque quod cumque numquam enim nostrum.
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque quod cumque numquam enim nostrum.
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque quod cumque numquam enim nostrum.
              </li>
              <li className="list-disc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque quod cumque numquam enim nostrum.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
