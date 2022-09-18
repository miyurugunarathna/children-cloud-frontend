import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../pages";

export const Components = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
