const Contact = () => {
  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Contact Me</h1>
        <form
          action=""
          className="flex flex-col w-full px-10 md:px-52 justify-center gap-2 mt-5"
        >
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-green-600 p-2 rounded-lg focus:outline-none text-zinc-950 focus:border-green-500 transition-all ease-in-out duration-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-green-600 p-2 rounded-lg focus:outline-none text-zinc-950 focus:border-green-500 transition-all ease-in-out duration-300"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="border-2 border-green-600 p-2 rounded-lg focus:outline-none text-zinc-950 focus:border-green-500 transition-all ease-in-out duration-300"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-500 cursor-pointer transition-all ease-in-out duration-300
                    transform hover:scale-105"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
