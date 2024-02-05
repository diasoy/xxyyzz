import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <>
      <div className="bg-zinc-900">
        <Navbar />
        <Profile />
        <About />
        <Project />
      </div>
    </>
  );
};

export default App;
