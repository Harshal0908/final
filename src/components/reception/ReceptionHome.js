import React from "react";
import Appoitmnet from "./Appoitmnet";

export default function ReceptionHome() {
  return (
    <div>
      <div className="flex  justify-center items-center space-x-40">
        <div className="flex items-center justify-center h-screen ">
          Hello
          <button class="mx-2 my-2 bg-white transition duration-150 ease-in-out  hover:bg-gray-200 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700">
            Appoitment
          </button>
          <Appoitmnet />
        </div>
      </div>
    </div>
  );
}
