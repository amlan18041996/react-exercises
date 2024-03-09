import React from "react";
import { Form } from "react-router-dom";

const ConnectMe = () => {
  return (
    <div className="rounded-2xl p-6 border border-zinc-100 dark:border-zinc-50/20">
      <h4 className="flex gap-x-3 text-lg font-medium mb-1 text-zinc-500 dark:text-zinc-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 text-gray-500"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
          />
        </svg>
        Have a project in mind?
      </h4>
      <p className="text-sm text-slate-600/70 dark:text-slate-300/70 font-medium tracking-wide leading-4 subpixel-antialiased mb-4">
        Let's discuss to know the details and how I can help you to achieve your
        goals
      </p>
      <Form className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="form-element"
            name="fullName"
            type="text"
            required
            maxLength={500}
            placeholder="Enter your name"
          />
          <input
            className="form-element"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Enter your email"
          />
        </div>
        <select name="services" id="services" className="form-element">
          <option>Select services</option>
          <option value="design">Design</option>
          <option value="frontend-development">Frontend Development</option>
          <option value="backend-development">Backend Development</option>
          <option value="depoyment">Deployment</option>
          <option value="full-development">Full Stack Development</option>
        </select>
        <textarea
          className="form-element"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit" className="btn primary">
          Let's Connect
        </button>
      </Form>
    </div>
  );
};

export default ConnectMe;
