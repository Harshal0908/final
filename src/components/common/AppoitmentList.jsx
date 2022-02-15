import React from "react";
import { useState } from "react";
import Search from "./table/Search";
import TableData from "./table/TableData";

export default function AppoitmentList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <TableData searchTerm={searchTerm} />
    </div>
  );
}
