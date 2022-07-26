import React from "react";
import { useState } from "react";
import Layout from "../../common/Layout";
import Search from "../../common/table/Search";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "../../../data/patients.json";
import PatientTableData from "./PatientTableData";

export default function CasePaper() {
  const [searchPatient, setsearchPatient] = useState("");
  const header = ["id", "name", "email", "gender", "phone"];

  return (
    <Layout>
      <Search setSearchTerm={setsearchPatient} />
      <h1 className="text-2xl font-semibold text-center">Patients Details</h1>
      <Link to="/doctor/newpaper" className="flex justify-end px-8 pb-2">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md  hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
          <FiPlus /> New Patient
        </button>
      </Link>
      <div className="flex justify-center items-center">
        <PatientTableData
          searchTerm={searchPatient}
          title={header}
          data={data}
        />
      </div>
    </Layout>
  );
}
