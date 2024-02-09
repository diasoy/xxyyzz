const ArticleHeader = () => {
  return (
    <>
      <div className="mt-16">
        <div>
          <h1 className="font-bold text-center text-xl">Article</h1>
        </div>
        <div>
          <div className="max-w-screen-md mx-6 border bg-white flex flex-col justify-center items-center">
            <img src="" alt="profile" className="object-cover w-40 h-auto" />
            <div className="flex flex-col gap-5 text-center py-4 font-semibold">
              <h1>Ini title</h1>
              <a
                href=""
                className="bg-green-600 px-4 py-1 rounded-md text-white"
              >
                See Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
