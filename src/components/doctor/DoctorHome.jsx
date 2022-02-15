import React, { Component } from "react";
import AppoitmentList from "../common/AppoitmentList";
import Navbar from "../common/Navbar";

export default class DoctorHome extends Component {
  render() {
    return (
      <div>
        <Navbar role={"doctor"} />
        <div className="grid grid-cols-2 gap-4">
          <AppoitmentList />
        </div>
      </div>
    );
  }
}
