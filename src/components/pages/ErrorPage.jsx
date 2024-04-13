import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const ErrorPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h1>Oops!</h1>
        <h3>Sorry Not Found</h3>
      </div>
    </>
  );
};

export default ErrorPage;
