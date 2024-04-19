import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MemeTemplate from "./components/memeTemplate/MemeTemplate.jsx";
import Meme from "./components/meme/Meme.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />}>
        <Route index element={<MemeTemplate />} />
        <Route path="/meme/:id" element={<Meme />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
