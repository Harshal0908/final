import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./table/Search";
import AppoitmentTableData from "./table/AppoitmentTableData";
import data from "../../data/appoitmentdata.json";
import Modal from "./Modal";
import Axios from "axios";

export default function AppoitmentList() {
  const [searchTerm, setSearchTerm] = useState("");
//  const [appoitmentList,setAppoitmentList] = useState([]);
  const header = ["id", "unique_id", "name", "number", "date", "time"];
  
/*  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
        //console.log(response.data);
        setAppoitmentList(response.data);
    })
  }) */
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

/* {appoitmentList.map((val)=>{
  return <h1>ID: {val.id} | NAME: {val.name}| </h1>
})} */