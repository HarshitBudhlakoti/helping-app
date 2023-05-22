import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import UserFormPage from "./UserFormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="ElectricianForm" element={<UserFormPage problemName="electrician" />} />
      <Route path="mechanicForm" element={<UserFormPage problemName="mechanic" />}/>
      <Route path="pestForm" element={<UserFormPage problemName="pest control" />} />
      <Route path="plumberForm" element={<UserFormPage problemName="plumber" />} />
    </Routes>
  );
};

export default App;
