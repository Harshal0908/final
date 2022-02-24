import React from "react";
import { useState } from "react";
import Search from "./table/Search";
import AppoitmentTableData from "./table/AppoitmentTableData";
import data from "../../data/appoitmentdata.json";
import Modal from "./Modal";

export default function AppoitmentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const header = ["id", "unique_id", "name", "number", "date", "time"];
  console.log(header);
  return (
    <div>
      <h1 className="text-xl font-semibold text-left p-2 ">Appoitment List</h1>
      <Search setSearchTerm={setSearchTerm} />
      {window.location.href.includes("doctor") ? <Modal /> : <></>}
      <AppoitmentTableData searchTerm={searchTerm} title={header} data={data} />
    </div>
  );
}
