import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeReg from "./pages/employeeReg.jsx";
import EmployeeUpdt from "./pages/employeeUpdate.jsx";
import ListEmployee from "./pages/listEmployee.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeReg />} />
        <Route path="/update/:id" element={<EmployeeUpdt />} />
        <Route path="/list" element={<ListEmployee />} />
      </Routes>
    </Router>
  );
}
export default App;
