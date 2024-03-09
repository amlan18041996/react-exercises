import React from "react";
import Ratings from "../../components/Ratings";
import {
  articles,
  popularArticles,
  recentArticles,
} from "../../utilities/mock";

const Articles = () => {
  return (
    <>
      <header className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <section className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-5 mt-16">
        <div className="col-span-3 flex flex-col gap-y-6 divide-y divide-dashed">
          {articles.map((artic, articIndex) => {
            return (
              <article
                className="relative flex flex-col items-start pt-6"
                key={articIndex}
              >
                <a
                  href="!#"
                  className="rounded-xl transition-all duration-300 group hover:p-2 hover:bg-gray-50"
                >
                  <div className="w-full flex flex-row items-center gap-x-4">
                    <picture className="hidden md:block shrink-0">
                      <img
                        src="https://picsum.photos/200"
                        alt="Client Name"
                        className="w-14 h-14 rounded"
                      />
                    </picture>
                    <div className="w-full">
                      <h6 className="pr-2 subpixel-antialiased tracking-normal font-sans text-lg font-semibold leading-relaxed text-slate-900/80 dark:text-slate-300/80">
                        {artic.title}
                      </h6>
                      <div className="relative w-full flex flex-row justify-between mt-1.5">
                        <div className="flex flex-row items-center gap-x-2">
                          <Ratings score={artic.rating} />
                          <div className="h-3/5 border"></div>
                          <span className="text-zinc-400 dark:text-zinc-500 text-xs">
                            <small className="text-sm font-semibold">
                              {artic.commentCounts > 10
                                ? "10+"
                                : artic.commentCounts}{" "}
                            </small>
                            Comments
                          </span>
                        </div>
                        <time
                          className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                          dateTime="2022-09-05"
                        >
                          {artic.date}
                        </time>
                      </div>
                    </div>
                  </div>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {artic.description}
                  </p>
                </a>
              </article>
            );
          })}
        </div>
        <div className="col-span-2 space-y-10 lg:pl-16 xl:pl-20">
          <div className="py-4 rounded">
            <h4 className="text-2xl font-mono tracking-wide font-bold border-b pb-1 mb-6 text-cyan-800/40 dark:text-cyan-300/40">
              Trending Articles
            </h4>
            <ul className="flex flex-col gap-y-4">
              {popularArticles.map((popular, popularIndex) => {
                return (
                  <li
                    key={popularIndex}
                    className="border-l-4 border-stone-400 pl-2 space-y-2"
                  >
                    <h6 className="flex-auto text-sm tracking-wider font-semibold line-clamp-2 text-gray-900/70 dark:text-white/70 mb-0.5">
                      {popular.title}
                    </h6>
                    <p className="relative ml-auto mt-2 text-sm line-clamp-2 text-zinc-600 dark:text-zinc-400">
                      {popular.description}
                    </p>
                    <time
                      className="w-full block text-end font-serif tracking-wider text-xs text-zinc-400 dark:text-zinc-500"
                      dateTime="2022-09-05"
                    >
                      {popular.date}
                    </time>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="py-4 rounded">
            <h4 className="text-2xl font-mono tracking-wide font-bold border-b pb-1 mb-6 text-cyan-800/40 dark:text-cyan-300/40">
              Recent Articles
            </h4>
            <ul className="flex flex-col gap-y-4">
              {recentArticles.map((recent, recentIndex) => {
                return (
                  <li
                    key={recentIndex}
                    className="border-l-4 border-stone-400 pl-2 space-y-2"
                  >
                    <h6 className="flex-auto text-sm tracking-wider font-semibold line-clamp-2 text-gray-900/70 dark:text-white/70 mb-0.5">
                      {recent.title}
                    </h6>
                    <p className="relative ml-auto mt-2 text-sm line-clamp-2 text-zinc-600 dark:text-zinc-400">
                      {recent.description}
                    </p>
                    <time
                      className="w-full block text-end font-serif tracking-wider text-xs text-zinc-400 dark:text-zinc-500"
                      dateTime="2022-09-05"
                    >
                      {recent.date}
                    </time>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
