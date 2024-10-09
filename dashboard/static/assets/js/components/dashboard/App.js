import React, { useState } from "react";
import { TabTitle } from "../core/scripts/general_function";

import TableElement from "./next_ui_testing/index";
import { Login } from "./pages/Login";

export function DashboardHomeView() {
  TabTitle("Scoop Investment | Admin Dashboard");
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center
                    fs-5 fs-md-4 fs-xl-2 fs-xxl-1 fw-bold text-secondary text-uppercase w-100"
        style={{ height: "100vh" }}
      >
        <TableElement />
      </div>
    </>
  );
}
export function LoginView() {
  TabTitle("Scoop Investment | Login");
  return (
    <>
      <Login />
    </>
  );
}
