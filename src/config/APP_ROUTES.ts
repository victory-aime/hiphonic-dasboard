export const APP_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  PRIVATE: {
    DASHBOARD: "/private/dashboard",
    RESPONSIBLE: {
      LIST: "/private/responsible",
      ADD: "/private/responsible/add",
      OVERVIEW: "/private/responsible/overview",
    },
  },
};
