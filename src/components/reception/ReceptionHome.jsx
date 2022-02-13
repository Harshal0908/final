import React from "react";
import AppoitmentList from "../common/AppoitmentList";
import Navbar from "../common/Navbar";
import Appoitmnet from "./Appoitmnet";

export default function ReceptionHome() {
  return (
    <div>
      <Navbar />
      <button class="mx-2 my-2 bg-white transition duration-150 ease-in-out  hover:bg-gray-200 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700">
        Appoitment
      </button>
      <div className="flex items-start justify-evenly h-screen ">
        <Appoitmnet />
        <AppoitmentList />
      </div>
    </div>
  );
}
