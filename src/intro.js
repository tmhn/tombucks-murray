import React from "react";

const Intro = () => (
  <div className="mt-8 max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 text-center lg:px-0 flex flex-col items-center leading-6">
    <span className="mb-2 text-brand-black text-sm md:text-xl font-medium text-center leading-loose">At TomBucks, we love good coffee. We also love helping others and helping to make a difference.</span>
    <span className="mt-6 text-brand-black text-sm md:text-xl font-medium text-center leading-loose">
      To that end, your coffee is free today, however, if you fancy donating to the Murray fundraiser for the Martin House childrens hospice you can do so by clicking <a className="text-brand-red underline" href="https://www.gofundme.com/f/club-murray-martin-house-accumulator-challenge">here</a>.
    </span>
  </div>
);

export default Intro;