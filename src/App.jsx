import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeReg from "./pages/employee/employeeReg.jsx";
import EmployeeUpdt from "./pages/employee/employeeUpdate.jsx";
import ListEmployee from "./pages/employee/listEmployee.jsx";
import BillItem from "./pages/Bill/billItem.jsx";
import BillItemUpdate from "./pages/Bill/updateBillItem.jsx";
import Bill from "./pages/Bill/bill.jsx";
import Payment from "./pages/Payment/payment.jsx";
import { Login, Register } from "./pages";
import ListAttendance from "./pages/employee/attendanceList.jsx";
import { Table } from "react-bootstrap";
import ChildAllocate from "./pages/employee/childAllocate.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeReg />} />
        <Route path="/update/:id" element={<EmployeeUpdt />} />
        <Route path="/list" element={<ListEmployee />} />
        <Route path="/update" element={<EmployeeUpdt />} />
        <Route path="/bill" element={<BillItem />} />
        <Route path="/bill-item-update/:id" element={<BillItemUpdate />} />
        <Route path="/bill-cal" element={<Bill />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendance" element={<ListAttendance />} />
        <Route path="/allocate" element={<ChildAllocate />} />
      </Routes>
    </Router>
  );
}
export default App;
