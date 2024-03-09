import { NavLink } from "react-router-dom";
import { projects } from "../../utilities/mock";

const Projects = () => {
  return (
    <>
      <header className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </header>
      <ul
        role="list"
        className="grid gap-x-12 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, projectIndex) => {
          return (
            <li className="group relative" key={projectIndex}>
              <NavLink
                to={project.path}
                className="h-full flex flex-col items-start px-4 py-4 rounded-xl group-hover:bg-zinc-50/70 group-hover:dark:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 relative z-10 flex items-center justify-center rounded-full bg-white mb-2 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="card-body px-1 py-4 space-y-1">
                  <h5 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <span
                  className="btn bg-transparent hover:bg-transparent font-medium px-0 gap-x-3 mt-auto text-zinc-500 dark:text-zinc-300 group-hover:text-teal-500 dark:group-hover:text-teal-300"
                  href={project.path}
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                  </svg>
                  Read more
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
