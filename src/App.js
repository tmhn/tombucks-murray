import React from 'react';
import { ArrowSmDownIcon } from '@heroicons/react/solid';

import Form from "./form";
import Menu from "./menu";

import img from "./coffee-cup.jpeg"

export default function App() {
  return (
    <div className="bg-brand-background">
      <main className="flex flex-col ">
        <section className="px-3 pt-8 md:pt-28 md:px-0">
          <div className="justify-center flex flex-col items-center mx-auto text-white md:mx-0">
            <span className="pt-8 text-3xl text-center md:text-6xl font-serifblack text-brand-red">TomBucks</span>
            <img src={img} className="pt-14 rounded-sm " alt="A coffee cup" />
            <span className="text-brand-black text-sm md:text-xl font-medium text-center pt-10 pb-2">TomBucks is here to provide the best coffee Murray has ever witnessed.</span>
            <div className="flex flex-row items-center  pt-4 pb-8">
              <span className="text-brand-black text-sm md:text-xl font-medium text-center">Place your order below</span>
              <ArrowSmDownIcon className="text-brand-black ml-2 h-4 w-4" />
            </div>
        
            <span className="pt-10 text-2xl md:text-4xl font-serifblack text-brand-red">Intro</span>
            <span className="pt-10 text-2xl md:text-4xl font-serifblack text-brand-red">Menu</span>
            <Menu />
            <span className="pt-10 text-2xl md:text-4xl font-serifblack text-brand-red">Order</span>
            <div className="mt-8 max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <Form />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
