import React from "react";
import { NavLink } from "react-router-dom";
import BaseModal from "../components/BaseModal";
import Ratings from "../components/Ratings";
import Switch from "../components/Switch";

const NavigationMenu = () => {
  const settings = React.useRef(null);
  const menus = [
    {
      path: "/",
      name: "Home",
      icon: (
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
      ),
    },
    {
      path: "about",
      name: "About",
      icon: (
        <>
          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
        </>
      ),
    },
    {
      name: "Theme",
      icon: (
        <>
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </>
      ),
    },
    {
      path: "articles",
      name: "articles",
      icon: (
        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
      ),
    },
    {
      path: "projects",
      name: "Projects",
      icon: (
        <>
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
        </>
      ),
    },
  ];
  return (
    <nav className="w-fit fixed bottom-2 left-0 right-0 mx-auto md:bottom-3 lg:bottom-5 z-30 bg-transparent border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <ul className="relative w-full md:w-max flex justify-around items-center mx-auto gap-x-8 bg-violet-200 px-6 rounded-md shadow">
        {menus.map((menu, menuIndex) => {
          return (
            <li
              className={`relative list-none group cursor-pointer ${
                !menu.path
                  ? "border-8 border-white px-2 py-2 -m-1.5 -m-1 rounded-full"
                  : ""
              }`}
              key={menuIndex}
              title={menu.name}
            >
              {menu.path ? (
                <NavLink
                  to={menu.path}
                  className="relative w-full flex flex-col justify-center items-center text-center decoration-none my-auto px-2 py-4 rounded-full text-violet-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current block text-center leading-5 transition group-hover:-translate-y-0.5 group-hover:scale-95"
                    viewBox="0 0 16 16"
                  >
                    {menu.icon}
                  </svg>
                  <span className="absolute font-medium text-black opacity-0 transition translate-y-2">
                    {menu.name}
                  </span>
                </NavLink>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-7 h-7 fill-current block text-center leading-5 m-1 transition animate-[spin_3000ms_linear_infinite] group-hover:animate-[spin_0ms_linear_infinite]"
                    viewBox="0 0 16 16"
                    onClick={() => settings.current.open()}
                  >
                    {menu.icon}
                  </svg>
                  <span className="absolute font-medium text-black opacity-0 transition translate-y-2">
                    {menu.name}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <BaseModal
        ref={settings}
        unMountCallback={() => console.log("Settings modal unmounted")}
      >
        <h1 className="text-3xl text-slate-600 font-semibold tracking-wider capitalize underline underline-offset-2 mb-4">
          Settings
        </h1>
        <div className="text-left space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-medium tracking-tight">Choose Theme</h4>
            <Switch
              callback={() => document.documentElement.classList.toggle("dark")}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-medium tracking-tight">Any Feedback</h4>
            <textarea
              name="feedback"
              id="feedback"
              className="form-element"
              cols="20"
              rows="5"
            ></textarea>
            <div className="flex justify-between items-center">
              <Ratings length={5} score={1} mode="dynamic" size="size-5" />
              <button className="btn warning">Send</button>
            </div>
          </div>
        </div>
      </BaseModal>
    </nav>
  );
};

export default NavigationMenu;
