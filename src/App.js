import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Protected } from "./components/Home/DonateProtected";
import { Home } from "./components/Home/Home";
import { Form } from "./components/Form";
import { Login } from "./components/Login";
import { LoginCard } from "./components/LoginCard";
import { Signup } from "./components/Signup";
import { Donate } from "./components/Home/Donate";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/FormContext";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/login" element={<LoginCard />} />
            <Route path="/login-email" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<Protected />}>
              <Route path="/donate" element={<Donate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
