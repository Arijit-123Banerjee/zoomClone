import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import AuthPage from "./auth/AuthPage.jsx";
import DashBoard from "../src/Pages/DashBoard.jsx";
import PricingPage from "./Pages/PricingPage.jsx";
import HowDoesItWork from "../src/Pages/HowDoesItWork.jsx";

const clerkPublishableKey =
  "pk_test_c2luY2VyZS1zaGVlcGRvZy0xNi5jbGVyay5hY2NvdW50cy5kZXYk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/upgrade", element: <PricingPage /> },
      { path: "/Howdoesitwork", element: <HowDoesItWork /> },
    ],
  },
  { path: "/auth/sign-in", element: <AuthPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
