const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex flex-col gap-4 items-center justify-center bg-white dark:bg-zinc-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        <div className="text-lg text-green-600">wait a second...</div>
      </div>
    </>
  );
};

export default Loading;
