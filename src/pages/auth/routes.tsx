import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../../config/APP_ROUTES.ts";
const login = lazy(() => import("./components/Login"));
const register = lazy(() => import("./components/SignUp"));
const forgotPassword = lazy(() => import("./components/ForgotPassword.tsx"));

export const AUTH_ROUTES: RouteObject[] = [
  {
    path: APP_ROUTES.AUTH.LOGIN,
    element: React.createElement(login),
  },
  {
    path: APP_ROUTES.AUTH.REGISTER,
    element: React.createElement(register),
  },
  {
    path: APP_ROUTES.AUTH.FORGOT_PASSWORD,
    element: React.createElement(forgotPassword),
  },
];
