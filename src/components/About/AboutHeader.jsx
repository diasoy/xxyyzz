/* eslint-disable react/no-unescaped-entities */
const AboutHeader = () => {
  return (
    <>
      <div className="lg:py-52 dark:bg-zinc-800 dark:text-white">
        <div className="mx-8 flex flex-col gap-4 md:mx-24 lg:mx-32 xl:mx-60">
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            WHAT I DO
          </h1>
          <ul>
            <li className="font-semibold my-4">UI UX Designer</li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus modi eveniet itaque alias consequuntur dignissimos,
                magnam adipisci autem minus quam ad fugit dolore eligendi. Nobis
                earum nemo numquam veniam tempora omnis deleniti corporis
                quisquam odit! Veritatis reiciendis similique maiores!
              </p>
            </div>

            <li className="font-semibold my-4">Web Developer</li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus modi eveniet itaque alias consequuntur dignissimos,
                magnam adipisci autem minus quam ad fugit dolore eligendi. Nobis
                earum nemo numquam veniam tempora omnis deleniti corporis
                quisquam odit! Veritatis reiciendis similique maiores!
              </p>
            </div>
          </ul>
        </div>
        <div className="mt-20 text-center">
          <a
            href="/about"
            className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-800 md:text-lg lg:text-xl"
          >
            See my life journey
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
