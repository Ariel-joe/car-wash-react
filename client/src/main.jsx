import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { PendServices } from "./pages/protected/PendServices.jsx";
import { GlobalLayout } from "./pages/protected/GlobalLayout.jsx";
import { CompServices } from "./pages/protected/CompServices.jsx";
import { Detailers } from "./pages/protected/Detailers.jsx";
import { Customers } from "./pages/protected/Customers.jsx";
import { Payments } from "./pages/protected/Payments.jsx";
import { InprogressPage } from "./pages/protected/InprogressPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/*  */}
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />}>
            {/* <Route index element={<AddCustomerpage />} /> */}
            <Route index element={<PendServices />} />
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
