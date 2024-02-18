import { NavLink } from "react-router-dom";
import { projects } from "../../utilities/mock";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, projectIndex) => {
        return (
          <NavLink
            key={projectIndex}
            to={project.path}
            className="card max-w-sm flex flex-col border bg-white rounded-md shadow p-2 hover:shadow-lg group"
          >
            <div className="card-image">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="w-full h-52 rounded"
              />
            </div>
            <div className="card-body px-2 py-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                {project.description}
              </p>
            </div>
            <button className="btn btn-primary mt-auto">
              Read more
              <svg
                className="w-3.5 h-3.5 ms-2 transition group-hover:translate-x-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Projects;
