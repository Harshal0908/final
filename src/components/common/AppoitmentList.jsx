import React from "react";
import { useState } from "react";
import Search from "./table/Search";
import TableData from "./table/TableData";

export default function AppoitmentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const header = [
    { title: "id" },
    { title: "name" },
    { title: "number" },
    { title: "date" },
    { title: "time" },
  ];
  console.log(header);
  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <TableData searchTerm={searchTerm} title={header} />
    </div>
  );
}
