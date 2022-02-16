import React from "react";
import { useState } from "react";
import Search from "./table/Search";
import TableData from "./table/TableData";

export default function AppoitmentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const title = ["id", "first_name", "last_name", "email"];

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} title={title} />
      <TableData searchTerm={searchTerm} />
    </div>
  );
}
