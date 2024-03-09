import React from "react";
import { workExp } from "../../utilities/mock";

const WorkSummary = () => {
  return (
    <div className="rounded-2xl p-6 border border-zinc-100 dark:border-zinc-50/20">
      <h4 className="flex gap-x-3 text-lg font-medium mb-4 text-zinc-500 dark:text-zinc-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 fill-current text-gray-500"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
        </svg>
        Work
      </h4>
      <ol className="space-y-4">
        {workExp.map((work) => {
          return (
            <li className="flex gap-4 group" key={work.name}>
              <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt="Client Name"
                    loading="lazy"
                    decoding="async"
                    className="w-9 h-9 rounded-full transition group-hover:scale-105"
                  />
                </picture>
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {work.name}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">
                  {work.designation}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2014 until 2019"
                >
                  {work.duration}
                </dd>
              </dl>
            </li>
          );
        })}
        <li>
          <a href="" className="btn secondary gap-x-3" download>
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default WorkSummary;
