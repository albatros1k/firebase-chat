import { Navigate } from "react-router-dom";

import { Chat } from "components/pages/Chat";
import { Login } from "components/pages/Login";

export const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "*", element: <Navigate to="/login" /> },
];

export const privateRoutes = [
  { path: "chat", element: <Chat /> },
  { path: "/", element: <Navigate to="/chat" /> },
  { path: "*", element: <Navigate to="/chat" /> },
];
