import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { PendServices } from "./pages/PendServices.jsx";
import { GlobalLayout } from "./pages/GlobalLayout.jsx";
import { CompServices } from "./pages/CompServices.jsx";
import { Detailers } from "./pages/Detailers.jsx";
import { Customers } from "./pages/Customers.jsx";
import { Payments } from "./pages/Payments.jsx";
import { AddCustomerpage } from "./pages/AddCustomerpage.jsx";
import { InprogressPage } from "./pages/InprogressPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/*  */}
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />}>
            <Route index element={<AddCustomerpage />} />
            <Route path="pending" element={<PendServices />} />
            <Route path="completed" element={<CompServices />} />
            <Route path="detailers" element={<Detailers />} />
            <Route path="customers" element={<Customers />} />
            <Route path="payments" element={<Payments />} />
            <Route path="progress" element={<InprogressPage />} />
          </Route>
        </Route>

        {/*  */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
