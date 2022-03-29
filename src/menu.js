import React from "react";

import EspressoIcon from "./icons/espresso";
import CortadoIcon from "./icons/cortado";
import AmericanoIcon from "./icons/americano";
import FlatWhiteIcon from "./icons/flatWhite";
import CappuccinoIcon from "./icons/cappuccino";
import LatteIcon from "./icons/latte";
import MochaIcon from "./icons/mocha";
import HotChocolateIcon from "./icons/hotChocolate";

const Menu = () => (
  <div class="mt-2 mb-10 grid grid-cols-2 gap-8">
    <div className="flex flex-col items-center justify-center">
      <EspressoIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red flex text-center">Espresso</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <CortadoIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Cortado</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <AmericanoIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Long Black</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <FlatWhiteIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Flat White</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <CappuccinoIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Cappuccino</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <LatteIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Latte</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <MochaIcon className="fill-brand-red  mb-2" />
      <span className="font-medium text-brand-red">Mocha</span>
    </div>
    <div className="flex flex-col items-center justify-center">
      <HotChocolateIcon className="fill-brand-red mb-2" />
      <span className="font-medium text-brand-red">Hot Chocolate</span>
    </div>
  </div>
)

export default Menu;