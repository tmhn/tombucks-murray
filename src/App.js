import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

import img from './borough.jpeg'

export default function App() {
  return (
    <div className="bg-brand-cyan">
      <main className="flex flex-col justify-center">
        <section className="px-3 pt-8 md:pt-28 md:px-0">
          <div className="flex flex-col items-center mx-auto text-white md:mx-0">
            <span className="text-sm font-medium tracking-widest text-current">FOR THE SPECIALTY COFFEE FAN!</span>
            <span className="pt-12 text-4xl text-center md:text-6xl font-serifblack">TomBucks.</span>
            <span className="text-xl font-medium text-center pt-14 pb-14">TomBucks is here to ensure you never drink a bad cup of <br />coffee when out and about, ever again.</span>

            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div>
                <div className="mt-10 sm:mt-12">
                  <form name="tombucks-order" method="POST" data-netlify="true" netlify className="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div>
                      <div className="flex-1 min-w-0">
                        <label htmlFor="email" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md"
                        />
                        <fieldset className="w-full mt-3">
                          <label for="coffee" className="sr-only">Language</label>
                          <div className="relative">
                            <select id="coffee" name="coffee" className="px-4 py-3 appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 sm:text-sm">
                              <option selected disabled className="text-base text-gray-900">Select your drink</option>
                              <option>Espresso</option>
                              <option>Piccolo</option>
                              <option>Long Black</option>
                              <option>Flat White</option>
                              <option>Cappuccino</option>
                              <option>Latte</option>
                              <option>Mocha</option>
                              <option>Hot Chocolate</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                              <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="mt-3">
                        <button
                          type="submit"
                          className="block w-full px-4 py-3 font-medium text-white bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 focus:ring-offset-gray-900"
                        >
                          <span className="flex flex-row justify-center px-2">
                            Order
                            <ArrowRightIcon className="w-8 pl-3 text-white" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      TomBucks can sometimes be really busy, we'll deliver your drink as fast as Tom's little legs will carry him.
                    </p>
                  </form>
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
