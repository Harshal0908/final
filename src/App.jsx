import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorHome from "./components/doctor/DoctorHome";
import ReceptionHome from "./components/reception/ReceptionHome";
import Inventory from "./components/common/Inventory";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/doctor" element={<DoctorHome />} />
        <Route exact path="/reception" element={<ReceptionHome />} />
        <Route exact path="/reception/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}
