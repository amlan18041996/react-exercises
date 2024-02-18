import React from "react";
import { useFetcher } from "react-router-dom";

const Contact = () => {
  const fetcher = useFetcher();
  const contactRef = React.useRef(null);
  return (
    <section ref={contactRef} id="contact" className="max-w-7xl ">
      <h2 className="text-4xl font-medium capitalize mb-8 text-center">
        Contact me
      </h2>
      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-4">
        <div className="p-6 rounded-md border-2 shadow basis-3/6">
          <p className="text-gray-700">Hello</p>
        </div>
        <div className="basis-1/6"></div>
        <fetcher.Form className="w-full flex flex-col gap-y-4 basis-2/6">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="form-element"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <input
              className="form-element"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
          </div>
          <textarea
            className="form-element"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fetcher.Form>
      </div>
    </section>
  );
};

export default Contact;
