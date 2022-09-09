import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeReg from "./pages/employeeReg.jsx";
import EmployeeUpdt from "./pages/employeeUpdate.jsx";
import BillItem from "./pages/Bill/billItem.jsx";
import BillItemUpdate from "./pages/Bill/updateBillItem.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeReg />} />
        <Route path="/update" element={<EmployeeUpdt />} />
        <Route path="/bill" element={<BillItem />} />
        <Route path="/bill-item-update/:id" element={<BillItemUpdate />} />
      </Routes>
    </Router>
  );
}
export default App;
