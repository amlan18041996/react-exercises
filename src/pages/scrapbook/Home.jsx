import React from "react";
import ConnectMe from "../../render/portfolio/ConnectMe";
import Testimonials from "../../render/portfolio/Testimonials";
import WorkSummary from "../../render/portfolio/WorkSummary";
import Intro from "../../render/portfolio/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        {/* testimonials */}
        <Testimonials />
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          {/* ConnectWithMe */}
          <ConnectMe />
          {/* WorkSummary */}
          <WorkSummary />
        </div>
      </div>
    </>
  );
};

export default Home;
