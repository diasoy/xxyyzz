const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen gap-4 bg-white dark:bg-zinc-900">
        <div className="w-12 h-12 border-t-2 border-b-2 border-green-600 rounded-full animate-spin"></div>
        <div className="text-lg text-green-600">wait a second...</div>
      </div>
    </>
  );
};

export default Loading;
