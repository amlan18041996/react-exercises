import React from "react";
import { testimonials } from "../../utilities/mock";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-6 divide-y divide-dashed">
      {testimonials.map((monials, monIndex) => {
        return (
          <article
            className="group relative flex flex-col items-start pt-6"
            key={monIndex}
          >
            <div className="relative flex flex-row items-center gap-x-4">
              <picture>
                <img
                  src="https://picsum.photos/200"
                  alt="Client Name"
                  className="w-14 h-14 rounded"
                />
              </picture>
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
                  {monials.name}
                </h6>
                <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal mb-5 !text-gray-500">
                  {monials.designation}
                </p>
              </div>
            </div>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {monials.comments}
            </p>
            <div className="relative w-full flex flex-row justify-between mt-2.5">
              <div className="ratings flex text-yellow-400 space-x-1">
                {Array(5)
                  .fill(null)
                  .map((u, i) => {
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        key={i}
                      >
                        {monials.rating >= i + 1 ? (
                          <path
                            className="bi bi-star-fill"
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        ) : Number(monials.rating) === monials.rating &&
                          monials.rating % 1 !== 0 &&
                          i < monials.rating ? (
                          <path
                            className="bi bi-star-half"
                            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
                          />
                        ) : (
                          <path
                            className="bi bi-star"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                          />
                        )}
                      </svg>
                    );
                    return null;
                  })}
              </div>
              <time
                className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                dateTime="2022-09-05"
              >
                {monials.date}
              </time>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Testimonials;
