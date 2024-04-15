import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { AUTH_ROUTES } from "../pages/auth/routes";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="*" element={<Navigate to="/auth/register" replace />} />
          {AUTH_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/*RESPONSIBLE_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))*/}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
