import { NavLink, Outlet } from "react-router-dom";
import Contact from "../render/sections/Contact";
import FloatedHeader from "../render/sections/FloatedHeader";
import Intro from "../render/sections/Intro";

const HomePage = () => {
  const links = [
    { path: "", name: "Home" },
    { path: "about", name: "About" },
    { path: "projects", name: "Projects" },
    { path: "contact", name: "Contact" },
  ];
  return (
    <>
      <FloatedHeader links={...links} />
      <Intro />
      <Contact />
      <main className="container mx-auto">
        <div className="px-4 py-10">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default HomePage;
