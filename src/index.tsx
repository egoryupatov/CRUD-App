import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./screens/homePage/App";
import { Menu } from "./layout/Menu";
import { AddProductContainer } from "./screens/addProduct/AddProductContainer";
import { EditProductContainer } from "./screens/editProduct/EditProductContainer";
import { DataLoader } from "./DataLoader";
import { GlobalStyles } from "./styles/Global.styled";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <Menu />
        <DataLoader>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add-product" element={<AddProductContainer />} />
            <Route path="/edit/:id" element={<EditProductContainer />} />
          </Routes>
        </DataLoader>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
