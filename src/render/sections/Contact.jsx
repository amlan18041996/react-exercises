import React from "react";
import { useFetcher } from "react-router-dom";

const Contact = () => {
  const fetcher = useFetcher();
  const contactRef = React.useRef(null);
  return (
    <section
      ref={contactRef}
      id="contact"
      className="container mx-auto flex flex-col lg:flex-row gap-4 px-4 md:px-0 sm:mb-0 scroll-mt-[100rem] mt-20"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact me
      </h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <fetcher.Form className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit
        </button>
      </fetcher.Form>
    </section>
  );
};

export default Contact;
