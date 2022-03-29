import React from 'react';
import Form from "./form";

import img from './borough.jpeg'

export default function App() {
  return (
    <div className="bg-brand-cyan">
      <main className="flex flex-col justify-center">
        <section className="px-3 pt-8 md:pt-28 md:px-0">
          <div className="flex flex-col items-center mx-auto text-white md:mx-0">
            <span className="text-sm font-medium tracking-widest text-current">FOR THE SPECIALTY COFFEE FAN!</span>
            <span className="pt-12 text-4xl text-center md:text-6xl font-serifblack">TomBucks.</span>
            <span className="text-xl font-medium text-center pt-14 pb-14">TomBucks is here to provide the best coffee Murray has ever witnessed.</span>

            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div>
                <div className="mt-10 sm:mt-12">
                  <Form />
                </div>
              </div>
            </div>

            <div className="max-w-4xl">
              <img src={img} className="pt-24 rounded-sm " alt="An example of a coffee house" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
