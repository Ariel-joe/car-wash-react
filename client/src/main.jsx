import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { PendServices } from "./pages/protected/PendServices.jsx";
import { GlobalLayout } from "./pages/protected/GlobalLayout.jsx";
import { CompServices } from "./pages/protected/CompServices.jsx";
import { Detailers } from "./pages/protected/Detailers.jsx";
import { Customers } from "./pages/protected/Customers.jsx";
import { Payments } from "./pages/protected/Payments.jsx";
import { InprogressPage } from "./pages/protected/InprogressPage.jsx";
import { ProtectedRouteWrapper } from "./pages/protected/ProtectedWrapper";
import { Login } from "./pages/auth/Login";
import { AuthLayout } from "./pages/auth/AuthLayout";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route element={<GlobalLayout />}>
          {/* Auth Routes */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRouteWrapper />}>
            <Route element={<App />}>
              <Route path="pending" element={<PendServices />} />
              <Route path="completed" element={<CompServices />} />
              <Route path="detailers" element={<Detailers />} />
              <Route path="customers" element={<Customers />} />
              <Route path="payments" element={<Payments />} />
              <Route path="progress" element={<InprogressPage />} />
            </Route>
          </Route>
        </Route>

        {/* Redirect to Login if Route Not Found */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
