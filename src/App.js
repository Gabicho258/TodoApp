import "./App.css";
import Principal from "./pages/principal";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Principal />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<p>Página no encontrada - 404</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
