import React from "react";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../render/NavigationMenu";

const Base = () => {
  return (
    <div className="relative w-full flex flex-col">
      <NavigationMenu />
      <main className="flex-auto">
        <div className="sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <div className="relative px-4 sm:px-8 lg:px-12 bg-white pt-14 md:pt-16 pb-24">
              <div className="mx-auto max-w-2xl lg:max-w-5xl space-y-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Base;
