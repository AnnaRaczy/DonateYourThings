import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
// import { Form } from "./components/Form";
// import { Login } from "./components/Login";
// import { Logout } from "./components/Logout";
// import { Signup } from "./components/Signup";
// import { ErrorPage } from "./components/ErrorPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
