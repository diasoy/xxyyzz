import AboutHeader from "./components/About/AboutHeader";
// import ArticleHeader from "./components/Article/ArticleHeader";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ProjectHeader from "./components/Project/ProjectHeader";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className=" text-black dark:bg-zinc-800 dark:text-white">
        <Navbar setTheme={handleTheme} theme={theme} />
        <Profile />
        <AboutHeader />
        <ProjectHeader />
        {/* <ArticleHeader /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
