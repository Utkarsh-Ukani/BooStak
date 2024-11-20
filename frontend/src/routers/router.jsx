import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/orders/Order";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path:"/admin",
    element: <AdminLogin/>
  },
  {
    path:"/dashboard",
    element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
    children:[
      {
        path:"",
        element: <AdminRoute><div>Dashboard home</div></AdminRoute>
      },
      {
        path:"add-new-book",
        element: <AdminRoute><div>Edit Book</div></AdminRoute>
      },
      {
        path:"edit-book/:id",
        element: <AdminRoute><div>Add new Book</div></AdminRoute>
      },
      {
        path:"manage-books",
        element: <AdminRoute><div>Manage Books</div></AdminRoute>
      },
    ]
  }
]);

export default router;
