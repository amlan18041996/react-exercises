import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <nav className="container mx-auto bg-white border-gray-200">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-8 text-indigo-800 rotate-90" viewBox="0 0 16 16">
                            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
                        </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loner</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://avatar.iran.liara.run/public" alt="User Profile" />
                        </button>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            {
                                [{path: '', name: 'Home'}, {path: 'about', name: 'About'}, {path: 'projects', name: 'Projects'}, {path: 'contact', name: 'Contact'}].map((link, index) => {
                                    return <NavLink key={index} to={link.path}  aria-current="page" className={({isActive}) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'bg-blue-700 md:bg-transparent text-white md:text-blue-700' : 'hover:bg-gray-100 md:hover:bg-transparent text-gray-900 md:hover:text-blue-700'}`}>{link.name}</NavLink>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto">
                <div className="px-4 py-10">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
 
export default HomePage;