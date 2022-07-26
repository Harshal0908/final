import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorHome from "./components/doctor/DoctorHome";
import ReceptionHome from "./components/reception/ReceptionHome";
import Inventory from "./components/common/Inventory";
import NewCasePaper from "./components/doctor/patient/NewCasePaper";
import GenerateBill from "./components/bill/GenerateBill";
import CasePaper from "./components/doctor/patient/CasePaper";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/:role/login" element={<Login />} />
        <Route exact path="/doctor" element={<DoctorHome />} />
        <Route exact path="/reception" element={<ReceptionHome />} />
        <Route exact path="/:role/inventory" element={<Inventory />} />
        <Route exact path="/doctor/casepaper" element={<CasePaper />} />
        <Route exact path="/doctor/newpaper" element={<NewCasePaper />} />
        <Route exact path="/doctor/bill" element={<GenerateBill />} />
      </Routes>
    </Router>
  );
}
