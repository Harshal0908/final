import React from "react";
import AppoitmentList from "../common/AppoitmentList";
import Layout from "../common/Layout";
import Appoitmnet from "./Appoitmnet";

export default function ReceptionHome() {
  return (
    <Layout>
      <div className="flex items-start justify-evenly h-screen p-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pt-20">
            <Appoitmnet />
          </div>
          <AppoitmentList />
        </div>
      </div>
    </Layout>
  );
}
