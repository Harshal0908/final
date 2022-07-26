import React, { useState } from "react";
import Layout from "./Layout";
import Search from "./table/Search";
import InventoryTableData from "./table/InventoryTableData";
import data from "../../data/inventorydata.json";
import EditData from "./table/EditData";

export default function Inventory() {
  // const [searchTerm, setSearchTerm] = useState("");
 const [inventorySearch, setinventorySearch] = useState("");
  const header = ["id", "company", "medicine", "stock", "dealer_number"];
  const user = [
    { id: "" },
    { company: "" },
    { medicine: "" },
    { stock: "" },
    { dealer_number: "" },
  ];  

  
  return (
    <Layout>
      <Search setSearchTerm={setinventorySearch} />
      <h1 className="text-2xl font-semibold text-center">Inventory List</h1>
      <div className="flex flex-wrap items-center justify-end p-2 px-6">
        <EditData header={header} medicineData={user} operation={"add"} />
      </div>
      <div className="flex justify-center items-center">
        <InventoryTableData
          searchTerm={inventorySearch}
          title={header}
          data={data}
        />
      </div>
    </Layout>
  );
}
