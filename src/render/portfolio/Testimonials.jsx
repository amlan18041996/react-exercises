import React from "react";
import Ratings from "../../components/Ratings";
import { testimonials } from "../../utilities/mock";

const Testimonials = () => {
  return (
    <div className="flex flex-col">
      <h3 className="flex gap-x-3 text-2xl font-medium text-zinc-500 underline underline-offset-2 dark:text-zinc-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 fill-current text-gray-500"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
        Let's see what my clients say
      </h3>
      <div className="flex flex-col gap-y-6 divide-y divide-dashed">
        {testimonials.map((monials, monIndex) => {
          return (
            <article
              className="relative flex flex-col items-start pt-6"
              key={monIndex}
            >
              <div className="w-full relative flex flex-row items-center gap-x-4">
                <picture className="hidden md:block shrink-0">
                  <img
                    src="https://picsum.photos/200"
                    alt="Client Name"
                    className="w-14 h-14 rounded"
                  />
                </picture>
                <div className="w-full">
                  <div className="flex flex-row items-center self-baseline divide-x">
                    <h6 className="pr-2 subpixel-antialiased tracking-normal font-sans text-lg font-semibold leading-relaxed text-slate-900/80 dark:text-slate-300/80">
                      {monials.name}
                    </h6>
                    <p className="pl-2 font-sans text-sm leading-normal text-inherit font-normal text-slate-800/80 dark:text-slate-400/80">
                      {monials.designation}
                    </p>
                  </div>
                  <div className="relative w-full flex flex-row justify-between mt-1.5">
                    <Ratings score={monials.rating} />
                    <time
                      className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                      dateTime="2022-09-05"
                    >
                      {monials.date}
                    </time>
                  </div>
                </div>
              </div>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {monials.comments}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
