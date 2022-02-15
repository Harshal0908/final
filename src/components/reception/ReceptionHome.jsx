import React from "react";
import AppoitmentList from "../common/AppoitmentList";
import Navbar from "../common/Navbar";
import Appoitmnet from "./Appoitmnet";

export default function ReceptionHome() {
  return (
    <div>
      <Navbar role={"reception"} />
      <div className="flex items-start justify-evenly h-screen p-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Appoitmnet />
          <AppoitmentList />
        </div>
      </div>
    </div>
  );
}
