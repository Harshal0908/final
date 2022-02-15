import React, { Component } from "react";
import AppoitmentList from "../common/AppoitmentList";
import Navbar from "../common/Navbar";

export default class DoctorHome extends Component {
  render() {
    return (
      <div>
        <Navbar role={"doctor"} />
        <div className="flex items-start justify-evenly h-screen p-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <AppoitmentList />
          </div>
        </div>
      </div>
    );
  }
}
