import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Hompage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetail";
import JobList from "./JobList";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<CompanyList />} />

      <Route path="/companies/:name" element={<CompanyDetails />} />

      <Route path="/jobs" element={<JobList />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
