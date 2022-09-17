import React, { useEffect, useState } from "react";
import { getProductsAction } from "./store/productsSlice";
import { useAppDispatch } from "./store/hooks";
import {LoadingScreen} from "./screens/loadingScreen/loadingScreen";

export const DataLoader: React.FC<{ children: React.ReactNode }> = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getProductsAction(data));
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return <>{props.children}</>;
};
