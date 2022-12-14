import { addProductAction, Product } from "../../store/productsSlice";
import { useAppDispatch } from "../../store/hooks";
import React, { useState } from "react";
import { AddProduct } from "./AddProduct";
import { createProductApi } from "../../api/api-client";
import { useNavigate } from "react-router-dom";

export type PartialProductCreate = Pick<Product, "name" | "price" | "stock">;

export const AddProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState<PartialProductCreate>({
    name: "",
    price: "",
    stock: "",
  });

  const handleProductNameChange = (name: string) => {
    setProductInfo({ ...productInfo, name });
  };

  const handleProductPriceChange = (price: string) => {
    setProductInfo({ ...productInfo, price });
  };

  const handleProductStockChange = (stock: string) => {
    setProductInfo({ ...productInfo, stock });
  };

  const handleAddingProduct = () => {

    createProductApi({ newProduct: productInfo })
      .then((productInfo) => {dispatch(addProductAction(productInfo))
    })
    navigate("/")
  };

  return (
    <AddProduct
      label={""}
      productName={productInfo.name}
      productPrice={productInfo.price}
      productStock={productInfo.stock}
      onProductNameChange={handleProductNameChange}
      onProductPriceChange={handleProductPriceChange}
      onProductStockChange={handleProductStockChange}
      onSubmit={handleAddingProduct}
    />
  );
};
