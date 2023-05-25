import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import UserFormPage from "./UserFormPage";
import LoginPage from "./LoginPage";
import { useState } from "react";
import AdminPage from "./AdminPage";
import AdminLoginPage from "./AdminLoginPage";

const App = () => {
  const [userStatus, setUserStatus] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  const [adminStatus, setAdminStatus] = useState(
    JSON.parse(localStorage.getItem("admin")) || false
  );
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);

  return (
    <>
      <Routes>
        <Route path="loginPage" element={<LoginPage status={userStatus} func={setUserStatus} />} />
        <Route path="adminLoginPage" element={<AdminLoginPage func={setAdminStatus} />} />
        <Route path="/" element={<HomePage status={userStatus} />} />
        <Route path="adminPage" element={<AdminPage status={adminStatus} data={data} />} />
        <Route
          path="electricianForm"
          element={
            <UserFormPage problem="Electrician" data={data} setData={setData} />
          }
        />
        <Route
          path="mechanicForm"
          element={
            <UserFormPage problem="Mechanic" data={data} setData={setData} />
          }
        />
        <Route
          path="pestForm"
          element={
            <UserFormPage problem="Pest" data={data} setData={setData} />
          }
        />
        <Route
          path="plumberForm"
          element={
            <UserFormPage problem="Plumber" data={data} setData={setData} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
