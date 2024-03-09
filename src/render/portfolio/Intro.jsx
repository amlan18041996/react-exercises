import React from "react";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-16">
      <div className="flex flex-col col-auto basis-2/3 text-black/60 dark:text-white/60">
        <h3 className="text-xl font-normal mt-2">Hello there 👋</h3>
        <h1 className="text-4xl font-normal">
          My name is <span className="font-bold">Amlan Sengupta</span>
        </h1>
        <h3 className="text-3xl">
          I'm a{" "}
          <span className="font-bold tracking-wider">Full-stack developer</span>
        </h3>
        <p className="w-4/5 text-lg mb-2 leading-tight my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          praesentium, accusantium hic ipsam tenetur eligendi.
        </p>

        <div className="flex flex-row items-center gap-4 mt-3">
          <NavLink
            to="/"
            className="btn primary py-1.5 text-sm md:text-lg items-center gap-x-1 group"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:translate-x-0.5 transition"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </NavLink>

          <a
            className="btn secondary py-1.5 text-sm md:text-lg items-center gap-x-1 group"
            href="/CV.pdf"
            download
          >
            Download CV
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5 opacity-60 group-hover:-translate-y-0.5 transition"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center order-first lg:order-none basis-1/1">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
            alt="Amlan Sengupta"
            quality="95"
            className="h-56 w-56 rounded-full object-cover border-[0.35rem] border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
