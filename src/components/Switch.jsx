import React from "react";

const Switch = ({ callback }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={callback}
      />
      <div
        className="toggle-switch
          relative w-16 h-8 bg-amber-200/40 rounded-full dark:bg-gray-700
          peer peer-checked:checked peer-checked:after:translate-x-full peer-checked:after:border-white 
          after:h-7 after:w-7 after:content-[''] after:bg-no-repeat after:bg-center after:bg-auto 
          after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 
          after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-black/40
        "
      ></div>
    </label>
  );
};

export default Switch;
