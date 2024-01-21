import React from 'react';
import { useClickOutside } from "../utilities/hooks";

const BaseDropdown = ({ title='Choose', options, callback }) => {
    const clickRef = React.useRef();
    const [name, setName] = React.useState(title);
    const [display, setDisplay] = React.useState(false);

    useClickOutside(clickRef, () => {
        console.log('Clicked outside');
        if (display) setDisplay((prev) => !prev);
    });

    const handleSelect = (option) => {
        setDisplay((prev) => !prev);
        setName(option.name);
        callback(option);
    };

    const allOptions = React.useMemo(() => {
        return [{ name: `${title}`, value: "choose" }, ...options].map(
            (option, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => handleSelect(option)}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        value={option.value}
                    >
                        {option.name}
                    </li>
                );
            },
        );
    });

    return (
        <div className="dropdown" ref={clickRef}>
            <button
                type="button"
                id="dropdownSearchButton"
                data-dropdown-placement="bottom"
                data-dropdown-toggle="dropdownSearch"
                onClick={() => setDisplay((prev) => !prev)}
                className="btn text-white bg-indigo-400 hover:bg-indigo-500 px-5 py-2"
            >
                {title.trim() !== '' ? title : name}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdownDivider" className={`w-44 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow ${display ? 'block' : 'hidden'}`}>
                <div className="p-3">
                    <label htmlFor="input-group-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="input-group-search" className="form-element ps-8" placeholder="Search user" />
                    </div>
                </div>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
                    {allOptions}
                </ul>
            </div>
        </div>
    );
}
 
export default BaseDropdown;