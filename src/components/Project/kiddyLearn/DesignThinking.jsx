import designThinkingImage from "../../../assets/design-thinking.png";

const DesignThinking = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Design Thinking Process</h1>
          <img src={designThinkingImage} alt="designThinkingImage" />
          <p className="text-sm text-justify">
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
