import React from "react";
import App from "./components/app";
import { createRoot } from "react-dom/client";
import TransactionPool from "./components/transactionPool";
import ConductTransaction from "./components/conductTransaction";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./style.css";

const Application = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transaction-pool" element={<TransactionPool />} />
      <Route
        path="/transact"
        element={<ConductTransaction onNavigate={(url) => navigate(url)} />}
      />
    </Routes>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
