import { NavLink } from "react-router-dom";
import { projects } from "../utilities/mock";

const Projects = () => {
    return (
        <div className="grid grid-cols-3 gap-x-6">
            {
                projects.map((project, projectIndex) => {
                    return (
                        <div key={projectIndex} className="card max-w-sm flex flex-col bg-white rounded">
                            <div className="card-image">
                                <img src="https://picsum.photos/200/300" alt="" className="w-full h-52 rounded-t-lg" />
                            </div>
                            <div className="card-body p-5 flex-auto">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                                <p className="mb-3 font-normal text-gray-700">{project.description}</p>
                                <NavLink to={project.path} className="btn btn-primary">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default Projects;