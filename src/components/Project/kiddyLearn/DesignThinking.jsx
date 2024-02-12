import designThinkingImage from "../../../assets/design-thinking.png";

const DesignThinking = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-lg 2xl:text-xl">
          Design Thinking Process
        </h1>
        <div className="flex flex-col gap-2 items-center">
          <img
            src={designThinkingImage}
            alt="designThinkingImage"
            className=""
          />
          <p className="text-sm text-justify 2xl:text-base">
            Metodologi pengembangan yang digunakan untuk mengembangkan aplikasi
            adalah Iterative Design Thinking Process yang diadaptasi dari
            Lewrick, Link, dan Leifer (2018). Beberapa proses pada metodologi
            ini meliputi Emphatize (Understand & Observe), Define, Ideate,
            Prototype dan Test.
          </p>
        </div>
      </div>
    </>
  );
};

export default DesignThinking;
