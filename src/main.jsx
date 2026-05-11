import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Details from "./pages/Details.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

import {Provider} from 'react-redux';
import store from "./reduxStore/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product-details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
