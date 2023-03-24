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
import Message from "./pages/message/Message";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.scss";
import MyGigs from "./pages/myGigs/MyGigs";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/success/Success";
const queryClient = new QueryClient();

const Layout = () => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </CookiesProvider>
      </QueryClientProvider>
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
        path: "gigs/:id",
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
        path: "message/:id",
        element: <Message />,
      },
      {
        path: "myGigs",
        element: <MyGigs />,
      },
      {
        path: "pay/:id",
        element: <Pay />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
