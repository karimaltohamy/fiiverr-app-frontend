import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MessagesTable from "./pages/messagesTable/MessageTable";
import AddGig from "./pages/addGig/AddGig";
import Messages from "./pages/messages/Messages";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "gigs",
        element: <Gigs />,
      },
      {
        path: "gig",
        element: <Gig />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "messagesTable",
        element: <MessagesTable />,
      },
      {
        path: "addGig",
        element: <AddGig />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
