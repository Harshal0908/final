import React, { Component } from "react";
import Layout from "../../common/Layout";
import DailyRoutine from "./DailyRoutine";
import MedicalHistory from "./MedicalHistory";
import PersonalDetails from "./PersonalDetails";

export default class NewCasePaper extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-xl font-semibold text-center font-mono">
          New Case Paper
        </h1>
        <PersonalDetails />
        <DailyRoutine />
        <MedicalHistory />
      </Layout>
    );
  }
}
