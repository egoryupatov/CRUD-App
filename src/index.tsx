import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./layout/Menu";
import { AddProductContainer } from "./screens/addProduct/AddProductContainer";
import { EditProductContainer } from "./screens/editProduct/EditProductContainer";
import { DataLoader } from "./DataLoader";
import { GlobalStyles } from "./styles/Global.styled";
import {Container2} from "./styles/Container.styled";
import {HomePageContainer} from "./screens/homePage/HomePageContainer";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>

        <Container2>
            <Menu />
            <DataLoader>
              <Routes>
                <Route path="/" element={<HomePageContainer />} />
                <Route path="/add-product" element={<AddProductContainer />} />
                <Route path="/edit/:id" element={<EditProductContainer />} />
              </Routes>
            </DataLoader>
        </Container2>

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
