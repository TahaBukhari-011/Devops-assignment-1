import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expenses from "./pages/Dashboard/Expenses";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";

// Define Root component first
const Root = () => {
  //check if the token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated else to the login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<Signup />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expenses" exact element={<Expenses />} />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
};

export default App;
