import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { WebLoader } from "../components/common/utils/loader";

// Lazy load the components
const DashboardHomeView = lazy(async () => await import("../components/dashboard/App").then((module) => ({ default: module.DashboardHomeView })));
const Login  = lazy(async () => await import("../components/dashboard/App").then((module) => ({ default: module.LoginView }))); // FIX 


export function Dashboard() {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<WebLoader />}>
                    <DashboardHomeView />
                </Suspense>
            } />
            <Route path="/login" element={
                <Suspense fallback={<WebLoader />}>
                    {/* <DashboardHomeView /> */}
                    {/* login div */}
                </Suspense>
            } />
        </Routes>
    );
};