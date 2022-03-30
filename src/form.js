import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid'

const Form = () => (
    <form name="order" method="POST" data-netlify="true" netlify className="sm:max-w-xl sm:mx-auto lg:mx-0">
        <input type="hidden" name="form-name" value="order" />
        <div>
            <div className="flex-1 min-w-0">
                <label htmlFor="name" className="sr-only">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="block w-full px-4 py-3 text-medium text-gray-900 placeholder-gray-500 border-2 border-solid border-color-grey rounded-md"
                />
                <fieldset className="w-full mt-3">
                    <label htmlFor="coffee" className="sr-only">Language</label>
                    <div className="relative">
                        <select id="coffee" name="coffee" className="border-2 border-solid border-color-grey px-4 py-3 appearance-none block w-full bg-none bg-white rounded-md pl-3 pr-10 text-medium text-gray-500 sm:text-sm">
                          <option selected disabled className="placeholder-gray-500">Select your drink</option>
                          <option>Espresso</option>
                          <option>Cortado</option>
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
                <label htmlFor="extras" className="sr-only">
                    Anything else?
                </label>
                <input
                    id="extras"
                    name="extras"
                    type="text"
                    placeholder="Anything else?"
                    className="mt-3 block w-full px-4 py-3 text-medium text-gray-900 placeholder-gray-500 border-2 border-solid border-color-grey rounded-md"
                />
            </div>
            <div className="mt-12">
                <button
                    type="submit"
                    className="block w-full px-4 py-3 font-medium text-white bg-brand-red rounded-md shadow hover:bg-brand-red"
                >
                <span className="flex flex-row justify-center px-2">
                    Order
                    <ArrowRightIcon className="w-8 pl-3 text-white" />
                </span>
                </button>
            </div>
        </div>
        <p className="mt-4 mb-10 text-sm text-brand-grey sm:mt-4">
            TomBucks can sometimes be really busy, we'll deliver your drink as fast as Tom's little legs will carry him.
        </p>
    </form>
)

export default Form;