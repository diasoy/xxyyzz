import AboutHeader from "./components/About/AboutHeader";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ProjectHeader from "./components/Project/ProjectHeader";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="text-black dark:bg-zinc-800 dark:text-white">
        <Navbar setTheme={handleTheme} theme={theme} />
        <Profile />
        <AboutHeader />
        <ProjectHeader />
        <Footer />
      </div>
    </>
  );
};

export default App;
