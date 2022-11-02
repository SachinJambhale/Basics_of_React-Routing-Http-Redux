import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlankLayout from "./BlankLayout";
import FullLayout from "./FullLayout";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("user_login") ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

const RouteSecurity = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route
          path="secured/*"
          element={
            <ProtectedRoute>
              <FullLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default RouteSecurity;

